
const youtube = document.getElementById('getYoutube');
const android = document.getElementById('getAndroid');
const ios = document.getElementById('getIOS');

youtube.addEventListener('click', goYoutube);
function goYoutube() {
    // Redirect to download vokemons by windows
    location.href = "https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q";
}

android.addEventListener('click', downloadAndroid);
function downloadAndroid() {
    // Redirect to download vokemons by android
    window.location.href = "https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=en&gl=US";
}

ios.addEventListener('click', downloadIOS);
function downloadIOS() {
    // Redirect to download vokemons by ios
    window.location.href = "https://apps.apple.com/us/app/pok%C3%A9mon-go/id1094591345";
}