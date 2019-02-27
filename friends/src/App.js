import React, { Component } from "react";
import FriendsList from "./components/friendsList";
import { AppContainer, HeaderDiv } from "./components/styledComponents";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: null,
      error: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ error: err }));
  }
  render() {
    return (
      <AppContainer>
        <HeaderDiv>
          <h1>FriendsList</h1>
        </HeaderDiv>
        <FriendsList friends={this.state.friends} />
      </AppContainer>
    );
  }
}

export default App;
