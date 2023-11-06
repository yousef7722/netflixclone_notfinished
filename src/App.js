import { useState, useEffect, createContext } from "react";
import "./css/app.css";
import "./css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/movie"
import Nav from "./components/nav"
import Movies from "./components/movies"
import Home from "./components/Home"

const currentCx = createContext()

export default function App() {
  const[data, setData]= useState([])
  const[current, setCurrent]= useState([])
  const[slides, setSlides]=useState(0)

  let ss=window.matchMedia("(max-width: 400px)")
  let sm=window.matchMedia("(min-width: 401px)")
  let md=window.matchMedia("(min-width: 768px)")
  let lr=window.matchMedia("(min-width: 992px)")
  let xl=window.matchMedia("(min-width: 1170px)")
  let xx=window.matchMedia("(min-width: 1270px)")

  useEffect(()=>{
    const data1 = fetch("https://api.themoviedb.org/3/movie/popular?api_key=6cd45b1ee92fc939d33d5f568aa248a6&language=en-US&page=1")
  .then(e=>e.json()).then(e=>{
    e.results.forEach((e,i) => {
      e.myId=i
    });
    setData(e.results);
  })
  ss.matches?setSlides(2):(xx.matches?setSlides(6):(xl.matches?setSlides(5):(lr.matches?setSlides(4):setSlides(3))))
  }, [])
  
  console.log(slides)
  const setCur=(e)=>setCurrent(e)

  return (
    data.length>0?
      <div className="app">
        <currentCx.Provider value={current}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="after" element={<Nav />}>
                <Route path="movies" element={<Movies slides={slides} setC={setCur}/>}/>
                <Route path="movie" element={<Movie slides={slides} data={data}/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </currentCx.Provider>
      </div>
    :<p>"no data"</p>
  );
}
export {currentCx}
