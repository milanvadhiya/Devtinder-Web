import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feedData=useSelector((store)=>store.feed);
  const dispatch=useDispatch();

 const getFeed = async ()=>{
  try{
    if(feedData)return;
    const res=await axios.get(BASE_URL+"/user/feed",{withCredentials:true});
    dispatch(addFeed(res?.data ));
    
    
}catch(error){
    //todo: handle error
    console.error(error);
  }
 }

  useEffect(()=>{
    getFeed();
  },[]);
  return feedData && (
    <div className='flex justify-center my-7'>
      <UserCard user={feedData[0]}/>
      </div>
  )
}

export default Feed