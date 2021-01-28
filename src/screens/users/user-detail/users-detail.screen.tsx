import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import Avatar, { Sizes } from '../../../components/Avatar';
import Theme from '../../../config/Theme';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUserDetail, requestUserDetail } from '../../../store/users/actions';

type Params = {
    userProps: { userID: number }
};
export const UserDetailScreen = (): React.ReactElement => {
    const route = useRoute<RouteProp<Params, 'userProps'>>();
    const { userID } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUserDetail(userID))
        return () => { dispatch(cleanUserDetail()) }
    }, [])

    const { data: user, loading, errorMessage } = useSelector((state: any) => state.USERS.DETAIL);

    const email = `Email: ${user.email}`;
    const full_name = `${user.first_name} ${user.last_name}`;

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
    if (errorMessage) {
        return (
            <View style={styles.container}>
                <Text>{errorMessage}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Avatar uri={user.avatar} size={Sizes.medium} />
            <Text style={styles.name}>{full_name}</Text>
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