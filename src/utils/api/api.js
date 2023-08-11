import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmFkMzVmYWMwOWZlZDhmODdhNGM3NGNjODUyNzUwMyIsInN1YiI6IjY0ZDBmNjdiNmQ0Yzk3MDEwZDUxYTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIPH7tugzQv2jD6Nn3KIIaubPeuCl_lHMrko48p_UEQ"

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
}

export const getMovies = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}