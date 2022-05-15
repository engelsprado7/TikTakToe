import { useState } from "react";
import "./App.css";
import Mode from "./Components/Mode/Mode";
import TikTakToe from "./Components/Start/TikTakToe";

function App() {
  const [mode, setMode] = useState(false)
  return (
    <div className="App">
       <h1>TIK TAK TOE!</h1>
       <section className="main-section">
       <Mode onClick={setMode} ></Mode>
       <TikTakToe mode={mode}></TikTakToe>
       </section>
    </div>
  );
}

export default App;
