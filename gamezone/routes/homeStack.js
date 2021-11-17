import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "../screens/about";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="About" component={About} />
			<Stack.Screen name="ReviewDetails" component={ReviewDetails} />
		</Stack.Navigator>
	);
}
