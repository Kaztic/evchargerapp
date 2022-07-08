import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const latitude = 28.6304
const longitude = 77.2177
export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: 28.6304,
          longitude: 77.2177,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        
        }}
      />
      <Marker
        coordinate={{ latitude : latitude , longitude : longitude }}
        image={{uri: 'https://www.vhv.rs/viewpic/bhwmJ_map-pin-pink-png-transparent-png/#'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
