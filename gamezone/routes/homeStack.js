import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../screens/home";
import Details from "../screens/Details";
import Header from "../shared/header";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
		// this is to have a default style for the navigator if there's no style specified
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					header: ({ navigation }) => (
						<Header navigation={navigation} title={"Heat"} />
					),
				}}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
				options={{
					title: "Heat Details",
				}}
			/>
		</Stack.Navigator>
	);
}
