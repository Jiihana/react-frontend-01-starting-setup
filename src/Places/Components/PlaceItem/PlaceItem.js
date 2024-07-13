import React from "react";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  return (
    <li className='place-item'>
      <p>{props.place.title}</p>
      <p>{props.place.description}</p>
    </li>
  );
};

export default PlaceItem;
