import React from 'react';
import "./FriendCard.css";

const FriendCard = ({name, image, occupation, location}) => (
<div className="card">
    <div className="img-container">
      <img
        alt="name"
        src={image}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Occupation:</strong> {occupation}
        </li>
        <li>
          <strong>Location:</strong> {location}
        </li>
      </ul>
    </div>
  </div>
);



export default FriendCard;