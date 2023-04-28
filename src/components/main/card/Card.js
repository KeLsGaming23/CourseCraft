import { Link } from "react-router-dom";
function Card() {
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <Link to="/courseOverview" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </Link>
                    <div className="card-body">
                        <Link to="/courseOverview" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h5 class="card-title">Card title</h5>
                        </Link>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <small className="text-body-secondary">Free/Paid</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;