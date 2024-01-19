import React from "react";
import 'tachyons';

const Card = ({ name, email, id }) => {
  return(
    <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shodow-5">
      <img src= {`https://robohash.org/${id}?200x200`} alt="roboImage" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>      
    </div>
  );
}

export default Card;