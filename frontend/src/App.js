import React, { useState } from "react";
import NBAScoreboard from "./custom-components/nba-scoreboard";
import "./App.css";
import MLBScoreboard from "./custom-components/mlb-scoreboard";

const App = (props) => {
  const [NBA, setNBA] = useState(false);
  return (
    <div className="app-container">
      <div className="header-div">
        <h1 className="SwitchBtn">Barstool Sports</h1>
      </div>
      <div className="games-div">
        <div onClick={() => setNBA(!NBA)} className={`tab ${NBA ? '' : 'tab-active'}`}>
          MLB
        </div>
        <div onClick={() => setNBA(!NBA)} className={`tab ${NBA ? 'tab-active' : ''}`}>
          NBA
        </div>
      </div>
      {NBA ? <NBAScoreboard /> : <MLBScoreboard />}
    </div>
  );
};

export default App;