import MovieList from "components/MovieList/MovieList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Favorites = () => {
  const [favorites, setFavorite] = useState([]);

  useEffect(()=>{
  const savedFavorite = JSON.parse(window.localStorage.getItem('FavoriteMovie')) ?? []
  console.log(savedFavorite);
  if(savedFavorite) {
    setFavorite(savedFavorite);
  }
}, [])

const location = useLocation()
    return <>
    {!favorites.length ? <p>Add some movies</p> : <MovieList set = {favorites} way={`movies`} state={{from: location}}/>}
    </>
}
export default Favorites