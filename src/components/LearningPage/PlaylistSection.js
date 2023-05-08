
function PlaylistSection(props) {

    function handlePlaylist() {
        alert('clicked');
    }
    console.log("hello");
    console.log(props.topics);
    console.log("world");
    return (
        <>
            <div className="overflow-auto" style={{ height: "470px", maxHeight: "470px", width: "300px" }}>
                <div className="">
                    <div className="">
                        {props.topics.map((topic, index) => (
                            <div
                                key={index}
                                className="d-flex align-items-center gap-2"
                                onClick={handlePlaylist}
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
        </>
    );
}

export default PlaylistSection;