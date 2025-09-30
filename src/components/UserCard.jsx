import React from 'react'

const UserCard = ({user}) => {
    const{
        about,firstName,lastName,skills,age, gender
    }=user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={user?.photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " "+ lastName}</h2>
    <p>{about}</p>
    {age && gender && <h2> {age + " " + gender}</h2>}
    {skills && <p>{skills}</p>}
    <div className="card-actions justify-center mt-4">
      <button className="btn btn-primary">Ignored</button>
      <button className="btn btn-secondary">Intersted</button>
    </div>
  </div>
</div>
  )
}

export default UserCard