import "./HeroBanner.css"

function HeroBanner() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active flat-button" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="flat-button" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="flat-button" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner w-100 text-center py-5">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div style={{ height: "400px", minHeight: "400px" }}>
                            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg hero-background">
                                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white text-start">
                                    <h1 className="display-4 fw-bold lh-1 text-white">Programming</h1>
                                    <p className="lead">Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms</p>
                                    <div className="btn-group">
                                        <button className="btn btn-primary btn-lg">Explore Now</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-lg-3" src="https://www.freecodecamp.org/news/content/images/size/w1000/2022/12/main-image.png" alt="" width="720" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <div style={{ height: "400px", minHeight: "400px" }}>
                            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg hero-background">
                                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
                                    <h1 className="display-4 fw-bold lh-1 text-white">Web Development</h1>
                                    <p className="lead">Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
                                    <p className="lead">This is Course Ratigs</p>
                                    <button className="btn btn-primary btn-lg p-3">Explore Now</button>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-lg-3" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png" alt="" width="720" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <div style={{ height: "400px", minHeight: "400px" }}>
                            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg hero-background">
                                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white text-end">
                                    <h1 className="display-4 fw-bold lh-1 text-white">React JS</h1>
                                    <p className="lead">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>
                                    <p className="lead">This is Course Ratigs</p>
                                    <button className="btn btn-primary btn-lg p">Explore Now</button>
                                </div>
                                <div className="col-lg-4">
                                    <img className="rounded-lg-3" src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129961/retina_500x200_0521-react-redux-and-immutablejs-Waldek_Newsletter-993b50f4ae56e9ee6e024a309c23a6c4.png" alt="" width="720" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon move-button" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon move-button" aria-hidden="true"></span>
                </button>
            </div>
        </>
    );
}
export default HeroBanner;