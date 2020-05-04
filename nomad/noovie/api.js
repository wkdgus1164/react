import axios from 'axios'

const TMDB_KEY = "5ddf03d1d00c5a27d799601214153a1c"
const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        }
    })


const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch (e) {
        console.log(e)
        return [null, e]
    }
}

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
    search: query => getAnything("/search/movie", { query }),
    movie: id => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie")
}

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", { query }),
    show: id => getAnything(`/tv/${id}`)
}

export const apiImage = path => path ? `https://image.tmdb.org/t/p/w500${path}` : "https://cdn.pixabay.com/photo/2017/05/26/07/21/man-2345397__340.jpg"