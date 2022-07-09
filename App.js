import React from 'react'
import { View, Text } from 'react-native'
import Maps from './src/Maps'
import ChargerData from "./ChargerData.json"
import tw from 'tailwind-react-native-classnames'
import SearchBar from './src/SearchBar'
import ChargerPoints from './src/ChargerPoints'

export default function App() {
  return (
      <View>           
          <Maps />
          <SearchBar />
          {/* <ChargerPoints/> */}
     </View>
  )
}
