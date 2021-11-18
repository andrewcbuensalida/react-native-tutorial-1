import React from "react";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";

import HomeStack from "./homeStack";
import HowToStack from "./HowToStack";

const Drawer = createDrawerNavigator();

export default function Navigator() {
	return (
		<Drawer.Navigator
			initialRouteName="HomeStack"
			screenOptions={{
				headerShown: false,
				drawerLabelStyle: {
					fontSize: 25,
				},
			}}
			// drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="Home" component={HomeStack} />
			<Drawer.Screen name="How To" component={HowToStack} />
		</Drawer.Navigator>
	);
}
