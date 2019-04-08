import React from "react";

import Friend from "./friend";

const FriendsList = ({ friends, deleteFriend, goToForm }) => {
  if (!friends) {
    return <div>Loading....</div>;
  }
  return (
    <>
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          deleteFriend={deleteFriend}
          goToForm={goToForm}
        />
      ))}
    </>
  );
};
export default FriendsList;
