import React, { useState } from "react";
import {
	Modal,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(true);
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
			title: "After alot of training and dieting",
			rank: 2,
			body: "lorem ipsum",
			key: "4",
		},
	]);
	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide">
				<View style={styles.modalContent}>
					<MaterialIcons
						name="close"
						size={40}
						style={{ ...styles.modalToggle, ...styles.modalClose }}
						onPress={() => setModalOpen(false)}
					/>
					<Text>Hello</Text>
				</View>
			</Modal>
			<MaterialIcons
				name="add"
				style={styles.modalToggle}
				onPress={() => setModalOpen(true)}
				size={40}
			/>
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

const styles = StyleSheet.create({
	modalToggle: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		borderWidth: 2,
		borderColor: "#f2f2f2",
		padding: 10,
		borderRadius: 10,
		alignSelf: "center",
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
	modalContent: {
		flex: 1,
	},
});
