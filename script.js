function computerPlay(){
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
    
    
    if(computerSelection == y.toString()){
        document.getElementById("text").innerHTML = "You Won!";
    }else{
        document.getElementById("text").innerHTML = "You Loose!";
    }

}