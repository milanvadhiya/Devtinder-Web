import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const login = () => {
  const [emailId, setEmailId] = useState('milan@gmail.com');
  const [password, setPassword] = useState('Milan@02');
  const dispatch=useDispatch(); 
    const navigate=useNavigate();
  const handleLogin = async () => {
 

try{    const res=await axios.post(BASE_URL+"/login",{
             emailId,password
    },{withCredentials:true});
    dispatch(addUser(res.data));
   return navigate("/");
}
catch(err){
      console.error(err);
    }
    
  }
  


  return (
     <div className="flex justify-center items-center min-h-screen bg-base-100">
      <div className="card w-96 bg-base-300 shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-primary mb-4">
            Login
          </h2>

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
              <a href="/forgot-password" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
          </div>

          {/* Divider + Signup Link */}
          <div className="divider">OR</div>
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="link link-primary">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default login