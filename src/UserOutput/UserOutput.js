import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className="username">My username is {props.username}</p>
            <p className="secondary">{ props.secondParaText }</p>
        </div>
    )
}

export default UserOutput;