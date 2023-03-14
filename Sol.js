function Sol(props) {


    return (
        <>
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="bg-light text-dark rounded mx-5 border" style={{ height: "30em" }}>
                        <div className="row px-5 py-2">
                            <div className="col-12 pt-3">
                                <h1>{props.baslik}</h1>
                            </div>
                        </div>
                        <div className="bg-light py-2 px-5" style={{ height: "15em", backgroundColor: "#60A7BD" }}>
                            <div className="col-12">
                                <p>{props.icerik}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sol;