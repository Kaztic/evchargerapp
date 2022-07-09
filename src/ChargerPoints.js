/* import React from 'react'
import { View, Text, Flatlist } from 'react-native'
import {Data} from "../ChargerData.json"

export default function ChargerPoints() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ Data }
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
 */