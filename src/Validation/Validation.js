import React from 'react';

const Validation = (props) => {
    let message = null;
    if(props.inputValue.length < 5) message = `Text too short`;
    else message = `Text long enough`;

    return (
        <div className="Validation">
            <p>{message}</p>
        </div>
    )
}

export default Validation;