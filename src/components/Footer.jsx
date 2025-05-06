const Footer = () => {
    return ( 
       
        <div>
        <section class="row bg-success p-4">
                <div class="col-md-4  text-white ">
                    <h4 class="text-center">About us</h4>
                    <p>
    We are a group of passionate individuals dedicated to improving farming through accessible and efficient tools. Our mission is to support farmers by providing information, ideas, and solutions that make their work easier, faster, and more productive.

This project focuses on exploring traditional and modern farm tools, understanding how they work, and promoting innovations that help boost agricultural output. Whether it's plows, sickles, tractors, or smart irrigation systems, we aim to highlight the importance of every tool in shaping a better future for farming.

Thank you for visiting, and we hope our project inspires more interest and innovation in agriculture!


</p>

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