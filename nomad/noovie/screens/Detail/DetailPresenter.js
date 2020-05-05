import React from 'react'
import { Text, View, Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import ScrollContainer from './../../components/ScrollContainer'
import { apiImage } from '../../api'
import Poster from '../../components/Poster'
import Votes from '../../components/Votes'
import { formatDate } from '../../utils'

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`

const Header = styled.View`
    height: ${Dimensions.get("window").height / 3}px;
    align-items: center;
    justify-content: flex-end;
`

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    top: 30px;
`

const Info = styled.View`
    width: 50%;
    margin-left: 40px;
`

const Title = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
`

const Data = styled.View`
    margin-top: 30px;
    padding: 0px 30px;
`

const DataName = styled.Text`
    margin-top: 30px;
    color: white;
    opacity: 0.8;
    font-weight: bold;
`

const DataValue = styled.Text`
  color: #c3c3c3;
  opacity: 0.8;
  font-weight: 500;
  margin-bottom: 10px;
`

export default ({ result, loading }) => (
    <ScrollContainer loading={false}>
        <Header>
            <BG source={{ uri: apiImage(result.backgroundImage, "") }} />
            <Container>
                <Poster url={result.poster} />
                <Info>
                    <Title>{result.title}</Title>
                    {result.votes && <Votes votes={result.otes} />}
                </Info>
            </Container>
        </Header>
        <Data>
            {result.overview && (
                <>
                    <DataName>개요</DataName>
                    <DataValue>{result.overview}</DataValue>
                </>
            )}
            {loading && <ActivityIndicator styles={{ marginTop: 30 }} />}
            {result.spoken_languages && <>
                <DataName>언어</DataName>
                <DataValue>{result.spoken_languages.map(l => ` ${l.name} \n `)}</DataValue>
            </>
            }
            {result.release_date && <>
                <DataName>개봉일</DataName>
                <DataValue>{formatDate(result.release_date)}</DataValue>
            </>
            }
            {result.status && (
                <>
                    <DataName>개봉여부</DataName>
                    <DataValue>{result.status === "Released" ? "개봉" : "미개봉"}</DataValue>
                </>
            )}
            {result.status && (
                <>
                    <DataName>재생시간</DataName>
                    <DataValue>{result.runtime}분</DataValue>
                </>
            )}
        </Data>
    </ScrollContainer>
)
