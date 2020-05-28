import { fetchCurrentMovies } from '../service/ApiService';

class MoviesLogic {
    static fetchMovies(page){
        return fetchCurrentMovies(page);
    }


}
export default MoviesLogic;