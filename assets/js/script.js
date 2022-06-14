

var APIKey = "5865efb9befd52ec6fc44fd061b582bf";

var cities = [];

var topSectionCity = document.getElementById("city")


var TempEl = document.getElementById("temp")

var humidityEl = document.getElementById("humidity")

var uviEl = document.getElementById("uvIndex")

var uviNumber = document.getElementById("uvNumber")

var windEl = document.getElementById("wind")

var TempEl2 = document.getElementById("temp2")

var humidityEl2 = document.getElementById("humidity2")

var windEl2 = document.getElementById("wind2")

var firstDay = document.getElementById("dayOne")

var TempEl3 = document.getElementById("temp3")

var humidityEl3 = document.getElementById("humidity3")

var windEl3 = document.getElementById("wind3")

var secondDay = document.getElementById("dayTwo")

var iconOne = document.getElementById("iconOne")

var iconTwo = document.getElementById("iconTwo")

var TempEl4 = document.getElementById("temp4")

var humidityEl4 = document.getElementById("humidity4")

var windEl4 = document.getElementById("wind4")

var thirdDay = document.getElementById("dayThree")

var iconThree = document.getElementById("iconThree")



var TempEl5 = document.getElementById("temp5")

var humidityEl5 = document.getElementById("humidity5")

var windEl5 = document.getElementById("wind5")

var fourthDay = document.getElementById("dayFour")

var iconFour = document.getElementById("iconFour")



var TempEl6 = document.getElementById("temp6")

var humidityEl6 = document.getElementById("humidity6")

var windEl6 = document.getElementById("wind6")

var fifthDay = document.getElementById("dayFive")

var iconFive = document.getElementById("iconFive")


var asideList = document.getElementById("asideList")


var asideLiELOne = document.getElementById("asideOne")







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

               

                uviEl.textContent = "UV Index: "

                uviNumber.textContent = fiveData.daily[0].uvi

                

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

                iconImage2.setAttribute("src",`http://openweathermap.org/img/wn/${fiveData.daily[2].weather[0].icon}@2x.png`)
                
                iconTwo.appendChild(iconImage2)

                

                TempEl3.textContent= "Temp: " + fiveData.daily[2].temp.day + "°F"

                windEl3.textContent = "Wind: " + fiveData.daily[2].wind_speed + " MPH"

                humidityEl3.textContent = "Humidity: " + fiveData.daily[2].humidity + "%"







                var Day3Date = moment.unix(fiveData.daily[3].dt).format("MM/DD/YYYY")

                thirdDay.innerHTML = Day3Date

                var iconImage3=document.createElement("img")

                iconImage3.setAttribute("src",`http://openweathermap.org/img/wn/${fiveData.daily[3].weather[0].icon}@2x.png`)
                
                iconThree.appendChild(iconImage3)

                

                TempEl4.textContent= "Temp: " + fiveData.daily[3].temp.day + "°F"

                windEl4.textContent = "Wind: " + fiveData.daily[3].wind_speed + " MPH"

                humidityEl4.textContent = "Humidity: " + fiveData.daily[3].humidity + "%"






                var Day4Date = moment.unix(fiveData.daily[4].dt).format("MM/DD/YYYY")

                fourthDay.innerHTML = Day4Date

                var iconImage4=document.createElement("img")

                iconImage4.setAttribute("src",`http://openweathermap.org/img/wn/${fiveData.daily[4].weather[0].icon}@2x.png`)
                
                iconFour.appendChild(iconImage4)

                

                TempEl5.textContent= "Temp: " + fiveData.daily[4].temp.day + "°F"

                windEl5.textContent = "Wind: " + fiveData.daily[4].wind_speed + " MPH"

                humidityEl5.textContent = "Humidity: " + fiveData.daily[4].humidity + "%"






                var Day5Date = moment.unix(fiveData.daily[5].dt).format("MM/DD/YYYY")

                fifthDay.innerHTML = Day5Date

                var iconImage5=document.createElement("img")

                iconImage5.setAttribute("src",`http://openweathermap.org/img/wn/${fiveData.daily[5].weather[0].icon}@2x.png`)
                
                iconFive.appendChild(iconImage5)

                

                TempEl6.textContent= "Temp: " + fiveData.daily[5].temp.day + "°F"

                windEl6.textContent = "Wind: " + fiveData.daily[5].wind_speed + " MPH"

                humidityEl6.textContent = "Humidity: " + fiveData.daily[5].humidity + "%"


                if (fiveData.daily[0].uvi<2) {

                    uviNumber.classList.add("favorable")
                }
                else if (fiveData.daily[0].uvi<7) {
                    uviNumber.classList.add("moderate")
                }
                else {

                    uviNumber.classList.add("severe")

                }





               
                 

            })

            var buttonEl = document.createElement("button")

            buttonEl.textContent = city

            asideLiELOne.appendChild(buttonEl)

            buttonEl.setAttribute("style", "padding: 5px 100px; border-radius: 4px; background-color: darkgray; width: 100%")



        });

    console.log("clicked")
























})

displaCitySearchList();