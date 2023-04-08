import './App.css';
import play from './playo.png';
import pause from './pauseo.png';
import React from 'react';

function App(props) {

    var audioRef = React.createRef();
    

    function Play(event) {
        audioRef.current.loop = true;
        audioRef.current.play();
       
    }

    function Pause(event) {
        audioRef.current.pause();
    }

  return (
      <div className="App">
          <img className="button_bar" src={play} alt="play music" onClick={Play} />
          <img className="button_bar" src={pause} alt="pause music" onClick={Pause} />
          <audio ref={audioRef} src={props.src} loop>
          </audio>
    </div>
  );
}

export default App;
