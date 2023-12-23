import React from 'react'
import '../styles/App.css';
const App = () => {

  let textInputValue = '';
  let numInputValue = '';

  const handleInput = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;

    if (inputId === 'text-input') {
      textInputValue = inputValue;
      console.log(`Input in #text-input is ${textInputValue}`);
    } else if (inputId === 'num-input') {
      numInputValue = inputValue;
      console.log(`Input in #num-input is ${numInputValue}`);
    }
  };
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input onChange={handleInput} id="text-input" type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input onChange={handleInput} id="num-input"  type={'number'} />
      <br/>
    </div>
  )
}


export default App;
