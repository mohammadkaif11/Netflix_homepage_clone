import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import data from './request';
function App() {
  return (
     <>
      <div className="app">
      {/*Navbar*/}
      <Navbar/>
      {/*banar*/}
      <Banner fetchurl={data.fectchNetflixOriginal}/>
       <Row tittle="NETFLIX ORGINALS" fetchurl={data.fectchNetflixOriginal} islargerow/>
       <Row tittle="Trending Now" fetchurl={data.fetchTrending}/>
       <Row tittle="Top Rated" fetchurl={data.fetchTopRated}/>
       <Row tittle="Action Movie" fetchurl={data.fetchActionMovies}/>
       <Row tittle="Comedy Movie" fetchurl={data.fetchComedyMovies}/>
       <Row tittle="Horror Movie" fetchurl={data.fetchHorrorMovies}/>
       <Row tittle="Romance Movie" fetchurl={data.fetchRomanceMovies}/>
       <Row tittle="Documentaries" fetchurl={data.fetchDocumentaries}/>
     
      </div>
    </>
  );
}

export default App;
