Parallel Show
==============

A Show -- That is Parallel !


Description
------------

I built it, just for fun!!

It is used to create slides, and navigate table-like with WASD keys.
It has a heading (or Base Div) which is shown on page load. 
Then you have to press 'D' to enter the presentation
Then you can move left/right or up/down to iterate through the slide 

\
 \
  \------------------------------------------------
  |
  |  [Section1-1] <--> [Section2-1] <--> [Section3-1]
  |
  |      / \               / \               / \
  |       |                 |                 |
  |      \ /               \ /               \ /
  |
  |  [Section1-2] <--> [Section2-2] <--> [Section3-2]
  |
  |

The figure gives the basic idea on how to go through the slides.


Usage
-----

Write a HTML like this:

````HTML 

<html>
<head>
  <title>Your Title</title>
	<link rel="stylesheet" type="text/css" href="main.css"> <!-- This is required! -->
	<link rel="stylesheet" type="text/css" href="theme.default.css"> <!-- The main theme! -->
</head>
<body>
	<!-- The base div! The class is according to theme  -->
	<div class='default'>

		<!-- The heading div -->

		<div id="now">
			This thing is gonna be displayed when the page is loaded
		</div>

		<div id="any-id-1">
			This is any sections' first slide
		</div>
		<div id="any-id-2">
			Second Slide
		</div>
		<div id="any-id-3">
			Third Slide
		</div>
		.
		.
		.
		<div id="another-id-1">
			Another Section
		</div>
		<div id="another-id-2">
			Another Section Slide 2
		</div>
		<div id="another-id-3">
			Another Section Slide 3
		</div>

	</div>
</body>
<script type="text/javascript" src="parallelShow.js"></script> <!-- The heart! Javascript File! -->
</html>

````

And Edit something in the parallelShow.js

````JS

var baseDiv = "now", /*In this case*/
    arrayDown = [undefined, 'any-id', 'another-id'], /*Define chronology of Divs here*/
    maxHeads = 3, /*because maximun number of slides are 3.*/
    ........


````

Or, Watch the demo:
---------------
1) Download The Repo.
2) Open up
