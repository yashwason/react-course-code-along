import React from 'react';

const UserInput = (props) => {
    return (
        <input
         type="text" value={ props.value } 
         placeholder="Enter username"
         onChange={ props.inputChangeHandler }
         style={{
             padding: `10px`,
             fontWeight: 600,
             marginTop: `40px`,
             border: `2px solid #000`,
             textAlign: `center`
         }}
        />
    )
}

export default UserInput;