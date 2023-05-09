import axios from "axios";
import CommentSection from "../LearningPage/CommentSection";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../context/CourseContext";


function LearningPage() {
    const courseId = localStorage.getItem('selectedCourse');
    const [topics, setTopics] = useState([]);
    const { currentCourse, setCurrentCourse } = useContext(CourseContext);

    useEffect(() => {
        // Fetch the topics and set them to state
        axios.get(`http://127.0.0.1:8000/api/topics/course/${courseId}`)
            .then(response => {
                setTopics(response.data);
                let youtubeLink = response.data[0].topic_video;
                let replaceVideoLink = youtubeLink.replace("watch?v=", "embed/");
                setCurrentCourse(replaceVideoLink);
                localStorage.setItem('youtubelink', replaceVideoLink);
            })
            .catch(error => console.log(error));
    }, [courseId]);
    function handlePlaylist(topic) {
        let youtubeLink = topic.topic_video;
        let replaceVideoLink = youtubeLink.replace("watch?v=", "embed/");
        setCurrentCourse(replaceVideoLink);
        localStorage.setItem('youtubelink', replaceVideoLink);
    }
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="" style={{ width: "60%" }}>
                        <div style={{ width: "100%" }}>
                            <div className="" style={{ position: "relative", paddingBottom: "56.25%", paddingTop: "35px", height: "0", overflow: "hidden" }}>
                                <iframe width="700"
                                    height="500"
                                    src={currentCourse}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                                </iframe>
                            </div>
                        </div>
                        <CommentSection />
                    </div>
                    <div className="">
                        <div className="overflow-auto" style={{ height: "470px", maxHeight: "470px", width: "300px" }}>
                            <div className="">
                                <div className="">
                                    {topics.map((topic, index) => (
                                        <div
                                            key={topic.id}
                                            className="d-flex align-items-center gap-2"
                                            onClick={() => handlePlaylist(topic)}
                                            style={{ border: "2px solid gray" }}
                                        >
                                            <img
                                                src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736"
                                                width="120px"
                                                height="100px"
                                            />
                                            <h3>{topic.topic_title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LearningPage;