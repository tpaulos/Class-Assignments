 /*var cups = 4

 if ( cups<3 ) {
     console.log("Yes, I'll take another cup of coffee!");   
 } else{
     console.log("I've had enough");
 } */

 /*
 const temp = 60;
 const precip = false;
 if (temp>80 && precip === false) {
     console.log("Time to swim.")     
 } else {
    console.log("Stay Inside.")     
}   
/*
for (var i=99; i>= 0; i--) {
    console.log(i " bottles of root beer on the wall !")
    if (i===0){
        console.log("Hey! We need more root beer 🍺 !")
    }    
}   */

/*
var count = 1;
for (count; count <= 100 ; count++ ) {  
 
    if(count%3 === 0  && count%5 === 0) {
    console.log(count +  "whatup");} 
    else if(count%3 === 0) {
        console.log(count +  "what"); }
    else if(count%5 === 0) {
        console.log(count +  "up"); }  
    else console.log(count);      
   
 }   */

 /*
 var myvar = 'b'
switch(myvar) {
	case 'a':
        console.log('Hey')
		break;        
	case 'b':
        console.log('Foo');
		console.log('Bar');        
		break;
    case 'c':    
        console.log('Bar');        
		break;
	default:
		console.log('Uknown Variable')
} */

/*

var player1; 
var player2; 
var win; 
var round = 1;
var weapons = ["rock", "paper", "scissors"];
//var weaponOfChoice = weapons[Math.floor(Math.random() * weapons.length)];

    winner = function(p1, p2)
      {         
          if (p1 == p2) {
          return("It's a tie!");}
        else if (p1 == 'rock' && p2 == 'scissors')
          return(p1);  
        else if (p1 == 'rock' && p2 == 'paper')      
          return(p2);
        else if (p1 == 'scissors' && p2 == 'paper')
          return(p1);
        else if (p1 == 'scissors' && p2 == 'rock')
            return(p2);
        else if (p1 == 'paper' && p2 == 'rock')
            return(p1);
        else if (p1 == 'paper' && p2 == 'scissors')
            return(p2);
        else {
       return("Invalid input! You have not entered rock, paper or scissors, try again.");}
      }


 while (round <=3 ) 
 {    
    player1 = weapons[Math.floor(Math.random() * weapons.length)];
    player2 = weapons[Math.floor(Math.random() * weapons.length)];
      
       win = winner(player1,player2)
        console.log("round " + round +"winner is " + win);
        console.log("player1 hand = " +  player1); 
        console.log("player2 hand = " +  player2); 
        round++;
 }
*/ 

/*
 var shoplist =['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']

 shoplist.push('fruit loops')
 shoplist[4]= 'fair trade coffee';
// console.log(shoplist);
 shoplist[2,3]= 'rice';
 shoplist[3]=  'beans';
 //console.log(shoplist);
 
 var  shopcart = [];
 shopcart.push(shoplist[5]);
 shopcart.push(shoplist[0]); 
 console.log(shopcart);
 var i=0;
 while(i<shoplist.length) {     
 shopcart.push(shoplist[i]); 
 i++;
 }
 console.log(shopcart);
 shopcart.reverse();
 console.log(shopcart);   */

 /*
 var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
//console.log(course.students.name[1].compute.type);

var list = [];
course.students.forEach(element => {
    if(element.computer.OS === 'OSX'){
        list.push(element.name);
    }
})
console.log(list);
*/

/*
var landscape = function() {
    var result = '';
 
    var flat=  function(size) {
        for (var count=0; count<size; count++)
        result += " _ ";
    };
    var mountain = function(size){
        result += "'";
        result += "//";
    };
 
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
 }
 
  console.log(landscape());

    

  const name='Jack';
  var greet = function(){
      var name = 'Rose'
      console.log(name); 
  }

  console.log(name); //jack
  console.log(greet(name)); //rose


   */

   /*
   //Start with the following code template. After each step, run the program and see how the output changes.

function outer(){
  
    function inner() {
     
    }
  
    inner();
  }
  
  outer();
  
     // 1.Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
      
     // 2.Log the values of a and b in the inner function.
      
      // 3.Update the inner function to take two parameters named a and b.
      
      // 4.Pass a and b in as arguments when you execute inner().
      
      // 5.Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
      
      // 6.Inside the inner function, update a property of the b object.

*/

/*
function outer(){
    
    var a = 'ABC';
    var b = {id: 1, name: 'DEF'}
    console.log(a + b.name)
    
    function inner(a,b) {
      
      var a = 'GHI';
      var b = {id: 2, name: 'KLM'};
      console.log(a + b.name)
    b.id = 3;

    }
    inner(a,b);
    console.log(a, b)
  }

 // console.log(a, b)
  
  outer();

    

    // Hoisting
    function createFunction() {
        var a = "Hans Zimmer Rules!";
        inception = function() {
            console.log(a);
        }
    }

    var inception;
    createFunction();
    inception();
*/
/*
The four scopes of ‘this’

- implicit
    - ex: myObj.func( );
          - refers to myObj

- explicit
    - ex: func.bind(myObj)( )
           - refers to myObj

- new
     - ex: var car = new func({ })
	- ‘this’ is inside the function

- global
     - ex: func( )


const teacher = {
    name: 'Jimmy', 
    sayName: function(){
        console.log(this.name);
    }
}
 teacher.sayName();

 */
/*
   //this.photoList[this.currentPhotoIndex].toString()

 slideshow = {
                     photolist: ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'],
             currentphotoindex:  0, 
                   
                    nextphoto: function(){

                   for(i=0; i <= ((this.photolist).length); i++) {    
                (this.currentphotoindex == (this.photolist).length)? 
                console.log('End of the slide show') :
                 console.log(this.photolist[this.currentphotoindex]) ;
                      this.currentphotoindex ++;
                         } 
                   },

                    prevphoto: function(){
                if(this.currentphotoindex-- < 0)  
                console.log('End of the slide show');
                else 
                console.log(this.photolist[this.currentphotoindex]);
                  }

            }


  function getcurrentphoto(){
      return slideshow.prevphoto();
      }

  getcurrentphoto();

  */

 function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12