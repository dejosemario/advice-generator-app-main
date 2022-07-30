import { useState } from "react";
import "./App.css";
import PatternDivider from "./pattern-divider-desktop.svg";
import IconDice from "./icon-dice.svg";

function App() {
  const [content, setContent] = useState("");
  
  return (
    <div className="App">
      <div className="Header">Advice #177</div>
      <div className="Content">
        <p>
          {content}
        </p>
      </div>
      <div className="Divider">
        {/* adding svg file */}
        <img src={PatternDivider} alt="Divider" width="340px" />
      </div>
      <div className="Btn__Dice">
        <img src={IconDice} alt="Icon Click" />
      </div>
    </div>
  );
}

export default App;
