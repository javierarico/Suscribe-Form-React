import React from 'react';
import ReactDOM from 'react-dom';

const title = <h1 style={{fontFamily: 'lato, sans-serif', fontSize: '180%', textAlign: 'center'}}>SUSCRIBE</h1>;
const text = <p style={{fontFamily: 'lato, sans-serif', fontSize: '80%', textAlign: 'center'}}>Sign up with your email address to receive news and updates.</p>

const inputWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2vw',
  margin: '2vw'
}

const inputStyle = {
  border: 'none',
  borderRadius: '5px',
  padding: '1vw',
  fontFamily: 'lato, sans-serif'
}

const inputFields = (
  <div class='inputWrapper' style={inputWrapperStyle}>
    <input placeholder='First Name' style={inputStyle}/>
    <input placeholder='Last Name' style={inputStyle}/>
    <input placeholder='Email' style={inputStyle}/>
  </div>
)
const button = <button style={{border: 'none', backgroundColor: '#e8736b', color: '#ffffff', padding: '1.5%', borderRadius: '5px', width: '30%', fontFamily: 'lato, sans-serif'}}>Suscribe</button>;

const app = (
  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bfe6f2', padding: '5vw', borderRadius: '25px'}}>
    {title}
    {text}
    {inputFields}
    {button}
  </div>
);

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)