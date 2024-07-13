import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../../../Shared/Components/UIElements/Card";
import Button from "../../../Shared/Components/FormElements/Button/Button";
import Modal from "../../../Shared/Components/UIElements/Modal/Modal";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  function openMapHandler() {
    setShowMap(true);
  }

  function closeMapHandler() {
    setShowMap(false);
  }

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.place.adress}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
        <div className='map-container'>
          <h2>THE MAP!</h2>
        </div>
      </Modal>

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
            <Button
              inverse
              onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
