


function onInit() {
    getNations(renderNations);
    const elCloseModal = document.querySelector('.close');
    elCloseModal.addEventListener('click', () => {
        const elModal = document.querySelector('.modal');
        elModal.classList.add('hidden');
    })

}


function renderNations(nations) {
    const elNationsContainer = document.querySelector('.nations');
    let strHtmls = nations.map((nation) => {
        return `<button onclick="onOpenNation(value)" value="${nation.id}" class="nation">${nation.country}</button>`
    })
    elNationsContainer.innerHTML = strHtmls.join('');
}

function onOpenNation(id) {
    openNation(id, renderModal);
}


function renderModal(game) {
    const elModal = document.querySelector('.modal');
    const elModalDetails = document.querySelector('.func-result');
    const match = (Array.isArray(game))? game[0] : game;
   
    let strHtmls = `<h1>${match.home_team_country} - ${match.away_team_country}</h1>
    <h2>${match.home_team.goals} - ${match.away_team.goals}</h2>
    <h2>${match.venue}</h2>
    <h3>${match.datetime} </h3>`
    elModal.classList.remove('hidden');
    elModalDetails.innerHTML = strHtmls;
}