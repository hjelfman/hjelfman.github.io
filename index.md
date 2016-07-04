---
layout: default
---
<script type="text/javascript" src="FeedEk/js/jquery-1.9.1.min.js"></script>
Hi! I'm Ethan Helfman, a hobbyist coder! I made this website as a general-use introductory page.
<ul>
	<li><a href="http://github.com/ethanhelfman/">Github</a></li>
	<li><a href="">Keybase</a></li>
</ul>

## Projects
<table width="100%">
	<tr>
		<td>Project</td>
		<td>Description</td>
		<td>Platform</td>
		<td>Language</td>
	</tr>
	<tr>
		<td><a href="https://github.com/ethanhelfman/InstaGet">InstaGet</a></td>
		<td>InstaGet downloads all photos from a public Instagram account</td>
		<td>Windows</td>
		<td>Java/Python</td>
	</tr>
	<tr>
		<td><a href="https://github.com/ethanhelfman/MarkovTester">MarkovTester</a></td>
		<td>MarkovTester creates semicoherent sentences from a provided input</td>
		<td>All platforms</td>
		<td>Java</td>
	</tr>
	<tr>
		<td><a href="https://github.com/ethanhelfman/RSATest">RSATester</a></td>
		<td>RSATester is a simple implementation of RSA</td>
		<td>All platforms</td>
		<td>Java</td>
	</tr>
</table>

## Latest Commits
<div id="jQuery">
	<script type="text/javascript">	
		$.get('https://github.com/ethanhelfman.atom', function (data) {
	 		$(data).find("entry").each(function () { // or "item" or whatever suits your feed
				var el = $(this);
				
				console.log("------------------------");
				console.log("title      : " + el.find("title").text());
				console.log("author     : " + el.find("author").text());
				console.log("description: " + el.find("description").text());
    			});
		});
	</script>
</div>
