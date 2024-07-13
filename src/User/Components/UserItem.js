import React from "react";
import Avatar from "../../Shared/Components/UIElements/Avatar";
import Card from "../../Shared/Components/UIElements/Card";
import { Link } from "react-router-dom";

import './UserItem.css'

const UserItem = props => {
    return <li className="user-item">
        <Card className="user-item_content">
            <Link to={`/${props.user.id}/places`}>
                <div className="user-item_image">
                    <Avatar image={props.user.image} alt="photo profil"></Avatar>
                </div>

                <div className="user-item_info">
                    <h2>{props.user.name}</h2>
                    <h3>{props.user.catNumber}</h3>
                </div>
            </Link>
        </Card>
    </li >;
}


export default UserItem;