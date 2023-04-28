import Discover from "./main/Discover";
import HeroBanner from "./main/HeroBanner";
import OfferCourse from "./main/OfferCourse";
import Suggested from "./main/Suggested";

function Main() {
    return (
        <>  
            <HeroBanner />
            <Suggested />
            <OfferCourse />
            <Discover />
        </>
    );
}
export default Main;