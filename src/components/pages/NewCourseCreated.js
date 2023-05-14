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
      <div className='container pt-5' style={{ minHeight: "100vh" }}>
        <h1 className='bg-secondary text-white px-3 hero-background'>New Course Created</h1>
        <div className='table-responsive-md p-3' style={{ border: "2px solid gray" }}>
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
                  <td>
                    <div className='overflow-hidden' style={{ maxHeight: "100px" }}>
                      {course.course_description}
                    </div>
                  </td>
                  <td>

                    {course.course_thumbnail}

                  </td>
                  <td>{course.course_introduction}</td>
                  <td>
                    <div className='d-flex gap-2' style={{ width: "250px" }}>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleAddTopic(course.id)}
                      >
                        Add Topic
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteTopic(course.id)}
                      >
                        Delete Topic
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default NewCourseCreated;