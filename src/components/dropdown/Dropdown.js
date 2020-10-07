import React, { useEffect, useState } from 'react'
import './Dropdown.css'
import arrow from '../../assets/Icon ionic-md-arrow-dropdown.svg'


function Dropdown(props) {


  const [state, setState] = useState({
    selectedText: '',
    selectedIndex: -1,
    options: [],
    isOptionsOpen: false
  })


  useEffect(() => {
    setState({
      selectedText: props.default.text,
      selectedIndex: -1,
      options: props.options
    })
  }, [])



  function optionClicked(option, index) {
    setState({
      ...state,
      selectedText: option.text,
      selectedIndex: index,
      isOptionsOpen: false
    })

    props.onChange && props.onChange(option, index);

  }

  function toggleOptions(){
    setState({
      ...state,
      isOptionsOpen: !state.isOptionsOpen
    })
  }


  return (


    <div className="App-Dropdown">
      <div className="dropdown-main" onClick={toggleOptions}>
        <span>{state.selectedText}</span>
        <img src={arrow} alt="pp" />
      </div>
      <div className={`dropdown-options ${state.isOptionsOpen ? 'show' : ''}`}>
        <div className="dropdown-options__content">
        {
          state.options.map((option, index) =>
            <span key={index} className={`App-Dropdown__option ${index === state.selectedIndex ? 'selected' : ''}`} onClick={e => { optionClicked(option, index) }}>
              {option.text}
            </span>
          )
        }
        </div>
      </div>
    </div>

    // <select
    //   className="App-Dropdown"
    //   ref={ref}
    //   onChange={onChangeHandler}
    //   value={state.selectValue}
    // >
    //   {
    //     props.default && <option className="App-Dropdown__option" disabled hidden value={props.default.value}>
    //       {props.default.text}
    //     </option>
    //   }
    //   {
    //     props.options && props.options.map(option =>
    //       <option className="App-Dropdown__option" key={option.value} value={option.value}>
    //         {option.text}
    //       </option>
    //     )
    //   }
    // </select>
  )
}
export default Dropdown;