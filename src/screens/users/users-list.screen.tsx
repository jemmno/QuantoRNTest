import React, { useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import ListEmpty from '../../components/ListEmpty';
import User from '../../models/user';
import user from '../../models/user';
import { requestUsers } from '../../store/users/actions';
import { UserListItem } from './user-list-item.component';

export const UserListScreen = (): React.ReactElement => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state: any) => state.USERS);
    const getUsers = () => (dispatch(requestUsers()))

    useEffect(() => {
        getUsers()
    }, [])
    // return(<Button onPress={() => dispatch(requestUsers())} title="sdf"/>)
    const keyExtractor = (_item: any, index: { toString: () => any; }) => index.toString();

    const handleOnPressUser = (user: User) => {
        console.log("On press", user)
    }
    const renderItem = (item: { item: JSX.IntrinsicAttributes & user; }) => {
        return <UserListItem user={item.item} onPressUser={handleOnPressUser}/>
    }

    const renderSeparator = () => (
        <View style={styles.separator} />
    );

    const renderActivityIndicator = () => (
        <View style={styles.footer}>
            { loading &&
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.footerText}>Cargando más...</Text>
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
            extraData={data}
            onEndReached={getUsers}
            onEndReachedThreshold={0.9}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={renderActivityIndicator}
            ListEmptyComponent={
                <ListEmpty
                    message={'Sin Usuarios'}
                />
            }
            contentContainerStyle={data.length === 0 ? styles.centerEmptySet : { flexGrow: 1, paddingBottom: 10 }}
        />
    )
}

const styles = StyleSheet.create({
    centerEmptySet: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginHorizontal: 20
    },
    footer: {
        padding: 15,
    },
    footerText: {
        fontWeight: '600',
    }
})