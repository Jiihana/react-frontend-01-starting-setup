import React from "react";
import "./PlaceItem.css";
import Card from "../../../Shared/Components/UIElements/Card";
import Button from "../../../Shared/Components/FormElements/Button/Button";

const PlaceItem = (props) => {
  return (
    <li className='place-item'>
      <Card className='place-item__content'>
        <div className='place-item__image'>
          <img
            src={props.place.imageUrl}
            alt='illustration'></img>
        </div>

        <div className='place-item__info'>
          <h2>{props.place.title}</h2>
          <h3>{props.place.adress}</h3>
          <p>{props.place.description}</p>
        </div>

        <div className='place-item__actions'>
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
