import Card from "./card/Card";
function Discover() {

    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <h3>Discover Course</h3>
                    <hr />
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
export default Discover;