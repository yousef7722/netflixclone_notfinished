import { useState, useEffect, useContext } from "react";
import {currentCx} from "../App"


export default function Movie(props) {
  const [data, setData] = useState(props.data);
  const [current, setCurrent] = useState({...useContext(currentCx), "myId":0});
  const con1=useContext(currentCx)
  useEffect(()=>{
    let data2=data.map((e,i)=>({...e, "myId":i+1}));
    setData(data2)
  },[])

  const swiperAdd=()=>current.myId<data.length?setCurrent(data[current.myId]):false
  const swiperSub=()=>current.myId>1?setCurrent(data[current.myId -2]):false

  
  return (
    <div className="movie">
      {data.length > 0 ? (
        <>
          <img src={`https://image.tmdb.org/t/p/original/${current.backdrop_path}`} alt="" />
          <div className="top">
            <div className="info container">
              <div className="left">
                <div className="tit" cust1={current.title}>{current.title}</div>
                <div className="btns">
                  <div className="btn1">WATCH MOVIE</div>
                  <div className="btn2">VIEW INFO</div>
                  <div className="btn3">+ ADD TO WISHLIST</div>
                </div>
              </div>
              <div className="right">
                <div className="right-con" style={{translate: `-${current.myId<=data.length-props.slides?(current.myId-2)*140:(data.length - props.slides) * 140}px`,}}>
                  {data.map((e, i) => (
                    (e.title)?
                    <div className="item" key={e.id} onClick={()=>setCurrent(e)}>
                      <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}alt=""/>
                      <div className="text">
                        <p>{e.title}</p>
                        <p>details &gt;</p>
                      </div>
                    </div>
                    :false
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom container">
            <div className="left">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="right">
              <i class="fa-solid fa-arrow-left" onClick={swiperSub}></i>
              <i class="fa-solid fa-arrow-right" onClick={swiperAdd}></i>
            </div>
          </div>
        </>)
        :"h"}
    </div>
  );
}
