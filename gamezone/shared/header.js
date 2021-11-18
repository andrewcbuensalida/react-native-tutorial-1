import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";

export default function Header({ navigation, title }) {
	const openDrawer = () => {
		console.log(navigation.openDrawer());
	};
	return (
		<View style={globalStyles.header}>
			<MaterialIcons
				name="menu"
				size={28}
				onPress={openDrawer}
				style={globalStyles.icon}
			/>
			<View>
				<Text style={globalStyles.headerText}>{title}</Text>
			</View>
		</View>
	);
}
