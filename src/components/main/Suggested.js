import Card from "./card/Card";
import { useState, useEffect } from "react";
function Suggested() {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/course/data')
            .then(response => response.json())
            .then(data => {
                setCourseData(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, [setCourseData]);
    return (
        <>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <h3>Suggested Course</h3>
                    <hr />
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                            courseData.map((product, index) => (
                                <Card key={index}
                                    title={product.course_title}
                                    description={product.course_description}
                                    image={product.course_image}
                                />
                            ))
                        }
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Suggested;