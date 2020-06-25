function computerPlay(){
    document.getElementById("text").innerHTML = "Result!";
    var x = Math.floor((Math.random() * 3) + 1);
    var computerSelection;
    if(x == 1){
        computerSelection = "rock";
    }else if(x == 2){
        computerSelection = "paper";
    }else{
        computerSelection = "scissor";
    }

    var y = prompt("Enter your choice");
    
    
    if(computerSelection ==  "rock" && y.toString() == "paper"){
        document.getElementById("text").innerHTML = "You Won! Paper beats Rock!";
    }else if(computerSelection ==  "paper" && y.toString() == "rock"){
        document.getElementById("text").innerHTML = "You Loose! Paper beats rock!";
    }else if(computerSelection ==  "scissor" && y.toString() == "paper"){
        document.getElementById("text").innerHTML = "You Loose! scissor beats paper!";
    }else if(computerSelection ==  "paper" && y.toString() == "scissor"){
        document.getElementById("text").innerHTML = "You Won! scissor beats paper!";
    }else if(computerSelection ==  "rock" && y.toString() == "scissor"){
        document.getElementById("text").innerHTML = "You Loose! rock beats Scissor!";
    }else if(computerSelection ==  "scissor" && y.toString() == "rock"){
        document.getElementById("text").innerHTML = "You Won! Rock beats Scissor!";
    }

}