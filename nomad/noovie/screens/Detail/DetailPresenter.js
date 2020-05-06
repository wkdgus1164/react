import React from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import ScrollContainer from './../../components/ScrollContainer'
import { apiImage } from '../../api'
import Poster from '../../components/Poster'
import Votes from '../../components/Votes'
import { formatDate } from '../../utils'
import Link from '../../components/Detail/Link'

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

export default ({ openBrowser, result, loading }) => (
    <ScrollContainer loading={false}>
        <Header>
            {result.backgroundImage && <BG source={{ uri: apiImage(result.backgroundImage, "") }} />}
            <Container>
                <Poster url={result.poster} />
                <Info>
                    {result.title && <Title>{result.title}</Title>}
                    {result.votes && <Votes votes={result.votes} />}
                </Info>
            </Container>
        </Header>
        <Data>
            {result.overview ? (
                <>
                    <DataName>개요</DataName>
                    <DataValue>{result.overview}</DataValue>
                </>
            ) : null}
            {loading ? (<ActivityIndicator styles={{ marginTop: 30 }} />) : null}
            {result.spoken_languages ? (
                <>
                    <DataName>언어</DataName>
                    <DataValue>{result.spoken_languages.map(l => `${l.name}\n`)}</DataValue>
                </>
            ) : null}
            {result.release_date ? (
                <>
                    <DataName>개봉일</DataName>
                    <DataValue>{formatDate(result.release_date)}</DataValue>
                </>
            ) : null}
            {result.status ? (
                <>
                    <DataName>개봉여부</DataName>
                    <DataValue>{result.status}</DataValue>
                </>
            ) : null}
            {result.runtime ? (
                <>
                    <DataName>재생시간</DataName>
                    <DataValue>{result.runtime}분</DataValue>
                </>
            ) : null}
            {result.first_air_date ? (
                <>
                    <DataName>첫 방송일자</DataName>
                    <DataValue>{formatDate(result.first_air_date)}</DataValue>
                </>
            ) : null}
            {result.genres ? (
                <>
                    <DataName>장르</DataName>
                    <DataValue>{result.genres.map(g => `${g.name}\n`)}</DataValue>
                </>
            ) : null}
            {result.number_of_episodes ? (
                <>
                    <DataName>회차</DataName>
                    <DataValue>{result.number_of_seasons} / {result.number_of_episodes}회</DataValue>
                </>
            ) : null}
            {result.imdb_id ? (
                <>
                    <DataName>링크</DataName>
                    <Link
                        text={"IMDB Page"}
                        icon={"imdb"}
                        onPress={() => openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)}
                    />
                </>
            ) : null}
            {result.videos.results.length > 0 ? (
                <>
                    <DataName>비디오</DataName>
                    {result.videos.results.map(video => (
                        <Link
                            text={video.name}
                            key={video.id}
                            icon="youtube-play"
                            onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
                        />
                    ))}
                </>
            ) : null}
        </Data>
    </ScrollContainer>
)
