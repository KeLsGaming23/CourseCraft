import axios from "axios";
import CommentSection from "../LearningPage/CommentSection";
import { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import "./style.css"


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
                    <div className="ms-5 mt-3" style={{ width: "60%" }}>
                        <div style={{ width: "100%" }} className="play-video">
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


                    <div id="suggested-topics">
                        <a class="btn btn-outline-secondary btn-sm ms-2 mt-3 pb-0 my-1" 
                            data-bs-toggle="collapse"
                            href="#multiCollapseExample1"
                            role="button" aria-expanded="false" 
                            aria-controls="multiCollapseExample1">
                          <p>Topic List <span><i class="fa-solid fa-angle-down"></i></span></p> 
                        </a>
                            <div class="col ms-2">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body topic-container">
                                        <div className="">
                                            <div className="overflow-auto" style={{ height: "349px", maxHeight: "349px", width: "300px" }}>
                                                <div className="">
                                                    <div className="rounded-1">
                                                        {topics.map((topic, index) => (
                                                            <div
                                                                key={topic.id}
                                                                className="d-flex align-items-center gap-2 rounded-3 my-1 topic-list shadow-sm"
                                                                onClick={() => handlePlaylist(topic)}
                                                                style={{ border: "2px solid gray" }}
                                                            >
                                                                <img
                                                                    src={ require('./images/Play.png')} width={120} height={100}
                                                                    alt="Play" id="play-button"
                                                                />
                                                                <h5>{topic.topic_title}</h5>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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