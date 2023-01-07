import React from "react"
import "./pricing.css"
import { PricingData } from "./PricingData"

export default function Pricing (){
return(
    <section className="Pricing">
    <h4 className="heading">Starter Home Automation Packages</h4> 
    <div className="pricing__container">
        {PricingData.map((item , index)=>{
            return(
                <div className="pricing__box">
                    <span className="pricing__box-small">{item.kitName}</span>
                    <h2 className="pricing__heading">{item.name}</h2>
                    <span className="pricing__price">{item.price}</span>
                    <span className="pricing__kit">{item.kit}</span>
                    <p className="pricing__features">Features</p>
                    <ul className="pricing__list">{item.list.map((item, i) => (
                  <li className="pricing__list__list" key={i}>{item}</li>
                ))}</ul>
                    <button className="pricing__button">Call Now To Order</button>
                </div>
            )
        })}
    </div>
    </section>
)
}