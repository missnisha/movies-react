import axios from "axios"
const API_BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '?api_key=e0c035f376fc2d0250266fa9b0999fd4';
const NOW_PLAYING = '/now_playing'


function fetchCurrentMovies(page){
    return new Promise(async (resolve,reject) => { 
        try{
            console.log(`${API_BASE_URL}${NOW_PLAYING}${API_KEY}&language=en-US&page=${page}`)
            const response = await axios.get(`${API_BASE_URL}${NOW_PLAYING}${API_KEY}&language=en-US&page=${page}`)
            resolve(response.data);
        } catch(err){
            reject('Error fetching');
        }

    })

    
}
export {
    fetchCurrentMovies

}

