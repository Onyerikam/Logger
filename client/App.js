import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Settings from './screens/Settings';
import { getCurrentUserFromAsyncStorage } from './utils/api';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const currentUser = await getCurrentUserFromAsyncStorage();
      if (currentUser) {
        setUser(currentUser);
        setIsLoggedIn(true);
      }
    };
    getUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerRight: () => (
                  <MaterialIcons
                    name="settings"
                    size={30}
                    onPress={() => navigation.navigate('Settings')}
                    style={{ marginRight: 15 }}
                  />
                ),
              }}
            />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
