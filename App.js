import 'react-native-gesture-handler';
import React, { Component } from 'react';
import LoginView from './src/LoginView.js';
import HomeView from './src/HomeView.js';
import DetailView from './src/DetailView.js';
import { Actions, Scene, Router} from 'react-native-router-flux'


const scenes = Actions.create(
      <Scene key="root">
        <Scene key="login" component={LoginView} hiddenNavBar/>
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="detail" component={DetailView}/>
      </Scene>
)


export default class App extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}