const scoreTable = document.getElementById('score-table');
let table = document.createElement('table');

function createPlayersScoreTable() {
    scoreTable.appendChild(table);
    let playersNumber = players.length;
    for (let i=0; i<playersNumber; i++) {
        let row = document.createElement('row');
        for (let j = 0; j < 2; j++) {
            let col = document.createElement('td');
            row.appendChild(col);
        }
        table.appendChild(row);
    }

}