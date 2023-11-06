import mainLogo from "../media/Netflix-Logo-removebg-preview.png"
import backG from "../media/backG.jpg"
import vidImg from "../media/tv.png"
import vid from "../media/video-tv-0819.mp4"
import dlImg from "../media/mobile-0819.jpg"
import dlImg2 from "../media/boxshot.png"
import vidImg2 from "../media/device-pile (1).png"
import vid2 from "../media/video-devices.m4v"
import kidsImg from "../media/Kids.png"
import { Link } from "react-router-dom"

export default function Home(){
  return(
    <div className="home">
      <div className="sec sec-start">
        <img src={backG} alt="" />
        <div className="container">
          <div className="nav">
            <img src={mainLogo} alt="" />
            <div className="right">
              <div className="lang">
                <i class="fa-solid fa-globe"></i>
                <span>English</span>
                <i class="fa-solid fa-caret-down"></i>
                </div>
              <div className="btn"><span>Sign in</span></div>
            </div>
          </div>
          <div className="membership">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <div className="email1">
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="email">
                <input type="email" placeholder="Email address" />
                <Link to="after/movies"><div className="btn"><span>Get Started</span></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec sec-vid">
        <div className="container">
          <div className="text">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstations, Xbox, Chromecast, Apple TV, Blue-ray players, and more.</p>
          </div>
          <div className="vid">
            <img src={vidImg} alt=""/>
            <video src={vid} type="video/m4v" muted loop autoPlay></video>
          </div>
        </div>
      </div>
      <div className="sec sec-dl">
        <div className="container">
          <div className="img">
            <img src={dlImg} alt="" />
            <div className="overlay">
              <div className="left">
                <img src={dlImg2} alt="" />
                <span>
                  <p>Stranger Things</p>
                  <p>Downloading...</p>
                </span>
              </div>
              <div className="right">
                <i class="fa-solid fa-arrow-down"></i>
                <span className="line"></span>
                <span className="circle">
                  <span className="right"></span>
                  {/* <span className="left"></span> */}
                </span>
              </div>
            </div>
          </div>
          <div className="text">
            <h1>Download your shows to watch offline.</h1>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
      <div className="sec sec-vid sv2">
        <div className="container">
          <div className="text">
              <h1>Watch everywhere.</h1>
              <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <div className="vid">
              <img src={vidImg2} alt=""/>
              <video src={vid2} type="video/m4v" muted loop autoPlay></video>
            </div>
        </div>
      </div>
      <div className="sec sec-dl sdl2">
        <div className="container">
          <div className="img">
            <img src={kidsImg} alt="" />
          </div>
          <div className="text">
            <h1>Create profiles for kids.</h1>
            <p>Send kids on adventures with their favorite characters in a space made just for them<span></span>free with your membership.</p>
          </div>
        </div>
      </div>
      <div className="sec sq">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="items">
            <p>What is Netflix?</p>
            <p>How much does Netflix cost?</p>
            <p>Where can I watch?</p>
            <p>How do I cancel?</p>
            <p>What can I watch on Netflix?</p>
            <p>Is Netflix good for kdis?</p>
          </div>
          <div className="email1">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="email">
              <input type="email" placeholder="Email address" />
              <div className="btn"><Link to="after/movies"><span>Get Started</span></Link></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <p>Question? Contact us.</p>
          <div className="items">
            <div className="item">
              <p>FAQ</p>
              <p>Media Center</p>
              <p>Ways to Watch</p>
              <p>Cookie Preferences</p>
              <p>Spped Test</p>
            </div>
            <div className="item">
              <p>Help Center</p>
              <p>Investor Relations</p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
              <p>Legal Notices</p>
            </div>
            <div className="item">
              <p>Account</p>
              <p>Jobs</p>
              <p>Privacy</p>
              <p>Contact Us</p>
              <p>Only on Netflix</p>
            </div>
          </div>
          <div className="lang">English</div>
          <p>Netflix Egypt</p>
        </div>
      </div>
    </div>
  )
}