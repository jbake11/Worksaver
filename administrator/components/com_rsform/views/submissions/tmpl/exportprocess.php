<?php
/**
* @package RSForm! Pro
* @copyright (C) 2007-2014 www.rsjoomla.com
* @license GPL, http://www.gnu.org/copyleft/gpl.html
*/

defined('_JEXEC') or die('Restricted access');
?>
<div class="progressWrapper"><div class="progressBar" id="progressBar">0%</div></div>
<p><?php echo JText::sprintf('RSFP_EXPORT_START_MSG', '<strong id="exportmsg">3</strong>'); ?></p>

<input type="hidden" value="<?php echo $this->file; ?>" id="ExportFile" />
<input type="hidden" value="<?php echo $this->exportType; ?>" id="exportType" />

<div style="display: none" id="backButtonContainer">
<button type="button" class="rs_button" onclick="document.location.href='<?php echo JRoute::_('index.php?option=com_rsform&view=forms&layout=edit&formId='.$this->formId); ?>'"><?php echo JText::_('RSFP_BACK_TO_FORM'); ?></button>
</div>

<script type="text/javascript">
t = setInterval(function() {
	var count = parseInt(document.getElementById('exportmsg').innerHTML);
	if (count <= 0)
		return clearTimeout(t);
	
	document.getElementById('exportmsg').innerHTML = count - 1;
}, 1000);

setTimeout(function() {
	exportProcess(0,<?php echo $this->limit; ?>,<?php echo $this->total;?>);
}, 3000);
</script>