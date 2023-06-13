import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './Redux2/React/App';

let container = document.getElementById('root');
let root = ReactDOM.createRoot(container);
root.render(<App/>);



// 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
 
// function Hello(props) {
//   return <h1>Hello World!</h1>;
// }

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<Hello />);