import "./customer.css"
import { FmdGood } from "@mui/icons-material"

export default function Customer() {
  return (
    <div className="customer">
      <div className="customerTop">
        <img src="assets/bg/contact-top.png" alt="" className="customerBg" />
        <div className="customerMainHeading">Contacts and Services</div>
      </div>
      <div className="locationsHeading">You can Visit Us Here</div>
      <div className="customerLocations">
        <div className="locationSection">
            <FmdGood className="locationIcon" sx={{ fontSize: 70 }}/>
            <div className="locationHeading">Connought Place</div>
            <div className="locationAddress">Shop No. 37, M-Block, Connought Place, New Delhi - 110001</div>
            <a href="https://maps.app.goo.gl/RK45LhU59Z3GiN3y9" target="_blank">
            <button className="locationButton">View on Map</button></a>
        </div>
        <div className="locationSection">
            <FmdGood className="locationIcon" sx={{ fontSize: 70 }}/>
            <div className="locationHeading">Saket</div>
            <div className="locationAddress">3/14, D-Block, Saket, New Delhi  - 110017</div>
            <a href="https://maps.app.goo.gl/B9NTP7k42scokJKt9" target="_blank">
            <button className="locationButton">View on Map</button></a>
        </div>
        <div className="locationSection">
            <FmdGood className="locationIcon" sx={{ fontSize: 70 }}/>
            <div className="locationHeading">Dwarka Sector-14</div>
            <div className="locationAddress">No. 435, Central Market, Sector 14, Dwarka, New Delhi - 110078</div>
            <a href="https://maps.app.goo.gl/1PUjoPH1dRWgCbNo8" target="_blank">
            <button className="locationButton">View on Map</button></a>
        </div>
      </div>
      <div className="break"></div>
      <div className="locationsHeading">Customer Services</div>
      <div className="customerServices">
        <div className="serviceSection">
          <img src="assets/services/franchise.png" alt="" className="serviceIcon" />
          <div className="serviceHeading">Franchise Queries</div>
          <div className="serviceName">Mr. Manoj Kumar</div>
          <div className="serviceDesignation">External Affair Manager</div>
          <div className="servicePhone">+91 9958XXXXXX</div>
          <div className="serviceMail">bake.house.franchise@gmail.com</div>
        </div>
        <div className="serviceSection">
          <img src="assets/services/marketing.png" alt="" className="serviceIcon" />
          <div className="serviceHeading">Marketing Queries</div>
          <div className="serviceName">Mr. Meenakshi Bhatnagar</div>
          <div className="serviceDesignation">Marketing Managar</div>
          <div className="servicePhone">+91 9350XXXXXX</div>
          <div className="serviceMail">bake.house.marketing@gmail.com</div>
        </div>
        <div className="serviceSection">
          <img src="assets/services/catering.png" alt="" className="serviceIcon" />
          <div className="serviceHeading">Catering Services</div>
          <div className="serviceName">Mr. R.S. Rao</div>
          <div className="serviceDesignation">HR Manager</div>
          <div className="servicePhone">+91 8527XXXXXX</div>
          <div className="serviceMail">bake.house.catering@gmail.com</div>
        </div>
      </div>
    </div>
  )
}
