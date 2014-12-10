<?php
/**
 * @package   OSContent
 * @contact   www.alledia.com, hello@alledia.com
 * @copyright 2014 Alledia.com, All rights reserved
 * @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
 */

defined('_JEXEC') or die();

require_once JPATH_ADMINISTRATOR . '/components/com_oscontent/views/view.php';

/**
 * Mass Delete View
 *
 * @since  1.0.0
 */
class OSContentViewDelete extends OSView
{
    /**
     * Method to display the view
     *
     * @param   string $tpl Template file
     *
     * @access    public
     * @return  void
     */
    public function display($tpl = null)
    {
        JToolBarHelper::title(JText::_('COM_OSCONTENT_DELETE_CONTENT'), 'oscontent.png');
        JToolBarHelper::custom('delete.delete', 'delete.png', 'delete_f2.png', JText::_('COM_OSCONTENT_DELETE'), false);
        JToolbarHelper::cancel('delete.cancel');
        JToolBarHelper::divider();
        JToolBarHelper::spacer();
        JToolBarHelper::preferences('com_oscontent');

        // Get component params
        $params = JComponentHelper::getParams('com_oscontent');

        // Get data
        $lists = $this->get('Data');

        // Joomla 3.x Backward Compatibility
        if (version_compare(JVERSION, '3.0', '<')) {
            $this->assignRef('params', $params);
            $this->assignRef('lists', $lists);
        } else {
            $this->params = $params;
            $this->lists  = $lists;
        }

        parent::display($tpl);
    }
}
