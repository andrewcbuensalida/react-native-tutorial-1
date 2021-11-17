import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
			<Button
				title="Go to about"
				style={globalStyles.button}
				onPress={() => navigation.navigate("About")}
			/>
		</View>
	);
}
