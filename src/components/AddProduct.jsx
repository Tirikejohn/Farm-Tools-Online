import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const AddProduct = () => {
    let[product_name,setproductName]=useState("");
    let[product_desc,setproductDesc]=useState("");
    let[product_cost,setproductCost]=useState("");
    let[product_photo,setproductPhoto]=useState("");

    const navigate=useNavigate();

    const user=localStorage.getItem("user");

    const checkUser=()=>{
        if (!user){
            localStorage.clear()
            return navigate("/signin")
        }
    };

    useEffect(()=>checkUser(),[user]);

    let[loading,setloading]=useState("");
    let[error,seterror]=useState("");
    let[success,setSuccess]=useState("");
    const submitForm=async(e)=> {
        e.preventDefault();
        try {
            seterror("")
            setSuccess("")
          setloading("please wait while submit data")
          const data=new FormData();
          data.append("product_name",product_name)
          data.append("product_desc",product_desc)
          data.append("product_cost",product_cost)
          data.append("product_photo",product_photo) 
          const response=await axios.post("https://johntirike.pythonanywhere.com/api/addproduct",data);

          setloading("")
          setSuccess(response.data.success);
          setproductName("");
          setproductDesc("");
          setproductCost("")

        } catch (error) {
            setloading("");
            seterror(error.message);

            
        }

    }
    return ( 
       <div className="row justify-content-center mt-4">
       <nav className="m-4">
            <Link className="btn btn-success mx-2" to="/signin">SignIn</Link>
            <Link className="btn btn-success mx-2" to="/signup">SignUp</Link>
            <Link className="btn btn-success mx-2" to="/addproduct">AddProduct</Link>
            <Link className="btn btn-success mx-2" to="/singleproduct">SingleProduct</Link>
            
            </nav>
        <div className="col-md-6 card shadow p-4">
            <h2>Add product</h2>
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <b className="text-success">{success}</b>

            <form onSubmit={submitForm }>
                <input type="text" placeholder="product name" required className="form-control" onChange={(e)=>setproductName(e.target.value)} value={product_name} /> <br />
                <textarea name="" id=""  className="form-control" placeholder="product desc" required onChange={(e)=>setproductDesc(e.target.value)} value={product_desc}> </textarea><br />
                <input type="number" required placeholder="enter product cost" className="form-control" onChange={(e)=>setproductCost(e.target.value)} value={product_cost} /><br />
                <lable className="form-lable">product photo</lable><br />
                <input type="file" onChange={(e)=>setproductPhoto(e.target.files[0])} required className="form-control" /><br />
                <button className="btn btn-primary">Add product</button>
               
            </form>
        </div>
       </div>
     );
}
 
export default AddProduct;