import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./routes/homeStack";

export default function App() {
	const [fontsLoaded] = useFonts({
		"nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
	});

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<HomeStack />
			</NavigationContainer>
		);
	} else {
		return null;
	}
}
