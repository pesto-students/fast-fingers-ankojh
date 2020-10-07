import React, { useRef } from 'react'
import './Input.css'

function Input(props) {
  const inputRef = useRef();

  function onKeyUpHandler() {
    const currentValue = inputRef.current.value
    props.onKeyUp && props.onKeyUp(currentValue);
  }

  return (
    <input
      className="App-Input"
      ref={inputRef}
      placeholder={props.placeholder}
      onKeyUp={onKeyUpHandler}
      type="text"
      style={props.style}
      autoFocus
       />
  )
}


export default Input;
