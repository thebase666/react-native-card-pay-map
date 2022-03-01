import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import FoodDetail from './screens/FoodDetail';
import MyCart from './screens/MyCart';
import MyCard from './screens/MyCard';
import AddCard from './screens/AddCard';
import Checkout from './screens/Checkout';
import Success from './screens/Success';
import DeliveryStatus from './screens/DeliveryStatus';
import Map from './screens/Map';

// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import rootReducer from './store';
// import Tab from './navigation/tabs'

const Stack = createNativeStackNavigator();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// )

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"FoodDetail"}
      >
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
