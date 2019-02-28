import React from "react";

import { Card } from "./styledComponents";

const Friend = ({ friend, deleteFriend, history, goToForm }) => {
  return (
    <Card>
      <div>
        <h3>Name: {friend.name}</h3>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <button onClick={e => deleteFriend(e, friend.id)}>
          <i className="fas fa-trash-alt" />
        </button>
        <button onClick={e => goToForm(e, friend)}>
          <i className="far fa-edit" />
        </button>
      </div>
    </Card>
  );
};

export default Friend;
