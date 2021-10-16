import React, { useState, useEffect } from 'react'
import axios from '../axios';
import '../row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
function Row({ fetchurl, tittle,islargerow}) {
    const baseurl = "https://image.tmdb.org/t/p/original/"
    const [movies, setmovies] = useState([]);
    const [trailerurl, settrailerurl] = useState("");
    useEffect(() => {
        async function fetchdata() {
            const response = await axios.get(fetchurl);
          //  console.log(response.data.results);
            setmovies(response.data.results);
          //  return response;
        }
        fetchdata();
    }, [fetchurl])
    
    const opts={
 height:"390",
 width:"100%",
 playerVars:{
     autoplay:1,
 },
    };

    const handleClick=(movie)=>{
        if(trailerurl){
            settrailerurl('')
        }else{
           movieTrailer(movie?.name ||"").then(url=>{
            const urlparmas=new URLSearchParams(new URL(url).search);
            settrailerurl(urlparmas.get('v'));
        }).catch((Error)=>{console.log(Error)})
       }
    }
    return (

        <div className="row">
            <h1>{tittle}</h1>
            <div className="movie_posters">
                {movies.map((movie)=>( 
                     <img onClick={()=> handleClick(movie)} key={movie.id} className={`movie_poster ${islargerow && "row_large"}`} src={`${baseurl}${islargerow ? movie.poster_path :movie.backdrop_path}`} alt={movie.poster_path} />
                ))}
            </div>
            {trailerurl && <YouTube videoId={trailerurl} opts={opts}/>}
        </div>

    )
}

export default Row
