import { useEffect, useState } from "react";

function VideoSection() {
    const [state, setState] = useState('')
    useEffect(() => {
        let youtubeLink = localStorage.getItem('youtubelink');
        setState(youtubeLink);
    }, [setState])
    
    
    return (
        <>
            <div style={{ width: "100%" }}>
                <div className="" style={{ position: "relative", paddingBottom: "56.25%", paddingTop: "35px", height: "0", overflow: "hidden" }}>
                    <iframe width="700"
                        height="500"
                        src={state}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
                    </iframe>
                </div>
            </div>
        </>
    );
}

export default VideoSection;