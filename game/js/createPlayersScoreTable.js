const scoreTable = document.getElementById('score-table');
let table = document.createElement('table');

const sortPlayersByHighestScore = () => {
    players.sort(function(obj1, obj2) {
        return obj2.score - obj1.score;});
};

const setClassesToPlayerNameAndScoreField = () => {
    for (let i=1; i<players.length+1; i++) {
        document.getElementById(`id-${i}`).firstChild.setAttribute('class', 'player-name-on-table');
        document.getElementById(`id-${i}`).lastChild.setAttribute('class', 'player-score-on-table');
    }
};

const deleteScoreTable = () => {
    let myTable = document.getElementById('players-score-table');
    while (myTable.firstChild) {
        myTable.removeChild(myTable.firstChild);
    }
    let scoreTableArea = document.getElementById('score-table');
    while (scoreTableArea.firstChild) {
        scoreTableArea.removeChild(scoreTableArea.firstChild);
    }
};

const createPlayersScoreTable = () => {
    players = players.splice(0, 10);
    scoreTable.appendChild(table);
    scoreTable.firstChild.setAttribute('id', 'players-score-table');
    scoreTable.firstChild.setAttribute('class', 'players-score-table');
    for (let i=0; i<players.length+1; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
            let col = document.createElement('td');

            row.appendChild(col);
        }
        table.appendChild(row).setAttribute('id', 'id-' + i);
    }

    fillPlayersScoreTable();
    addClassToRow();
    setClassesToPlayerNameAndScoreField();
    addPlacesToPlayers();
    fillTableHeader();
};

const fillPlayersScoreTable = () => {
    for (let i=1; i<players.length+1; i++) {
        document.getElementById(`id-${i}`).firstChild.textContent = players[i-1].name;
        document.getElementById(`id-${i}`).lastChild.textContent = players[i-1].score;
    }
};
const addClassToRow = () => {
    for (let i=1; i<players.length+1; i++) {
        document.getElementById(`id-${i}`).setAttribute('class', 'row-with-player');
    }
};

const addPlacesToPlayers = () => {
    for (let i=1; i<players.length+1; i++) {
        let col = document.createElement('td');
        col.textContent = `${i}.`;
        col.setAttribute('class', 'players-place');
        document.getElementById('id-' + i).prepend(col);
    }
};

const fillTableHeader = () => {
    let col = document.createElement('td');
    document.getElementById('id-0').firstChild.textContent = "imię";
    document.getElementById('id-0').lastChild.textContent = "wynik";
    document.getElementById('id-0').prepend(col);
};


const addTitleBeforeScoreTable = () => {
    let scoreTable = document.getElementById('score-table');
    let faIconCreator = document.createElement('i');
    let addSpan = document.createElement('span');
    scoreTable.prepend(addSpan);
    scoreTable.firstChild.setAttribute('class', 'title-before-score-table');
    scoreTable.firstChild.textContent = " tabela wyników ";
    scoreTable.prepend(faIconCreator);
    scoreTable.firstChild.setAttribute('class', 'fa fa-trophy fa-2x ');
    scoreTable.firstChild.setAttribute('id', 'fa-trophy');


};