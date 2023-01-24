let decisionMaker = () =>{
    // Dice 1 --> 
    let diceOneValue = Math.floor(Math.random()*6+1);

    let imageSource = "images/dice" + diceOneValue + ".png";

    document.querySelector(".img1").setAttribute("src",imageSource);

    // Dice 2 -->
    let diceTwoValue = Math.floor(Math.random()*6+1);

    let imageSource2 = "images/dice" + diceTwoValue + ".png";

    document.querySelector(".img2").setAttribute("src",imageSource2);

    
    // Deciding who won -->
    if(diceOneValue>diceTwoValue){
        document.querySelector("h1").textContent = "🚩Player 1 Wins";
    }
    else if(diceOneValue<diceTwoValue){
        document.querySelector("h1").textContent = "Player 2 Wins🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw!";
    }
}