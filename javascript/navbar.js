// redirect page in navbar
// initialize first

const pokemonPage = document.getElementById('pokemonButton');
const newsPage = document.getElementById('newsButton');
const tournamentPage = document.getElementById('tournamentButton');
const loginPage = document.getElementById('loginButton');

// redirect page in section one and  two
// initialize clicker
pokemonPage.addEventListener('click', redirectPokemon);
newsPage.addEventListener('click', redirectNews);
tournamentPage.addEventListener('click', redirectTour);
loginPage.addEventListener('click', redirectLogin);

function redirectPokemon() {
    // Redirect to pokemon page
    window.location.href = '../html/pokemon.html';
}
function redirectNews() {
    // Redirect to news page
    window.location.href = '../html/news.html';
}
function redirectTour() {
    // Redirect to tournament page
    window.location.href = '../html/tournament.html';
}
function redirectLogin() {
    // Redirect to profile page
    window.location.href = '../html/login.html';
}