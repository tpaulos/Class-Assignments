//$('#circle').click(function(){
//    $('img').attr('src', 'https://www.pexels.com/photo/men-working-at-night-256219/')
//});

$('#circle').click(function(){
    alert('Clicked!');
})


$('#circle').hover(function(){
    $('p').html('We changed the text!');
})

$('.square').click(function(){
    $(this).css('background-color', 'blue' ) ;
})


