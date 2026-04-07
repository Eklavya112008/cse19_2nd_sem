
function calculate_result(){
    let n =Number(document.getElementById("subjects").value);

    let total=0;
    for(let i=0;i<n;i++){
        let marks=parseFloat(prompt("Enter the marks of subject "+ (i+1)));
        total=total+marks;
    }
    let average=total/n;
    let grade; 
    let result;

    if (average>=90){
        grade="A+";
    }
    else if(average>=85){
        grade="A";
    }
    else if(average>=75){
        grade="B";
    }
    else if(average>=60){
        grade="C";
    }else if(average>=40){
        grade="D";
    }else{
        grade="F";
    }

    if(average>=40){
        result="PASS";
    }else{
        result="FAIL";
    }

    document.getElementById("result").innerHTML=
    "Total marks: "+total+"<br>"+"Average Marks: "+average.toFixed(2)+"<br>"+"Grade: "+grade+"<br>"+"Result:" +result;

}