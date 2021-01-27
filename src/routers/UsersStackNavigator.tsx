import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserListScreen } from '../screens/users/user-list/users-list.screen';
import { UserDetailScreen } from '../screens/users/user-detail/users-detail.screen';
import Theme from '../config/Theme';
import { USERDETAIL, USERSLIST } from './constants';

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
      <UsersStack.Screen name={USERSLIST} component={UserListScreen} />
      <UsersStack.Screen name={USERDETAIL} component={UserDetailScreen} options={{headerLeft: () => {return null}}}/>
    </UsersStack.Navigator>
  );