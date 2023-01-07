import React from "react";
import { KeyFeaturesData } from "./Keyfeatures";
import "./keyfeatures.css"


export default function Keyfeatures(){
    return(
        <section className="key__features" id="products">
            {KeyFeaturesData.map((item)=> {
                return(
                    <div className="key__features__box">
                        <div className="box__icon">{item.icon}</div>
                        <h3 className="box__name">{item.feature}</h3>
                        <p  className="box__description">{item.description}</p>
                    </div>

                )
            })}

        </section>
    )
}