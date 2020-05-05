import React from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import Votes from './Votes'
import Poster from './Poster';
import { TouchableOpacity } from 'react-native'
import { trimText } from './../utils'
import { useNavigation } from '@react-navigation/native'

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`

const Vertical = ({ isTv = false, id, poster, title, votes }) => {
    const navigation = useNavigation()
    const gotoDetail = () => {
        navigation.navigate("Detail", {
            isTv,
            id,
            title,
            votes,
            poster
        })
    }
    return (
        <TouchableOpacity onPress={gotoDetail}>
            <Container>
                <Poster url={poster} />
                <Title>{trimText(title, 10)}</Title>
                <Votes votes={votes}>❤ {votes} / 10</Votes>
            </Container>
        </TouchableOpacity>
    )
}

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
}

export default Vertical