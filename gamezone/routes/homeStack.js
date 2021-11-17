import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator
			// this is to have a default style for the navigator if there's no style specified
			screenOptions={{
				headerStyle: { backgroundColor: "lightblue" },
				headerTintColor: "#fff",
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: "My Home",
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
