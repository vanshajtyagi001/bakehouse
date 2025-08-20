import React from 'react'
import "./owner.css"

export default function Owner() {
  return (
    <div className="owner">
      <div className="ownerTop">
        <img src="assets/bg/about-top.png" alt="" className="ownerBg" />
        <div className="ownerMainHeading">About Us</div>
      </div>
      <div className="ownerSection">
        <img src="assets/about/bakery.png" alt="" className="ownerImage" />
        <div className="ownerText">
          <div className="ownerHeading">Origin</div>
          <div className="ownerLine"></div>
          <div className="ownerContent">Bake House, established in 1969 by Swedish immigrant Maria Andersson, 
            began with family recipes and a small brick oven. Maria's delicious rye bread and cardamom pastries 
            quickly made the bakery a community favorite. The first official franchise was opened in Connought 
            Place. Passed down through generations, the bakery still honors 
            its traditional roots while delighting customers with both classic and new treats, maintaining a legacy 
            of artisanal baking.</div>
        </div>
      </div>
      <div className="ownerSection">
        <div className="ownerText">
          <div className="ownerHeading">Owner</div>
          <div className="ownerLine"></div>
          <div className="ownerContent">Meet Anna Thompson, the heart and soul behind Bake House. 
            Growing up in a family of bakers, Anna inherited her great-grandmother Maria Andersson’s 
            passion for creating delicious, artisanal treats. With over 20 years of professional baking 
            experience, Anna blends traditional recipes with modern flair, ensuring every loaf and pastry 
            is crafted with love and the finest ingredients. Her commitment to quality and community has 
            made Bake House a beloved local treasure, where every visit feels like coming home.</div>
        </div>
        <img src="assets/about/owner.png" alt="" className="ownerImage" />
      </div>
      <div className="ownerSection">
        <img src="assets/about/worker.png" alt="" className="ownerImage" />
        <div className="ownerText">
          <div className="ownerHeading">Workers</div>
          <div className="ownerLine"></div>
          <div className="ownerContent">At Bake House, our dedicated team of bakers and staff are 
            the backbone of our operation. Each member brings a unique set of skills and a shared passion 
            for the craft of baking. From early mornings spent kneading dough to carefully decorating 
            pastries, our team works tirelessly to ensure that every product meets our high standards 
            of quality and taste. Their hard work, creativity, and commitment to excellence are what make 
            Sunshine Bakery a warm and welcoming place for all our customers.</div>
        </div>
      </div>
    </div>
  )
}
