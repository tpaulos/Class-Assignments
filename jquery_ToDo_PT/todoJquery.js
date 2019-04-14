$('button').click(function(){
    const inputEl = $('#inputField').val(); 
    $('ul').append('<li>' + inputEl + '</li>');
    $('#inputField').val('');
});

 // following function is not working, the plan was to select the targeted 
 //to do list , then strike using the tag, then delay 1000 millisecond, then
 //remove the element.

$('li').click(function(arg){
   (arg.target).html('<strike></strike>').delay(1000).remove();
})




