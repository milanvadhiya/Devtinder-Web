import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestReducer';
import axios from 'axios';

const Request = () => {
    const dispatch=useDispatch();
    const requests=useSelector((store)=>store.request);
  const fetchRequests = async()=>{
 try{
    const res=await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true});
   console.log(res.data.data);
    dispatch(addRequest(res?.data?.data)
);
 }catch(Error){console.log(Error.message);}
    
  }
 
  const receiveRequest=async(status,_id)=>{
    try{
        await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},{withCredentials:true})
        dispatch(removeRequest(_id));
    }catch(error){
        console.log(error.message)
    }
  }
 
  useEffect(()=>{
    fetchRequests();
  },[]);
  if(!requests)return;
if(requests.length===0)return<h1 className='flex justify-center my-10 '> No Connection Requests :( </h1>

  return (
 <div className="text-center my-10">
  <h1 className="font-bold text-white text-3xl mb-6">Connection Requests 🙂</h1>

  {requests.map((request) => {
    const { _id, firstName, lastName, photoUrl, about } = request.fromUserId;
    return (
      <div
        key={_id}
        className="m-4 p-6 flex justify-between items-center rounded-2xl bg-base-300 w-2/3 mx-auto shadow-lg hover:shadow-xl transition duration-300"
      >
        {/* Profile Image */}
        <div className="mx-5">  
          <img
            className="w-28 h-28 rounded-full object-cover border-4 border-primary"
            alt="photo"
            src={photoUrl}
          />
        </div>

        {/* User Info */}
        <div className="text-left mx-5 my-2 flex-1">
          <h1 className="font-bold text-2xl">{firstName + " " + lastName}</h1>
          <p className="text-gray-300 mt-1">{about}</p>
        </div>

        {/* Action Buttons */}
        <div className="m-2 p-2 my-auto flex gap-4">
          <button className="btn btn-primary px-6 py-2" onClick={()=>receiveRequest("accepted",request._id)}>Accepted</button>
          <button className="btn btn-secondary px-6 py-2"onClick={()=>receiveRequest("rejected",request._id)}>Rejected</button>
        </div>
      </div>
    );
  })}
</div>


  )
}

export default Request