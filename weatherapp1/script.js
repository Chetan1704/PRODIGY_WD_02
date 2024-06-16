function vani(){
    VanillaTilt.init(document.querySelectorAll(".container"), {
		max: 5,
		speed: 800,
    scale: 1.02,
    glare: true,
    "max-glare": 0.5,
	});
}
vani();

const cityname = document.querySelector("#cityname");
const searchbtn = document.querySelector("button");
const namecity = document.querySelector(".namecity");
const temperature = document.querySelector(".temprature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weathericon = document.querySelector(".weathericon")
const weatherinfo =document.querySelector(".weatherinfo");

searchbtn.addEventListener("click",function(){
    const city = cityname.value;
    const apikey = "c9f82417f96b9975f0327cc5d49747f0";
    const apilink = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+apikey;
   async function checkweather(){
    const response = await fetch(apilink);
    const data = await response.json();
    console.log(data);
    namecity.innerHTML = data.name;
    temperature.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = "Humidity:" + data.main.humidity + "%";
    wind.innerHTML = "Wind speed:" + data.wind.speed +"km/h";
    
    if(data.weather[0].icon === "01d"){
        weathericon.src = "./01d.png"; 
    }else if(data.weather[0].icon == "02d"){
        weathericon.src = "./02d.png";
    }else if(data.weather[0].icon == "03d"){
        weathericon.src = "./03d.png";
    }else if(data.weather[0].icon == "04d"){
        weathericon.src = "./04d.png";
    }else if(data.weather[0].icon == "09d"){
        weathericon.src = "./09d.png";
    }else if(data.weather[0].icon == "10d"){
        weathericon.src = "./10d.png";
    }else if(data.weather[0].icon == "11d"){
        weathericon.src = "./11.png";
    }else if(data.weather[0].icon == "50d"){
        weathericon.src = "./50d.png";
    }else  if(data.weather[0].icon === "01n"){
        weathericon.src = "./01n.png"; 
    }else if(data.weather[0].icon == "02n"){
        weathericon.src = "./02n.png";
    }else if(data.weather[0].icon == "03n"){
        weathericon.src = "./03n.png";
    }else if(data.weather[0].icon == "04n"){
        weathericon.src = "./04n.png";
    }else if(data.weather[0].icon == "09n"){
        weathericon.src = "./09n.png";
    }else if(data.weather[0].icon == "10n"){
        weathericon.src = "./10n.png";
    }else if(data.weather[0].icon == "11n"){
        weathericon.src = "./11n.png";
    }else if(data.weather[0].icon == "50n"){
        weathericon.src = "./50n.png";
    }else
    weathericon.innerHTML = "Not Known";
   }
   checkweather();
})



