

var APIKey = "5865efb9befd52ec6fc44fd061b582bf";

var cities = [];

var topSectionCity = document.getElementById("city")

function getVal() {

    const val = document.querySelector("input").value;
    return val;
}




var searchInput = document.querySelector("input").value;




var searchBtn = document.getElementById("searchButton")

searchBtn.addEventListener("click", function () {


    getVal();
    var city = getVal();
    console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey +"&units=imperial"

    fetch(queryURL)
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {
            console.log(data)

            cities.push(data)
            localStorage.setItem("city", JSON.stringify(cities))
        });

    console.log("clicked")
    console.log(cities.values(name));























})

