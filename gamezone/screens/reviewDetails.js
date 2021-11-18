import React from "react";
import { View, Text, Image } from "react-native";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
	return (
		<View style={globalStyles.container}>
			<Card>
				<Text style={globalStyles.titleText}>{route.params.title}</Text>
				<Text style={globalStyles.paragraph}>{route.params.body}</Text>
				<Text style={globalStyles.paragraph}>
					Rating:
					{Array(route.params.rating)
						.fill()
						.map((heart) => (
							<Image source={require("../assets/rating-1.png")} />
						))}
				</Text>
			</Card>
		</View>
	);
}
