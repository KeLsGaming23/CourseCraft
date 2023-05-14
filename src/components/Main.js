import Discover from "./main/Discover";
import HeroBanner from "./main/HeroBanner";
import OfferCourse from "./main/OfferCourse";
import Suggested from "./main/Suggested";
import AboutPage from "./pages/AboutPage";

function Main() {
    return (
        <>
            <HeroBanner />
            <Suggested />
            <OfferCourse />
            <Discover />
            <AboutPage />
        </>
    );
}
export default Main;