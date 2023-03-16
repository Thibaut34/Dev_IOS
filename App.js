import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from '@react-native-material/core';
import { Ionicons } from '@expo/vector-icons';
import Accueil from './Accueil';
import Screen_2 from './Screen_2';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Accueil' component={Accueil} options={{headerStyle: {backgroundColor:'black'}, headerTintColor: 'white', headerTitleAlign: 'center', 
          headerLeft: () => (<IconButton icon={() => <Ionicons name="menu" size={24} color="white" />} ></IconButton>)}}/>
          <Tab.Screen name='Screen_2' component={Screen_2} options={{header: () => null}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}


