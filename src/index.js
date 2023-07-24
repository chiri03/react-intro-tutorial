// // Import React and ReactDOM libraries
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // Get a reference to the div with ID

// const el = document.getElementById('root');

// // Tell Rect to take control of that element

// const root = ReactDOM.createRoot(el);

// // Create a component

// function App() {
//   return <div>
//     <h1>Hi there!</h1>
 
//   </div>;
 
// }

// // Show thw component on the screen

// root.render(<App />);
//1) Import the react and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

// 2) Get a refence to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);