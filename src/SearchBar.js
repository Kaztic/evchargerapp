import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import menu from "../assets/menu.png"

export default function SearchBar() {
    return (
        <View>
            <Image style={tw`scale`} source={menu}></Image>
            <Text>Hello world</Text>
        </View>
    )
}
