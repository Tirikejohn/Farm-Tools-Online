import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,Link, } from "react-router-dom";
import Footer from "./Footer";
import Carousel from "./Carousel";
const GetProduct = () => {
    let [products,setproducts]=useState([]);
    let [error,seterror]=useState("");
    let [loading,setloading]=useState("");
    let [filteredproducts,setfilteredproducts]=useState([])

    const image_url="https://johntirike.pythonanywhere.com/static/images/"
    const navigate=useNavigate();

    

    const getproducts=async () =>{
        seterror("")
        setloading("please wait..recieving products...");
        try {
         const response =await axios.get("https://johntirike.pythonanywhere.com/api/getproducts")   
         setproducts(response.data)
         setfilteredproducts(response.data)
         setloading("");
        } catch (error) {
          setloading("");
          seterror(error.message)  
        }
    };

    const handlesearch=(value)=>{
        const filtered=products && products.filter((product)=>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        )
        setfilteredproducts(filtered);
    };

    // useEffect(function,dependency)

    useEffect(()=>{
        getproducts();
    },[])
    return ( 
        <div className="row">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            {/* {navbar} */}
            <nav className="m-4">
            <Link className="btn btn-dark mx-2" to="/signin">SignIn</Link>
            <Link className="btn btn-dark mx-2" to="/signup">SignUp</Link>
            <Link className="btn btn-dark mx-2" to="/addproduct">AddProduct</Link>
            <Link className="btn btn-dark mx-2" to="/singleproduct">SingleProduct</Link>
            </nav>
            <Carousel/>
            {/* {content} */}

            <div className="justify-content-center m-3">
                <div className="col-md-6">
                    <input type="text" placeholder="search a product by name" onChange={(e)=>handlesearch(e.target.value)} className="form-control" />
                </div>
            </div>

            {filteredproducts.map((product)=>(
            <div className="col-md-3 justify-content-center mb-4">
                <div className="card shadow">
                    <img src={image_url+product.product_photo} className="product_img" alt="" />
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_desc.slice(0,10)}</p>
                        <b className="text-warning">{product.product_cost} Ksh</b>
                        <button className="btn btn-primary w-100" onClick={()=> navigate("",{state:{product}}) }>view products</button>
                    </div>
                </div>
            </div>
            ))}
            {/* {footer} */}
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
                    <p class="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur adipisci quo error reiciendis ex iste perferendis sapiente quisquam vero natus, ratione eveniet mollitia placeat aspernatur, quaerat minus aliquid, id impedit.</p>
                </div>
            </section>
             <footer class="bg-dark text-white text-center p-2">
                <h5>Developed by johntirike &copy;2025.All Rights Reserved</h5>
             </footer>
        </div>

        
     );
}
 
export default GetProduct;