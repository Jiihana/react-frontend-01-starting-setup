import React from "react";
import UserList from "../Components/UsersList";

const Users = (props) => {
  return <UserList users={props.users}></UserList>;
};

export default Users;
