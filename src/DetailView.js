import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ArtistList from './ArtistList';

export default class DetailView extends Component <Props> {
    state = {
        artists: null
    }
    componentDidMount() {
        this.setState({artists:[this.props.artistDetails]});
        
     
    }
    
render(){
    <View style={styles.artistBox}>
    <Image style={styles.image} source={{uri: artists.image}}/>
    <View style={styles.info}>
        <Text style={styles.name}>{artists.name}</Text> 
    </View>
    </View>
    console.log(this.state.artists)
    const artists = this.state.artists;
    return(
        <View>
{artists && <ArtistList artist={artists}/>}
        </View>
        );
}
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation:2
    },
    image: {
        width: 150,
        height: 150
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    }
});
