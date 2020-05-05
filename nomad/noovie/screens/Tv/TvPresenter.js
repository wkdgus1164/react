import React from 'react'
import ScrollContainer from '../../components/ScrollContainer'
import HorizontalSlider from '../../components/HorizontalSlider'
import Vertical from '../../components/Vertical'
import styled from 'styled-components/native';
import List from '../../components/List';
import Horizontal from '../../components/Horizontal';

const Container = styled.View``

export default ({ refreshFn, loading, popular, topRated, today }) =>
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <HorizontalSlider title="Popular Shows">
            {popular.map(show =>
                <Vertical
                    isTv={true}
                    id={show.id}
                    key={show.id}
                    poster={show.backdrop_path}
                    title={show.name}
                    votes={show.vote_average} />)}
        </HorizontalSlider>
        <HorizontalSlider title="Top Rated">
            {topRated.map(show =>
                <Vertical
                    isTv={true}
                    id={show.id}
                    key={show.id}
                    poster={show.backdrop_path}
                    title={show.name}
                    votes={show.vote_average} />)}
        </HorizontalSlider>
        <List title="Airing Today">
            {today.map(show =>
                <Horizontal
                    isTv={true}
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    poster={show.poster_path}
                    overview={show.overview} />)}
        </List>
    </ScrollContainer>