'use strict'

function getAns(onSuccess) {
    $.get('https://yesno.wtf/api', onSuccess)
}

function getJoke(onSuccess){
    $.get('http://api.icndb.com/jokes/random', onSuccess)
}

function getDog(onSuccess){
    $.get('https://dog.ceo/api/breeds/image/random', onSuccess)
}

function ans(str, onSuccess) {
    if (str.length >= 4 && str.slice(-1) === '?') {
        getAns(onSuccess);
    }
}