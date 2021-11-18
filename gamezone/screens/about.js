import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Button title="Go Back" onPress={() => navigation.goBack()} />
		</View>
	);
}
