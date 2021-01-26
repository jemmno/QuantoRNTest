import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserListScreen } from '../screens/users/users-list.screen';
import Theme from '../config/Theme';

const UsersStack = createStackNavigator();

export const UsersStackNavigator = () : React.ReactElement => 
  (
    <UsersStack.Navigator screenOptions={{
      headerTitleAlign: 'left',
      headerStyle: {
        backgroundColor: Theme.primary,
      },
      headerTintColor: Theme.navTitle,
    }}>
      <UsersStack.Screen name="Listado de usuarios" component={UserListScreen} />
      <UsersStack.Screen name="Detalle de usuario" component={UserListScreen} />
    </UsersStack.Navigator>
  );