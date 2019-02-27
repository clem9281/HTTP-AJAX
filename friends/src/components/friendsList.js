import React from "react";

import Friend from "./friend";
import FriendForm from "./friendForm";

const FriendsList = ({ friends }) => {
  console.log(friends);
  if (!friends) {
    return <div>Loading....</div>;
  }
  return (
    <>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
      <FriendForm />
    </>
  );
};
export default FriendsList;
