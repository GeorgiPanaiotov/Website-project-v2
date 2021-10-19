function getWeather(){
    const apiKey = {
        key: "064cc50fe94d9102e143385e5f6beb61",
        url: "https://api.openweathermap.org/data/2.5/",
    };    

    const searchInput = document.getElementById("searchField").value;

    fetch(`${apiKey.url}weather?q=${searchInput}&units=metric&APPID=${apiKey.key}`)
    .then(weather =>{
        return weather.json();
    })
    .then(displayOutput);
    
}

function displayOutput(weather){
    console.log(weather);
    document.getElementById("city").innerText = `${weather.name}`;
    document.getElementById("country").innerText = `${weather.sys.country}`;
    document.getElementById("temperature").innerText = `${Math.round(weather.main.temp)}°C`;
    document.getElementById("weather").innerText = `${weather.weather[0].main}`;

    const position = document.getElementById("weatherPicture");
    if(weather.weather[0].main === "Clouds"){
        position.innerHTML = `<img src="./img/cloud_weather.jpg" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Rain"){
        position.innerHTML = `<img src="./img/rain_weather.jpg" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Sunny"){
        position.innerHTML = `<img src="./img/sun_weather.png" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Snow"){
        position.innerHTML = `<img src="./img/snow_weather.jpg" style="width: 50px; height=40px;">`;
    }

    else if(weather.weather[0].main === "Clear"){
        position.innerHTML = `<img src="./img/sun_weather.png" style="width: 50px; height=40px;">`;
    }
    
    else if(weather.weather[0].main === "Mist"){
        position.innerHTML = `<img src="./img/mist_weather.jpg" style="width: 50px; height=40px;">`;
    }
}


