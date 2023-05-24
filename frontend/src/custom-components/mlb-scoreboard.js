import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MLBJson from "../models/MLB-data.json";
import { updateMLBScore } from "../store/mlbSlice";
import "./mlb.css";
import Pitching from "./pitching";
import Batting from "./batting";

const MLBScoreboard = (props) => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.mlb.mlb.data);
  if (!data) {
    data = MLBJson;
  }

  useEffect(() => {
    dispatch(updateMLBScore());
    const interval = setInterval(() => {
      dispatch(updateMLBScore());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="mlb-container">
      <div
        className="matchup-div"
      >
        <h2 className="title-text away-text">{data.away_team.last_name} </h2>
        <h2 className="title-text">@</h2>
        <h2 className="title-text home-text"> {data.home_team.last_name}</h2>
      </div>
      <div className="box-container">
        <h3>Final</h3>
        <table>
          <thead>
            <tr className="header-box-row">
              <th></th>
              {[...Array(9).keys()].map((num, index) => {
                return <th key={index}>{num + 1}</th>;
              })}
              <th className="sum">R</th>
              <th className="sum">H</th>
              <th className="sum">E</th>
            </tr>
          </thead>
          <tbody className="box-row">
            <tr>
              <td className="away team-name">{data.away_team.abbreviation}</td>
              {data.away_period_scores.map((score, index) => {
                return <td key={index}>{score}</td>;
              })}
              <td className="sum">
                {data.away_period_scores.reduce(
                  (partialSum, a) => partialSum + a,
                  0
                )}
              </td>
              <td className="sum">{data.away_batter_totals.hits}</td>
              <td className="sum">{data.away_errors}</td>
            </tr>
            <tr className="box-row">
              <td className="home team-name">{data.home_team.abbreviation}</td>
              {data.home_period_scores.map((score, index) => {
                return <td key={index}>{score}</td>;
              })}
              <td className="sum">
                {data.home_period_scores.reduce(
                  (partialSum, a) => partialSum + a,
                  0
                )}
              </td>
              <td className="sum">{data.home_batter_totals.hits}</td>
              <td className="sum">{data.home_errors}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="stats-container">
        <div className="home-stats">
          <Pitching
            team={data.away_team.first_name}
            stats={data.away_pitchers}
          />
          <Batting team={data.away_team.first_name} stats={data.away_batters} />
        </div>
        <div className="home-stats">
          <Pitching
            team={data.home_team.first_name}
            stats={data.home_pitchers}
          />
          <Batting team={data.home_team.first_name} stats={data.home_batters} />
        </div>
      </div>
    </div>
  );
};

export default MLBScoreboard;
