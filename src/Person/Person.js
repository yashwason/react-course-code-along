import React from 'react';
import styled from 'styled-components';

const Person = (props) => {
    const StyledDiv = styled.div`
        width: 40%;
        max-width: 500px;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 30px;
        text-align: center;
        margin: 30px auto 0;
        box-shadow: 2px 2px 2px #000;

        *{
            display: block;
            margin: 15px auto;
        }

        @media (max-width: 500px){
            width: 80%;
        }
    `;

    return (
        <StyledDiv>
            <p onClick={ props.click }>My name is { props.name } and I am { props.age } years old.</p>
            <strong>{ props.children }</strong>

            <input type="text" onChange={ props.changeNameHandler } value={ props.name }/>

            <button onClick={ props.removeComponentHandler }>Remove Person</button>
        </StyledDiv>
    )
}

export default Person;