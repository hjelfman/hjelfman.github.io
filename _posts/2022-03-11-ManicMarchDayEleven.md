---
layout: post
title: "Manic March #11: Automated Web Design"
date: 2022-03-11
categories: misc
---

# Manic March - Random Styling!

I often get sick of my website's layout and have the urge to change it. Since this urge keeps reoccuring, why let just me have the fun - after all, if something applies to me, it must apply to everyone, and therefore everyone must be sick of the layout. Press <button id="rip" onclick="destroy()">this</button> button to generate your own unique hjelfman.com style!


### What is Manic March?

On Feburary 27, 2022, I thought it would be a great idea to create some sort of content - writing, art, coding, etc. - every day of the next month. Luckily, the alliteration worked out. This should be the eleventh post in the series.

<script>
	function destroy() {
		var everything = document.getElementsByTagName("*");
		var ids = [];
		var fonts =["Arial","Arial Black","Verdana","Tahoma","Trebuchet MS","Impact","Times New Roman","Didot","Georgia","American Typewriter","Andale Mono","Courier","Lucida Console","Monaco","Bradley Hand","Brush Script MT","Luminari","Comic Sans MS"];
		for (var i=0, n=everything.length; i < n; ++i) {
			var el = everything[i];
			if (el.id) {
				ids.push(el.id);
			}
		}
		document.querySelector('*').style.fontFamily = fonts[choice];
		var choice = Math.floor(Math.random()*fonts.length);
		for (var j=0, lim=ids.length; j < lim; j++) {
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			console.log(ids[j]);
			document.getElementById(ids[j]).style.color = randomColor;
		}
	}
</script>
