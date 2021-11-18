import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function Details({ route }) {
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{route.params.title}</Text>
				<Text style={globalStyles.paragraph}>{route.params.body}</Text>
				<View style={styles.rankContainer}>
					<Text style={globalStyles.paragraph}>Rank:</Text>
					{
						<Image
							style={styles.rankImage}
							source={
								route.params.rank > 3
									? images.rank.other
									: images.rank[route.params.rank]
							}
						/>
					}
				</View>
			</Card>
		</View>
	);
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
});
