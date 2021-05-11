import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View>
                <Header>
                    App name here
                </Header>

                <Text>
                    HomeScreen
                </Text>

            </View>
        )
    }
}