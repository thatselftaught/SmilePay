import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SupportScreen from "./screens/SupportScreen";
import LoginScreen from "./screens/LoginScreen";
import RewardsScreen from "./screens/RewardsScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (    <Stack.Navigator 
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Rewards" component={RewardsScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});