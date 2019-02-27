import React from "react";

import { Card } from "./styledComponents";

const Friend = ({ friend }) => {
  return (
    <Card>
      <div>
        <h3>Name: {friend.name}</h3>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
      </div>
    </Card>
  );
};

export default Friend;
