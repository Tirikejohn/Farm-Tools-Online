import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
    let[username,setusername]=useState("")
    let[password,setpassword]=useState("")
    let[loading,setloading]=useState("")
    let[error,seterror]=useState("")
    let navigate=useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault();
        try {
            seterror("")
            setloading("please wait..")
            
            const data=new FormData()
            data.append("username",username)
            data.append("password",password)

            const response=await axios.post("https://johntirike.pythonanywhere.com/api/signin",data);

            if(response.data.user){
              localStorage.setItem("user",JSON.stringify(response.data.user));
              navigate("/")

            } else{
                setloading("")
                seterror(response.data.message)
            }
        } catch (error) {
           setloading("")
           seterror("something went wrong") 
        }
    }
    return ( 
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
            <h2>SignIn</h2>
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="enter username" required className="form-control" onChange={(e)=>setusername(e.target.value)} /><br />
                <input type="password" placeholder="Enter Password" required className="form-control" onChange={(e)=>setpassword(e.target.value)} /><br />
                <button className="btn btn-primary" type="submit">SignIn</button>
            </form>
            <p>dont have an account? <Link to="/SignUp">Sign Up</Link></p>
        </div>
      </div>  
     );
}
 

 
export default SignIn;