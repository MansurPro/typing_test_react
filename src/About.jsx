import {React, useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

const About = () => {
  const [count, setCount] = useState(0);
  const [sentence, setSentence] = useState(['word', 'where', 'system', 'public', 'high', 'low', 'sentence']);
  const [colorWord, setColorWord] = useState(['text-light', 'text-light', 'text-light', 'text-light', 'text-light', 'text-light', 'text-light']);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [calc, setCalc] = useState(0);
  const [seccess, setSeccess] = useState(0);
  const [wordCount, setWordCount] = useState("No");


  const handleChange = event => {
    if (calc === 0) {
        console.log("Stop wathc staring");
        start();
        setCalc(calc + 1);
    }
    if (event.target.value[event.target.value.length - 1] === ' ' && count < sentence.length) {
        console.log(event.target.value)
        if (sentence[count] === event.target.value.slice(0, -1)) {
            console.log("You got it right");
            // sentence[count] = "right";
            colorWord[count] = "text-success";
            setSeccess(seccess + 1);
        } else {
            console.log("You got it wrong");
            // sentence[count] = "wrong";
            colorWord[count] = "text-danger";
        }
        event.target.value = "";
        setCount(count + 1);
        if (!colorWord.includes("text-light")) {
            pause();
            console.log("Your wmp: ");
            console.log(word_count());
            setWordCount(word_count());
        }
    }
  };


  const word_count = () => {
    return seccess * 60 / seconds;
  }

  const show = () => {
    // console.log(isRunning);
    var compl_sentence = [];
    sentence.forEach((elem, index) => {
        compl_sentence.push(<span className={colorWord[index]}>{`${elem} `}</span>);
    })
    return compl_sentence
  }


  return (
    <section className='main-body'>
        <h2>Typing Speed Test</h2>
        <p id='showSentence'>
            {show()}
        </p>
        <div className='typing_section d-flex flex-colum justify-content-center'>
                <label htmlFor="textare"></label>
                <textarea name="textare"
                    id="textare" 
                    cols="50" 
                    rows="10"
                    onChange={handleChange}
                    >
                </textarea>
                <br />
        </div>
    
        <p id='score' className='text-light'>{wordCount} wpm</p>
    </section>
  )
}

export default About