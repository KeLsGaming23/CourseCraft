import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewCourseCreated() {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get/course');
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  const handleAddTopic = (courseId) => {
    navigate('/createTopic', { state: { courseId } });
    console.log(`Add topic for course ${courseId}`);
  };

  const handleDeleteTopic = (topicId) => {
    // TODO: Implement logic to delete the topic with the given ID
    console.log(`Delete topic ${topicId}`);
  };

  return (
    <>
      <h1>New Course Created</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Thumbnail</th>
            <th>Introduction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.course_title}</td>
              <td>{course.course_description}</td>
              <td>{course.course_thumbnail}</td>
              <td>{course.course_introduction}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddTopic(course.id)}
                >
                  Add Topic
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTopic(course.id)}
                >
                  Delete Topic
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NewCourseCreated;