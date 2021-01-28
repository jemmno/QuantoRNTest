import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import User, { iUser } from '../../../models/user';
import { requestUsers } from '../../../store/users/actions';
import { UserListItem } from './user-list-item.component';
import { useNavigation } from '@react-navigation/native';
import { USERDETAIL } from '../../../routers/constants';
import { ScaledSheet } from 'react-native-size-matters';
import { ListEmpty } from '../../../components/ListEmpty';

export const UserListScreen = (): React.ReactElement => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { data, loading, errorMessage } = useSelector((state: any) => state.USERS.LIST);
    const getUsers = () => (dispatch(requestUsers()))

    useEffect(() => {
        getUsers()
    }, [])

    const keyExtractor = (_item: any, index: { toString: () => any; }) => index.toString();

    const handleOnPressUser = (user: iUser) => {
        navigation.navigate(USERDETAIL, { userID: user.id })
    }
    
    const renderItem = (item: { item: JSX.IntrinsicAttributes & User; }) => {
        return <UserListItem user={item.item} onPressUser={handleOnPressUser}/>
    }

    const renderSeparator = () => (
        <View style={styles.separator} />
    );

    const renderActivityIndicator = () => (
        <View style={styles.footer}>
            { loading &&
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    { data.length !== 0 && <Text style={styles.footerText}>Cargando más...</Text> }
                    <ActivityIndicator size='small' />
                </View>
            }
        </View>
    )

    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onEndReached={getUsers}
            onEndReachedThreshold={0.9}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={renderActivityIndicator}
            ListEmptyComponent={
                <ListEmpty
                    message={errorMessage || 'Sin Usuarios'} onPressRetry={getUsers}
                />
            }
            contentContainerStyle={data.length === 0 ? styles.centerEmptySet : styles.contentContainer }
        />
    )
}

const styles = ScaledSheet.create({
    centerEmptySet: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginHorizontal: '20@s'
    },
    footer: {
        padding: '15@s',
    },
    footerText: {
        fontWeight: '600',
    },
    contentContainer: {
        flexGrow: 1, 
        paddingBottom: '10@vs'
    }
})