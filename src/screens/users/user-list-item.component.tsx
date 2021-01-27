import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import User from '../../models/user';
import { Avatar } from '../../components/Avatar';

interface Props {
    user: User,
    onPressUser: any
}
export const UserListItem = (props: Props): React.ReactElement => {
    const {user, onPressUser} = props;
    const fullName = `${user.first_name} ${user.last_name}`
    const onPressShowBtn = () => {
        onPressUser(user)
    }
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar uri={user.avatar} />
            </View>
            <View style={styles.userDataContanier}>
                <Text style={styles.fullName}>{fullName}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button title='Ver' color={TEXT_BTN_COLOR} onPress={onPressShowBtn} />
            </View>
        </View>
    )
}
const TEXT_BTN_COLOR = '#37374e'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10
    },
    centerEmptySet: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    avatarContainer: {
        flex: 1
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center' 
    },
    userDataContanier: {
        flex: 5,
        marginHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center' 
    },
    fullName: {
        fontSize: 18
    },
    email: {
        color: '#18adc7',
        fontSize: 16
    }
})