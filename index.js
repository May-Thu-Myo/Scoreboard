let homeScore=0;
let guestScore=0;

function addOneHome(){
    homeScore +=1;
    document.getElementById("home-score").innerHTML=homeScore;
}
function addTwoHome(){
    homeScore +=2;
    document.getElementById("home-score").innerHTML=homeScore;
}
function addFiveHome(){
    homeScore +=5;
    document.getElementById("home-score").innerHTML=homeScore;
}
function addOneGuest(){
    guestScore +=1;
    document.getElementById("guest-score").innerHTML=guestScore;
}
function addTwoGuest(){
    guestScore +=2;
    document.getElementById("guest-score").innerHTML=guestScore;
}
function addFiveGuest(){
    guestScore +=5;
    document.getElementById("guest-score").innerHTML=guestScore;
}