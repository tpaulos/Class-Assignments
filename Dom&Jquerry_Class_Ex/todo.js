

const uList   = document.querySelector('ul');

document.querySelector('button').addEventListener('click', function(){
    
    const  inputEl = document.getElementById('inputField').value;
    var          B = document.createElement('li');
       B.innerHTML = inputEl;
       uList.appendChild(B);
       document.getElementById('inputField').value ='';
});

document.querySelectorAll('li').addEventListener('click', function(){
      document.getElementByTagName('li').value.strike();
}); 


