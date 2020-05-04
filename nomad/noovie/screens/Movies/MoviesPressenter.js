import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import Slide from '../../components/Movies/Slide'
import Title from '../../components/Title'
import Vertical from '../../components/Vertical'
import Horizontal from '../../components/Horizontal'
import ScrollContainer from '../../components/ScrollContainer'
import HorizontalSlider from '../../components/HorizontalSlider'
import List from '../../components/List'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
    margin-bottom: 50px;
`

const Container = styled.View`
`

const UpcomingContainer = styled.View`
    margin-top: 20px;
`

export default ({ loading, nowPlaying, popular, upcoming }) => (
    <ScrollContainer loading={loading}>
        <>
            <SliderContainer>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map(movie => (
                        <Slide
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            overview={movie.overview}
                            votes={movie.vote_average}
                            backgroundImage={movie.backdrop_path}
                            poster={movie.poster_path} />
                    ))}
                </Swiper>
            </SliderContainer>
            <Container>
                <HorizontalSlider title={"Popular Movies"}>
                    {popular.map(movie => (
                        <Vertical
                            id={movie.id}
                            key={movie.id}
                            poster={movie.backdrop_path}
                            title={movie.title}
                            votes={movie.vote_average} />
                    ))}
                </HorizontalSlider>
                <List title="Coming Soon">
                    {upcoming.map(movie => (
                        <Horizontal
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            poster={movie.poster_path}
                            overview={movie.overview}
                        />
                    ))}
                </List>
            </Container>
        </>
    </ScrollContainer>
)
