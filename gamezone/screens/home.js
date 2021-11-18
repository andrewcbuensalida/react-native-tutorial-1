import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
	const [reviews, setReviews] = useState([
		{
			title: "Peak run of the year",
			rank: 1,
			body: "lorem ipsum",
			key: "1",
		},
		{
			title: "Getting there",
			rank: 3,
			body: "lorem ipsulorema af asf asdf asdf asf af asdf af asf asf af af fd asf af  lorem		af af asf af m",
			key: "2",
		},
		{
			title: "First run of the year",
			rank: 8,
			body: "lorem ipsum",
			key: "3",
		},
		{
			title: "After alot of training",
			rank: 2,
			body: "lorem ipsum",
			key: "4",
		},
	]);
	return (
		<View style={globalStyles.container}>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("Details", item)}
					>
						<Card>
							<Text style={globalStyles.titleText}>
								{item.title}
							</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
			<Button
				title="Go to about"
				onPress={() => navigation.navigate("About")}
			/>
		</View>
	);
}
