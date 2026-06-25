let btn1= document.getElementById("btn1");

btn1.onclick = ()=>{
    let input1= Number(document.getElementById("celtem").value);

        let new_tem= ((input1 *9)/5) + 32;

        let newtag = document.createElement("h4");
        newtag.innerText= "In fehreniet it is:" + new_tem ;

        let div= document.getElementById("box1");
    div.appendChild(newtag);
}

let btn2= document.getElementById("btn2");

btn2.onclick = ()=>{
    let input2= Number(document.getElementById("fhr").value);

        let new_tem= ((input2 - 32) *5)/9 ;

        let newtag = document.createElement("h4");
        newtag.innerText= "In celsius it is:" + new_tem ;

        let div= document.getElementById("box2");
    div.appendChild(newtag);
}