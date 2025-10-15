import React from "react";

const UserCard = ({ user }) => {
  // console.log(user);
  const { firstName, lastName, age, gender, skills, about, photoUrl } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="p-2 my-2">
          <img src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          {Array.isArray(skills) && skills.length > 0 && (
            <p>Skills: {skills.join(", ")}</p>
          )}
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary">Interested</button>
            <button className="btn btn-primary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
