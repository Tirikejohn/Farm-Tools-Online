import React from 'react';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission logic (e.g., send the message).
        console.log("Message sent!");
    };

    return (
        <div>
            <section className="row bg-success p-4">
                <div className="col-md-4 text-white">
                    <h4 className="text-center">About us</h4>
                    <p>
                        We are a group of passionate individuals dedicated to improving farming through accessible and efficient tools. Our mission is to support farmers by providing information, ideas, and solutions that make their work easier, faster, and more productive.
                        <br />
                        This project focuses on exploring traditional and modern farm tools, understanding how they work, and promoting innovations that help boost agricultural output. Whether it's plows, sickles, tractors, or smart irrigation systems, we aim to highlight the importance of every tool in shaping a better future for farming.
                        <br />
                        Thank you for visiting, and we hope our project inspires more interest and innovation in agriculture!
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center text-white">Contact us</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter your email" className="form-control" required />
                        <br /><br />
                        <textarea name="message" id="message" className="form-control" placeholder="Leave a comment" rows="7" required></textarea>
                        <br />
                        <input type="submit" className="btn btn-outline-danger" value="Send Message" />
                        <br />
                    </form>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center text-white">Stay Connected</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="images/fb.png" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    </a>

                    <p className="text-dark">
                        Stay connected so you get your ordered products safely and on time.
                    </p>
                </div>
            </section>

            <footer className="bg-dark text-white text-center p-2">
                <h5>Developed by johntirike &copy;2025. All Rights Reserved</h5>
            </footer>
        </div>
    );
}

export default Footer;
