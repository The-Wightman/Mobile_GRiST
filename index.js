/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LinearGradient from 'react-native-linear-gradient';
import {name as appName} from './app.json';
import login from './components/login'
AppRegistry.registerComponent(appName, () => login);
