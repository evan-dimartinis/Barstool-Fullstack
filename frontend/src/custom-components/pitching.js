import React, { useState } from "react";

const Pitching = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pitching-container">
      <div className={`pitching-header ${props.team == "Seattle" ? 'away' : 'home'}`} onClick={() => setOpen(!open)}>
        <h2>{props.team} Pitching</h2>
        <p>{open ? '-' : '+'}</p>
      </div>
      <div className={`pitching-div ${open ? "divOpen" : "divClose"}`}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>IP</th>
              <th>RA</th>
              <th>PC</th>
              <th>K</th>
            </tr>
          </thead>
          <tbody>
            {props.stats.map((pitcher, index) => {
              return (
                <tr key={index}>
                  <td>{pitcher.last_name}</td>
                  <td>{pitcher.innings_pitched}</td>
                  <td>{pitcher.runs_allowed}</td>
                  <td>{pitcher.pitch_count}</td>
                  <td>{pitcher.strike_outs}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pitching;
