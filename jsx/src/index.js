// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Get a reference to the div with ID

const el = document.getElementById('root');

// Tell Rect to take control of that element

const root = ReactDOM.createRoot(el);

// Create a component

function App() {
    return <h1>Hi there!</h1>;
}

// Show thw component on the screen

root.render(<App />);