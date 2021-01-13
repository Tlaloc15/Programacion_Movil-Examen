import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux'



export default class ArtistList extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            artists: null
        }
    }
    componentDidMount() {
        this.updateDataSource(this.props.artists);
    }

    componentWillReceivedNewProps(newProps) {
        if (newProps.artists !== this.props.artists) {
            this.updateDataSource(newProps.artists)
        }
    }
    updateDataSource(data) {
        this.setState({
            artists:data
        }
        )};

        renderItem = (artists) => {
            return  <ArtistBox artists={artists}></ArtistBox>
        };
    render(){
        const dataArtist = this.props.artists;
          return (
            <SafeAreaView>
              <FlatList
                data={dataArtist}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
            
          );
          }
    }



 /*
    
<TouchableOpacity 
            onPress={() => goDetailView(artists)}
            >
                <ArtistBox artists={artists}></ArtistBox>
            </TouchableOpacity> 

constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
        this.state = {
            dataSource: ds
        }
    }
    componentDidMount() {
        this.updateDataSource(this.props.artists)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.artists != this.props.artists) {
            this.updateDataSource(newProps.artists)
        }
    }


    updateDataSource = (data) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }

    render() {
        return(
            <ListView
            enableEmptySections = {true}
            dataSource = {this.state.dataSource}
            renderRow = {(artist) => {
                return (
                    <ArtistBox artist={artist}/>
                )
            }} />
        )

    }
}
*/










/*
<TouchableOpacity
        style={styles.button}
        onPress={onPress}>
          <ArtistBox artist={artist}/>
      </TouchableOpacity>
      */