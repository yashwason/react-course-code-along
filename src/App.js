import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component{
    state = {
        inputValue: ``,
        textLength: 0
    }

    inputChangeHandler = (e) => {
        this.changeUserInputRltdState(e.target.value.split(` `).join(`-`)); // replacing spaces with '-'
    }

    charClickHandler = (charIndex) => {
        let inputValueArr = this.state.inputValue.split(``);
        inputValueArr.splice(charIndex, 1)
        const manipulatedInputString = inputValueArr.join(``);
        this.changeUserInputRltdState(manipulatedInputString);
    }

    changeUserInputRltdState = (inputValue) => {
        this.setState({
            inputValue: inputValue,
            textLength: inputValue.length
        });
    }
    

    render(){
        let validation = null,
            chars = this.state.inputValue ? this.state.inputValue.split(``) : null, // removing all spaces from input value if it exists
            charComponents = null;

        if(this.state.textLength){
            validation = <Validation inputValue={ this.state.inputValue } />
        }

        if(chars && chars.length){
            charComponents = chars.map((char, i) => <Char key={i} onClick={ (e) => { this.charClickHandler(i) } }>{ char }</Char>)
        }


        return (
            <div className="App">
                <input onInput={ (e) => { this.inputChangeHandler(e) } } type="text" placeholder="Enter text here..." value={ this.state.inputValue }/>
                { validation }
                { charComponents }
            </div>
        );
    }
}


export default App;