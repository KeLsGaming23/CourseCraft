import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CreateTopic() {
    const location = useLocation();
    const courseId = location.state.courseId;
    const navigate = useNavigate();
    const [state, setState] = useState({
        course_id: courseId,
        topic_title: '',
        topic_video: '',
        successfull: false,
    });
    console.log(courseId);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            course_id: state.course_id,
            topic_title: state.topic_title,
            topic_video: state.topic_video,
        };

        axios
            .post('http://127.0.0.1:8000/api/create/topic', data)
            .then((response) => {
                setState({
                    ...state,
                    successfull: true,
                });
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    if (state.successfull) {
        return navigate('/newCourseCreated');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="topic_title" placeholder="Topic title" 
                    onChange={(event) => {
                        setState({ ...state, topic_title: event.target.value });
                        }}/>
                <input type="text" name="topic_video" placeholder="Topic video" 
                    onChange={(event) => {
                        setState({ ...state, topic_video: event.target.value });
                        }}/>
                <button type="submit">Create Topic</button>
            </form>
        </>
    );
}

export default CreateTopic;
