

var APIKey = "5865efb9befd52ec6fc44fd061b582bf";

var cities = [];

var topSectionCity = document.getElementById("city")


var TempEl = document.getElementById("temp")

var humidityEl = document.getElementById("humidity")

var uviEl = document.getElementById("uvIndex")

var windEl = document.getElementById("wind")

var TempEl2 = document.getElementById("temp2")

var humidityEl2 = document.getElementById("humidity2")

var windEl2 = document.getElementById("wind2")

var firstDay = document.getElementById("dayOne")

var TempEl3 = document.getElementById("temp3")

var humidityEl3 = document.getElementById("humidity3")

var windEl3 = document.getElementById("wind3")

var secondDay = document.getElementById("dayTwo")







function getVal() {

    const val = document.querySelector("input").value;
    return val;
}

function displaCitySearchList() {

    if (localStorage.getItem("city")) {
        cities = JSON.parse(localStorage.getItem("city"))
    }
    console.log(cities)


}


var searchInput = document.querySelector("input").value;




var searchBtn = document.getElementById("searchButton")

searchBtn.addEventListener("click", function () {


    getVal();
    var city = getVal();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey +"&units=imperial"

    fetch(queryURL)
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {


            var fiveDayUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKey}&units=imperial
            `
            fetch(fiveDayUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(fiveData){
                console.log(fiveData)
                var currentDate= moment.unix(data.dt).format("MM/DD/YYYY")
                var iconImage=document.createElement("img")
                iconImage.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
                topSectionCity.innerHTML=  data.name + " ("+ currentDate + ")"
                topSectionCity.appendChild(iconImage)

                
                TempEl.textContent= "Temp: " + data.main.temp + "°F"

                windEl.textContent = "Wind: " + fiveData.daily[0].wind_speed + " MPH"

                uviEl.textContent = "UV Index: " + fiveData.daily[0].uvi

                humidityEl.textContent = "Humidity: " + data.main.humidity + "%"

                localStorage.setItem("city", JSON.stringify(cities))

                var Day1Date = moment.unix(fiveData.daily[1].dt).format("MM/DD/YYYY")

                firstDay.innerHTML = Day1Date

                var iconImage1=document.createElement("img")

                iconImage1.setAttribute("src",`http://openweathermap.org/img/wn/${fiveData.daily[1].weather[0].icon}@2x.png`)
                
                iconOne.appendChild(iconImage1)

                

                TempEl2.textContent= "Temp: " + fiveData.daily[1].temp.day + "°F"

                windEl2.textContent = "Wind: " + fiveData.daily[1].wind_speed + " MPH"

                humidityEl2.textContent = "Humidity: " + fiveData.daily[1].humidity + "%"


                var Day2Date = moment.unix(fiveData.daily[2].dt).format("MM/DD/YYYY")

                secondDay.innerHTML = Day2Date

                var iconImage2=document.createElement("img")

                iconImage2.setAttribute("src",`http://openweathermap.org/img/wn/${fiveData.daily[1].weather[0].icon}@2x.png`)
                
                iconTwo.appendChild(iconImage2)

                

                TempEl3.textContent= "Temp: " + fiveData.daily[2].temp.day + "°F"

                windEl3.textContent = "Wind: " + fiveData.daily[2].wind_speed + " MPH"

                humidityEl3.textContent = "Humidity: " + fiveData.daily[2].humidity + "%"
                 

            })



        });

    console.log("clicked")
























})

displaCitySearchList();