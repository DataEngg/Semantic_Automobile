function init(){
	/* Attaching all event handlers required */
	$("#pullmap").click(function(){openOverlay();});			//Click for the pull map button.
	
	$("#overlay-close").click(function(){closeOverlay();});		//click event of the close button on overlay
	
	$("#lightbox-overlay").click(function(){closeOverlay();});	//close the overlay even if the lightbox cover is clicked.
	
	$("#searchInput").focus(function(){							//When input is focused
		slideLeftClose($("#searchBox-text"),'fast');			//Close the Searchbox's text
		$("#searchInput").animate({"width":"99%", "font-size": "32px"}, 'slow');	//Expand inputbox
	});
	
	$("#searchInput").blur(function(){
		slideLeftOpen($("#searchBox-text"), '9%' ,'slow');
		$("#searchInput").animate({"width":"90%", "font-size": "20px"}, 'fast');
	});
	
	$('#overlay-mapImage').elevateZoom({
					zoomType: "window",
					cursor: "crosshair",
					scrollZoom: true,
					zoomWindowFadeIn: 200,
					zoomWindowFadeOut: 200,
				});
}

function slideLeftClose(sel, speed){	//slideLeft for close
	sel.animate({"width": 0}, speed, function(){sel.hide();});
}

function slideLeftOpen(sel, val, speed){	//slideLeft for Open
	sel.show();
	sel.animate({"width": val}, speed);
}

function closeOverlay(){		//Close the Overlay by sliding to the left
	$("#left-overlay").animate({"left": -1001}, 'slow', 'swing');
	$("#lightbox-overlay").fadeOut('slow');
	$("#pullmap").fadeIn('fast');
}
	
function openOverlay(){			//Open the Overlay by sliding to the Right
	$("#left-overlay").animate({"left": 0}, 'slow', 'swing');
	$("#lightbox-overlay").fadeIn('slow');
	$("#pullmap").fadeOut('fast');
}

function scrollNames(){
	$("#names span:first").fadeOut('slow', function(){
		$(this).detach().appendTo("#names").removeAttr('style');
		$("#names span:first").fadeIn('slow', scrollNames);
	});
}

function fetchXML(){
	$.ajax({
		method: 'get',
		url: 'backend/XMLSearch.php',
		dataType: 'json',
		success: function(data){
			//var htext = "";
			var i = 0;
			$.each(data.files, function(k, v){
				divtext = "<div class='blk'><img src='/data/images/web/mp3icon.png' style=''/><div>";
				divtext += v.slice(0, -4);
				divtext += "</div</div>";
				$("#receiver").append(divtext);
				$("#receiver .blk:last").hide();
			});
			piper();
		}
	});
}

function createProgress(){
	var main = document.createElement("div");
	var prog = document.createElement("img");
	prog.setAttribute("src", "/data/images/web/ajax-loader.gif");
	main.setAttribute("id", "progressbar");
	main.appendChild(prog);
	main.innerHTML = main.innerHTML + "<br/>Processing";
	$('body').append(main);
	var lb = $("#lightbox-overlay");
	main = $("#progressbar");
	main.css({"z-index": 20, "position": "absolute", "text-align": "center", "background-color": "#FFF", "box-shadow": "1px 1px 3px 3px #777", "border-radius": "5px", "padding": "5px", "font-family": "trebuchet ms"});
	width = (lb.width() - main.width())/2;
	height = (lb.height() - main.height())/2;
	main.css({"left": width, "top": height});
}
function deleteProgress(){
	$("#progressbar").remove();
}

function piper(){
	$.Deferred(function (dfr) {
		dfr = dfr.pipe(function () { return $("#lightbox-overlay").fadeIn('slow'); });
		dfr = dfr.pipe(function () { return createProgress(); });
		$("#receiver .blk").each(function () {
			var $div = $(this);
			dfr = dfr.pipe(function () { return $div.fadeIn(100); });
		});
		dfr = dfr.pipe(function () { return deleteProgress(); });
		dfr = dfr.pipe(function () { return $("#lightbox-overlay").fadeOut('fast'); });
	}).resolve();
}

$(document).ready(init);