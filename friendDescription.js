import React from 'react';

function FriendDescription(props) {
    return (
        <div>
            <p className="friend-description">{props.friend.description}</p>
        </div>
    );
}

export default FriendDescription;