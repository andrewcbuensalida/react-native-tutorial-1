import React from "react";
import { Formik } from "formik";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import * as yup from "yup";

import { globalStyles } from "../styles/global";

const heatSchema = yup.object({
	title: yup.string().required().min(4).max(50),
	body: yup.string().required().min(4).max(255),
	rank: yup
		.string()
		.required()
		.test(
			"is-num-above-0",
			"Rank must be greater than 0",
			(val) => 0 < parseInt(val)
		)
		.test("is-a-num", "Rank must be a number only.", (val) =>
			Number.isInteger(Number(val))
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
							onBlur={props.handleBlur("title")}
						/>
						<Text style={globalStyles.errorText}>
							{/*errors.title comes from yup*/}
							{props.touched.title && props.errors.title}
						</Text>
						<TextInput
							style={globalStyles.input}
							multiline
							placeholder="Details"
							onChangeText={props.handleChange("body")}
							value={props.values.body}
							onBlur={props.handleBlur("body")}
						/>
						<Text style={globalStyles.errorText}>
							{/*errors.title comes from yup*/}
							{props.touched.body && props.errors.body}
						</Text>
						<TextInput
							style={globalStyles.input}
							placeholder="Rank"
							onChangeText={props.handleChange("rank")}
							value={props.values.rank}
							keyboardType="numeric"
							onBlur={props.handleBlur("rank")}
						/>
						<Text style={globalStyles.errorText}>
							{/*errors.title comes from yup*/}
							{props.touched.rank && props.errors.rank}
						</Text>
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
