

var APIKey = "5865efb9befd52ec6fc44fd061b582bf";

var cities = [];

var topSectionCity = document.getElementById("city")


var TempEl = document.getElementById("temp")

var humidityEl = document.getElementById("humidity")

var uviEl = document.getElementById("uvIndex")

var windEl = document.getElementById("wind")

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
                topSectionCity.innerHTML=  data.name + " "+ currentDate
                topSectionCity.appendChild(iconImage)

                
                TempEl.textContent= "Temperature: " + data.main.temp + "°F"

                windEl.textContent = "Wind: " + fiveData.daily[0].wind_speed + " mph"

                uviEl.textContent = "UVI: " + fiveData.daily[0].uvi

                humidityEl.textContent = "Humidity: " + data.main.humidity + "%"

                localStorage.setItem("city", JSON.stringify(cities))
                 

            })



        });

    console.log("clicked")
























})

displaCitySearchList();