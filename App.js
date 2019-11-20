/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

navigator.geolocation = require('@react-native-community/geolocation');
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';




import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FetchLocation from './components/FetchLocation';
import Geolocation from '@react-native-community/geolocation';
import MapBox from '@react-native-mapbox-gl/maps';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { Dimensions } from 'react-native';
import io from 'socket.io-client';
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
])

MapboxGL.setAccessToken('pk.eyJ1IjoiaXZvemVlIiwiYSI6ImNrMGY0cXRldTBubm8zaGxxZDkwN2I5bGgifQ.lJ4SBtq7Y_o3aea9iE-BEA');






let screenHeight = Dimensions.get("window").height;
let screenWidth = Dimensions.get("window").width;
var socket = io.connect('https://gpstrack-crowdcontrol.herokuapp.com');



export default class App extends React.Component {

  state = {
    userLocation: null
  }

  getUserLocationHandler = () => {




    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);

      socket.emit('position', {
        long: position.coords.longitude,
        lat: position.coords.latitude,
        orientation: position.coords.heading
      });
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          orientation: position.coords.heading
        }
      })

    }, err => console.log(err));
  };



  render() {
    return (



      <View style={styles.container}>


        <MapboxGL.MapView styleURL={MapBox.StyleURL.Dark} centerCoordinate={[11.256, 43.77]} minZoomLevel={15} zoomLevel={15} style={styles.map} />



        <FetchLocation style={styles.FetchLocation} onGetLocation={this.getUserLocationHandler} />


      </View>

    );

  };
};


const styles = StyleSheet.create({
  map: {
    flex: 1,


  },
  container: {
    height: screenHeight,
    width: screenWidth,
  },

  FetchLocation: {

    zIndex: 10,
    position: "absolute",
  }

});
