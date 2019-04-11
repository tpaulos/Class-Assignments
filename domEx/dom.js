
/*******************************************************************
 
 Exercise 1,
 
//1,

const A = document.querySelector('li.selected');
const B = A.parentElement.parentElement;

//2,

const C = document.querySelectorAll('section')


//3,

const D =  document.querySelector('section.current'); 

//4,

const E =  D.nextElementSibling;

//5,

const F =  D.previousElementSibling.querySelector('h2');

//6,

const G =  D.querySelector('h2');

//7,

const H =  document.querySelectorAll('h2');


console.log(D);

*/

// Exercise 2

//1, Update the 'Coffee' item to say 'Fair Trade Coffee'
//2, Remove 'Twinkies' from the list
//3, Add an item 'Cheese Whiz'
//4, Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
//5, Add the class 'important' to the muscle milk item.

//1,

 var list = document.querySelector('ul');
 var A = document.querySelectorAll('li');  
     A[1].innerHTML = "Fair Trade Coffe";

//2,

     A[3].remove();

//3,
  var  B = document.createElement('li');
       B.innerHTML = "Cheese Whiz";
       list.appendChild(B);
       
//4,
var items = ['protein powder', 'muscle milk', 'power bars'];
for(i = 0; i < items.length; i++){
       A[i].remove();
   var C = document.createElement('li')
       C.innerHTML = items[i];
       list.appendChild(C);
}

//5,
 var D = document.querySelectorAll('li');  
  D[2].setAttribute("class", "important");


       


/*
//1,
//document.querySelector('li');


//2,

 A.nextElementSibling.nextElementSibling.nextElementSibling.remove();

 //3,

 const C = document.createElement('li');
       C.innerHTML = "Cheese Whiz";
       A.appendChild(C);

//4,
 var items = ['protein powder', 'muscle milk', 'power bars'];

    for(i = 0; i < items.length; i++){
        A.nextElementSibling.remove();
       var E = document.createElement('li')
           E.innerHTML = items[i];
           A.appendChild(E);
    }

   */


