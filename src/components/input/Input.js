import React, { useRef } from 'react'
import './Input.css'

function Input(props) {
  const inputRef = useRef();

  function onKeyUpHandler() {
    const currentValue = inputRef.current.value
    props.onKeyUp && props.onKeyUp(currentValue);
  }

  function onFocusHandler(event){
    props.onFocus && props.onFocus();
  }

  function onBlurHandler(event){
    props.onBlur && props.onBlur();
  }

  return (
    <div className="App-Input">
    <input
      className="App-Input__field"
      ref={inputRef}
      onKeyUp={onKeyUpHandler}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      type="text" />
    <span className="App-Input__error">error</span>
    </div>
  )
}


export default Input;
