const scoreTable = document.getElementById('score-table');
let table = document.createElement('table');
let playersNumber = players.length;

// let cellText = document.createTextNode();
const setClassesToPlayerNameAndScoreField = () => {
    for (let i=1; i<playersNumber+1; i++) {
        document.getElementById(`id-${i}`).firstChild.setAttribute('class', 'player-name-on-table');
        document.getElementById(`id-${i}`).lastChild.setAttribute('class', 'player-score-on-table');
    }
};

function createPlayersScoreTable() {
    scoreTable.appendChild(table);
    for (let i=0; i<playersNumber+1; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
            let col = document.createElement('td');

            row.appendChild(col);
        }
        table.appendChild(row).setAttribute('id', 'id-' + i);
    }
    fillPlayersScoreTable();
    setClassesToPlayerNameAndScoreField();
    addPlacesToPlayers();
    fillTableHeader();
}

const fillPlayersScoreTable = () => {
    for (let i=1; i<playersNumber+1; i++) {
        document.getElementById(`id-${i}`).firstChild.textContent = players[i-1].name;
        document.getElementById(`id-${i}`).lastChild.textContent = players[i-1].score;
    }

};

const addPlacesToPlayers = () => {
    for (let i=1; i<playersNumber+1; i++) {
        let col = document.createElement('td');
        col.textContent = `${i}.`;
        document.getElementById('id-' + i).prepend(col);
    }
};


const fillTableHeader = () => {
    let col = document.createElement('td');
    document.getElementById('id-0').firstChild.textContent = "imię";
    document.getElementById('id-0').lastChild.textContent = "wynik";
    document.getElementById('id-0').prepend(col);
};
createPlayersScoreTable();


