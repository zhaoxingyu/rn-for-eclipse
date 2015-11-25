'use strict';
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} = React;

var SwitchAndroidExample = require('./SwitchExample');
/*var AccountPrivacyExample = require('./AccountPrivacyExample');*/

var PrivateSettingPage = React.createClass({
  render: function() {
    return (
    	<SwitchAndroidExample/>
    	/*<AccountPrivacyExample/>*/
   );
 }
});

AppRegistry.registerComponent('PrivateSettingPage', () => PrivateSettingPage);
module.exports = PrivateSettingPage;