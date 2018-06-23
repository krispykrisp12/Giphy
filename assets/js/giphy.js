$(document).ready(function(){

/*
my api key ------ TOuP9ZjweETzxVFHZQQmykw9HDzTIp3h
api.giphy.com
q = My array
limit = 10
rating = (r, pg, g)

https://api.giphy.com/v1/gifs/search?api_key=TOuP9ZjweETzxVFHZQQmykw9HDzTIp3h&q=&limit=10&offset=0&rating=G&lang=en
*/

//-------------
var sports = ["tennis", "baseball", "football", "basketball", "hockey", "soccer", "softball", "golf", "poker", "darts"];

// looping through the sports array to populate the page with buttons
function buttonDisplay(){
  
  addButton();

  console.log("button display " + sports.length);


  for (var i = 0; i < sports.length; i++){

    // Error checking
    // console.log(sports[i]);
    // creating the button
    drawButton(sports[i]);
    
  }
 
}


function drawButton(buttonName){

  var button;
  button = $("<button>");

  button.attr("data-button", buttonName);

  button.addClass("button-color");

  button.text(buttonName.toUpperCase());

  $("#buttons-display").append(button);
}

// ========================================
// Calling the functions
// -------------------------------------
buttonDisplay();


ajaxCall();
// -------------------------------------




// =========== functions =============================

function ajaxCall(){

  $(".button-color").on("click", function(){
  
  
  
  var gif = $(this).attr("data-button");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=TOuP9ZjweETzxVFHZQQmykw9HDzTIp3h&limit=10";
  // var rating = response.data[i].rating;
  console.log("giphy2 " + gif);
  console.log("giphy2 " + queryURL);

  $.ajax({

    url: queryURL,
    method: "GET"

  }).then(function(response) {

   $("#display-giphy").empty();
   
    // console.log("It works" + response);
    var giphy = response.data;
    // var rating = response.data[i].rating;
    console.log("giphy2 " + giphy.length);
    // console.log(rating);

    for (var i = 0; i < giphy.length; i++){
      var images = '<img src= " ' + giphy[i].images.original.url + ' " >';
      var rating = "<div class='rating'>Rating: " + giphy[i].rating + "</div>";
      
      $("#display-giphy").append("<div class='rating-image'>" + rating + images + "</div>");

    }

    
   
    
  });
});

}

function addButton(){
  $("#send").on("click", function(event) {

    event.preventDefault();
  
    var input = $("#txt").val();
  
    sports.push(input);
    console.log(sports);
    
    $("#buttons-display").append();

    drawButton(input);
    ajaxCall();

    var holder = $.attr("placeholder");
    $("#txt").val(holder);
  });
 }
 

});





