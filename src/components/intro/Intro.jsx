import "./intro.css"
import Catalogue from "../catalogue/Catalogue"

export default function Intro() {
  return (
    <div className='intro'>
      <div className="introTop">
          <img src="assets/bg/home-top.png" alt="" className="introTopBg" />
          <img src="assets/bg/home-top.png" alt="" className="introTopImg" />
          <div className="introTopText">Bake House</div>
          <div className="introTopSinceWrapper">
            <div className="introTopSince">Since</div>
            <div className="introTopSince">1969</div>
          </div>
      </div>
      <div className="introCatalogueText">New Additions</div>
      <Catalogue />
      <div className="introFrameText">Take a look at how our baker, Ira works at Bake House :</div>
      <video width="100%" height="600px" loop autoPlay muted className="introFrameVideo">
        <source src="assets/video.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}
