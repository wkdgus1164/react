import React from 'react'
import { Text, View, Button } from 'react-native'

export default ({ navigation }) => (
    <View>
        <Text>Search</Text>
        <Button
            onPress={() => navigation.navigate("Detail")}
            title="Go to Detail"
        ></Button>
    </View>
)