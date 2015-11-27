/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule SwitchItem
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var SwitchItem = React.createClass({
	propTypes: {
	    title: React.PropTypes.string,
	    description: React.PropTypes.string,
	},
	  
	render:function(){
		return(
			<View style={styles.container}>
		        <View style={styles.TextContainer}>
		          <Text style={styles.titleText}>
		            {this.props.title}
		          </Text>
		        </View>
		        <View style={styles.children}>
		          {this.props.children}
		        </View>
	      </View>
		);
	}
});

var styles = StyleSheet.create({
  container: {
	position: 'relative',
    /*borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 10,
    marginBottom: 0,*/
	borderBottomColor: '#e9eaed',
    /*height: 45,*/
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  TextContainer: {
    /*borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',*/
	/*height: 30,*/
  },
  text: {
	/*position: 'absolute',
    top: 0,
    padding: 10,
    fontSize: 14,*/
    color: '#333333',
  },
  children: {
	position: 'absolute',
    /*top: 0,*/
    right: 0,
    /*padding: 10,*/
  }
});

module.exports = SwitchItem;