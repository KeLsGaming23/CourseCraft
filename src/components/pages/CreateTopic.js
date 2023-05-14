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
            <div className="container pt-5" style={{ minHeight: "100vh" }}>
                <h1 className="bg-secondary text-white px-3 hero-background">Add Topic</h1>
                <form onSubmit={handleSubmit} className="p-4" style={{ border: "2px solid gray" }}>
                    <div className="form-group mb-3">
                        <label>Topic Title</label>
                        <input type="text" className="form-control" name="topic_title" placeholder=""
                            onChange={(event) => {
                                setState({ ...state, topic_title: event.target.value });
                            }} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Topic Video</label>
                        <input type="text" className="form-control" name="topic_video" placeholder=""
                            onChange={(event) => {
                                setState({ ...state, topic_video: event.target.value });
                            }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Topic</button>
                </form>
            </div>
        </>
    );
}

export default CreateTopic;
