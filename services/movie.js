const API_KEY = "https://api.themoviedb.org/3"

const getApiReq = async (pathName,query="") =>{
   try{
    const res = await fetch(`${API_KEY}${pathName}?api_key=${process.env.API_KEY}${query}`)
    return res.json();
   }
   catch(error){
    throw new Error(error)
   }
}

const gettopRatedMovies  = async() =>{

    return getApiReq('/movie/top_rated','&page=1');
  }

const getCategories  = async() =>{

    return getApiReq('/genre/movie/list','&page=1');

  }  
const getSingleCategory  = async(genreId) =>{

    return getApiReq('/discover/movie',`with_genres=${genreId}`);
  }
const getPopularMovies  = async() =>{

    return getApiReq('/movie/popular','&page=1');

}
  const getMovie  = async(movieId) =>{

    return getApiReq(`/movie/${movieId}`);
  }

export 
{getApiReq,gettopRatedMovies,getCategories,getSingleCategory,getPopularMovies,getMovie}