function HeroBanner() {
    return (
        <> 
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner w-100 text-center py-5">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img style={{height: "40vh", objectFit: "contain"}}src="https://www.shutterstock.com/image-illustration/anything-goes-text-on-red-260nw-1899023962.jpg" alt="..."/>
                            <div style={{position: "relative" , left: "0%"}} className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img style={{height: "40vh", objectFit: "contain"}}src="https://www.shutterstock.com/image-illustration/anything-goes-text-on-red-260nw-1899023962.jpg" alt="..."/>
                            <div style={{position: "relative" , left: "0%"}} className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img style={{height: "40vh", objectFit: "contain"}}src="https://www.shutterstock.com/image-illustration/anything-goes-text-on-red-260nw-1899023962.jpg" alt="..."/>
                            <div style={{position: "relative" , left: "0%"}} className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
export default HeroBanner;