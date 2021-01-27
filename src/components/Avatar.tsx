import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

interface Props {
    uri: string
}
export const Avatar = (props: Props): React.ReactElement => {
    return (
        <Image source={{uri: props.uri}}
            style={styles.avatar}
        />
    )
}

const AVATAR_BORDER_COLOR = '#c13b61';

const styles = StyleSheet.create({
    avatar: {
        width: scale(50), 
        height: scale(50), 
        borderRadius: (scale(50)) / 2,
        borderColor: AVATAR_BORDER_COLOR,
        borderWidth: 4
    },
})