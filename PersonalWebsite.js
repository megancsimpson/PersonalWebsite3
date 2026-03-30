

const button = document.getElementById("fetch-btn");
const output = document.getElementById("output");

button.addEventListener("click", clickHandler);

async function clickHandler(){
    // fetch call
    const response = await fetch(); //insert API call here
    // could also do .then instead of await, but its longer
    // parse json data
    const data = await response.json();
    console.log(data);

    const temp = document.createElement('p');  
    // <p> title: ____</p> / tell it what to print / p creates a paragraph, could be h1 or even div
    temp.textContent = "" + data.temp;

    // document refers to DOM tree (website), data refers to JSON data
    const feelsLike = document.createElement("p");
    feelsLike.textContent = "" + data.feels_like;

    const description = document.createElement("p");
    description.textContent = "" + data.description;

    // print out for user
    output.appendChild(temp);
    output.appendChild(feelsLike);
    output.appendChild(description);
}