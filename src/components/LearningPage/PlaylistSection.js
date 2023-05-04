
function PlaylistSection() {

    function handlePlaylist() {
        alert('clicked');
    }

    return (
        <>
            <div className="overflow-auto" style={{ height: "470px", maxHeight: "470px", width: "300px" }}>
                <div className="">
                    <div className="">
                        <div className="d-flex align-items-center gap-2" onClick={handlePlaylist} style={{ border: "2px solid gray" }}>
                            <img src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736" width="120px" height="100px" />
                            <h3>Playlist 1</h3>
                        </div>
                        <div className="d-flex align-items-center gap-2" onClick={handlePlaylist} style={{ border: "2px solid gray" }}>
                            <img src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736" width="120px" height="100px" />
                            <h3>Playlist 1</h3>
                        </div>
                        <div className="d-flex align-items-center gap-2" onClick={handlePlaylist} style={{ border: "2px solid gray" }}>
                            <img src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736" width="120px" height="100px" />
                            <h3>Playlist 1</h3>
                        </div>
                        <div className="d-flex align-items-center gap-2" onClick={handlePlaylist} style={{ border: "2px solid gray" }}>
                            <img src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736" width="120px" height="100px" />
                            <h3>Playlist 1</h3>
                        </div>
                        <div className="d-flex align-items-center gap-2" onClick={handlePlaylist} style={{ border: "2px solid gray" }}>
                            <img src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736" width="120px" height="100px" />
                            <h3>Playlist 1</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaylistSection;