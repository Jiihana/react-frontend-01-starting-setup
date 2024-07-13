import React from "react";
import "./UserPlaces.css";
import PlaceList from "../../Components/PlaceList/PlaceList";

const UserPlaces = (props) => {
  let placesCreatedByUser = props.places.filter((place) => {
    return place.creatorId === props.creatorId;
  });

  return <PlaceList places={placesCreatedByUser}></PlaceList>;
};

export default UserPlaces;
