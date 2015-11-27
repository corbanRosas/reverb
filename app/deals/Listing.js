import React, { View, Text, StyleSheet, TouchableOpacity, WebView } from 'react-native';
import { connect } from 'react-redux/native';

import navigateTo from '../shared/router/routerActions';
import { colors, styles as globalStyles } from '../../styles/global';

export default class Listing extends React.Component {

  constructor(props) {
    super(props);

    this._onClose = this._onClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  }
  
  componentWillUnmount() {
  }
  
  _onClose() {
    this.props.dispatch(navigateTo('/deals'));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={globalStyles.header}>
          <View style={globalStyles.navbarButton}>
          </View>
          <View style={globalStyles.title}>
            <Text style={globalStyles.titleText}>Listing</Text>
          </View>
          <TouchableOpacity onPress={this._onClose} style={[globalStyles.navbarButton, globalStyles.headerRight]}>
            <Text style={globalStyles.navbarButtonText}>Close</Text>
          </TouchableOpacity>            
        </View>
        <WebView style={styles.webview} url={this.props.listingLink} scalesPageToFit={true} />
      </View>      
    );
  }

}

function mapStateToProps(state) {
  return {
    listingLink: state.deals.selectedListing
  };
}

export default connect(mapStateToProps)(Listing)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  }
});