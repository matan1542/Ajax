function onInit() {
    document.querySelector('input[name=symbol]').addEventListener('input', onAns)
}


function onAns(ev) {
    // console.log('ev', ev);
    // const symbol = document.querySelector('input[name=symbol]').value.toUpperCase()

    const str = ev.target.value.toUpperCase()
    if (!str) return
        // document.querySelector('.loading-container').classList.remove('hidden')
    ans(str, renderModal);
    console.log(ans(str, renderModal));
}



function renderModal(ans) {
    const elModal = document.querySelector('.modal');


    if (ans.answer === 'yes') {
        getJoke(renderJoke);
        elModal.classList.remove('hidden');
    } else {
        getDog(renderDog);
    }
    document.querySelector('.close').addEventListener('click', () => {
        elModal.classList.add('hidden');
    })
}


function renderJoke(joke) {
    const elModalDetails = document.querySelector('.func-result');
    let strHtml = ` <h1>The answer is Yess!!</h1>
                    <p>${joke.value.joke}</p> `
    elModalDetails.innerHTML = strHtml;
}

function renderDog(dog) {
    const elModalDetails = document.querySelector('.func-result');
    let strHtml = `<h1>The answer is No</h1>
                  <img onload="renderImg()" src="${dog.message}" >`
    elModalDetails.innerHTML = strHtml;
}

function renderImg() {
    const elModal = document.querySelector('.modal');
    elModal.classList.remove('hidden');
}