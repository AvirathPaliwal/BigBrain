import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';

export default class CalculatorScreen extends Component {
    constructor(props) {
      super(props);

    }

render(){
    return(
       <View style={styles.container}>
         <Text>
          Calculator Screen
         </Text>
       </View>
         
    )
}

}
const styles = StyleSheet.create({
    container: {
        flex: 1,

      },

})