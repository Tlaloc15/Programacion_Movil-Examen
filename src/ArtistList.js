import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistList extends Component<Props> {
        

    render() {
        const renderItem = ({item}) => (
            <TouchableOpacity 
            onPress={() => goDetailView(item.name, item.image)}
            >
                <ArtistBox image={item.image} name={item.name}></ArtistBox>
            </TouchableOpacity>
          );
          const goDetailView = (artistName1, artistImage1) => {
              Actions.detail({artistName: artistName1, artistImage: artistImage1});
          }
          return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={this.artists}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
            
          );
          }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


 /*
    


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