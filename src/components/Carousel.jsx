import { Link } from "react-router-dom";

const Carousel = () => {
    return ( 
        <div>
            <section class="row">
                <div class="col-md-12">
                    <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="images/slide1.jpeg" alt="" class="d-block w-100" height="550px"/>
                        </div>

                        <div class="carousel-item">
                        <img src="images/slide2.jpeg" alt="" class="d-block w-100" height="550px" />
                        </div>

                        <div class="carousel-item">
                        <img src="images/slide3.jpeg" alt="" class="d-block w-100" height="550px" />
                        </div>
                    </div>

                    <Link to="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </Link>
                    <Link to="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </Link>

                    <ol class="carousel-indicators">
                        <li data-bs-slide-to="0" class="active"></li>
                        <li data-bs-slide-to="1"></li>
                        <li data-bs-slide-to="2"></li>
                    </ol>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Carousel;