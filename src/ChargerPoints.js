import React from 'react'
import { View, Text, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const chargers =
	[
		{
			name: "Expressway charging - mariam enterprise",
			id: "a001",
			address: "Connaught place, delhi",
			distance: "2.1Km",
			distance_metrics: "metres",
			latitude: "22.4532122",
			longitude: "77.4545322",
			connector_types: ["lvl1dc-2", "lvl2dc-1", "normalac-1"]
		}
    ]
    
export default function ChargerPoints() {
    return (
        <View>
            <FlatList
                data={chargers}
                horizontal
                renderItem={({ item  }) => (
                        <View style={tw`flex-1 mt-72 pt-4 pb-36 px-8 bg-gray-800 flex-1 border rounded-xl`}>
                            <Text style={tw`text-left font-bold text-gray-100 uppercase pb-8 `}>{item.name}</Text>
                            <Text style={tw`text-center font-semibold text-gray-100`}>{item.address}</Text>
                            <Text style={tw`text-center font-semibold text-pink-500 pb-4`}>{item.distance}</Text>
                            <Text style={tw`text-center font-semibold text-green-500`}>CONENCTOR TYPES</Text>
                            <Text style={tw`text-center font-semibold text-gray-100`}>{item.connector_types}</Text>
                        </View>
                        
                )}/>
        </View>
    )
}
