import "./Card.css"

function Card(props) {

    return (
        <>
            <div className="col cards pointer">
                <div className="card shadow-sm" onClick={props.onClick}>
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} alt="" />
                    <div className="card-body" style={{ height: "250px", maxHeight: "250px" }}>
                        <h5 className="card-title overflow-hidden" style={{ height: "50px", maxHeight: "50px" }}>{props.title}</h5>
                        <p className="card-text overflow-hidden" style={{ height: "100px", maxHeight: "100px" }}>{props.description}</p>
                        <div className="d-flex justify-content-between align-items-center" style={{ height: "50px", maxHeight: "50px" }}>
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