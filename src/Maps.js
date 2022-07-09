import * as React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import MapView, { Callout,  Marker } from "react-native-maps"
import greendot from "../assets/greendot.png"
import ImageContainer from "./ImageContainer"

export default function Mappings() {
	const pin = ({
		latitude: 28.6353,
		longitude: 77.2177
	})

	const pinColor = '#2dd4bf'
	return (
		<View style={{ marginTop: 40, flex: 1 }}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 28.6304,
					longitude: 77.2177,
					latitudeDelta: 0.0222,
					longitudeDelta: 0.0121
				}}
			>
				<Marker coordinate={{ latitude: pin.latitude, longitude: pin.longitude }} >
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
				<Marker coordinate={{ latitude: 28.6304, longitude: 77.2177 }}
					pinColor={pinColor}
					>
					<Callout>
						<Text>1</Text>
					</Callout>
				</Marker>
				<Marker coordinate={{ latitude: 28.6314, longitude: 77.2147 }}
					pinColor={pinColor}
					>
					<Callout>
						<Text>2</Text>
					</Callout>
				</Marker>
				<Marker coordinate={{ latitude: 28.6384, longitude: 77.2131 }}
					pinColor={pinColor}
					>
					<Callout>
						<Text>3</Text>
					</Callout>
				</Marker>
				<Marker coordinate={{ latitude: 28.6264, longitude: 77.2217 }}
					pinColor={pinColor}
					>
					<Callout>
						<Text>4</Text>
					</Callout>
				</Marker>
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
})