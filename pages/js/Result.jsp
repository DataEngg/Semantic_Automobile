<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>Music Store</title>
                <link rel="stylesheet" href="main.css"/>
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="scripts.js"></script>
		<script type="text/javascript" src="backend/getdetails.js"></script>
		<script type="text/javascript" src="js/jquery.elevatezoom.js"></script>
                <script type="text/javascript" src="jquery.dropotron-1.0.js"></script>
                <script type="text/javascript" src="jquery.slidertron-1.1.js"></script>
		<script type="text/javascript"><!--Insert immediate scripts here--></script>
                <script type="text/javascript">
	$(function() {
		$('#menu > ul').dropotron({
			mode: 'fade',
			globalOffsetY: 11,
			offsetY: -15
		});
		$('#slider').slidertron({
			viewerSelector: '.viewer',
			indicatorSelector: '.indicator span',
			reelSelector: '.reel',
			slidesSelector: '.slide',
			speed: 'slow',
			advanceDelay: 4000
		});
	});
</script>
		
	</head>
	
	<body>
		<div id="left-overlay">
			<div id="pullmap">
				<img src="pullmap.png"/>
			</div>
			<div style="border-bottom: 2px solid #ddd;text-align: right;margin: 2px;margin-top: 25px;">
				<div id="overlay-close">Close</div>
				<div style="font-family: verdana;font-weight: bolder;">Music Ontology Map</div>
			</div>
			<div id="overlay-main">
				<img id="overlay-mapImage" src="data/images/ont/muss.jpg" data-zoom-image="data/images/ont/muss.jpg"/>
			</div>
			<div id="overlay-footer">Click on the Ontology items to explore</div>
		</div>
		<div id="wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">Online Music Store</a></h1>
                        
		</div>
		<div id="slogan">
			
                    
                        
		</div>
	</div>
	<div id="menu">
		<ul>
                        <li><a href="index.html">Home</a></li>
			<li class="first">
				<span class="opener">Genre<b></b></span>
				<ul>
					<li><a href="#">Jazz</a></li>
					<li><a href="#">Rock</a></li>
					<li><a href="#">Pop</a></li>
					<li><a href="#">Classical</a></li>
					<li><a href="#">Hip-Hop</a></li>
				</ul>
			</li>
                    <li>
				<span class="opener">Movies<b></b></span>
				<ul>
					<li><a href="#">HollyWood</a></li>
					<li><a href="#">BollyWood</a></li>
					
				</ul>
			</li>
			<li><a href="#">Song Map</a></li>
			
			<li><a href="#">About</a></li>
			<li class="last"><a href="#">Contact</a></li>
		</ul>
		<br class="clearfix" />
	</div>
	<div id="slider">
		<div class="viewer">
			<div class="reel">
				<div class="slide">
					<img src="images/1.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="images/2.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="images/3.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="images/4.jpg" alt="" />
				</div>
				<div class="slide">
					<img src="images/5.jpg" alt="" />
				</div>
			</div>
		</div>
		<div class="indicator">
			<span>1</span>
			<span>2</span>
			<span>3</span>
			<span>4</span>
			<span>5</span>
		</div>
	</div>
	<div id="page">
		<div id="content">
			<div class="box">
				<h2>Track Info</h2>
                                <div class="box" id="content-box1">
				<ul class="list">
					<li class="first">
						<img class="pic alignleft" src="images/track_1.jpg" width="250" height="200" alt="" />

					</li>
                                </ul>
                                </div>
                                <div class="box" id="content-box2">

				<ul class="list">
					<li class="first1">
						 <c:forEach items="${list}" var="p" varStatus="counter">    
        
                                                    <h5>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAlbum: &nbsp&nbsp${p.album}</h5> 
                                                    <h5>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTitle: &nbsp&nbsp${p.name}<br></h5> 
                                                    <h5>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSinger: &nbsp&nbsp${p.singer}<br></h5> 
                                                    <h5>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspGenre: &nbsp&nbsp${p.genre}<br></h5> 
                                                    <h5>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspRating: &nbsp&nbsp${p.rating}<br></h5>
                                                    <h5>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYear: &nbsp&nbsp${p.year}<br></h5>
        </c:forEach>

					</li>
                                </ul>
                                </div>

			</div>
			
			
			<br class="clearfix" />
                        
		</div>
		
		<br class="clearfix" />
	</div>
                    
	<div id="page-bottom">
		<div id="page-bottom-content">
                        
		</div>
		
		
	</div>
</div>

	</body>
</html>