import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

const login = () => {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState("");
  const[message,setMessage]=useState('');
  const dispatch=useDispatch(); 

  const [isLogin,setIsLogin]=useState(true);
    const navigate=useNavigate();

  const handleLogin = async () => {
try{    const res=await axios.post(BASE_URL+"/login",{
             emailId,password
    },{withCredentials:true});
    dispatch(addUser(res.data));
   return navigate("/");
}
catch(err){
     setError(err?.response?.data || "Something went wrong !");
      console.error(err);
    }
    
  }

const handleSignUp=async()=>{
  try{

 
    const res=await axios.post(BASE_URL+'/signup',{firstName,lastName,emailId,password},{withCredentials:true});
     dispatch(addUser(res?.data?.data));
        return navigate("/profile");
 
  }catch(Error){
    setError(Error?.response?.data || "something went wrong!")}
}




  const handleForgotPassword = async () => {
  try {
    const res = await axios.post(
      BASE_URL + "/forgotPassword",
      { emailId }, // make sure you have emailId state
      { withCredentials: true } // optional if backend needs cookies
    );
    
    // show success message
    setMessage(res.data.message || "Check your email for reset link!");
    setError(""); // clear any previous errors
  } catch (err) {
    setError(err?.response?.data || "Something went wrong!");
    setMessage(""); // clear any previous success message
    console.error(err);
  }
};

  


  return (
     <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="card w-96 bg-base-300 shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-primary mb-4">
           {isLogin?"Login":"signUp"}
          </h2>

          {!isLogin && ( <><div className="form-control">
            <label className="label">
              <span className="label-text">firstName</span>
            </label>
            <input
              type="text"
              value={firstName}
              placeholder="Enter a FirstName..."
              className="input input-bordered w-full"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">lastName</span>
            </label>
            <input
              type="text"
              value={lastName}
              placeholder="Enter a LastName..."
              className="input input-bordered w-full"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div></>)}


          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={emailId}
              placeholder="you@example.com"
              className="input input-bordered w-full"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              placeholder="••••••••"
              className="input input-bordered w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
           <label className="label">
  <Link to="/forgotPassword" className="label-text-alt link link-hover">
    Forgot password?
  </Link>
</label>

            {message && <p className="text-green-500">{message}</p>}
          </div>
          <p className='text-red-500'> {error}</p>
          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full" onClick={isLogin?handleLogin:handleSignUp}>
               {isLogin ?"login":"signUp"}
              </button>
          </div>

          {/* Divider + Signup Link */}
          <div className="divider">OR</div>
          <p onClick={()=>setIsLogin((value)=>!value)} className="text-sm text-center cursor-pointer">
            {isLogin?"New User ? signUp Here !":"Existing User? Login Here !"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default login