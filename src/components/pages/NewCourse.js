import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewCourse() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const courseTitle = event.target.elements.course_title.value;
        const courseDescription = event.target.elements.course_description.value;
        const courseThumbnail = event.target.elements.course_thumbnail.files[0];
        const courseIntroduction = event.target.elements.course_introduction.value;

        const formData = new FormData();
        formData.append('course_title', courseTitle);
        formData.append('course_description', courseDescription);
        formData.append('course_thumbnail', courseThumbnail);
        formData.append('course_introduction', courseIntroduction);

        const config = {};
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        }

        axios.post('http://127.0.0.1:8000/api/create/course', formData, config)
            .then(response => {
                console.log(response);
                navigate("/newCourseCreated");
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container">
                <h1>Simple Form</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="input1">Course Title</label>
                        <input type="text" className="form-control" name="course_title" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input2">Course Description</label>
                        <textarea className="form-control" name="course_description" rows="3" required></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="input3">Course Thumbnail</label>
                        <input type="file" className="form-control-file" name="course_thumbnail" accept=".jpg,.png" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="input4">Course Video Introduction</label>
                        <input type="text" className="form-control" name="course_introduction" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    );
}

export default NewCourse;