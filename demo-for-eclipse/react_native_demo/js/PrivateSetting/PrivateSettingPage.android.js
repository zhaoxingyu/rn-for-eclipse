'use strict';
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} = React;

var SwitchAndroidExample = require('./SwitchExample');

var PrivateSettingPage = React.createClass({
  render: function() {
    return (
    	<SwitchAndroidExample/>
   );
 }
});

AppRegistry.registerComponent('PrivateSettingPage', () => PrivateSettingPage);
module.exports = PrivateSettingPage;