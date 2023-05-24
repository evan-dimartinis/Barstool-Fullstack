const IncrementNBAData = (data) => {
    data.away_stats.forEach((player) => {
        if (player.is_starter) {
            player.minutes += 0.166
        }
    })
    data.home_stats.forEach((player) => {
        if (player.is_starter) {
            player.minutes += 0.166
        }
    })
    data.home_totals.minutes += 0.833
    data.home_totals.minutes += 0.833
    data.event_information.duration += 10
    const randomstat = Math.floor(Math.random() * 20)
    const randomplayer = Math.floor(Math.random() * 5)
    //only updating starters stats
    const homeaway = Math.round(Math.random())
    // 0 means we are adding a stat to the home team
    if (homeaway == 0) {
        if (randomstat == 0) {
            data.home_stats[randomplayer].personal_fouls += 1
            data.home_totals.personal_fouls += 1
        } else if (randomstat == 1) {
            data.home_stats[randomplayer].offensive_rebounds += 1
            data.home_totals.offensive_rebounds += 1
        } else if (randomstat == 2) {
            data.home_stats[randomplayer].defensive_rebounds += 1
            data.home_totals.defensive_rebounds += 1
        } else if (randomstat == 3) {
            data.home_stats[randomplayer].free_throws_made += 1
            data.home_stats[randomplayer].free_throws_attempted += 1
            data.home_totals.free_throws_made += 1
            data.home_totals.free_throws_attempted += 1
            data.home_stats[randomplayer].points += 1
            data = AddTeamPoints(data, 1, true)
        } else if (randomstat == 4) {
            data.home_stats[randomplayer].free_throws_attempted += 1
            data.home_totals.free_throws_attempted += 1
        } else if (randomstat == 5) {
            data.home_stats[randomplayer].three_point_field_goals_attempted += 1
            data.home_stats[randomplayer].three_point_field_goals_made += 1
            data.home_totals.three_point_field_goals_attempted += 1
            data.home_totals.three_point_field_goals_made += 1
            data.home_stats[randomplayer].points += 3
            data = AddTeamPoints(data, 3, true)
        } else if (randomstat == 6) {
            data.home_stats[randomplayer].three_point_field_goals_attempted += 1
            data.home_totals.three_point_field_goals_attempted += 1
        } else if (randomstat == 7) {
            data.home_stats[randomplayer].field_goals_attempted += 1
            data.home_stats[randomplayer].field_goals_made += 1
            data.home_totals.field_goals_attempted += 1
            data.home_totals.field_goals_made += 1
            data.home_stats[randomplayer].points += 2
            data = AddTeamPoints(data, 2, true)
        } else if (randomstat == 8) {
            data.home_stats[randomplayer].field_goals_attempted += 1
            data.home_totals.field_goals_attempted += 1
        } else if (randomstat == 9) {
            data.home_stats[randomplayer].blocks += 1
            data.home_totals.blocks += 1
        } else if (randomstat == 10) {
            data.home_stats[randomplayer].steals += 1
            data.home_totals.steals += 1
        } else if (randomstat == 11) {
            data.home_stats[randomplayer].turnovers += 1
            data.home_totals.turnovers += 1
        } else if (randomstat == 12) {
            data.home_stats[randomplayer].assists += 1
            data.home_totals.assists += 1
        } else {
            data.home_stats[randomplayer].field_goals_attempted += 1
            data.home_stats[randomplayer].field_goals_made += 1
            data.home_totals.field_goals_attempted += 1
            data.home_totals.field_goals_made += 1
            data.home_stats[randomplayer].points += 2
            data = AddTeamPoints(data, 2, true)
        }
    } else {
        if (randomstat == 0) {
            data.away_stats[randomplayer].personal_fouls += 1
            data.away_totals.personal_fouls += 1
        } else if (randomstat == 1) {
            data.away_stats[randomplayer].offensive_rebounds += 1
            data.away_totals.offensive_rebounds += 1
        } else if (randomstat == 2) {
            data.away_stats[randomplayer].defensive_rebounds += 1
            data.away_totals.defensive_rebounds += 1
        } else if (randomstat == 3) {
            data.away_stats[randomplayer].free_throws_made += 1
            data.away_stats[randomplayer].free_throws_attempted += 1
            data.away_totals.free_throws_made += 1
            data.away_totals.free_throws_attempted += 1
            data.away_stats[randomplayer].points += 1
            AddTeamPoints(data, 1, false)
        } else if (randomstat == 4) {
            data.away_stats[randomplayer].free_throws_attempted += 1
            data.away_totals.free_throws_attempted += 1
        } else if (randomstat == 5) {
            data.away_stats[randomplayer].three_point_field_goals_attempted += 1
            data.away_stats[randomplayer].three_point_field_goals_made += 1
            data.away_totals.three_point_field_goals_attempted += 1
            data.away_totals.three_point_field_goals_made += 1
            data.away_stats[randomplayer].points += 3
            data = AddTeamPoints(data, 3, false)
        } else if (randomstat == 6) {
            data.away_stats[randomplayer].three_point_field_goals_attempted += 1
            data.away_totals.three_point_field_goals_attempted += 1
        } else if (randomstat == 7) {
            data.away_stats[randomplayer].field_goals_attempted += 1
            data.away_stats[randomplayer].field_goals_made += 1
            data.away_totals.field_goals_attempted += 1
            data.away_totals.field_goals_made += 1
            data.away_stats[randomplayer].points += 2
            data = AddTeamPoints(data, 2, false)
        } else if (randomstat == 8) {
            data.away_stats[randomplayer].field_goals_attempted += 1
            data.away_totals.field_goals_attempted += 1
        } else if (randomstat == 9) {
            data.away_stats[randomplayer].blocks += 1
            data.away_totals.blocks += 1
        } else if (randomstat == 10) {
            data.away_stats[randomplayer].steals += 1
            data.away_totals.steals += 1
        } else if (randomstat == 11) {
            data.away_stats[randomplayer].turnovers += 1
            data.away_totals.turnovers += 1
        } else if (randomstat == 12) {
            data.away_stats[randomplayer].assists += 1
            data.away_totals.assists += 1
        } else {
            data.away_stats[randomplayer].field_goals_attempted += 1
            data.away_stats[randomplayer].field_goals_made += 1
            data.away_totals.field_goals_attempted += 1
            data.away_totals.field_goals_made += 1
            data.away_stats[randomplayer].points += 2
            data = AddTeamPoints(data, 2, false)
        }
    }
    return data
}

const AddTeamPoints = (data, numPoints, hometeam) => {
    if (hometeam) {
        data.home_totals.points += numPoints
        if (data.event_information.duration < 720) {
            data.home_period_scores[0] += numPoints
        } else if (data.event_information.duration >= 720 && data.event_information.duration < 1440) {
            data.home_period_scores[1] += numPoints
        } else if (data.event_information.duration >= 1440 && data.event_information.duration < 2160) {
            data.home_period_scores[2] += numPoints
        } else {
            data.home_period_scores[3] += numPoints
        }
    } else {
        data.away_totals.points += numPoints
        if (data.event_information.duration < 720) {
            data.away_period_scores[0] += numPoints
        } else if (data.event_information.duration >= 720 && data.event_information.duration < 1440) {
            data.away_period_scores[1] += numPoints
        } else if (data.event_information.duration >= 1440 && data.event_information.duration < 2160) {
            data.away_period_scores[2] += numPoints
        } else {
            data.away_period_scores[3] += numPoints
        }
    }
    return data
}

module.exports = IncrementNBAData