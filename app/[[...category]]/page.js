import React from "react";
import HomeContainer from "@/containers/home";

import {
  gettopRatedMovies,
  getCategories,
  getSingleCategory,
  getPopularMovies,
} from "@/services/movie.js";

export default async function HomePage({ params }) {
  // console.log(process.env.API_KEY)

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([
    gettopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);
  // burada promise.all olayı await birden fazla asenkron işlemi aynı anda işleme almak için kullanılır.
  // Böylelikle diğer asenkron işlemlerin bitmesini beklemeden diğerlerini de işleme almış oluyoruz.
  // const [{results: topRatedMovies} bu kod ise topMoviesPromise'in results değişkenini topRatedMovies'e atıyor.
  console.log(categories);

  let selectedCategory;
  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]); //burada ilk sayfayı alıyoruz mesela localhost:3000/categories/login buradaki categories oluyor o kısım.
    //params.category? kısmı eğer category sınıflandırması olmaz ise category length olmayacak o yüzden null check yapıyoruz.
    selectedCategory = results;
    console.log(selectedCategory);
  }
  return (
    <HomeContainer
      categories={categories}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: params.category?.[0],
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
