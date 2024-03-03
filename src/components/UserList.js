import React, { useContext } from "react";
import Loading from "./Loading";
import User from "./User";
import { UsersContext } from "../context/usersContext";

const UserList = () => {
  const { loading, users } = useContext(UsersContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mt-3">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
