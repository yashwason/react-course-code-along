import React from 'react';

const Char = (props) => {
    return (
        <span
        style={{
            display: `inline-block`,
            padding: `16px`,
            textAlign: `center`,
            margin: `16px`,
            border: `1px solid black`
        }}
        onClick={ props.onClick }>{ props.children }</span>
    )
}

export default Char;