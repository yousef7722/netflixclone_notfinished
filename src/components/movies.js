import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { currentCx } from "../App";
import mainLogo from "../media/Netflix-Logo-removebg-preview.png";

export default function Movies({ setC, slides }) {
  const [data1, setData1] = useState([]);
  const [swipe1, setSwipe1] = useState(1);
  const [data2, setData2] = useState([]);
  const [swipe2, setSwipe2] = useState(1);
  const [data3, setData3] = useState([]);
  const [swipe3, setSwipe3] = useState(1);
  const [data4, setData4] = useState([]);
  const [swipe4, setSwipe4] = useState(1);
  const [data5, setData5] = useState([]);
  const [swipe5, setSwipe5] = useState(1);
  const [data6, setData6] = useState([]);
  const [swipe6, setSwipe6] = useState(1);
  const [all, setAll] = useState([]);
  const [home, setHome] = useState(0);
  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      let fetchdata = fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=6cd45b1ee92fc939d33d5f568aa248a6&language=en-US&page=${
          i + 1
        }`
      )
        .then((e) => e.json())
        .then((e) => {
          eval(`setData${i + 1}(e.results)`);
          setAll((pre) => pre.concat([e.results]));
        });
    }
  }, []);
  console.log(data1);
  useEffect(() => {
    data1.length > 0 &&
      document.querySelector(".opening >.text").classList.add("active");
  }, [data1.length]);
  useEffect(() => {
    console.log("effect from movies");
    if (data1.length > 0) {
      var first = setTimeout(() => {
        if (home === data1.length - 1) {
          setHome(0);
          document.querySelector(".opening >.text").classList.add("active");
        } else {
          setHome((pre) => pre + 1);
          document.querySelector(".opening >.text").classList.add("active");
        }
        clearTimeout(first)
      }, 5050);
      var second = setTimeout(() => {
        document.querySelector(".opening >.text").classList.remove("active");
        clearTimeout(second)
      }, 5000);
    }
  }, [data1, home]);

  function resize1(e, i) {
    if (e.screenX > window.innerWidth / 2) {
      e.target.parentElement.parentElement.parentElement.style.translate = `-${
        (100 / slides) * 0.15 + eval(`swipe${i + 1}!==0?swipe${i + 1}*100:0`)
      }%`;
    }
    e.target.parentElement.parentElement.style.minWidth = `${
      (100 / slides) * 1.15
    }%`;
  }
  function resize2(e, i) {
    e.target.parentElement.parentElement.parentElement.style.translate = `-${eval(
      `swipe${i + 1}!==0?swipe${i + 1}*100:0`
    )}%`;
    e.target.parentElement.parentElement.style.minWidth = `${100 / slides}%`;
  }
  const nextS = (e) =>
    eval(
      `setSwipe${e}((swipe${e}<(data${e}.length/slides -1)?(swipe${e}+1):0))`
    );
  const backS = (e) => eval(`setSwipe${e}((swipe${e}>0?(swipe${e}-1):0))`);
  function newshit() {
    console.log("hi");
    return (
      <div className="tier">
        <div>
          <p>TOP</p>
          <p>10</p>
        </div>
      </div>
    );
  }
  return (
    <div className="movies">
      {all.length > 0 ? (
        <>
          <div className="opening">
            <div className="text container">
              <div className="brand">
                <span>NETFLIX</span>
                <span>Original</span>
              </div>
              <div className="name">{data1[home].title}</div>
              <div className="info">
                <span>4k Ultra HD</span>
                <span>{data1[home].vote_average}</span>
              </div>
              <div className="story">{data1[home].overview}</div>
              <div className="more-info">
                <div className="actors">
                  <span>actor1 </span>,<span>actor2 </span>,<span>actor3</span>
                </div>
                <div className="categories">
                  <span>TV Shows </span>,<span>TV Sci-Fi & Fantasy </span>,
                  <span>Teen TV Shows</span>
                </div>
              </div>
            </div>

            <div className="shadow"></div>

            <img
              src={`https://image.tmdb.org/t/p/original/${data1[home].backdrop_path}`}
              alt=""
            />
          </div>
          {all.map((e, i, arr) => (
            <div
              className="big"
              style={{
                minHeight: `${
                  slides == 6 || 5 ? 200 : slides == 4 ? 180 : 150
                }px`,
              }}
            >
              <div
                className="title container"
                style={{ left: `${100 / slides / 4}%` }}
              >
                <h1>Popular on Netflix</h1>
              </div>

              <div className="holder-con">
                <div
                  className="back"
                  onClick={() => backS(i + 1)}
                  style={{ width: `${100 / slides / 4}%` }}
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </div>

                <div
                  className="holder"
                  style={{
                    width: `${100 - 100 / slides / 2}%`,
                    translate: `-${eval(
                      `swipe${i + 1}!==0?swipe${i + 1}*100:0`
                    )}%`,
                  }}
                >
                  {e.map((element, elei, elearr) => (
                    <div
                      className="item"
                      onClick={() => setC(element)}
                      style={{ minWidth: `${100 / slides}%` }}
                    >
                      <Link to="/after/movie">
                        <img
                          onMouseEnter={(e) => resize1(e, i)}
                          onMouseLeave={(e) => resize2(e, i)}
                          src={`https://image.tmdb.org/t/p/original/${
                            element.backdrop_path
                              ? element.backdrop_path
                              : elearr[19].backdrop_path
                          }`}
                          alt=""
                        />
                        {elei % 5 ==0 || Math.random() > .8 ? (
                          <div className="tier">
                            <div>
                              <p>TOP</p>
                              <p>10</p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <img className="logo" src={mainLogo} alt="" />
                      </Link>
                    </div>
                  ))}
                </div>

                <div
                  className="next"
                  style={{ width: `${100 / slides / 4}%` }}
                  onClick={() => nextS(i + 1)}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        "hi"
      )}
    </div>
  );
}
