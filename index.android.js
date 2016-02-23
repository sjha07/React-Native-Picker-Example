/**
 * Developer - Satish Jha
 * Picker Example
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

class PickerEx extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "Java"
    };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text> Picker Example </Text>        
        </View>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="PHP" value="PHP" />
          <Picker.Item label="Pearl" value="Pearl" />
          <Picker.Item label="BackboneJS" value="BackboneJS" />
          <Picker.Item label="AngularJS" value="AngularJS" />
        </Picker>

        <Text style={{ textAlign: 'center', color: '#11DD22', fontSize: 20}}>
          You have selected <Text style={{color: '#DD2222'}}>{this.state.language} </Text>
        </Text>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PickerEx', () => PickerEx);
