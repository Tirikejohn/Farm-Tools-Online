import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    let [phone,setPhone]=useState("");
    let [loading,setLoading]=useState("");
    let [success,setsuccess]=useState("");
    let [error,seteror]=useState("");



    const {product}=useLocation().state|| {};

    const img_url="https://johntirike.pythonanywhere.com/static/images/"

    const submitForm=async(e) =>{
        e.preventDefault()
        seteror("");
        setsuccess("");
        setLoading("please wait as we process payment...")
        try {
            const data=new FormData();
            data.append("phone",phone);
            data.append("amount",product.product_cost);


            const response=await axios.post("https://johntirike.pythonanywhere.com/api/mpesa_payment",data);
            setLoading("");
            setsuccess(response.data.message);
        } catch (error) {
           setLoading("");
           seteror(error.message); 
        }
    } 
    return ( 
        <div className="">
            
            <div className="row justify-content-center mt-3">
            <nav className="m-4">
            <Link className="btn btn-dark mx-2" to="/signin">SignIn</Link>
            <Link className="btn btn-dark mx-2" to="/signup">SignUp</Link>
            <Link className="btn btn-dark mx-2" to="/addproduct">AddProduct</Link>
            <Link className="btn btn-dark mx-2" to="/singleproduct">SingleProduct</Link>
            
            
            </nav>
            
                <div className="col-md-3 card shadow">
                    <img src={img_url+ product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow">
                
                    <h1>{product.product_name}</h1>
                    <div className="b text-warning">{product.product_cost}</div>
                    <p className="text-muted">{product.product_desc}</p>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>
                    <form onSubmit={submitForm}>
                        <input type="number" readOnly value={product.product_cost} className="form-control" /><br />
                        <input type="tel" className="form-control" placeholder="enter Mpesa No 2547xxxxxxx" onChange={(e)=>setPhone(e.target.value)}/> <br />

                        <button className="btn btn-primary">pay Now</button>
                    </form>
                </div>
            </div>
            
        </div>
     );
}
 
export default SingleProduct;