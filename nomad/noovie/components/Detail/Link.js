import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View`
    margin-top: 10px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
`

const Text = styled.Text`
    color: #c3c3c3;
    font-weight: 600;
    margin-left: 10px;
`

const Link = ({ onPress, text, icon }) => (
    <TouchableOpacity onPress={onPress}>
        <Container>
            <FontAwesome name={icon} color="#c3c3c3" size={22}></FontAwesome>
            <Text>{text}</Text>
        </Container>
    </TouchableOpacity >
)

export default Link