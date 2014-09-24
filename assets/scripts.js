

$(document).ready(function() {

	var randomPhotoNumber = (Math.round(Math.random()*5) + 1);
	var newPhoto = randomPhotoNumber + ".jpg";

	var path = $('#siteBanner').css('background-image');
	path=path.replace("1.jpg", newPhoto);

	$('#siteBanner').css('background-image', path);
	$('#siteBannerBottom').css('background-image', path);

  });
/*
$(document).ready(function() {

	var path = ["site-banner1", "site-banner2", "site-banner3", "site-banner4", "site-banner5", "site-banner8"];
	var randomPath = (Math.round(Math.random()*5));
	var className = path[randomPath];

	$('#siteBanner').addClass(className);
	$('#siteBannerBottom').addClass(className);
});
*/
//6, 7, 9, 10
/*

.css({ "background-color": "#ffe", "border-left": "5px solid #ccc" }) and 
.css({backgroundColor: "#ffe", borderLeft: "5px solid #ccc" })

*/

//http://localhost:4000/home/assets/sunset.jpg




/*

PARTIAL TRIVIAL SOLUTION

	var randomPath = (Math.round(Math.random()*5));
	

	var reader = new FileReader();

	var path = $('#siteBanner').css('background-image');
	path=path.replace('url(','').replace(')','');

	
	console.log(path);

	$('#siteBanner').css('background-image', 'url("/home/assets/sunset.jpg")');
	$('#siteBannerBottom').css('background-image', 'url("/home/assets/sunset.jpg")');

*/