const button = document.getElementById("fetch-btn");
const output = document.getElementById("output");
const input = document.getElementById("input");

if (button && output && input) {
    button.addEventListener("click", clickHandler);
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            clickHandler();
        }
    });
}

async function clickHandler() {
    output.innerHTML = "";
    const query = input.value.trim();

    if (!query) {
        renderError("Location not found");
        return;
    }

    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(query) + "&appid=257e2f3c6f8b16ad584adc85cf805e1d&units=metric");
        const data = await response.json();

        if (!response.ok || !data.name || data.name.toLowerCase() !== query.toLowerCase()) {
            throw new Error("Location not found");
        }

        const name = document.createElement("h5");
        name.textContent = data.name + " Weather";

        const temp = document.createElement("h6");
        temp.textContent = "Temperature: " + data.main.temp + " degrees";

        const feelsLike = document.createElement("h6");
        feelsLike.textContent = "Feels like: " + data.main.feels_like + " degrees";

        const description = document.createElement("h6");
        description.textContent = "Description: " + data.weather[0].description;

        output.append(name, temp, feelsLike, description);
    } catch (error) {
        console.log("Error: ", error);
        renderError("Location not found");
    }
}

function renderError(message) {
    const error = document.createElement("h6");
    error.textContent = message;
    error.className = "error-message";
    output.appendChild(error);
}