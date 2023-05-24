import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { elapsedSecondsToGameTime } from "../utils/utils";
import PlayerList from "./player-list";
import { updateNBAScore } from "../store/nbaSlice";
import NBAData from "../models/nba-data";

const NBAScoreboard = (props) => {
  let data = useSelector((state) => state.nba.nba.data);

  const [HomeTeamActive, setHomeTeamActive] = useState(false);
  if (!data) {
    data = new NBAData();
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateNBAScore());
    const interval = setInterval(() => {
      dispatch(updateNBAScore());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="nba-scoreboard">
      <div className="matchup-header">
        <h2 className="okc">{data.away_team.last_name}</h2>
        <h2>@</h2>
        <h2 className="mia">{data.home_team.last_name}</h2>
      </div>
      <div className="quarters-box">
        <h2>{elapsedSecondsToGameTime(data.event_information.duration)}</h2>
        <table className="nba-quarters">
          <thead>
            <tr className="away-row">
              <td className="away-abbreviation-box">
                {data.away_team.abbreviation}
              </td>
              <td>{data.away_period_scores[0]}</td>
              <td>{data.away_period_scores[1]}</td>
              <td>{data.away_period_scores[2]}</td>
              <td>{data.away_period_scores[3]}</td>
              <td className="sum">{data.away_totals.points}</td>
            </tr>
            <tr className="home-row">
              <td className="home-abbreviation-box">
                {data.home_team.abbreviation}
              </td>
              <td>{data.home_period_scores[0]}</td>
              <td>{data.home_period_scores[1]}</td>
              <td>{data.home_period_scores[2]}</td>
              <td>{data.home_period_scores[3]}</td>
              <td className="sum">{data.home_totals.points}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="nba-players">
        <div className="tab-buttons">
          <button
            className={HomeTeamActive ? "inactive-tab" : "active-away-tab"}
            onClick={() => {
              setHomeTeamActive(false);
            }}
          >
            OKC
          </button>
          <button
            className={HomeTeamActive ? "active-home-tab" : "inactive-tab"}
            onClick={() => {
              setHomeTeamActive(true);
            }}
          >
            MIA
          </button>
        </div>
        <div className="players-list">
          <table className="nba-player-table">
            <thead>
              <tr
                className={
                  HomeTeamActive
                    ? "active-home-tab-header"
                    : "active-away-tab-header"
                }
              >
                <th>Player</th>
                <th>POS</th>
                <th>MIN</th>
                <th>PTS</th>
                <th>AST</th>
                <th>REB</th>
                <th>TO</th>
                <th>STL</th>
                <th>BLK</th>
                <th>FG</th>
                <th>3PT</th>
                <th>FT</th>
                <th>DREB</th>
                <th>OREB</th>
                <th>PF</th>
                <th>FG%</th>
                <th>3PT%</th>
                <th>FT%</th>
              </tr>
            </thead>

            <tbody className="nba-table-body">
              <PlayerList
                players={HomeTeamActive ? data.home_stats : data.away_stats}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NBAScoreboard;
