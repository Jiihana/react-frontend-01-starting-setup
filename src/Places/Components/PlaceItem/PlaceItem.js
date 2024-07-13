import React from "react";
import "./PlaceItem.css";
import Card from "../../../Shared/Components/UIElements/Card";
import Avatar from "../../../Shared/Components/UIElements/Avatar";

const PlaceItem = (props) => {
  return (
    <li className='place-item'>
      <Card>
        <Avatar
          image={props.place.imageUrl}
          alt='photo illustration'></Avatar>
        <h1>{props.place.title}</h1>
        <h2>{props.place.adress}</h2>
        <h3>{props.place.description}</h3>
      </Card>
    </li>
  );
};

export default PlaceItem;
