import React from 'react';
import ReactDOM from 'react-dom/client';

const title = <h1>SUSCRIBE</h1>;
const text = <p>Sign up with your email address to receive news and updates.</p>
const inputFields = (
  <input></input>
);
const button = <button>Suscribe</button>;

const app = (
  <div>
    {title}
    {text}
    {inputFields}
    {button}
  </div>
);

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)