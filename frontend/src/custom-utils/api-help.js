import NBAData from "../models/nba-data"

export const formatNBAData = (response) => {
    let nba = new NBAData

    nba.league = response.league
    nba.away_team
}