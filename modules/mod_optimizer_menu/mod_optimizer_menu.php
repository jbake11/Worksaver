<?php
/**
 * Mod Optimizer Menu.
 */
 
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

// Include the syndicate functions only once

$meta           = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
$modulewidth    = $params->get('modulewidth', '960');
$metaload       = $params->get('metaload', '1');
$metaloadval    = $params->get('metaloadval', '<meta name="viewport" content="width=device-width, initial-scale=1.0">');
$link1type      = $params->get( 'link1type', '_self' );
$link[1]   		= $params->get( 'link1', 'http://www.unitecms.net' ); 
$link1on        = $params->get('link1on', '1');
$class[1]       = $params->get( 'class1', 'fa-external-link'); 
$link2type      = $params->get( 'link2type', '_self' );
$link[2]   		= $params->get( 'link2', 'http://www.facebook.com' ); 
$link2on        = $params->get('link2on', '1');
$class[2]       = $params->get( 'class2', 'fa-facebook');
$link3type      = $params->get( 'link3type', '_self' );
$link[3]   		= $params->get( 'link3', 'http://www.twitter.com' ); 
$link3on        = $params->get('link3on', '1');
$class[3]       = $params->get( 'class3', 'fa-twitter');
$link4type      = $params->get( 'link4type', '_self' );
$link[4]   		= $params->get( 'link4', 'mailto:support@unitecms.net' ); 
$link4on        = $params->get('link4on', '1');
$class[4]       = $params->get( 'class4', 'fa-envelope');
$link5type      = $params->get( 'link5type', '_self' );
$link[5]   		= $params->get( 'link5', 'tel:5555555' ); 
$link5on        = $params->get('link5on', '1');
$class[5]       = $params->get( 'class5', 'fa-phone');

// color settings
	$backgroundcolor = $params->get('backgroundcolor', '#333');
	$backgroundbordercolor = $params->get('backgroundbordercolor', '#ffffff');
	$coloricon = $params->get('coloricon', '#ffffff');
	$coloricontouch = $params->get('coloricontouch', '#E52B50');
	$backgroundcolortouch = $params->get('backgroundcolortouch', '#000000');

// after calling parameters add css
	$document =& JFactory::getDocument();
	$document->addStyleSheet( 'modules/mod_optimizer_menu/assets/css/uomm-icons.css' );

require JModuleHelper::getLayoutPath('mod_optimizer_menu', $params->get('layout', 'default'));

?>