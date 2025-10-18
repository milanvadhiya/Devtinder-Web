import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, about, firstName, lastName, skills, age, gender } = user;

  const handleConnectionRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user?.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {age && gender && <h2> {age + " " + gender}</h2>}
        {skills && <p>{skills}</p>}
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleConnectionRequest("ignored", _id)}
          >
            Ignored
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleConnectionRequest("intersted", _id)}
          >
            Intersted
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
