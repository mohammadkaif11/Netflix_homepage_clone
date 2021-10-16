import React,{useEffect,useState} from 'react'
import axios from '../axios';
import '../banner.css'

function Banner(props) {
    const [movies, setmovies] = useState([])
      useEffect(() => {
       async function fetchdata(){
           const response=await axios.get(props.fetchurl);
        //   console.log(response.data.results[(Math.floor(Math.random()*response.data.results-1))]);
         setmovies(response.data.results[Math.floor(Math.random() *response.data.results.length-1)]);
          return response;
        }
        fetchdata();
    }, [])
    console.log(movies);
    function trncate(str,n){
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    }
    return (
      <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition:"center center",
      }}>
        <div className="banner_content">
         <h1 className="banner_title">{movies?.title || movies?.name || movies?.orignal_name}</h1> 
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{ trncate(movies?.overview,150)}</h1>
        </div>
        <div className="banner_fade"></div>
      </header>


            
        )
}

export default Banner
