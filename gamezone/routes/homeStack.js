import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
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
						<Header navigation={navigation} />
					),
				}}
			/>
			<Stack.Screen
				name="ReviewDetails"
				component={ReviewDetails}
				options={{
					title: "Review Details",
				}}
			/>
		</Stack.Navigator>
	);
}
