import React, { use } from 'react'
import { useState } from 'react'
import UserCard from './UserCard'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

import axios from 'axios'

import { BASE_URL } from '../utils/constant'




const EditProfile = ({user}) => {

 const [firstName, setFirstName] = useState(user?.firstName);
 const [lastName, setLastName] = useState(user?.lastName);
 const [age,setAge ] = useState(user?.age);
 const[gender,setGender]=useState(user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const[error,setError]=useState("");
   const dispatch=useDispatch();
   const[show,setShow]=useState(false);

const saveProfile= async ()=>{

  
  try{
    const res=await axios.patch(BASE_URL+"/profile/edit",
      {firstName,
        lastName,age,gender,photoUrl,about
      },
      { withCredentials: true})
      
     dispatch(addUser(res?.data?.data));
    setShow(true);
    setInterval(()=>{
      setShow(false);
    },3000);

  }catch(Error){

     setError(Error.message.data);
      }
}

 

  return ( 
    <>
  <div className='flex justify-center my-10'>
   <div className="flex justify-center items-center min-h-screen bg-base-100 mx-10 mt-2 mb-2">
      <div className="card w-96 bg-base-300 shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-primary ">
           Edit Profile
          </h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">FirstName</span>
            </label>
            <input
              type="text"
             value={firstName}
              placeholder=""
              className="input input-bordered w-full"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

        
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">LastName</span>
            </label>
            <input
              type="text"
              value={lastName}
              placeholder=" "
              className="input input-bordered w-full"
             onChange={(e) => setLastName(e.target.value)}
            />
         
          </div>
          
            <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              value={age}
              placeholder=" "
              className="input input-bordered w-full"
              onChange={(e) => setAge(Number(e.target.value))}
            />
         
          </div>
            <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <input
              type="text"
              value={gender}
              placeholder=" "
              className="input input-bordered w-full"
              onChange={(e) => setGender(e.target.value)}
            />
         
          </div>   
            <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="url"
             value={photoUrl}
              placeholder=" "
              className="input input-bordered w-full"
             onChange={(e) => setPhotoUrl(e.target.value)}
            />
         
          </div>   
            <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">About</span>
            </label>
            <input
              type="text"
              value={about}
              placeholder=" "
              className="input input-bordered w-full"
             onChange={(e) => setAbout(e.target.value)}
            />
         
          </div>
          <div className="form-control mt-4">
            <button 
            onClick={saveProfile}
            className="btn btn-primary w-full" >saveProfile</button>
          </div>

        
        </div>
      </div>
  
    </div>

    

    <UserCard user={{firstName,lastName,age,gender,photoUrl,about}}/>
  </div>
  <div className="toast toast-top toast-center">
  
{show &&  
  <div className="alert alert-success">
    <span>profile saved successfully :) :)</span>
  </div>

}
</div>
  </>
  )
}

export default EditProfile