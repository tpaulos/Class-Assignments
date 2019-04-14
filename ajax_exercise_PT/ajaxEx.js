
 $(document).ready(function() { 

    
 $('button#one').click(function(){                                        //$ selector selectls a button with ID 
   $.get('https://jsonplaceholder.typicode.com/posts', function(posts){   // 'one' whenever it is clicked , the  
                                                                          // whole function will be executed, 
                                                                          //inside the functuion $.get request type
     for(i=0; i < posts.length; i++) {                                    //takes two arguments, the URL of the user 
        $("#test").append('<p>' + posts[i].body + '</p>');        //and a function with an argument POSTS inside this        
        console.log(posts);                                      // function the for loop will Iterate until the length
       };                                                       // of the Posts (which is an array of 100 objects) inside
   })                                // the loop for each index of the posts, it search a tag with the ID 'test' and                    
 });                          // and append a <p> tag and display the indexed posts object with the propery "body" in
                              // in our HTML page.

$('button#two').click(function(){
  $.get('https://jsonplaceholder.typicode.com/posts', function(posts){
     
     for(i=0; i < posts.length; i++) {              // During Iteration it checks if the Condition of the if statement
        if(posts[i].id == 10)                       // met in this case , it checks if indexed posts object with the 
        $("#test").html(posts[i].body)              // property "ID" is equal to 10, when the condition met it display
        console.log(posts[i]);                      // the "body" property of the indexed object on out html page.
     };   
  })
});  

$('button#three').click(function(){
    $.get('https://jsonplaceholder.typicode.com/comments', function(comments){
       
       for(i=0; i < comments.length; i++) {          // In this case the URL locates the array of objects with the name
          if(comments[i].id == 12)                   // Comments, the for loop performs the same iteration , and by the 
          $("#test").html(comments[i].body)          // the if statement condition became true it will execute the next 
          console.log(comments[i]);                  // statement which instruct the body property of the object to be 
       };                                            // displayed on our html page on the $selected Tag.   
    })
});

$('button#four').click(function(){
    $.get('https://jsonplaceholder.typicode.com/posts', function(posts){
       
       for(i=0; i < posts.length; i++) {
          if(posts[i].id == 2)                         // The rest of each function perform more or less the same.
          $("#test").html(posts[i].body)
          console.log(posts[i]);
       };   
    })
});

$('button#five').click(function(){
    $.post('http://jsonplaceholder.typicode.com/posts', {		
        completed: false,
		      title: "Learn Promises",
		     userId: 105},
	    function(post){
        $("#test").html(post.id)
        console.log(post); 
	   })           
   })
    
   
   $('button#six').click(function(){
      $.ajax({url: 'http://jsonplaceholder.typicode.com/posts/12',   
           method: 'PUT',   
           taType: 'json',   
             data: {id: 101},   
         complete: function(data){ 
            var  htmlData = JSON.stringify(data.responseJSON);
                   $("#test").html(htmlData);  
                   console.log(data);   
                   }
  })
})
    

      $('button#seven').click(function(){
      $.ajax({url: 'http://jsonplaceholder.typicode.com/posts/12',   
           method: 'PUT',   
           taType: 'json',   
             data: {title: 'new title'},   
         complete: function(data){ 
            var  htmlData = JSON.stringify(data.responseJSON);
                   $("#test").html(htmlData);  
                   console.log(data);   
                   }
  })
})

      

$('button#eight').click(function(){
   $("#test").html('');
   $.ajax({method: 'DELETE',
              url: 'http://jsonplaceholder.typicode.com/posts/12',   
         complete: function(data, status){ 
                $("#test").html(status);  
                console.log(data);   
                }
})
})



});     