import React from 'react'
import { View, Text } from 'react-native'
import greendot from "../assets/greendot.png"

export default function ImageContainer() {
    return (
        <View>
            <Image style={{ width: 20, height: 40, resizeMode: "contain" }} source={greendot}></Image>
        </View>
    )
}
