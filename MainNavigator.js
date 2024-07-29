import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './features/calculator/Calculator';
import Calculator2 from './features/calculator/Calculator2';
import Login from './features/calculator/Login';
import Result from './features/calculator/Result';
import Test from './features/calculator/Test';
import Signup from './features/calculator/Signup';
import Profile from './features/calculator/Profile';
import Printer from './features/calculator/Printer';
import Splash1 from './screens/Splash1';
import Splash2 from './screens/Splash2';

const Stack = createNativeStackNavigator();

export default () => {

  const [splash1Visible, setSplash1Visible] = useState(true);
  const [splash2Visible, setSplash2Visible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSplash1Visible(false);
      setSplash2Visible(true);
    }, 2000); 

    const timer2 = setTimeout(() => {
      setSplash2Visible(false);
    }, 4000); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

   return (
      <>
      {/* {splash1Visible && <Splash1 />} */}
      {splash2Visible && <Splash2 />}
      {!splash1Visible && !splash2Visible && (
   <Stack.Navigator initialRouteName='Signup' screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Calculator" component={Calculator} />
   <Stack.Screen name="Calculator2" component={Calculator2} />
   <Stack.Screen name="Printer" component={Printer} />
   <Stack.Screen name="Result" component={Result} />
   <Stack.Screen name="Test" component={Test} />
   <Stack.Screen name="Signup" component={Signup} />
   <Stack.Screen name="Profile" component={Profile} />
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Splash1" component={Splash1} />
   <Stack.Screen name="Splash2" component={Splash2} />
</Stack.Navigator>
   )}  
 </>
);

}