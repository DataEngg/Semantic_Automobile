<!--
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SPARQL Endpoint</title>
<meta name="keywords" content="automobile ontology, semantic web, multimedia ontology, automobile manufactuers, audi, bmw, DTC, monorail," />
<meta name="description" content="Automobile Ontology as part of Semantic Web Course Cirriculum" />
<link href="themes/5/js-image-slider.css" rel="stylesheet" type="text/css" />
    <script src="themes/5/js-image-slider.js" type="text/javascript"></script>
    <link href="generic.css" rel="stylesheet" type="text/css" />
<link href="css/templatemo_style.css" rel="stylesheet" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="js/jquery-1-4-2.min.js"></script> 
<!--script type="text/javascript" src="/jqueryui/js/jquery-ui-1.7.2.custom.min.js"></script--> 
<script type="text/javascript" src="js/jquery-ui.min.js"></script> 
<script type="text/javascript" src="js/showhide.js"></script> 
<script type="text/JavaScript" src="js/jquery.mousewheel.js"></script> 

<link rel="stylesheet" type="text/css" href="css/ddsmoothmenu.css" />

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/ddsmoothmenu.js">

/***********************************************
* Smooth Navigational Menu- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

</script>

<script type="text/javascript">

ddsmoothmenu.init({
	mainmenuid: "templatemo_menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

</script> 

<!-- Load the CloudCarousel JavaScript file -->
<script type="text/JavaScript" src="js/cloud-carousel.1.0.5.js"></script>
<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<script type="text/javascript" src="js/getdetails.js"></script>
		<script type="text/javascript" src="js/jquery.elevatezoom.js"></script>
                <script type="text/javascript" src="js/jquery.dropotron-1.0.js"></script>
                <script type="text/javascript" src="js/jquery.slidertron-1.1.js"></script>
		<script type="text/javascript"><!--Insert immediate scripts here--></script>
			<link href="magiczoom/magiczoom.css" rel="stylesheet" type="text/css" media="screen"/>
			<script src="magiczoom/magiczoom.js" type="text/javascript"></script>
 
<script type="text/javascript">
$(document).ready(function(){
						   
	// This initialises carousels on the container elements specified, in this case, carousel1.
	$("#carousel1").CloudCarousel(		
		{			
			reflHeight: 40,
			reflGap:2,
			titleBox: $('#da-vinci-title'),
			altBox: $('#da-vinci-alt'),
			buttonLeft: $('#slider-left-but'),
			buttonRight: $('#slider-right-but'),
			yRadius:30,
			xPos: 480,
			yPos: 32,
			speed:0.15,
		}
	);
});
 
 
</script>
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

<style type="text/css">

#Layer1 {
	position:absolute;
	left:50px;
	top:1px;
	width:114px;
	height:107px;
	z-index:1;
}
#Layer2 {
	position:absolute;
	left:258px;
	top:53px;
	width:700px;
	height:37px;
	z-index:2;
}
#Layer3 {
	position:absolute;
	left:71px;
	top:165px;
	width:39px;
	height:39px;
	z-index:2;
}
#Layer4 {
	position:absolute;
	left:4px;
	top:112px;
	width:903px;
	height:907px;
	z-index:2;
}
#left-overlay{
	margin: 0;
	padding: 0;
	position: absolute;
	height: 550px;
	width: 1000px;
	top: 100px;
	left: -1001px;
	border: 1px solid black;
	background-color: white;
	z-index: 20;
	
	border-radius: 0 5px 5px 0;
}
#pullmap{
	position: relative;
	margin: 0;
	padding: 0;
	right: -20px;
	top: 100px;
	float: right;
	background-color: #EAEAEA;
	height:450px;
	width:20px;
	box-shadow: 2px 0 2px 0 #777;
	border-radius: 0 5px 5px 0;
}
#pullmap:hover{
	background-color: #C0C0C0;
	box-shadow: 2px 0 2px 0 #A0A0A0;
	cursor: pointer;
}
#overlay-close{
	position: absolute;
	right: 0px;
	top: 0px;
	width: 40px;
	color: #FFF;
	text-align: center;
	background-color: #6699AA;
	box-shadow: 0 0 1px 1px #6699AA;
}
#overlay-close:hover{
	width: 50px;
	box-shadow: 0 0 2px 2px #6699CC;
	background-color: #6699CC;
	cursor: pointer;
	font-weight: bold;
}
#overlay-main{
	text-align: center;
	vertical-align: center;
	height: 500px;
}
#overlay-mapImage{
	width: 800px;
	height: 500px;
}
#overlay-footer{
	border-top: 1px dashed #AAA;
	position: absolute;
	text-align: right;
	font-family: trebuchet ms;
	font-size: 16px;
	right: 0px;
	bottom: 0px;
	width: 98%;
}

#lightbox-overlay{
	display: none;
	margin: 0px;
	padding: 0px;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background-color: rgba(20, 20, 20, 0.9);
	z-index: 10;
}

#Layer5 {
	position:absolute;
	left:904px;
	top:131px;
	width:249px;
	height:363px;
	z-index:3;
}
#Layer6 {
	position:absolute;
	left:130px;
	top:603px;
	width:1014px;
	height:351px;
	z-index:4;
}
#Layer7 {
	position:absolute;
	left:148px;
	top:1038px;
	width:982px;
	height:194px;
	z-index:5;
}
#Layer8 {
	position:absolute;
	left:148px;
	top:1295px;
	width:982px;
	height:194px;
	z-index:6;
}
#Layer9 {
	position:absolute;
	left:147px;
	top:1554px;
	width:983px;
	height:197px;
	z-index:7;
}
#Layer10 {
	position:absolute;
	left:147px;
	top:1811px;
	width:982px;
	height:183px;
	z-index:8;
}
#Layer11 {
	position:absolute;
	left:147px;
	top:2072px;
	width:982px;
	height:181px;
	z-index:9;
}
#Layer12 {
	position:absolute;
	left:146px;
	top:2334px;
	width:983px;
	height:187px;
	z-index:10;
}
#Layer13 {
	position:absolute;
	left:1px;
	top:760px;
	width:1364px;
	height:40px;
	z-index:11;
}
#Layer14 {
	position:absolute;
	left:1050px;
	top:4px;
	width:176px;
	height:26px;
	z-index:12;
}
#Layer15 {
	position:absolute;
	left:3px;
	top:2053px;
	width:1186px;
	height:506px;
	z-index:13;
}
#Layer16 {
	position:absolute;
	left:-36px;
	top:2043px;
	width:1298px;
	height:522px;
	z-index:13;
	overflow:hidden;
	visibility: inherit;
	background-image:url(images/templatemo_bg_bottom.jpg);
	
	
}
#Layer17 {
	position:absolute;
	left:146px;
	top:2069px;
	width:982px;
	height:190px;
	z-index:14;
}
#Layer18 {
	position:absolute;
	left:147px;
	top:2060px;
	width:981px;
	height:217px;
	z-index:14;
}
#Layer19 {
	position:absolute;
	left:147px;
	top:2327px;
	width:980px;
	height:226px;
	z-index:15;
}
#Layer20 {
	position:absolute;
	left:850px;
	top:676px;
	width:173px;
	height:22px;
	z-index:16;
}
#Layer21 {
	position:absolute;
	left:803px;
	top:809px;
	width:311px;
	height:77px;
	z-index:16;
}
#Layer22 {
	position:absolute;
	left:802px;
	top:640px;
	width:250px;
	height:31px;
	z-index:17;
}
#Layer23 {
	position:absolute;
	left:798px;
	top:686px;
	width:288px;
	height:113px;
	z-index:18;
}

.style1 {color: #33FFFF}
#Layer24 {
	position:absolute;
	left:180px;
	top:4px;
	width:841px;
	height:71px;
	z-index:91;
}
</style>
</head>

<body id="home">
<div id="Layer24"><img src="images/Automobile.png" width="841" height="71"/></div><br><br><br>
<div id="left-overlay">
			<div id="pullmap">
				<img src="images/pullmap.png"/>
			</div>
			<div style="border-bottom: 2px solid #ddd;text-align: right;margin: 2px;margin-top: 25px;">
				<div id="overlay-close">Close</div>
				<div style="font-family: verdana;font-weight: bolder;">Automobile Ontology Graph</div>
			</div>
			<div id="overlay-main">
				<a href="images/automobileontologygraph.jpg" title="Automobile Graph" class="MagicZoom" rel="right-click: true;"><img id="overlay-mapImage" src="images/automobileontologygraph.jpg" data-zoom-image="images/automobileontologygraph.jpg"/>
			</div>
			<div id="overlay-footer">Click on the Ontology items to explore</div>
		</div>



<!-- END of templatemo_footer -->
<div id="Layer13">
<div id="templatemo_footer_wrapper">
    <div id="templatemo_footer">
    	<a href="credits.html" target="_parent">Credits</a> || Copyright © 2013 AutomobileOntology.
    </div> <!-- END of templatemo_footer_wrapper -->
</div>
</div>
<div id="Layer14">
  <div class="footer_social_button">
                    <a href="http://facebook.com/automobileontology/"><img src="images/facebook.png" title="facebook" alt="facebook" /></a>
                   
                    <a href="http://twitter.com/automobileonto/"><img src="images/twitter.png" title="twitter" alt="twitter" /></a>
                    <a href="https://www.youtube.com/watch?v=or2k7dZBr5c"><img src="images/youtube.png" title="youtube" alt="youtube" /></a>
                  
</div></div>
<div id="templatemo_header_wrapper">
<div class="page-out">
<div class="page-in">
<div class="page">
<div class="main">
<div class="header">
 <div class="topmenu">
<ul>
  <li style="background: transparent none repeat scroll 0% 50%; -moz-background-clip: initial; -moz-background-origin: initial; -moz-background-inline-policy: initial; padding-left: 0px;"><a href="index.html"><b><span>Home</span></b></a></li>
  <li><a href="Mediasearch.html"><b><span>Multimedia Search</span></b></a></li>
  <li><a href="http://localhost:3030/sparql.tpl"><b><span>SPARQL Endpoint&nbsp;</span></b></a></li>
  <li><a href="OntologyTour.html"><b><span>Ontology Tour</span></b></a></li>
  <li><a href="credits.html"><b><span>Credits</span></b></a></li>
 
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
  <!-- end of templatemo_menu -->
    <div class="cleaner"></div>
</div>	<!-- END of templatemo_header_wrapper -->
<div class="Sparqlendpoint" id="spend">
  <div align="left" class="style1">
   
  </div>
</div>
#set($ds="/ds")
#set( $srvQuery = $mgt.serviceQuery($ds) )
#set( $srvUpdate = $mgt.serviceUpdate($ds) )
#set( $srvUpload= $mgt.serviceUpload($ds) )
#set( $srvGraphR = $mgt.serviceGraphRead($ds) )
#set( $srvGraphRW = $mgt.serviceGraphReadWrite($ds) )

<!-- error case ... -->
<!-- Debug
<ul>
  <li>${ds}</li>
  <li>$srvQuery</li>
  <li>$srvUpdate</li>
  <li>$srvUpload</li>
  <li>$srvGraphR</li>
  <li>$srvGraphRW</li>
</ul>
-->

    <h1></h1>
    <hr/>
	<br><br>
<h3><p align="center"><b><font color="#c2c2d6">Please Upload Your Turtle File In Format Of .ttl</font></b></p></h3>
    <div class="moreindent">
	 
      <form action="${ds}/${srvUpload}" enctype="multipart/form-data" method="post"><br/>
        <p align="center"><b><font color="#c2c2d6">File:<font></b> <input type="file" name="UNSET FILE NAME" size="40" multiple=""><input type="submit" value="Upload" style="height:25px; width:100px"></p>
      </form>
    </div>
	<br>
	<br>
	<hr/>
    <p><b></b></p>
    <div class="moreindent" id="slide" style="width:1200px;height:220px">
	<div style="width:50px;height:200px;float:left" align="left" id="slide1"></div>
	<div style="width:600px;height:200px;float:left" align="left" id="slide2">
	<div align="center">
      <form action="${ds}/${srvQuery}" method="GET"  accept-charset="UTF-8" name="formName2">
	  <br><br><br><br>
	  <h3><p align="center"><b><font color="#c2c2d6">Enter the SPARQL Query</font></b></p></h3><br><br><br><br>
	  
        <p align="center"><textarea name="query" cols="70" rows="10">prefix : <http://Ontology/Automobile#> 
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
prefix swrl: <http://www.w3.org/2003/11/swrl#> 
prefix owl: <http://www.w3.org/2002/07/owl#> 
prefix xsd: <http://www.w3.org/2001/XMLSchema#> 
prefix swrlb: <http://www.w3.org/2003/11/swrlb#> 
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> </textarea></p><br><br>
        
<p align="center"><input type="submit" value="Get Results" /></p>
       <p align="center"><select name="output" style="visibility: hidden"></p>
             <option value="text">Text</option>
          
        </select>
	    
	    
      </form>
</div>	  
</div>
	<div style="width:400px;height:200px;float:left" align="left" id="slide1">
	<div align="center">
	<script type="text/javascript">
	function dosubmit()
	{
	var d="prefix : <http://Ontology/Automobile#>\
	\
	\
	\
	\
	prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
	\
	\
	prefix swrl: <http://www.w3.org/2003/11/swrl#>\
	\
	\
	\
	prefix owl: <http://www.w3.org/2002/07/owl#>\
	\
	\
	\
	prefix xsd: <http://www.w3.org/2001/XMLSchema#>\
	\
	\
	\
	\
	\
	\
	prefix swrlb: <http://www.w3.org/2003/11/swrlb#>\
	\
	\
	\
	\
	\
	\
	\
	prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
	\
	";
var selectedItem = document.formName1.text.selectedIndex;
var selectedItemValue =document.formName1.text.options[selectedItem].value;
var selectedItemText =document.formName1.text.options[selectedItem].text;
if (selectedItem != 0) {
document.formName2.query.value =d.concat(selectedItemText);
}
else
{
document.formName2.query.value="You Have Selected Wrong Option From There";
}

	}
	</script>
	<br>
	<br>
	<br>
	<br>
	<b><h3><b><font color="#c2c2d6">Select Query From Here</font></b></h3></b>
	<br>
	<form name="formName1">
  <select name="text" onChange="dosubmit()">
  <option>Select Your Query Here</option>
  <option id="a2">Select ?x
                  where{?x rdfs:subClassOf _:b0}</option>
  <option id="a3">Select ?x ?y Where{?y rdf:first ?x}</option>
  <option id="a4">Select ?x ?y
                  Where{?y rdfs:subClassOf ?x}</option>
  <option id="a5">Select ?y
                  Where{?y a owl:NamedIndividual}
				  </option>
  <option id="a6">Select ?y Where{?y a owl:Class}</option>
  
</select>
</form>

</div>
</div>
    </div>
      </body>
</html>   
