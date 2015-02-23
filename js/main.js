

// var clicks1 = 0;
// var clicks2 = 0;

// // jquery
// $('#cat-1').click(function(e) {
//   //the element has been clicked... do stuff here
//   clicks1++;
//   $('.clicks-1').text("Clicks: " + clicks1);
//   console.log('clicked cat 1')
// });

// $('#cat-2').click(function(e) {
//   //the element has been clicked... do stuff here
//   clicks2++;
//   $('.clicks-2').text("Clicks: " + clicks2);
//   console.log('clicked cat 2');
// });

/// old stuff above


$('#picked-cat').click(function(e) {
  //the element has been clicked... do stuff here
  console.log('clicked picked cat');

  var id = $('.current-cat').attr('id');
  var index = id.split("-")[1];

  kittens[index].incrementClicks();

  $('#picked-clicks').text("Clicks: " + kittens[index].clicks);

});

var Cat = function (name, imgPath) {
	this.image = imgPath;
	this.clicks = 0;
	this.name = name;
};

Cat.prototype.incrementClicks = function() {
	this.clicks += 1;
}


function BuildMenu() {
	for (var i = 0; i < kittens.length; i++) {
		var name = kittens[i].name;
		var line = '<li class="cat-link" id="cat-'+ i + '"><a href="#">' + name + '</a></li>';
		$('.kittens').append(line);
	}
};

var kitten1 = new Cat('Lancelot', 'img/cat-1.jpeg');
var kitten2 = new Cat('Gemini', 'img/cat-2.jpg');
var kitten3 = new Cat('Zeus', 'img/cat-3.jpg');
var kitten4 = new Cat('The Pleades', 'img/cat-4.jpg');
var kitten5 = new Cat('Clyde', 'img/cat-5.jpg');

var kittens = [kitten1, kitten2, kitten3, kitten4, kitten5];

BuildMenu();

$(".cat-link").click( function() {
	var id = this.id;
	var index = id.split("-")[1];

	var catHTML = '<img class="img-responsive current-cat" id="' + id + 
	'" src="./' + kittens[index].image + '" alt="responsive image">';

	$('#picked-cat').html(catHTML);
	$('#cat-name').text(kittens[index].name);
	$('#picked-clicks').text("Clicks: " + kittens[index].clicks);

});