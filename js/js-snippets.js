// function snippets

var clicks1 = 0;
var clicks2 = 0;

// jquery
$('#cat-1').click(function(e) {
  //the element has been clicked... do stuff here
  clicks1++;
  $('.clicks-1').text("Clicks: " + clicks1);
});

$('#cat-2').click(function(e) {
  //the element has been clicked... do stuff here
  clicks2++;
  $('.clicks-2').text("Clicks: " + clicks2);
});

// pure js
// var elem = document.getElementById('my-elem');

// elem.addEventListener('click', function(){
//   //the element has been clicked... do stuff here
// }, false);