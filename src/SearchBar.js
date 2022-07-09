import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import menu from "../assets/menu.png"
import greendot from "../assets/greendot.png"
import candlestick from "../assets/candlestick.png"

export default function SearchBar() {
    return (
        <View style={tw`flex-row m-4 p-0 justify-between`}>
            <Image style={{ width: 20, height: 40, resizeMode: "contain" , marginLeft: 6}} source={menu}></Image>
            <View style={tw`flex-row justify-between border 
                            bg-gray-800 text-gray-300 px-5 
                            mx-5 text-center rounded-xl 
                            justify-center items-center mb-48`}>
                <Image style={{ width: 15, height: 45, resizeMode: "contain" }} source={greendot}></Image>
                <Text style={tw`text-gray-50 text-center text-xs px-5`}>Search for compatible chargers</Text>
                <Image style={{ width: 20, height: 45, resizeMode: "contain" }} source={candlestick}></Image>
            </View>
        </View>
    )
}
