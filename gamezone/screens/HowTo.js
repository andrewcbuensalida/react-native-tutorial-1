import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function HowTo({ navigation }) {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.paragraph}>
				Click + button and add your heat.
			</Text>
			{/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
		</View>
	);
}
