import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is Home</Text>
        </View>
    )
}

function Setting() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is Setting</Text>
        </View>
    )
}

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Setting} />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}