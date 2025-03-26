
// returnerer et tilfældigt tal ml. 1 og 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10)+1;
}

async function getWeather() {
    const url = 'https://65ddd3abdccfcd562f558d61.mockapi.io/api/v1/forecast/' + getRandomNumber();
    const weather = await axios.get(url); //tilføjet
    return weather.data; // rettet
}

async function writeWeatherToHtml() {
    const weather = await getWeather();
    console.log(weather);

// returnerer et tilfældigt tal ml. 1 og 10
    document.getElementById('weather').innerHTML = weather.sky


    // Sætte data ind fra weather på html siden...
    console.log(weather.rain_mm)
}
writeWeatherToHtml();
