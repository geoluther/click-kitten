

/* -------- Model --------- */

var Cat = function (name, imgPath) {
	this.image = imgPath;
	this.clicks = 0;
	this.name = name;
};

var kitten1 = new Cat('Lancelot', 'img/cat-1.jpeg');
var kitten2 = new Cat('Gemini', 'img/cat-2.jpg');
var kitten3 = new Cat('Zeus', 'img/cat-3.jpg');
var kitten4 = new Cat('The Pleades', 'img/cat-4.jpg');
var kitten5 = new Cat('Clyde', 'img/cat-5.jpg');

// the model
var kittens = [kitten1, kitten2, kitten3, kitten4, kitten5];


/* ------ Octopus -------- */

var octopus = {
	increment: function() {
		currentCat.incremen();
	}
};

// view and model
$('#picked-cat').click(function() {
  //the element has been clicked... do stuff here
  console.log('clicked picked cat');

  var id = $('.current-cat').attr('id');
  var index = id.split("-")[1];

  kittens[index].increment();

  $('#picked-clicks').text("Clicks: " + kittens[index].clicks);

});



// is this octopus or model
Cat.prototype.increment = function() {
	this.clicks += 1;
}


// controller - good.

function BuildMenu() {
	for (var i = 0; i < kittens.length; i++) {
		var name = kittens[i].name;
		var line = '<li class="cat-link" id="cat-'+ i + '"><a href="#">' + name + '</a></li>';
		$('.kittens').append(line);
	}
};

var view = {

	init: function() {
		octopus.drawCats()
	},


};


BuildMenu();

$("#admin-button").click( function() {
	console.log("clicked admin button");
	$("#admin-form").toggle();
});

$(".cat-link").click( function() {
	var id = this.id;
	var index = id.split("-")[1];

	var catHTML = '<img class="img-responsive current-cat" id="' + id +
	'" src="./' + kittens[index].image + '" alt="responsive image">';

	$('#picked-cat').html(catHTML);
	$('#cat-name').text(kittens[index].name);
	$('#picked-clicks').text("Clicks: " + kittens[index].clicks);

});