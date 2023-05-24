export const elapsedSecondsToGameTime = (elapsedSeconds) => {
    let quarter;
    switch (true) {
        case elapsedSeconds <= 0:
            quarter = "Pre-game";
            break;
        case elapsedSeconds <= 720:
            quarter = "1Q";
            break;
        case elapsedSeconds <= 1440:
            quarter = "2Q";
            break;
        case elapsedSeconds <= 2160:
            quarter = "3Q";
            break;
        case elapsedSeconds <= 3600:
            quarter = "4Q";
            break;
        case elapsedSeconds > 2880:
            quarter = "Final";
            break;
        default:
            quarter = "Pre-game";
            break;
    }
    let secondsIntoQuarter = elapsedSeconds % 900;
    let minutes = 12 - (Math.ceil(secondsIntoQuarter / 60));
    let seconds = 60 - (secondsIntoQuarter % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds
        } ${quarter}`
};