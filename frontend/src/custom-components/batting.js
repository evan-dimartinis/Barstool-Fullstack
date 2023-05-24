import React, { useState } from "react";
import './mlb.css'

const Batting = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pitching-container">
      <div className={`pitching-header ${props.team == "Seattle" ? 'away' : 'home'}`} onClick={() => setOpen(!open)}>
        <h2>{props.team} Batting</h2>
        <p>{open ? "-" : "+"}</p>
      </div>
      <div className={`pitching-div ${open ? "battingOpen" : "divClose"}`}>
        <table>
          <thead className="batting-header-row">
            <tr className="header-row">
              <th>Name</th>
              <th>AB</th>
              <th>H</th>
              <th>RBI</th>
              <th>K</th>
            </tr>
          </thead>
          <tbody>
            {props.stats.map((batter, index) => {
              return (
                <tr key={index}>
                  <td>{batter.last_name}</td>
                  <td>{batter.at_bats}</td>
                  <td>{batter.hits}</td>
                  <td>{batter.rbi}</td>
                  <td>{batter.strike_outs}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Batting;
