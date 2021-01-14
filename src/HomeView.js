import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArtistList from './ArtistList'
import {getMusicData} from './api-client'

export default class HomeView extends Component {
    state = {
        dataArtist: null
    }
    
    componentDidMount() {
        getMusicData().then(data => this.setState({ dataArtist: data }))
    }


    render() {
        const artists = this.state.dataArtist
        return(
            <View style={StyleSheet.container}>
                {artists && <ArtistList artists={artists}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 1
    
    }
    
})
/*
export default class HomeView extends Component {
    state = {
        artists: null 
    }
    
    componentDidMount() {
        getMusicData().then(data => this.setState({ artists: data }))
    }


    render() {
        const artists = this.state.artists
        console.log(`Este artis viene de homeView ${artists}`)

        return(
            <View styles={StyleSheet.container}>
                {artists && <ArtistList artists={artists}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 1
    
    }
    
})

*/