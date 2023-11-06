import mainlogo from "../media/Netflix-Logo-removebg-preview.png"
import { Link, Outlet } from "react-router-dom"

export default function Nav(){
  return(
    <>
    <div className="nav container">
      <div className="left">
        <span>Explore</span>
        <span><Link to="movie">Movies</Link></span>
        <span>TV Shows</span>
        <span> Documentaions</span>
      </div>
      <div className="center">
        <Link to="movies"><img src={mainlogo} alt="" /></Link>
      </div>
      <div className="right">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>LOGIN</span>
        <Link to="/"><div className="btn1">SIGN UP</div></Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}