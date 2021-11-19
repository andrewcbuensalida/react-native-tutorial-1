import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function Details({ route }) {
	const { item, deleteHeat } = route.params;
	if (!item) {
		return null;
	} else {
		return (
			<View style={globalStyles.container}>
				<Card>
					<Text style={globalStyles.titleText}>{item.title}</Text>
					<Text style={globalStyles.paragraph}>{item.body}</Text>
					<View style={styles.rankContainer}>
						<Text style={globalStyles.paragraph}>Rank:</Text>
						{
							<Image
								style={styles.rankImage}
								source={
									item.rank > 3
										? images.rank.other
										: images.rank[item.rank]
								}
							/>
						}
					</View>
				</Card>
				<MaterialIcons
					name="delete"
					size={50}
					style={styles.delete}
					onPress={() => {
						deleteHeat(item.id);
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rankImage: {
		width: 70,
		height: 70,
		resizeMode: "contain",
	},
	rankContainer: {
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: "#eee",
	},
	delete: {
		color: "grey",
		bottom: 0,
		margin: 10,
		position: "absolute",
		alignSelf: "center",
	},
});
