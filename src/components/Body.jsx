import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constant'
import { useNavigate } from 'react-router-dom'


const Body = () => {
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const userData=useSelector((store)=>store.user);

  const userFetch=async ()=>{
      try{
    // fetch user data from backend
    const res=await axios.get(BASE_URL+"/profile/view",{
          withCredentials:true
    });
    dispatch(addUser(res.data));
  }
  catch(err){
    if(err.response.status===401)
    Navigate("/login");
    console.error(err);
  }
  }
  useEffect(()=>{
    if(!userData)
   { userFetch();}
  },[]);
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
       <main className="flex-grow">
         <Navbar/>
        <Outlet/>
       </main>
        <Footer/>
    </div>
  )
}

export default Body