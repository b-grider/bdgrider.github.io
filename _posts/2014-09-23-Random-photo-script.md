---
layout: post
title:  "Random Photo Script"
date:   2014-09-23 22:56:34
tags: JavaScript 
---

Here's a little script I wrote to randomly select a photo from a given folder (it's what makes a different photo appear as the background of this site after every page refresh).

I initially chose to implement this functionality by creating a separate CSS banner class for every image that I wanted as a background. I realized how hacky this felt after I hard-coded all of the different background image paths in CSS classes that were otherwise completely identical.

Ugly version:

{% highlight javascript %}
$(document).ready(function() {

	var classes = ["site-banner1", "site-banner2", "site-banner3", "site-banner4", "site-banner5"];
	var randomIndex = (Math.round(Math.random()*4));
	var className = classes[randomIndex];

	$('#siteBanner').addClass(className);
	$('#siteBannerBottom').addClass(className);
});
{% endhighlight %}

After poking around the JQuery API a little, I realized I could use the .css modifier to set the 'background-image' property to a different image path on every page refresh. This would still result in a hacky solution, but it would be far less redundant than creating a seperate css class for every background. I also considered using ajax to get a list of image names in the images folder to iterate through, but decided that this solution would be more involved than necessary due to cross-domain concerns. 

In the end, I settled for naming the background images I wanted "1"-"6" and then using the Math.random() function to randomly select one on every page refresh.

Take a looksy:

{% highlight javascript %}
$(document).ready(function() {

	var randomPhotoNumber = (Math.round(Math.random()*5) + 1);
	var newPhoto = randomPhotoNumber + ".jpg";
	var path = $('#siteBanner').css('background-image');

	path=path.replace("1.jpg", newPhoto);		//"1.jpg" being the default background-image

	$('#siteBanner').css('background-image', path);
	$('#siteBannerBottom').css('background-image', path);

  });
{% endhighlight %}