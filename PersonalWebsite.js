

const button = document.getElementById("fetch-btn");
const output = document.getElementById("output");
const input = document.getElementById("input");

button.addEventListener("click", clickHandler);

async function clickHandler(){
    // Clear old results
    output.innerHTML = "";
    // Making the input value
    const query = input.value;
    // fetch call
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(query) + "&appid=257e2f3c6f8b16ad584adc85cf805e1d&units=metric");
    // parse json data
    const data = await response.json();

    const name = document.createElement("h5");
    name.textContent = data.name + " Weather"

    const temp = document.createElement("h6");  
    // <p> title: ____</p> / tell it what to print / p creates a paragraph, could be h1 or even div
    temp.textContent = "Temperature: " + data.main.temp + " degrees";

    // document refers to DOM tree (website), data refers to JSON data
    const feelsLike = document.createElement("h6");
    feelsLike.textContent = "Feels like: " + data.main.feels_like + " degrees";

    const description = document.createElement("h6");
    description.textContent = "Description: " + data.weather[0].description;

    // print out for user
    output.appendChild(name);
    output.appendChild(temp);
    output.appendChild(feelsLike);
    output.appendChild(description);
}