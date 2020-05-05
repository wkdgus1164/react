import React from 'react'
import styled from 'styled-components/native'
import Input from './Input'
import HorizontalSlider from './../../components/HorizontalSlider'
import Vertical from './../../components/Vertical'
import ScrollContainer from './../../components/ScrollContainer'

const Container = styled.ScrollView`
    background-color: black;
`

const Text = styled.Text``

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
    <ScrollContainer
        refreshFn={onSubmit}
        loading={false}
        contentContainerStyle={{ paddingTop: 10 }}>
        <Input
            placeholder={"검색어를 입력하세요."}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit} />
        {movies.length !== 0 && (
            <HorizontalSlider title={"영화 검색 결과"}>
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
            <HorizontalSlider title={"TV 검색 결과"}>
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