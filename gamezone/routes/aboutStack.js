import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function AboutStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				header: ({ navigation }) => <Header navigation={navigation} />,
			}}
		>
			<Stack.Screen name="About" component={About} />
		</Stack.Navigator>
	);
}
