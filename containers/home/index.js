import React from "react";


import FeaturedMovie from '@/components/featured-movie'
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({popularMovies=[],topRatedMovies=[],selectedCategory,categories=[]}) {
  return (   
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]}/>
      <Categories categories={categories.slice(0,5)}/>
      {
        selectedCategory.movies.length > 0 &&  (
          <MoviesSection title= {categories.find((genres)=>
            genres.id.toString() === selectedCategory.id
            ).name} movies={selectedCategory.movies}/>
        )
      }
      <MoviesSection title={"Top Rated Films"} movies={topRatedMovies.slice(0,7)}/>
      <MoviesSection title={"Popular Films"} movies={popularMovies.slice(7,13)}/>
    </div>
    // burada categories' verileri 0 dan 5 e katar filtreliyoruz
    )
}
export default HomeContainer