import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { QueryClientProvider,QueryClient } from 'react-query';
import Header from './Components/Header';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const stack = createNativeStackNavigator();
import CartScreen from './Screens/CartScreen';
import HomeScreen from './HomeScreen';
import React from 'react';




const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
     
       <NavigationContainer > 
        <stack.Navigator  screenOptions={{
    headerShown: false
  }}>
           <stack.Screen name = "HomeScreen" component = {HomeScreen}/>
            <stack.Screen name = "SecondScreen" component={ CartScreen }/>
        </stack.Navigator>
    </NavigationContainer>
      {/* <HomeScreen/>  */}
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
