import React, { Component } from "react";
import axios from "axios";
import { withRouter, Route } from "react-router-dom";

import FriendsList from "./components/friendsList";
import FriendForm from "./components/friendForm";
import {
  AppContainer,
  StyledNav,
  StyledNavLink
} from "./components/styledComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: null,
      error: null,
      activeFriend: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ error: err }));
  }
  addFriend = (values, actions) => {
    actions.resetForm();
    axios
      .post("http://localhost:5000/friends", values)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
    this.props.history.push("/");
  };
  updateFriend = (values, actions, id) => {
    axios.put(`http://localhost:5000/friends/${id}`, values).then(res => {
      this.setState({
        friends: res.data,
        activeFriend: null
      });
      this.props.history.push("/");
    });
  };
  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }));
  };
  goToForm = (event, friend) => {
    event.preventDefault();
    this.setState({ activeFriend: friend });
    this.props.history.push("/add-friend");
  };
  render() {
    return (
      <>
        <StyledNav>
          <h1>FriendsList</h1>
          <div>
            <StyledNavLink to="/" exact>
              Home
            </StyledNavLink>
            <StyledNavLink
              to="/add-friend"
              onClick={() => this.setState({ activeFriend: null })}
            >
              Add New Friend
            </StyledNavLink>
          </div>
        </StyledNav>
        <AppContainer>
          <Route
            path="/"
            exact
            render={() => (
              <FriendsList
                {...this.props}
                friends={this.state.friends}
                addFriend={this.addFriend}
                deleteFriend={this.deleteFriend}
                goToForm={this.goToForm}
              />
            )}
          />
          <Route
            path="/add-friend"
            exact
            render={() => (
              <FriendForm
                {...this.props}
                friends={this.state.friends}
                addFriend={this.addFriend}
                activeFriend={this.state.activeFriend}
                updateFriend={this.updateFriend}
              />
            )}
          />
        </AppContainer>
      </>
    );
  }
}

export default withRouter(App);
