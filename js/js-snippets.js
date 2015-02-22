// function snippets

var clicks = 0;

// jquery
$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
  clicks++;
  console.log("Clicks: " + clicks);
  $('.score').text("Clicks: " + clicks);
});


var elem = document.getElementById('my-elem');

// pure javascript
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);