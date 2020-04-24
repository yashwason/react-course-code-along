import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component{
    state = {
        username: `yashwason`,
        commonParaText: `This is a paragraph`
    };

    inputChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    render = () => {
        return <div className="App">
            <UserInput
             value={ this.state.username }
             inputChangeHandler={ this.inputChangeHandler }
            />

            <UserOutput
             username={ this.state.username }
             secondParaText={ this.state.commonParaText }
            />
            <UserOutput
             username={ this.state.username }
             secondParaText={ this.state.commonParaText }
            />
            <UserOutput
             username={ this.state.username }
             secondParaText={ this.state.commonParaText }
            />
        </div>
    };
}


export default App;