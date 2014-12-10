/* JCE Editor - 2.4.3 | 11 September 2014 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2014 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
(function(){var DOM=tinymce.DOM,Event=tinymce.dom.Event,extend=tinymce.extend,each=tinymce.each,explode=tinymce.explode;tinymce.create('tinymce.plugins.FontColorPlugin',{init:function(ed,url){var self=this;this.editor=ed;ed.onNodeChange.add(function(ed,cm,n){var s=ed.settings,c;function updateColor(controlId,color){if(c=cm.get(controlId)){if(!color)
color=s.default_color;if(color!==c.value){c.displayColor(color);}}}
if(s.theme_advanced_show_current_color){updateColor('forecolor',n.style.color);updateColor('backcolor',n.style.backgroundColor);}});},createControl:function(n,cf){switch(n){case"forecolor":return this._createForeColorMenu();break;case"backcolor":return this._createBackColorMenu();break;}},_createForeColorMenu:function(){var c,self=this,ed=self.editor,s=ed.settings,o={},v;o.more_colors_func=function(){ed.execCommand('mceColorPicker',false,{color:c.value,func:function(co){c.setColor(co);}});};if(v=s.theme_advanced_text_colors)
o.colors=v;o.default_color=s.fontcolor_foreground_color||'#000000';o.title='advanced.forecolor_desc';o.cmd='ForeColor';o.scope=this;c=ed.controlManager.createColorSplitButton('forecolor',o);return c;},_createBackColorMenu:function(){var c,self=this,ed=self.editor,s=ed.settings,o={},v;o.more_colors_func=function(){ed.execCommand('mceColorPicker',false,{color:c.value,func:function(co){c.setColor(co);}});};if(v=s.theme_advanced_background_colors)
o.colors=v;o.default_color=s.fontcolor_background_color||'#FFFF00';o.title='advanced.backcolor_desc';o.cmd='HiliteColor';o.scope=this;c=ed.controlManager.createColorSplitButton('backcolor',o);return c;}});tinymce.PluginManager.add('fontcolor',tinymce.plugins.FontColorPlugin);})();