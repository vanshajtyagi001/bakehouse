import React from 'react'
import "./catalogue.css"

export default function Catalogue() {
  return (
    <div className="introCatalogue">
        <ul className="introItems">
          <li className="introItem">
            <img src="assets/items/1.png" alt="" className="introItemImg" />
            <span className="introItemName">Choco Marble Cake</span>
            <button className="introItemOrderButton">Order Now</button>
          </li>
          <li className="introItem">
            <img src="assets/items/2.png" alt="" className="introItemImg" />
            <span className="introItemName">Plum Pie</span>
            <button className="introItemOrderButton">Order Now</button>
          </li>
          <li className="introItem">
            <img src="assets/items/3.png" alt="" className="introItemImg" />
            <span className="introItemName">Fruit Tarts</span>
            <button className="introItemOrderButton">Order Now</button>
          </li>
          <li className="introItem">
            <img src="assets/items/4.png" alt="" className="introItemImg" />
            <span className="introItemName">White Chocolate Mousse</span>
            <button className="introItemOrderButton">Order Now</button>
          </li>
        </ul>
    </div>
  )
}
