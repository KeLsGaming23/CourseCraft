import axios from "axios";
import CommentSection from "../LearningPage/CommentSection";
import PlaylistSection from "../LearningPage/PlaylistSection";
import VideoSection from "../LearningPage/VideoSection";
import { useEffect, useState } from "react";


function LearningPage() {
    const courseId = localStorage.getItem('selectedCourse');
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        // Fetch the topics and set them to state
        axios.get(`http://127.0.0.1:8000/api/topics/course/${courseId}`)
            .then(response => {
                setTopics(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error));
    }, [courseId]);
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="" style={{ width: "60%" }}>
                        <VideoSection video={topics}/>
                        <CommentSection />
                    </div>
                    <div className="">
                        <PlaylistSection topics={topics} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default LearningPage;