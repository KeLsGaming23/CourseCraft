import { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../../context/CourseContext';
import Comment from './Comment';
import axios from 'axios';

function CommentSection() {

    const { selectedCourse } = useContext(CourseContext);
    const [askQuestion, setAskQuestion] = useState('');
    const [studentQuestions, getStudentQuestions] = useState([]);

    function handleChange(e) {
        setAskQuestion(e.target.value);
    }

    const commentNotify = () => toast.error('Ask Question Succesful wait for the response', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    async function handleQuestion() {
        const token = localStorage.getItem('token');
        const data = { question: askQuestion };
        if (token) {
            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/student/question/${selectedCourse.id}`, data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response) {
                    commentNotify();
                    getStudentQuestions(prevQuestions => [...prevQuestions, response.data]);
                    setAskQuestion('');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        const ListOfComment = async () => {
            try {
                if (token) {
                    const response = await axios.get(`http://127.0.0.1:8000/api/studentQuestions/${selectedCourse.id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    getStudentQuestions(response.data);
                    localStorage.setItem('comments', JSON.stringify(response.data)); // Save comments in local storage
                }
            } catch (error) {
                console.log(error);
            }
        };
        ListOfComment();
    }, [getStudentQuestions]);

    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            getStudentQuestions(JSON.parse(storedComments));
        }
    }, []);

    return (
        <>
            <div className="d-flex gap-3 align-items-center justify-content-center p-2" style={{ border: "2px solid gray" }}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{ width: "60px", height: "50px", borderRadius: "50%" }}></img>
                <input type="text"
                    onChange={handleChange}
                    value={askQuestion}
                    name="question"
                    className="form-control"
                    placeholder="Ask a Question">
                </input>
                <button className="btn btn-primary" style={{ width: "30%" }} onClick={handleQuestion}>Add Question</button>
            </div>
            <div className='px-5' style={{ border: "2px solid gray" }}>
                {
                    studentQuestions.map((studentQuestion, index) => (
                        <Comment
                            key={index}
                            question={studentQuestion.question}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default CommentSection;