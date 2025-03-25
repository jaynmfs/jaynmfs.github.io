console.log('Welcome to StepNone.')

var starYear = 2019;
var startYearTimeout = 1000;
var nicknameColor = 'red'
var nicknameTimeout = 2000;

function attachExperienceYear(startYear = 2020) {
    let currentYear = new Date().getFullYear();
    let experienceYear = currentYear - startYear;
    let expYearSpans = document.getElementsByClassName('exp_year');

    if (!expYearSpans.length) {
        return
    }

    for (let i = 0; i < expYearSpans.length; i++) {
        expYearSpans[i].textContent = '...' ;

        setTimeout(() => {
            expYearSpans[i].textContent = experienceYear;
        }, startYearTimeout);
    }
}

attachExperienceYear(starYear);

function changeNicknameColor(color = 'red') {
    let nickname = document.getElementById('nickname');

    if (nickname) {
        setTimeout(() => {
            nickname.style.color = color;
        }, nicknameTimeout);
    }
}

changeNicknameColor();