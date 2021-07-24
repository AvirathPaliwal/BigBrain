import React,{Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import Profile from '../Screen/Profile'
import Logout from "../screens/Logout";
import StackNavigator from './StackNavigator';
import firebase from "firebase";
import CustomSidebarMenu from '../screens/CustomSideBarMenu';

const Drawer = createDrawerNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class DrawerNavigator extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
   
  }
  render(){
    let props = this.props;
    return (
      <Drawer.Navigator>
       <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name='Profile' component={Profile}/>
      </Drawer.Navigator>
    )
  }


}