import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';

export enum Sizes {
    small = 50,
    medium = 100,
    big = 150
}

interface Props {
    uri: string,
    size: Sizes
}

const Avatar = (props: Props): React.ReactElement => {
    return (
        <Image source={{uri: props.uri}}
            style={styles(props).avatar}
        />
    )
}

export default Avatar;

const AVATAR_BORDER_COLOR = '#c13b61';

const styles = (props: Props) => ScaledSheet.create({
    avatar: {
        width: `${props.size}@s`, 
        height: `${props.size}@s`, 
        borderRadius: (scale(props.size)) / 2,
        borderColor: AVATAR_BORDER_COLOR,
        borderWidth: 4
    },
})