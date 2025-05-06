const Carousel = () => {
    return ( 
        <div>
            <section className="row">
                <div className="col-md-12">
                    <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/1.webp" alt="" className="d-block w-100" height="250px" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/2.webp" alt="" className="d-block w-100" height="250px" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/3.jpg" alt="" className="d-block w-100" height="250px" />
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#mycarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#mycarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>

                        <ol className="carousel-indicators">
                            <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                            <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Carousel;
