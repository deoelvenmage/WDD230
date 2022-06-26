const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const conditions = document.querySelector('#conditions');
const windSpeed = document.querySelector('#wind-speed');

const url = "https://api.openweathermap.org/data/2.5/forecast?q=Rexburg&units=Imperial&appid=6a4d06e769f51aa7a4f0a6138ef208c9"
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.list[0]);
    currentTemp.textContent = Math.round(data.list[0].main.temp);
    
    const iconurl = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    let desc = data.list[0].weather[0].description.split(" ");
    for (let i = 0; i < desc.length; i++) {
        desc[i] = desc[i].charAt(0).toUpperCase() + desc[i].slice(1);
    }
    desc = desc.join(" ");

    weatherIcon.setAttribute('src', iconurl);
    weatherIcon.setAttribute('alt', desc);
    conditions.textContent = desc;

    const dataspeed = data.list[0].wind.speed
    windSpeed.textContent = dataspeed.toFixed(1)


    const temp = parseFloat(document.querySelector("#temperature").textContent)
    const speed = parseFloat(document.querySelector("#wind-speed").textContent)

    const windchill = document.querySelector("#wind-chill")

    if (temp <= 50 && speed > 3) {
        const wc = Math.round(35.74 + .6215*temp - 35.75*(speed ** .16) + .4275*temp*(speed**.16))
        windchill.textContent = `-${wc} °F`
    }
    else {
        windchill.textContent = "N/A"
    }
  });

