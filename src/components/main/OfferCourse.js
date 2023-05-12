import Card from "./card/Card";
import footer from '../pages/images/footer-img.png'
import "./HeroBanner.css"

function OfferCourse() {
    return (
        <>
            <div className="album py-5 offer-background">
                <div className="container text-white">
                    <img className="ms-3"  src={footer} alt="" width="180" height="80" /> 
                    <p className="ms-4"> Offer Courses</p>
                    <hr/>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
}
export default OfferCourse;