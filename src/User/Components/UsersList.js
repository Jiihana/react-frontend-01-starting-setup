import React from "react";

import './UsersList.css'
import UserItem from "./UserItem";

const UserList = props => {

    if (props.users.length === 0) {
        return <h2 className="center">YA PAS DE USER</h2>
    }

    return (
        <ul className="users-list">
            {props.users.map((user) => {
                return (
                    <UserItem
                        key={user.id}
                        user={user}
                    ></UserItem>
                );
            })}
        </ul >
    );
}

export default UserList;