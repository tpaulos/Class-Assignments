var hands = ['rock', 'paper', 'scissors'];
var obj1 = {Name: '', hand: ''}
var obj2 = {Name: 'Computer', hand: gethand()}



function playername () {
        document.getElementById("requestname").innerHTML = "Loading......";
        obj1.name = prompt("Enter Player 1 Name");
        obj1.hand = prompt("Choose a weapon [rock, paper, scissor]");
        var myelement = document.getElementById("requestname");
    }    
playername();


function gethand(){
                  return hands[parseInt(Math.random()*10)%3]
}

function playround (obj1, obj2)  {

        
        if (obj1.hand == obj2.hand) 
             console.log('It`s a tie !'+ 'player1 hand: '+obj1.hand+'player2 hand:'+obj2.hand);    
        else if(obj1.hand == 'rock' && obj2.hand == 'scissors'){   
//            console.log(obj1.name+' win'); 
            return(obj1);} 
        else if (obj1.hand == 'rock' && obj2.hand == 'paper') {
//            console.log(obj2.name+' win'); 
            return(obj2); }
        else if (obj1.hand == 'scissors' && obj2.hand == 'paper') {
//            console.log(obj1.name+' win'); 
            return(obj1); }
        else if (obj1.hand == 'scissors' && obj2.hand == 'rock') { 
//            console.log(obj1.name+' win'); 
            return(obj2); } 
        else if (obj1.hand == 'paper' && obj2.hand == 'rock') {
//            console.log(obj1.name+' win'); 
            return(obj1); }
        else if (obj1.hand == 'paper' && obj2.hand == 'scissors'){
//            console.log(obj1.name+' win'); 
            return( obj2);} 
       
}

 function  playgame (obj1, obj2, playuntil) {
    
     var p1score = 0;
     var p2score = 0;
     let i = 1; 

    while(i <= playuntil ) {

      playround(obj1, obj2) == obj1 ? p1score++ :  p2score++ ;
                i++;
        if((p1score == 5 || p2score == 5) && p1score == 5 )
        requestname.innerHTML= playuntil + " Games " + obj1.name + " won with " + obj1.hand ;

        else if((p2score == 5 || p2score == 5) && p2score == 5) 
        requestname.innerHTML= playuntil + " Games " + obj2.name + " won with " + obj2.hand ;

        else if(playround(obj1, obj2) == 'It`s a tie !') 
        requestname.innerHTML= "No. :" + i + " Game  is a tie!" ;

        }
    }
 playgame(obj1, obj2, 5);