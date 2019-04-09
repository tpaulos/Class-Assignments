

/*********************************************************************************************


Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'


const input = prompt('Enter consecutive alphabet with one letter missing in between');

const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
              'r','s','t','u','v','w','x','y','z']

const inputarr = input.split('');
var len = inputarr.length - 1; 
var idx = alph.indexOf(inputarr[len]);
var found;
lfind =  function (arr) {
     for(i = len; i >= 0; i--) {
        arr[i] == alph[idx] ?  
         idx-- : found = alph[idx] ;
     }  
   return found;  
}
console.log(lfind(inputarr), inputarr);
                                            */




/*****************************************************************************************

Create a function that returns the sum of the two lowest positive numbers given 
an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


const input = prompt('Enter more than three integer number');

const inputarr = input.split(' ');
var min1 = inputarr[0],min2;

const min = numarr => {
    for(i = 0; i < inputarr.length; i +=1)
} 
*/



/********************************************************************************************
Let's revisit Rock Paper Scissors...

Message #spring-2019

*/



var hands = ['rock', 'paper', 'scissors'];
var obj1 = {name: 'Player1', hand: gethand()}
var obj2 = {name: 'Player2', hand: gethand()}

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
          console.log(playuntil + 'Games' + obj1.name + 'won =' + p1score + 'times'); 
        else if(p2score == 5) 
         console.log(playuntil + 'Games' + obj2.name + 'won =' + p2score + 'times'); 
        else if(playround(obj1, obj2) == 'It`s a tie !') 
          console.log('No. :'+ i +' Game' + 'is a tie!'); 
        }
    }
 console.log(playgame(obj1, obj2, 5));

