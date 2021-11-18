import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	titleText: {
		fontFamily: "nunito-bold",
		fontSize: 30,
		color: "#333",
		borderBottomWidth: 2,
		borderColor: "black",
		borderStyle: "solid",
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
	},
	header: {
		backgroundColor: "orange",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		height: 100,
	},
	icon: {
		position: "absolute",
		left: 10,
		padding: 10,
		alignItems: "flex-end",
		fontSize: 40,
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 30,
		color: "#333",
		padding: 10,
	},
});
