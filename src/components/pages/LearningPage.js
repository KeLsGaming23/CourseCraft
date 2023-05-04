import CommentSection from "../LearningPage/CommentSection";
import PlaylistSection from "../LearningPage/PlaylistSection";
import VideoSection from "../LearningPage/VideoSection";


function LearningPage() {


    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="" style={{ width: "60%" }}>
                        <VideoSection />
                        <CommentSection />
                    </div>
                    <div className="">
                        <PlaylistSection />
                    </div>
                </div>
            </div>
        </>
    );
}
export default LearningPage;