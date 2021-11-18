import React from "react";
import { Formik } from "formik";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewForm() {
	return (
		<Formik
			initialValues={{ title: "", body: "", rank: "" }}
			onSubmit={(values) => {}}
		>
			{(props) => (
				<View>
					<TextInput
						style={globalStyles.input}
						placeholder={"Title"}
						onChangeText={props.handleChange("title")}
						value={props.values.title}
					/>
					<TextInput
						style={globalStyles.input}
						multiline
						placeholder="Details"
						onChangeText={props.handleChange("body")}
						value={props.values.body}
					/>
					<TextInput
						style={globalStyles.input}
						placeholder="Rank"
						onChangeText={props.handleChange("rank")}
						value={props.values.rank}
						keyboardType="numeric"
					/>
					<Button
						color="orange"
						title="Submit"
						onPress={props.handleSubmit}
					/>
				</View>
			)}
		</Formik>
	);
}
