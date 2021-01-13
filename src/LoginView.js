import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuarioNombre: '',
      contraNombre: ''
    }

  }
  /*
  alertInfo = () => {
       Alert.alert(
          `Usuario: ${this.state.usuarioNombre}`,
          `Contraseña: ${this.state.usuarioContra}`
       )
    }
    */
  changeUsuario = text => {
    this.setState({usuarioNombre: text})
    console.log(this.state.usuarioNombre)
  }
  changeContra = text => {
    this.setState({usuarioContra: text})
    console.log(this.state.usuarioContra)
  }

  getLogin = () => {
      console.log("Presionaste el botón")
      Actions.home()
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/Pumas.png')}/>
        <TextInput style={styles.box} placeholder='Usuario'
        onChangeText = {(value) => 
        this.changeUsuario(value)} 
        />
        <TextInput style={styles.box} placeholder='Contraseña'
        onChangeText = {(value) => 
        this.changeContra(value)}  />
        <Button
        onPress={this.getLogin}
        title="ENTRAR"
        color="#841584"
        accessibilityLabel=" about this purple botton"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: .6,
    flexDirection: 'column',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tinyLogo: {
    width: 300,
    height: 170,
  },
  box: {
    width: 300,
    height: 50,
    backgroundColor: 'orange',
  },

});