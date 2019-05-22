import React from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import FriendsList from "./components/friendsList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  postFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data,
          postSuccessMessage: res.data.successMessage
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  setActiveFriend = friend => {
    this.setState({ activeFriend: friend });
  };

  render() {
    return (
      <div className='page-style'>
        <nav className="nav-bar">
          <NavLink to="/"> <div className='nav-link-style'>HOME</div> </NavLink>
          <NavLink to="/add"> <div className='nav-link-style'>ADD</div> </NavLink>
          <NavLink to="/update"> <div className='nav-link-style'>UPDATE</div> </NavLink>
        </nav>

        <div className="App">
          <Route
            path="/"
            render={props => (
              <FriendsList
                friends={this.state.friends}
                setActiveFriend={this.setActiveFriend}
                {...props}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
