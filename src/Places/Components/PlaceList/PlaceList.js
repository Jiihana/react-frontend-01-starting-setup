import React from "react";
import PlaceItem from "../PlaceItem/PlaceItem";
import Card from "../../../Shared/Components/UIElements/Card";

import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.places.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found, add a new one?</h2>
          <button> Share place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {props.places.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            place={place}></PlaceItem>
        );
      })}
    </ul>
  );
};

export default PlaceList;
