import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestReducer';
import axios from 'axios';

const Request = () => {
    const dispatch=useDispatch();
    const request=useSelector((store)=>store.request);
  const fetchRequests = async()=>{
 try{
    const res=await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true});
   console.log(res.data.data);
    dispatch(addRequest(res.data.data)
);
 }catch(Error){console.log(Error.message);}
    
  }

  useEffect(()=>{
    fetchRequests();
  },[]);
  if(!request)return;
if(request.length===0)return<h1> No Connection Requests :( </h1>

  return (
    <div className='text-center my-5 '>
      <h1 className='text-bold  text-white text-3xl'> Connection Requests :) </h1>
    
    {request.map((request)=>{
      const {_id,
        firstName,lastName,photoUrl,about,gender,age
      }=request.fromUserId;
      return(
        <div key={_id} className='m-3 p-3 flex justify-between items-center rounded-lg bg-base-300 w-2/3 mx-auto '> 
        <div className='mx-5'>
          <img  className='w-auto m-auto rounded-full'alt='photo' src={photoUrl}/>
        </div>
        <div className='text-left mx-5 my-2'>
             <h1 className='font-bold text-xl'> {firstName + ' '+lastName}</h1>
             <p>{about}</p>
        </div>
        
        <div className='m-2 p-2 my-auto flex '>
        <button  className="btn btn-primary mx-2">Accepted</button>
       <button className="btn btn-secondary mx-2">Rejected</button>
     </div>
      </div>
      )
      
})}
    
    </div>
  )
}

export default Request