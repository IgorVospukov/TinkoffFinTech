import React from 'react';
import {NavigationContainer, StackRouter} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useAuth} from "../hooks/useAuth";
import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import Payments from "../components/screens/payments/Payments";
import Services from "../components/screens/services/Services";
import Support from "../components/screens/supports/Support";
import More from "../components/screens/more/More";
import Profile from "../components/screens/Profile/Profile";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {user} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ?
          <>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Payments' component={Payments}/>
            <Stack.Screen name='Services' component={Services}/>
            <Stack.Screen name='Support' component={Support}/>
            <Stack.Screen name='More' component={More}/>
          </> : <Stack.Screen name='Auth' component={Auth}/>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
