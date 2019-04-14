
// Exercise 2,

   $('#submit').click(function(){
    const inputName      = $('#name').val();
    const inputEmail     = $('#email').val();
    const inputNumber    = $('#phone').val();

var required = [inputName, inputEmail, inputNumber]; 

   for(i = 0; i < required.length; i++){
       if(required[i].val() == ''){
       $('#message').eq(i).append(<p>Please Fill Out Required Fields</p>).addClass('warning');
       $('label').addClass('warning');
       }
       else{
       $('label').removeClass('.warning');
       }
   }

   if($('label').attr('warning') === false)
    $('form').remove();
    else
    $(this).append(<h2>Thanks for your feedback!</h2>)

});




/***************Jquery****************************
// Exercise 1,

//$("h1");
//$("section").find("*");
//let current = $(".current");
//current.next():
//current.prev().find("h2")[0];
//$(".highlight").parent().parent();

*/
