import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/drawer";

export default function App() {
	const [fontsLoaded] = useFonts({
		"nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
	});

	if (fontsLoaded) {
		return (
			<NavigationContainer>
				<Navigator />
			</NavigationContainer>
		);
	} else {
		return null;
	}
}
