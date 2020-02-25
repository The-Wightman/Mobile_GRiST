/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './components/login'
AppRegistry.registerComponent(appName, () => login);
