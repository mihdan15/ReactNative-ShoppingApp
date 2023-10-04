import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../pages/Splash";
import Homepage from "../../pages/Homepage";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
