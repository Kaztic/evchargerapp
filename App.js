import React from 'react'
import { View, Text } from 'react-native'
import Maps from './src/Maps'
import ChargerData from "./ChargerData.json"
import tw from 'tailwind-react-native-classnames'
import SearchBar from './src/SearchBar'

export default function App() {
  return (
    <View style={tw`android:pt-2 bg-white `}>
      <Maps />
      <SearchBar/>
    </View>
  )
}
