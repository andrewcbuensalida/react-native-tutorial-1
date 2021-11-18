import React from "react";
import { Formik } from "formik";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import * as yup from "yup";

import { globalStyles } from "../styles/global";

const heatSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(4),
	rank: yup
		.string()
		.required()
		.test(
			"is-num-above-0",
			"Rank must be greater than 0",
			(val) => 0 < parseInt(val)
		),
});
export default function HeatForm({ addHeat }) {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: "", body: "", rank: "" }}
				validationSchema={heatSchema}
				onSubmit={(values, actions) => {
					actions.resetForm();
					addHeat(values);
				}}
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
		</View>
	);
}
