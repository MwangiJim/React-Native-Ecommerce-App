import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import Home from './src/components/Home';
import { StyleSheet,SafeAreaView } from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentComponent from './src/components/PaymentComponent';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Payments from './src/components/Payments';




export default function App() {
  //let[state,dispatch]=useReducer(reducer,{count:0})
  const Stack = createNativeStackNavigator();
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Header/>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Payment' component={PaymentComponent} options={{headerShown:false}}/>
            <Stack.Screen name='Payments' component={Payments} options={{headerShown:false}}/> 
          </Stack.Navigator>
          <Footer/>
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
  );
}

const styles = StyleSheet.create({
 
});
