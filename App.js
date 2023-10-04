import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/navigation/Router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontFamily } from "./pages/GlobalStyles";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
}
