function getWeather(){
    const apiKey = {
        key: "064cc50fe94d9102e143385e5f6beb61",
        url: "https://api.openweathermap.org/data/2.5/",
    };    

    const towns = ["Sofia", "Sliven", "Plovdiv"];

    for (let i = 0; i < towns.length; i++){
        fetch(`${apiKey.url}weather?q=${towns[i]}&units=metric&APPID=${apiKey.key}`)
        .then(weather =>{
            return weather.json();
        })
        .then(displayOutput);
    }
}

function displayOutput(weather){
    const current = document.querySelectorAll(`#${(weather.name.toLowerCase())}Weather .weatherElements li`);
    current[0].innerHTML = `<div>${weather.name}</div>`;
    current[1].innerHTML = `<div>${weather.sys.country}</div>`;
    current[2].innerHTML = `<div>${Math.round(weather.main.temp)}°C</div>`;
    if(weather.weather[0].main === "Clouds"){
        current[3].innerHTML = `<img src="./img/cloud_weather.jpg" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Rain"){
        current[3].innerHTML = `<img src="./img/rain_weather.png" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Sunny"){
        current[3].innerHTML = `<img src="./img/sun_weather.png" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Snow"){
        current[3].innerHTML = `<img src="./img/snow_weather.png" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Clear"){
        current[3].innerHTML = `<img src="./img/sun_weather.png" style="width: 50px; height=40px;">`;
    }
    
    else if(weather.weather[0].main === "Mist"){
        current[3].innerHTML = `<img src="./img/mist_weather.jpg" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Haze"){
        current[3].innerHTML = `<img src="./img/mist_weather.jpg" style="width: 50px; height=40px;">`;
    }
    current[4].innerHTML = `<div>${weather.weather[0].main}</div>`;

}

setInterval(getWeather, 5000);