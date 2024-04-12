function fetchScores(){
    fetch('/api/scores')
        .then(response => response.json())
        .then(scores => displayScores(scores))
        .catch(err => console.error('Error fetching scores:', err));
}

function addScore(){
    const name = document.getElementById("name").value;
    const state = document.getElementById("state").value;
    const score = document.getElementById("score").value;
    const newScore = {name, state, score: parseInt(score, 10)};
}

function displayScores(){
    const scoresList = document.getElementById('scoresList');
    scoresList.innerHTML = "";
    scores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.name} from ${score.state}: ${score.score}`;
        scoresList.appendChild(li);
    })
}