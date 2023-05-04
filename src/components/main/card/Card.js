
import { Link } from "react-router-dom";
function Card(props) {
    
    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <Link to="/coursePage" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} alt="" />
                    </Link>
                    <div className="card-body">
                        <Link to="/coursePage" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h5 className="card-title">{props.title}</h5>
                        </Link>
                        <p className="card-text">{props.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
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