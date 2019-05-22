import React from "react";
import './friend.css';

function Friend (props) {
console.log(props.friend);

   const updateFriend = e => {

        props.setActiveFriend(props.friend);

        props.history.push('/update');
    } 


  return (
    <div className="panels">

      <div className="styles"> Name: {props.friend.name} </div>

      <div className="styles"> Age: {props.friend.age} </div>

      <div className="styles"> Email: {props.friend.email} </div>

      <button onClick={updateFriend} > Change Friend Info </button>

      <button > DELETE </button>
    </div>
  );
}


export default Friend;
