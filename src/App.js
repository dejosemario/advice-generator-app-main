import { useState } from "react";
import "./App.css";
import PatternDivider from "./pattern-divider-desktop.svg";
import IconDice from "./icon-dice.svg";
import PatternDividerSmall from "./pattern-divider-mobile.svg"

function App() {
  const [content, setContent] = useState("Click on the buton for your daily advice!");
  const [contCount, setContCount] = useState("177");

  async function handleClick(e){
    e.preventDefault();
    const url = "https://api.adviceslip.com/advice";
    const res = await fetch(url);
    const data = await res.json();
    setContent(data.slip.advice);
    setContCount(data.slip.id);
  }

  const pattern = window.screen.width < 374 ? PatternDividerSmall : PatternDivider
  
  return (
    <div className="App">
      <div className="Header">ADVICE #{contCount}</div>
      <div className="Content">
        <p>
          "{content}"
        </p>
      </div>
      <div className="Divider">
        {/* adding svg file */}
        <img src={pattern} alt="Divider" />
      </div>
      <div className="Btn__Dice" >
        <img src={IconDice} alt="Icon Click" onClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
