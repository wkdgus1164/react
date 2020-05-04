import React from 'react'
import styled from 'styled-components/native'
import Input from './Input'
import HorizontalSlider from './../../components/HorizontalSlider'
import Vertical from './../../components/Vertical'
import ScrollContainer from './../../components/ScrollContainer';

const Container = styled.ScrollView`
    background-color: black;
`

const Text = styled.Text``

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
    <ScrollContainer contentContainerStyle={{ paddingTop: 10 }}>
        <Input
            placeholder={"Write a keyword"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit} />
        {movies.length !== 0 && (
            <HorizontalSlider title={"Movie results"}>
                {movies.map(movie => <Vertical
                    key={movie.id}
                    id={movie.id}
                    votes={movie.vote_average}
                    title={movie.title}
                    poster={movie.poster_path}
                />)}
            </HorizontalSlider>
        )}
        {shows.length !== 0 && (
            <HorizontalSlider title={"TV results"}>
                {shows.map(show => <Vertical
                    key={show.id}
                    id={show.id}
                    votes={show.vote_average}
                    title={show.name}
                    poster={show.poster_path}
                />)}
            </HorizontalSlider>
        )}
    </ScrollContainer>
)