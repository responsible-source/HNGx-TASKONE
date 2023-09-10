var today = new Date();
var day = today.getDay();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var prepand = (hours >= 12) ? "PM" : "AM";
hours = (hours >= 12) ? hours - 12 : hours;


var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector('[data-testid = "currentDayOfTheWeek"]').innerHTML= "Current Day Of The Week : " + dayList[day] 

console.log("Today is : " + dayList[day] + ';' )


if(hours === 0 && prepand ==="PM"){
    if(minutes===0 && seconds===0){
        hours = 12;
        prepand = "Noon"
    }

    else{
        hours= 12;
        prepand= "PM"
    }
}

if(hours === 0 && prepand === "AM"){
    if(minutes ===0 && seconds ===0){
        hours = 12;
        prepand = "Midnight"
    }

    else{
        hours = 12;
        prepand= 'AM'
    }
}

document.querySelector('[data-testid="currentUTCTime"]').innerHTML = "The Current UTC Time :" + " " + hours + ":" + minutes + " " + prepand

console.log("The Current Time Is:" + " " + hours + ":" + minutes + " " + prepand)