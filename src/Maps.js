import * as React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import MapView, { Callout, Marker } from "react-native-maps"
import tw from "tailwind-react-native-classnames"

export default function Maps() {


	return (
		<View style={{ marginTop: 40, flex: 1 }}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 28.6304,
					longitude: 77.2177,
					latitudeDelta: 0.0222,
					longitudeDelta: 0.0111
				}}
			>
				<Marker
					coordinate={{
						latitude: 28.6354,
						longitude: 77.2182
					}}
					pinColor="black"
				>
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
			</MapView>
			<View style={styles.bottomContainer}></View>
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
		height: Dimensions.get("window").height,
	}
})