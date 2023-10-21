import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import { LogBox } from "react-native";

//Screens
import ChooseLocation from "./src/Screens/ChooseLocation";
import Home from "./src/Screens/Home";

const App = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
