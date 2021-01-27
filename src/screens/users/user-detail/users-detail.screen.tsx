import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import User from '../../../models/user';

type Params = {
    userProps: { user: User }
  };
export const UserDetailScreen = (): React.ReactElement => {
    const route = useRoute<RouteProp<Params, 'userProps'>>();

    return (
        <View style={{justifyContent: 'center'}}>
            <Text>{route.params.user.email}</Text>
        </View>
    )
}

