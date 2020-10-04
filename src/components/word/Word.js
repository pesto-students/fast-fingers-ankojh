import React, { useEffect, useState } from 'react';
import './Word.css'

const Word = (props) => {

  const [state, setState] = useState([])


  useEffect(() => {
    compareWord(props.word, props.typedWord);
  }, [props])


  function compareWord(actualWord, typedWord) {
    if(!actualWord){
      return;
    }

    const wordInfo = []
    let isWordMatched = true;
    for (let [index,char] of actualWord.split('').entries()) {
      const charData = {
        char,
        isMatched: typedWord[index] === char,
        isNotFound: typedWord[index] === undefined
      }

      if(typedWord[index] !== char){
        isWordMatched = false;
      }


      wordInfo.push(charData)
    }

    if(isWordMatched){
      onMatch();
    }

    setState([...wordInfo])
  }

  function onMatch(){
    props.onMatch && props.onMatch();
  }


  return (
    <div className="App-Word">
      {
        state.map((char, index) => {
          let className = ''
          if(!char.isNotFound){
            className = char.isMatched === true ? 'matched' : 'unmatched'
          }
          return (<span className={className} key={index}>{char.char}</span>)
        })
      }

    </div>
  );
};

export default Word;