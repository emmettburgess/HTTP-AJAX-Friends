import React from "react";

import Friend from "./friend";
import './friendsList.css';


class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends
    };
  }

  render() {
    return (
      <div className='.center-layout'>
        {this.props.friends.map(friend => (
          <Friend friend={friend} setActiveFriend={this.props.setActiveFriend} history={this.props.history} />
        ))}
      </div>
    );
  }
}

export default FriendList;
