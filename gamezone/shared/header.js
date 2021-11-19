import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";

export default function Header({ navigation, title }) {
	const openDrawer = () => {
		navigation.openDrawer();
	};
	return (
		<View style={globalStyles.header}>
			<MaterialIcons
				name="menu"
				size={28}
				onPress={openDrawer}
				style={globalStyles.burger}
			/>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/torch.jpg")}
				/>
				<Text style={globalStyles.headerText}>{title}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	logoContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		width: 40,
		height: 60,
		marginBottom: 8,
	},
});
