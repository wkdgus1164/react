import React from 'react'
import FavsPresenter from './FavsPresenter'
import { useState } from 'react'
import { movieApi } from '../../api';
import { useEffect } from 'react';

export default () => {
    const [movies, setMovies] = useState({
        results: [],
        error: null
    })

    const getData = async () => {
        const [results, error] = await movieApi.discover()
        setMovies({
            results,
            error
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return <FavsPresenter {...movies} />
}