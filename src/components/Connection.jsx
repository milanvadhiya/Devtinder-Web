import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';



const Connections = () => {
  const connections=useSelector((store)=>store.Connection);
  const dispatch=useDispatch();
     const fetchConncetion= async()=>{
  try{

      const res= await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
      console.log(res?.data?.data);
      dispatch(addConnection(res?.data?.data));
   }

  catch(Error){
    console.log(Error.message);
  }
}

  useEffect(()=>{
    fetchConncetion();
  },[]);

if(!connections)return;
if(connections.length===0)return<h1 className='flex text-center my-4'>Connection not found :( </h1>

//   return (
//     <div className='text-center my-5 '>
//       <h1 className='text-bold  text-white text-3xl'> Connection</h1>
    
//     {connections.filter(conn => conn !== null).map((connection)=>{
//       const {
//         firstName,lastName,photoUrl,about,gender,age
//       }=connection;
//       return(
//         <div  className='m-3 p-3 flex  rounded-lg bg-base-300 w-1/2 mx-auto '> 
//         <div>
//           <img  className='w-20 h-20 rounded-full'alt='photo' src={photoUrl}/>
//         </div>
//         <div className='text-left mx-5 my-2'>
//              <h1 className='font-bold text-xl'> {firstName + ' '+lastName}</h1>
//              <p>{about}</p>
//         </div>
        
      
//       </div>
//       )
      
// })}
//     </div>
//   )


return (
  <div className="text-center my-8">
    <h1 className="font-extrabold text-white text-4xl mb-6">Connections</h1>

    {connections
      .filter(conn => conn !== null)
      .map((connection, index) => {
        const { firstName, lastName, photoUrl, about } = connection;

        return (
          <div
            key={index}
            className="flex items-center bg-gray-800 text-white rounded-xl p-4 mb-4 w-3/4 mx-auto shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              className="w-24 h-24 rounded-full object-cover"
              alt="photo"
              src={photoUrl}
            />
            <div className="text-left ml-6">
              <h1 className="font-semibold text-2xl">
                {firstName} {lastName}
              </h1>
              <p className="mt-1 text-gray-300">{about}</p>
            </div>
          </div>
        );
      })}
  </div>
);

}


export default Connections;