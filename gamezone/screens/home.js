import React, { useState, useEffect } from "react";
import {
	Modal,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import HeatForm from "./heatForm";

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [heat, setHeat] = useState([
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
	const addHeat = (heat) => {
		heat.key = Math.random().toString();
		setHeat((prev) => [heat, ...prev]);
		setModalOpen(false);
	};
	useEffect(() => {
		console.log(`hello`);
		const getHeats = async () => {
			// const result = await fetch("https://swapi.dev/api/people/1/");
			const result = await fetch(
				"https://heat.anhonestobserver.com/home"
			);
			const luke = await result.json();
			console.log(`This is luke`);
			console.log(luke);

			// const heats =
		};
		getHeats();
	}, []);

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name="close"
							size={30}
							style={{
								...styles.modalToggle,
								...styles.modalClose,
							}}
							onPress={() => setModalOpen(false)}
						/>
						<Text
							style={{
								textAlign: "center",
								...globalStyles.titleText,
							}}
						>
							Add heat
						</Text>
						<HeatForm addHeat={addHeat} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<MaterialIcons
				name="add"
				style={styles.modalToggle}
				onPress={() => setModalOpen(true)}
				size={40}
			/>
			<FlatList
				data={heat}
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
		</View>
	);
}

const styles = StyleSheet.create({
	modalToggle: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		marginBottom: 10,
		borderWidth: 2,
		borderColor: "#f2f2f2",
		padding: 5,
		borderRadius: 10,
		alignSelf: "center",
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 20,
	},
	modalContent: {
		flex: 1,
		padding: 15,
	},
});
