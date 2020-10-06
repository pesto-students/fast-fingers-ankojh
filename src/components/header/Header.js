import React, { useContext, useEffect } from 'react';
import './Header.css'
import logo from '../../assets/Icon awesome-keyboard.svg'
import gamepad from '../../assets/Icon awesome-gamepad.svg'
import person from '../../assets/Icon material-person.svg'
import { ResizeContext } from '../../contexts/resizeContext';
import IconButton from '../iconButton/IconButton';

const APP_NAME = 'FAST FINGERS';
const TAG_LINE = 'the ultimate typing game'


const Header = (props) => {

  const { isWideScreen } = useContext(ResizeContext);

  useEffect(() => {
    if (props.atHome) {

    }
    else {

    }
  }, [props])

  function getLevelText(level) {
    if (level < 1.5) {
      return 'EASY'
    }

    if (level >= 1.5 && level < 2) {
      return 'MEDIUM'
    }

    if (level >= 2) {
      return 'HARD'
    }
  }

  return (
    <div className={`App-Header ${props.name ? 'minimized' : ''}  ${isWideScreen ? 'wide-screen' : ''}`}>
      { props.name &&
        <>
          <IconButton />
          <IconButton />
        </>
      }
      <img className="header__logo" src={logo} alt={APP_NAME} />
      <span className="header__app-name">{APP_NAME}</span>
      <span className="header__tag-line">{TAG_LINE}</span>
    </div>
  );
};

export default Header;