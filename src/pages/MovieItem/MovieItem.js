import { Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, Suspense } from "react";
import { getMovieInfo } from "API";
import { AdditionSection } from "components/Addition info/Addition";
import { ButtonBack, IconBack } from "./MovieItem.styled";
import { Card } from "components/MovieCard/MovieCard";

const MovieItem = () =>{
const [movie, setMovie] = useState({})
const {id} = useParams();
const location = useLocation();
const locationRef = useRef(location.state?.from ?? '/movies')
useEffect(()=> {
getMovieInfo(id).then(movie => {
    setMovie(movie)})
}, [id])
 
    return <div>
        <ButtonBack to={locationRef.current}><IconBack/> Go back</ButtonBack>
        {movie ? <Card item={movie} /> : null}
        <AdditionSection/>
        <Suspense>  
            <Outlet />
        </Suspense>
    </div>}

export default MovieItem