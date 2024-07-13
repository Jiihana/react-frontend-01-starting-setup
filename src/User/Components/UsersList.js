import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../Shared/Components/UIElements/Card";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2 className='center'>YA PAS DE USER</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {props.users.map((user) => {
        return <UserItem key={user.id} user={user}></UserItem>;
      })}
    </ul>
  );
};

export default UserList;
