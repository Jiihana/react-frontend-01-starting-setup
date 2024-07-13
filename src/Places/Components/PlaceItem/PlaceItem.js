import React from "react";
import "./PlaceItem.css";
import Card from "../../../Shared/Components/UIElements/Card";

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
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
