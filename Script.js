// script.js

let scoreTeam1 = 0;
let scoreTeam2 = 0;

function incrementScore(team) {
    if (team === 'team1') {
        scoreTeam1++;
        document.getElementById('scoreTeam1').textContent = scoreTeam1;
    } else if (team === 'team2') {
        scoreTeam2++;
        document.getElementById('scoreTeam2').textContent = scoreTeam2;
    }
}

function resetGame() {
    scoreTeam1 = 0;
    scoreTeam2 = 0;
    document.getElementById('scoreTeam1').textContent = scoreTeam1;
    document.getElementById('scoreTeam2').textContent = scoreTeam2;
}
