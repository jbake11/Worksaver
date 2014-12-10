<?php
/**
 * Mod Optimizer Menu.
 */
 
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' ); ?>
<style>
#zicontainer {
	background-color:rgba(255,255,255,0.8);
	bottom: 0;
	height: 100%;
	left: 0;
	opacity: 0;
	position: fixed;
	top: 0;
	transition: all 0.3s ease-in-out 0s;
	visibility: hidden;
	width: 100%;
	z-index: -3;
}
#zioverlay {
	bottom: 0;
	height: 100%;
	left: 0;
	opacity: 0;
	position: fixed;
	top: 0;
	transition: all 0.3s ease-in-out 0s;
	visibility: hidden;
	width: 100%;
	z-index: -3;
}
input {
	display: none;
}

#zicircle a {
	text-decoration: none;
}
#ziwrap_bottom {
	border-radius: 50%;
	bottom:10px;
	left:10px;
	position: fixed;
	text-align: center;
	z-index: 3;
	font-family: 'FontAwesome';
	display:none;
}
#ziwrap_bottom #zimenu {
	display: none;
}
#ziwrap_bottom #zitrigger {
	background-color: <?php echo $backgroundcolor ?>;
	border-radius: 50%;
	color: <?php echo $coloricontouch ?>;
	cursor: pointer;
	display: block;
	font-size: 25px;
	height: 50px;
	line-height: 50px;
	transition: all 0.3s ease-in-out 0s;
	width: 50px;
	z-index: 1;
	border:3px solid <?php echo $backgroundbordercolor ?>;
	box-shadow:2px 2px 5px rgba(0,0,0,0.3);
}

#ziwrap_bottom #zitrigger i {
	font-style:normal;
}
#ziwrap_bottom #zitrigger:hover {
	background-color: <?php echo $backgroundcolor ?>;
	color: <?php echo $coloricon ?>;
}
#ziwrap_bottom #zicircle {
	opacity: 0;
	text-align: center;
	transform: scale(0);
	transition: all 0.3s ease-in-out 0s;
	z-index: -3;
	position:relative;
}
#ziwrap_bottom #zimenu_bottom:checked ~ #zicircle {
 opacity: 1;
 transform: scale(1);
}
#ziwrap_bottom #zimenu_bottom:checked ~ #zitrigger {

}

#zimenu_bottom:checked ~ #zioverlay {
 opacity: 0.7;
 visibility: visible;
 
}
#zimenu_bottom:checked ~ #zicontainer {
 opacity: 0.7;
 visibility: visible;
 
}
#zicircle a {
	text-decoration: none;
}
#ziwrap_bottom #zicircle i {
	background-color: <?php echo $backgroundcolor ?>;
	border-radius: 50%;
	color: <?php echo $coloricon ?>;
	display: block;
	float: left;
	font-size:25px;
	height: 50px;
	line-height: 50px;
	padding: 0;
	text-align: center;
	transition: all 0.3s ease-in-out 0s;
	width: 50px;
	border:3px solid <?php echo $backgroundbordercolor ?>;
	box-shadow:2px 2px 5px rgba(0,0,0,0.3);
	font-style:normal;
}
#ziwrap_bottom #zicircle i:hover {
	background-color: <?php echo $backgroundcolortouch ?>;
	color: <?php echo $coloricontouch ?>;
	font-size: 25px;
}
#ziwrap_bottom #zioverlay {
	opacity: 0;
	text-align: center;
	transform: scale(0);
	transition: all 0.3s ease-in-out 0s;
	z-index: 1;
	position:relative;
}
#ziwrap_bottom #zimenu_bottom:checked ~ #zioverlay {
 opacity: 1;
 transform: scale(1);
}
#ziwrap_bottom #zimenu_bottom:checked ~ #zicontainer {
 opacity: 1;
 transform: scale(1);
}
#ziwrap_bottom #zioverlay i:hover {
	color: <?php echo $coloricon ?>;
	font-size: 25px;
}

#ziwrap_bottom #zimenu_bottom:checked ~ #zitrigger {
    display: none;
}

#ziwrap_bottom #zicircle a:nth-child(1) {
	left:0px;
	bottom:60px;
	position:absolute;
}
#ziwrap_bottom #zicircle a:nth-child(2) {
	left:0px;
	bottom:120px;
	position:absolute;
}
#ziwrap_bottom #zicircle a:nth-child(3) {
	left:0px;
	bottom:180px;
	position:absolute;
}
#ziwrap_bottom #zicircle a:nth-child(4) {
	left:0px;
	bottom:240px;
	position:absolute;
}
#ziwrap_bottom #zicircle a:nth-child(5) {
	left:0px;
	bottom:300px;
	position:absolute;
}

@keyframes zianimation {
0% {
 transform: scale(0);
}
50% {
 transform: scale(1);
}
100% {
 transform: scale(0);
}
}
@keyframes zianimation {
0% {
 transform: scale(0);
}
50% {
 transform: scale(1);
}
100% {
 transform: scale(0);
}
}

@media (max-width: <?php if ($metaloadval==$meta): echo $modulewidth; endif; ?>px) {
#ziwrap_bottom
{
	display:block;
}
}

</style>

