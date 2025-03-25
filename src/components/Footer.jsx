const Footer = () => {
    return ( 
       
        <div>
        <section class="row bg-success p-4">
                <div class="col-md-4  text-white ">
                    <h4 class="text-center">About us</h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad in minus voluptatibus sit sed magnam amet ipsum, consequatur inventore architecto?
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, soluta.</p>

                </div>
                <div class="col-md-4">
                    <h4 class="text-center text-white">Contact us</h4>
                    <form action="">
                        <input type="email"  place holder="enter your email" class="form-control" /> <br/><br/>
                        <textarea name="" id="" class="form-control" placeholder="Leave a comment" rows="7"></textarea><br/>
                       <input type="submit" class="btn btn-outline-danger" value="send message"/><br/>
                    </form>
                </div>
                <div class="col-md-4">
                    <h4 class="text-center">Stay Connected</h4>
                    <a href="https://facebook.com">
                        <img src="images/fb.png" alt=""/>
                    </a>
                    <a href="https://instagram.com">
                        <img src="images/in.png" alt=""/>
                    </a>
                    <p class="text-dark">stay Connected so you get your odered products safely and on time</p>
                </div>
            </section>
             <footer class="bg-dark text-white text-center p-2">
                <h5>Developed by johntirike &copy;2025.All Rights Reserved</h5>
             </footer>
    </div>
     );
}
 
export default Footer;