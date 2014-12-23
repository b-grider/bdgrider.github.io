

$(document).ready(function() {

	var randomPhotoNumber = (Math.round(Math.random()*5) + 1);
	
	if(randomPhotoNumber==1 || randomPhotoNumber==2 || randomPhotoNumber==5) {
		var newPhoto = randomPhotoNumber + ".JPG";
	}
	else {
		var newPhoto = randomPhotoNumber + ".jpg";
	}
	
	var path2 = $('#siteBanner').css('background-image');
	path=path2.replace("1.jpg", newPhoto);

	console.log(path2);

	$('#siteBanner').css('background-image', path);
	$('#siteBannerBottom').css('background-image', path);

  });