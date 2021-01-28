import React from 'react';
import { Button, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Avatar, { Sizes } from '../../../components/Avatar';
import User, { iUser } from '../../../models/user';
import Theme from '../../../config/Theme';

interface Props {
    user: iUser,
    onPressUser: any
}
export const UserListItem = (props: Props): React.ReactElement => {
    const {user, onPressUser} = props;
    const currentUser = new User(user);
    const onPressShowBtn = () => {
        onPressUser(user)
    }
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar uri={currentUser.avatar} size={Sizes.small}/>
            </View>
            <View style={styles.userDataContanier}>
                <Text style={styles.fullName}>{currentUser.get_full_name()}</Text>
                <Text style={styles.email}>{currentUser.email}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button title='Ver' color={TEXT_BTN_COLOR} onPress={onPressShowBtn} />
            </View>
        </View>
    )
}
const TEXT_BTN_COLOR = '#37374e'
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: '20@s',
        marginVertical: '10@vs'
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
        marginHorizontal: '20@s',
        flexDirection: 'column',
        justifyContent: 'center' 
    },
    fullName: {
        fontSize: '18@s'
    },
    email: {
        color: Theme.email,
        fontSize: 16
    }
})