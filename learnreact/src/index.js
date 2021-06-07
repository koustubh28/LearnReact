// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    const buttonText = 'Click Me'
    return (
        <div>
            <label class="label" for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    );
};

// Take the React Component and show it on screen
ReactDOM.render( <App />, document.querySelector('#root'));