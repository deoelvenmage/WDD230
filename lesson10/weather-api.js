const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "http://api.openweathermap.org/data/2.5/forecast?q=Fairbanks&units=Imperial&appid=6a4d06e769f51aa7a4f0a6138ef208c9"
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data.list[0]);
    currentTemp.textContent = `${data.list[0].main.temp}`;
    
    const iconurl = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const desc = data.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconurl);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  });