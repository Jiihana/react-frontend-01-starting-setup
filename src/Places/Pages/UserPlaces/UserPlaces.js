import React from "react";
import "./UserPlaces.css";
import PlaceList from "../../Components/PlaceList/PlaceList";
import { useParams } from "react-router-dom";

const UserPlaces = (props) => {
  const userId = useParams().userId;

  let placesCreatedByUser = props.places.filter((place) => {
    return place.creatorId == userId;
  });

  return <PlaceList places={placesCreatedByUser}></PlaceList>;
};

export default UserPlaces;
