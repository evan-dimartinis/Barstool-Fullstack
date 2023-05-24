import React from "react";

const PlayerList = (props) => {

  return props.players.map((player, index) => (
    <tr key={index} className="nba-player-row">
      <td>{player.display_name}</td>
      <td>{player.position}</td>
      <td>{Math.round(player.minutes)}</td>
      <td>{player.points}</td>
      <td>{player.assists}</td>
      <td>{player.defensive_rebounds + player.offensive_rebounds}</td>
      <td>{player.turnovers}</td>
      <td>{player.steals}</td>
      <td>{player.blocks}</td>
      <td>
        {player.field_goals_made}/{player.field_goals_attempted}
      </td>
      <td>
        {player.three_point_field_goals_made}/
        {player.three_point_field_goals_attempted}
      </td>
      <td>
        {player.free_throws_made}/{player.free_throws_attempted}
      </td>
      <td>{player.defensive_rebounds}</td>
      <td>{player.offensive_rebounds}</td>
      <td>{player.personal_fouls}</td>
      <td>{player.field_goal_percentage}</td>
      <td>{player.three_point_percentage}</td>
      <td>{player.free_throw_percentage}</td>
    </tr>
  ))
}

export default PlayerList;