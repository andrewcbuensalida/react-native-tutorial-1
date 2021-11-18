import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HowTo from "../screens/HowTo";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function HowToStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				header: ({ navigation }) => (
					<Header navigation={navigation} title={"How To"} />
				),
			}}
		>
			<Stack.Screen name="HowTo" component={HowTo} />
		</Stack.Navigator>
	);
}
