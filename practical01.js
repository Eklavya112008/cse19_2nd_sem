

function converter() {
    let n = Number(document.querySelector("#input").value);
    let f = (n * (9/5)) + 32;
    document.querySelector("div").innerText= "In Fahrenheit temperature is " + f;
}


