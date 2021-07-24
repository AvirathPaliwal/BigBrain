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

export default class AnswerScreen extends Component {
    constructor(props) {
      super(props);

    }

render(){
    return(
       <View style={styles.container}>
         <Text>
          Answer Screen
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