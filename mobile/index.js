/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import App from './src/App';
import { name as appName } from './app.json';

// A page below the top one keeps its state but is not rebuilt while it is covered. Without
// this, a chat that is streaming below the settings stack still re-renders on every flush.
enableFreeze(true);

AppRegistry.registerComponent(appName, () => App);
