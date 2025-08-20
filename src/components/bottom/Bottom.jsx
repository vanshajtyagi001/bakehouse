import "./bottom.css"
import {Link} from "react-router-dom"

export default function Bottom() {
  return (
    <div className="bottom">
      <ul className="bottomSections">
        <li className="bottomSection">
          <div className="sectionHeading">Newsletter</div>
          <p className="sectionContent">Every month, we publish a newsletter.
          It throws light upon the recent additions and changes we have made, along with the upcoming
          desserts for you.
          </p>
          <Link to="."><button className="sectionLink">Know More</button></Link>
        </li>
        <li className="bottomSection">
          <div className="sectionHeading">Working Hours</div>
          <p className="sectionContent">Everyday</p>
          <p className="sectionContent">09:00 A.M. to 09:30 P.M.</p>
        </li>
        <li className="bottomSection">
          <div className="sectionHeading">Contact Us</div>
          <p className="sectionContent">+91 9319XXXXXX</p>
          <p className="sectionContent">bakehouse@gmail.com</p>
          <Link to="/service"><button className="sectionLink">Know More</button></Link>
        </li>
      </ul>
      <div className="bottomBottom">
        <div className="bottomCopyright">© Copyright 2024   Bake House | All Rights Reserved.</div>
        <div className="bottomPolicies">
          <div className="bottomPolicy">Terms & Conditions</div>
          <div className="bottomPolicy">Privacy Policy</div>
        </div>
      </div>
    </div>
  )
}
