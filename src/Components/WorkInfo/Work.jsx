import React from "react";
import "./work.css";
import { WorkData } from "./WorkData";

export default function Work(){
    return(
        <section className="work">
            <div className="container-1">
                <h2 className="heading">How It Works</h2>
                {WorkData.map((item ) => {
                    return(
                        <div className="work__info" key={item.id}>
                              <span className="work__icon">{item.icon}</span>
                            <div className="work__details">
                                <h4 className="work__details__heading">{item.name}</h4>
                                <p className="work__info__details">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container-2"></div>

        </section>
    )
}