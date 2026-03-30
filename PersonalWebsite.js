

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

    const title = document.createElement('p');  
    // <p> title: ____</p> / tell it what to print / p creates a paragraph, could be h1 or even div
    title.textContent = "" + data.Title;

    // document refers to DOM tree (website), data refers to JSON data
    const body = document.createElement("p");
    body.textContent = "" + data.body;

    const id = document.createElement("p");
    body.textContent = "" + data.id;

    // print out for user
    output.appendChild(title);
    output.appendChild(body);
    output.appendChild(id);
}