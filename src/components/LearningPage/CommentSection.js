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
                    alert('Comment successful');
                    getStudentQuestions(prevQuestions => [...prevQuestions, response.data]);
                    setAskQuestion('');

                } else {
                    alert('Error');
                }
            } catch (error) {
                console.log(error);
                alert('Error');
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
                }
            } catch (error) {
                console.log(error);
            }
        };
        ListOfComment();
    }, [getStudentQuestions]);

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