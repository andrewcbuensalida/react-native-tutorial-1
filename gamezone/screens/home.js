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

const URL = "https://heat.anhonestobserver.com/";

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [heat, setHeat] = useState([]);
	const addHeat = async (heat) => {
		console.log(`This is heat`);
		console.log(heat);

		try {
			const response = await fetch(`${URL}/api/v1/heats`, {
				method: "POST",
				body: JSON.stringify(heat),
				headers: { "Content-Type": "application/json" },
			});
			setHeat((prev) => [heat, ...prev]);
			setModalOpen(false);
		} catch (error) {}
	};
	useEffect(() => {
		try {
			const getHeats = async () => {
				const heatsRaw = await fetch(`${URL}/api/v1/heats`);
				const heats = await heatsRaw.json();
				setHeat(heats.data);
			};
			getHeats();
		} catch (error) {}
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
