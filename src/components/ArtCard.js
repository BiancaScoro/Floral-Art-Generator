import React from 'react';
import './ArtCard.css';

const ArtCard = ({ art }) => {

  return (
    <div className="parent-div">
    <div className="Card">
        <img className="card-img" src={art.primaryimageurl} alt={art.title}/>
        <h3>{art.title}</h3>
    </div>
    </div>
  );
};

export default ArtCard;
