//Javascript File
"use strict";

  //alert('Javascript Started');
	var baseDiv = "now", 
		arrayDown = [undefined, 'section', 'next', 'detail', 'example'], /* Making it start from 1*/
	 	maxHeads = 3,
	 	currentDown = 1, /* Current positon in array arrayDown 1-length */
	 	currentHead = 0; /* Current Heading 1-3 */

	document.onkeypress = function(e) {
		//alert(e.which); 
		//e.key =>  Up Down Left Right in mozilla, and nothing in undefined.
		//e.which =>
		//              W = 119, 87
		//   A = 97,65              D = 100,68
		//              S = 115,83

		var target = e.target;  //getting the type
		var eType = target.tagName.toLowerCase(); //getting the element type
		if(eType == "textarea") return ;
		switch(e.which){
			case 119:
				doUp();
				break;
			case 87:
				doUp();
				break;

			case 97:
				doLeft();
				break;
			case 65:
				doLeft();
				break;

			case 115:
				doDown();
				break;
			case 83:
				doDown();
				break;

			case 100:
				doRight();
				break;
			case 68:
				doRight();
				break;

			default:
				break;
		}
		showActivatedKeys();
	};

	function doUp(){
		if(currentDown<=1){
			alert("Cannot Go Up");
			divToShow = "next-"+currentHead.toString();
		} else {
			currentDown -= 1;
			var divToShow = arrayDown[currentDown].toString() + "-"+currentHead.toString();
			divToShow = document.getElementById(divToShow);
			showOnlyDiv(divToShow);
		}
	}

	function doDown(){
		if(currentHead == 0) return;
		if(currentDown>=arrayDown.length-1){
			alert("Cannot go Down");
		} else {
			currentDown +=1
			var divToShow = arrayDown[currentDown].toString() + "-"+currentHead.toString();
			divToShow = document.getElementById(divToShow);
			showOnlyDiv(divToShow);
		}
	}

	function doLeft(){
		if(currentHead<=1){
			alert("Cannot go left");
		} else {
			currentHead -= 1; 
			var divToShow = arrayDown[currentDown].toString() + "-"+(currentHead).toString();
			divToShow = document.getElementById(divToShow);
			showOnlyDiv(divToShow);
		}
	}

	function doRight(){
		if(currentHead>=maxHeads){
			alert("Cannot go Right");
		} else {
			currentHead += 1; 
			var divToShow = arrayDown[currentDown].toString() + "-"+(currentHead).toString();
			divToShow = document.getElementById(divToShow);
			showOnlyDiv(divToShow);
		}
	}
	
	function showOnlyDiv(divToShow){
		//hide now div too
		//document.getElementById('now').setAttribute("class", "hide"); //do not worry about flodding for now
		hideNow();
		for (var i = arrayDown.length - 1; i >= 1; i--) {
			for(var j = 1 ; j<=maxHeads; j++){
				var div = arrayDown[i] + "-" + j.toString();
				hideDiv(document.getElementById(div));
			}
		}
		showDiv(divToShow);
	}

	function hideNow(){
		var now = document.getElementById('now');
		var initial = getDivInfo(now);
		if(initial.search('hide')==-1){
			now.setAttribute("class", initial.trim() + " hide");
		} 
	}

	function hideDiv(div){
		var initial = getDivInfo(div);
		if(initial.search('hide')==-1){
			div.setAttribute("class", initial.trim() + " hide");
		}
	}

	function getDivInfo(div){
		return div.hasAttribute("class") ? div.getAttribute("class") + " " : "";
	}

	function showDiv(div){
		var initial = getDivInfo(div);
		if(initial.search('hide') >= 0) {
			initial = replace(initial, 'hide','');  //replaces multiple instances of hide if exist by any reason
			div.setAttribute("class", initial);
		}
	}

	function replace(string, needle, replacement) {
		if(string.search(needle)== -1) return string;
		string = string.replace(needle, replacement);
		return replace(string, needle, replacement);
	}

	function calculateKeys(){
		if(currentHead == 0 && currentDown ==1) return ['D'];
		if(currentHead<=1) {
		   	if(currentDown>1 && currentDown<arrayDown.length-1) return ['W','S','D'];
		   	if (currentDown<=1) return ['S','D'];
		   	return ['W','D'];
		}
		if(currentHead>=maxHeads){
			if(currentDown>1 && currentDown<arrayDown.length-1) return ['W','S','A'];
		   	if (currentDown<=1) return ['S','A'];
		   	return ['W','A'];

		}

		if(currentHead>1 && currentHead<maxHeads){
			if(currentDown>1 && currentDown<arrayDown.length-1) return ['W','S','A','D'];
		   	if (currentDown<=1) return ['S','A', 'D'];
		   	return ['W','A', 'D'];			
		}
	}

	function showActivatedKeys(){
		var array = calculateKeys();
		//alert(array);
		var string = array.join(" or ");
		document.getElementById('activated').innerHTML = "Press: " + string;
	}

	showOnlyDiv(document.getElementById(baseDiv));
	showActivatedKeys();
