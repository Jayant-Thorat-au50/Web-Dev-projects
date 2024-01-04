const Base_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityInput = document.querySelector(".cityInput");
const Search = document.querySelector(".search");
const apiKey = "84bc25fa8f2359cffef80b3508c9ad19";


const nameOfTheCity = document.querySelector(".name");
const temp = document.querySelector(".temp");
const descriptionF = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const windSpeedF = document.querySelector(".windSpeed");

Search.addEventListener("click", async () => {
  let cityName = cityInput.value;
  let cityValue = cityInput.defaultValue;

  if (cityName !== cityValue) {
    
    try {
      
      let URL = `${Base_URL}${cityName}&appid=${apiKey}`;
      
      const response = await fetch(URL);
      const data = await response.json();
      
      temp.innerText = (data['main'].temp - 273.15);
      nameOfTheCity.innerText = data['name'];
      
      for (let values of data['weather']) {
        descriptionF.innerText = values['description'];
      } 
      humidity.innerText = data['main'].humidity;
      windSpeedF.innerText = data['wind'].speed;
    } catch (error) {
      console.log('please enter a valid cityName');
    }
   
    }  
});

cityInput.addEventListener("keydown", async (event) => {

  if (event.key === "Enter") {
    try {
      let cityName = cityInput.value;
      let URL = `${Base_URL}${cityName}&appid=${apiKey}`;

      const response = await fetch(URL);
      const data = await response.json();

      temp.innerText = data['main'].temp - 273.15;
      nameOfTheCity.innerText = data['name'];

      for (let values of data['weather']) {
        descriptionF.innerText = values['description'];
      }
      humidity.innerText = data['main'].humidity;
      windSpeedF.innerText = data['wind'].speed;
    } catch (err) {
      console.log("please enter a cityName");
    }
  }
});

window.addEventListener("load", async () => {
  let URL = `${Base_URL}bengaluru&appid=${apiKey}`;

  const response = await fetch(URL);
  const data = await response.json();

  temp.innerText = data['main'].temp - 273.15;
  nameOfTheCity.innerText = data['name'];

  for (let values of data['weather']) {
    descriptionF.innerText = values['description'];
  }
  humidity.innerText = data['main'].humidity;
  windSpeedF.innerText = data['wind'].speed;
});
