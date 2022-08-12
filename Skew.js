import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class AppSkew extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Example style={{}}>A</Example>
                <Example style={{ transform: [{ skewX: '45deg' }] }}>B, 0.5</Example>
                <Example style={{ transform: [{ skewX: '-45deg' }] }}>C, 2</Example>
                <Example style={{ transform: [{ skewY: '45deg' }] }}>D, 3</Example>
                <Example style={{ transform: [{ skewY: '-45deg' }] }}>E, 1.5</Example>
            </View>
        )
    }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        flex: 1
    },
    example: {
        width: 75,
        height: 75,
        borderWidth: 2,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AppSkew;