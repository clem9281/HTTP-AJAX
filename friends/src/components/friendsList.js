import React from "react";

import Friend from "./friend";
import FriendForm from "./friendForm";

const FriendsList = ({
  friends,
  addFriend,
  deleteFriend,
  history,
  goToForm
}) => {
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
          history={history}
          goToForm={goToForm}
        />
      ))}
    </>
  );
};
export default FriendsList;
