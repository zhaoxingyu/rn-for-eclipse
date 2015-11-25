/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 */
'use strict';

var React = require('React');
	
var SwitchAndroid = require('SwitchAndroid');
var Text = require('Text');
var StyleSheet = require('StyleSheet');
var PageBlock = require('PageBlock');
var PageView = require('PageView');
var SwitchItem = require('SwitchItem');

var SwitchExample = React.createClass({
  statics: {
    title: '<SwitchAndroid>',
    description: 'Standard Android two-state toggle component.'
  },

  getInitialState : function() {
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
      eventSwitchIsOn: false,
    };
  },

  render: function() {
    return (
      <PageView title="隐私设置">
        <PageBlock title="通讯录">
        	<SwitchItem title="允许给我推荐通讯录好友">
	          <SwitchAndroid
	            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
	            value={this.state.trueSwitchIsOn} />
	        </SwitchItem>
	        <SwitchItem title="允许通过此手机号搜到我">
	          <SwitchAndroid
	            onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
	            value={this.state.trueSwitchIsOn} />
	        </SwitchItem>
          </PageBlock>
        <Text style={styles.text}>
      		关闭后，你的通讯录好友将不能通过通讯录找到你
      	</Text>
        <PageBlock title="哪些人可以评论我的微博">
        	<SwitchItem title="所有人"/>
        	<SwitchItem title="我关注的人"/>
        	<SwitchItem title="我的粉丝"/>
        </PageBlock>
        <PageBlock title="">
	        <SwitchItem title="允许评论带图">
		        <SwitchAndroid
		          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
		          value={this.state.trueSwitchIsOn} />
	        </SwitchItem>
        </PageBlock>
        <Text style={styles.text}>
        	关闭后，其他人将不能在你的微博下发布带图片的评论
        </Text>
        <PageBlock title="我可以收到哪些人的@提醒">
	        <SwitchItem title="所有人"/>
	    	<SwitchItem title="我关注的人"/>
        </PageBlock>
      </PageView>
    );
  }
});

var styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#333333',
    top:2,
    left: 10,
  },
});

module.exports = SwitchExample;
