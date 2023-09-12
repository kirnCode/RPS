var player;
var ai;

function getAiChoice(){
    var value = Math.random() * (3 - 0);
    
    if(value <= 1){
        ai = 'rock';
    }
    else if(value <= 2 && value > 1){
        ai = 'paper';
    }
    else if(value <= 3 && value > 2){
        ai = 'scissors';
    }
}

function play(value){
    getAiChoice();
    if(value === ai){
        alert('Tie !')
    }
    if(value === 'rock' && ai === 'paper'){
        alert('you lose');
    }  
    if(value === 'rock' && ai === 'scissors'){
        alert('you win');
    }  


    if(value === 'paper' && ai === 'rock'){
        alert('you win');
    }  
    if(value === 'paper' && ai === 'scissors'){
        alert('you lose');
    }  

    
    if(value === 'scissors' && ai === 'rock'){
        alert('you lose');
    }  
    if(value === 'scissors' && ai === 'paper'){
        alert('you win');
    }  
    
}
