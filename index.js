/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LinearGradient from 'react-native-linear-gradient';
import {name as appName} from './app.json';
import login from './components/Screens/login'
AppRegistry.registerComponent(appName, () => App);
//for demonstration purposes only this should be toggle druign developer showcases.
console.disableYellowBox = true;
