import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
	return (
		<View style={globalStyles.container}>
			<Text>{route.params.title}</Text>
		</View>
	);
}
