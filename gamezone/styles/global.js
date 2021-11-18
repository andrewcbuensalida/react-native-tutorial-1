import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	titleText: {
		fontFamily: "nunito-bold",
		fontSize: 25,
		color: "#333",
		// padding: 0,
	},
	paragraph: {
		fontSize: 22,
		// padding: 8,
		marginTop: 5,
	},
	header: {
		backgroundColor: "#f08e2c",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		height: 100,
	},
	burger: {
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

export const images = {
	rank: {
		1: require("../assets/1st.png"),
		2: require("../assets/2nd.png"),
		3: require("../assets/3rd.png"),
		other: require("../assets/blank-medal.jpg"),
	},
};
