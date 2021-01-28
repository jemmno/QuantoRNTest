import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import User, { iUser } from '../../../models/user';
import Avatar,  { Sizes } from '../../../components/Avatar';
import Theme from '../../../config/Theme';

type Params = {
    userProps: { user: iUser }
  };
export const UserDetailScreen = (): React.ReactElement => {
    const route = useRoute<RouteProp<Params, 'userProps'>>();
    const { user } = route.params;
    const email = `Email: ${user.email}`;
    const currentUser = new User(user)
    return (
        <View style={styles.container}>
            <Avatar uri={user.avatar} size={Sizes.medium}/>
            <Text style={styles.name}>{currentUser.get_full_name()}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 40
    },
    email: {
        color: Theme.email,
        fontSize: 14
    }
})