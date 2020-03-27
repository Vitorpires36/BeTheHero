import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { creatStackNavigation } from '@react-navigation/stack';

const AppStack = creatStackNavigation();

function Routes() {
 return(
<NavigationContainer>

   <AppStack.Navigator>
     <AppStack.Screen name="Incidents" component={Incidents}/>
     <AppStack.Screen name="Detail" component={Detail}/>
       </AppStack.Navigator>

</NavigationContainer>
 );
} 
export default Routes;