// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", init);


function init(){
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(){
        if (confirm("Confirm that the shuttle is ready for takeoff.") == true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue"
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML
            spaceShuttleHeight = Number(spaceShuttleHeight);
            spaceShuttleHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
        }
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

  
    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function(){
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML
        spaceShuttleHeight = Number(spaceShuttleHeight);
        spaceShuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;

        let rocket = document.getElementById("rocket");
        rocket.style.transform = "translate(0px,-10px)";
        document.getElementById("rocket").innerHTML = rocket;
 
    });

    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function(){
        document.getElementById("rocket").style.transform = "translate(0px,10px)";
        let spaceShuttleHeight = document.getElementById("spaceShuttleHeight").innerHTML
        spaceShuttleHeight = Number(spaceShuttleHeight);
        spaceShuttleHeight += -10000;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    });

    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function(){
        document.getElementById("rocket").style.transform = "translate(10px)";
    });

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function(){
        document.getElementById("rocket").style.transform = "translate(-10px)";
    });
}