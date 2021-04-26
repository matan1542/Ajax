const KEY = 'NATIONS';
const KEYGAMES = 'GAMES'
let gGame = {}
let gNations = loadFromStorage(KEY);
function getNations(onSuccess) {
    if (gNations) {
        onSuccess(gNations);
        return
    }
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        onSuccess(data);
        gNations = data;
        saveToStorage(KEY, data);
    }
    xhr.open("GET", "http://worldcup.sfg.io/teams", true);
    xhr.send();
}

function openNation(id, onSuccess) {
    const nation = gNations.filter((nation) => nation.id === +id);
    getNation(nation[0].fifa_code, id, onSuccess);
}

function getNation(fifaCode, id, onSuccess) {
    gGame = loadFromStorage(KEYGAMES);
    if (gGame && gGame[id]) {
        console.log('skipped')
        onSuccess(gGame[id])
        return
    }
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        var data = JSON.parse(xhr.responseText);
        if (gGame) {
            if (!gGame[id]) {
                gGame[id] = {};
                gGame[id] = data;

            }
            onSuccess(gGame[id])
            saveToStorage(KEYGAMES, gGame);
        } else {
           const idGame = {id: data}
            saveToStorage(KEYGAMES, idGame);
        }
    }
    xhr.open("GET", `http://worldcup.sfg.io/matches/country?fifa_code=${fifaCode}`, true);
    xhr.send();
}