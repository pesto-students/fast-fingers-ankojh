
import React from 'react';
import './IconButton.css'

const IconButton = (props) => {

  function clickHandler() {
    !props.disabled && props.onClick && props.onClick();
  }

  return (
    <div
      onClick={clickHandler}
      disabled={props.disabled}
      className="App-Icon-Button"
      title={props.text}
    >

      {
        props.icon && <img
          src={props.icon}
          alt={props.text}
          height={props.iconHeight}
        />
      }

      <span
        style={{
          fontSize: props.fontSize,
          fontFamily: props.fontFamily
        }}>
        {props.text}
      </span>
    </div>
  );
};

export default IconButton;