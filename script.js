let weather = {
    apiKey: "560bc9b2331657e2ac220fc9a039b01b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".citytemp").innerText = "Temp - "+temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity - " + humidity + "%";
        document.querySelector(".temp_min").innerText = "Min - "+temp_min + "°C";
        document.querySelector(".temp_max").innerText =
            "Max - " + temp_max + "°C"
        // document.querySelector(".wind").innerText =
        //     "Wind speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchBar").value);
    },
};

// document.querySelector(".search button").addEventListener("click", function () {
//     weather.search();
// });

document
    .querySelector(".searchBar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Delhi");


//CLOCK
function clock() {// We create a new Date object and assign it to a variable called "time".
    var time = new Date(),

        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),

        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes(),


        seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }

    if(hours>=12){
        document.querySelector('.ampm').innerText = "PM";
    }else{
        document.querySelector('.ampm').innerText = "AM";
    }

}
setInterval(clock, 1000);

//DATE
const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];
document.getElementById("date").innerHTML = d.getDate();
document.getElementById("month").innerHTML = d.getMonth();
document.getElementById("year").innerHTML = d.getFullYear();