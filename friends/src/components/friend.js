import React from "react";

import { Card, StyledThumbnail, StyledButton } from "./styledComponents";

const randomImages = [
  "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1550780593-00c155ac373f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1547231242-2d9033c5d8b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80",
  "https://images.unsplash.com/photo-1550589348-67046352c5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  "https://images.unsplash.com/photo-1547922657-b370d1687eb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1549321682-36e2f8000f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1547958600-915c8a5131de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1547844149-792ce502416a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1547707981-eeb6a7ac3c25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1545994493-82d1f9521646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

const Friend = ({ friend, deleteFriend, goToForm }) => {
  return (
    <Card>
      <div>
        <StyledThumbnail
          src={
            friend.id - 1 < randomImages.length
              ? randomImages[friend.id - 1]
              : randomImages[(friend.id - 1) % randomImages.length]
          }
          alt="random nature picture that has nothing to do with this app"
        />
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <StyledButton onClick={e => deleteFriend(e, friend.id)}>
          <i className="far fa-trash-alt fa-lg" />
        </StyledButton>
        <StyledButton onClick={e => goToForm(e, friend)}>
          <i className="far fa-edit fa-lg" />
        </StyledButton>
      </div>
    </Card>
  );
};

export default Friend;
