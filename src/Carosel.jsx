const Carosel = () => {
    return ( 
        <section class="row">
            <div class="col-md-12">
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" >
                            <img src="images2.jpeg" alt="" class="d-block w-100"  />
                        </div>
                        <div class="carousel-item">
                            <img src="images3.jpeg" alt="" class="d-block w-100" />
                        </div>
                        <div class="carousel-item"> 
                            <img src="images4.jpeg" alt="" class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src="slide1.jpeg" alt="" class="d-block w-100" /> 
                        </div>
                        <div class="carousel-item">
                            <img src="images/" alt="" class="d-block w-100" />
                        </div>
                    </div>
                    <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev" />
                        <span class="carousel-control-prev-icon"></span>

                    
                    <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>

                    </a>

                    <ol class="carousel-indicators" >
                        <li data-bs-slide to="0" data-bs-target="#mycarousel" class="active"></li>
                        <li data-bs-slide to="1" data-bs-target="#mycarousel"></li>
                        <li data-bs-slide to="2" data-bs-target="#mycarousel"></li>
                        <li data-bs-slide to="3" data-bs-target="#mycarousel"></li>
                    </ol>
                   
                </div>
            </div>
           /
           
        
        </section>
        
     );
}
 
export default Carosel;