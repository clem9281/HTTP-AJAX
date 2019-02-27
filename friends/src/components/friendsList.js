import React from "react";
import { Card } from "./styledComponents";
import axios from "axios";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }));
  }
  render() {
    console.log(this.state.friends);
    if (!this.state.friends) {
      return <div>Loading....</div>;
    }
    return (
      <Card>
        <div>FriendsList</div>
      </Card>
    );
  }
}
export default FriendsList;
