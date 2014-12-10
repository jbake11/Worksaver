<?php // no direct access
defined( '_JEXEC' ) or die( 'Restricted access' ); ?>
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
<?php include_once("head.php") ?>
<?php include_once("style.php") ?>

<div id="ziwrap_bottom">
  <input type="checkbox" id="zimenu_bottom" name="zimenu">
  
  <div id="zioverlay">
  <label id="zitrigger" for="zimenu_bottom"><i class="fa-times"></i></label>
  </div>
  <div id="zicontainer">
  
  </div>
  
  <div id="zicircle"> 
  <?php
							if (( $link5on ) && ($metaloadval==$meta)):
							{
							echo '<a href="'.$link[5].'" target="'.$link5type.'"><i class="'.$class[5].'"></i></a>'; 				
							}
							endif
							?>
  <?php
							if (( $link4on ) && ($metaloadval==$meta)):
							{
							echo '<a href="'.$link[4].'" target="'.$link4type.'"><i class="'.$class[4].'"></i></a>'; 				
							}
							endif
							?>
  <?php
							if (( $link3on ) && ($metaloadval==$meta)):
							{
							echo '<a href="'.$link[3].'" target="'.$link3type.'"><i class="'.$class[3].'"></i></a>'; 				
							}
							endif
							?>
  <?php
							if (( $link2on ) && ($metaloadval==$meta)):
							{
							echo '<a href="'.$link[2].'" target="'.$link2type.'"><i class="'.$class[2].'"></i></a>'; 				
							}
							endif
							?>
  <?php
							if (( $link1on ) && ($metaloadval==$meta)):
							{
							echo '<a href="'.$link[1].'" target="'.$link1type.'"><i class="'.$class[1].'"></i></a>'; 				
							}
							endif
							?>
  </div>
  <label id="zitrigger" for="zimenu_bottom"><i class="fa-plus"></i></label>
</div>
