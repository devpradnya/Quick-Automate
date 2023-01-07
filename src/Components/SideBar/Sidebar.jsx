import React, { useEffect, useState } from "react";
import "./sidebar.css"
import { Products } from "./ProductsData";
import {MdOutlineFacebook} from 'react-icons/md'
import {AiOutlineInstagram , AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai';
import {CgPushChevronLeft, CgPushChevronRight} from 'react-icons/cg'

export default function Sidebar(){

    const time = 3000;
    const autoplay = true;
    let productInterval;
    const [currentProduct, SetCurrentProduct] =useState(0);
    const [activeSidebar , setActiveSidebar] = useState(false)

    function changeProduct(){
        const updateProduct = currentProduct === Products.length - 1 ? 0 : currentProduct + 1 ;
        SetCurrentProduct(updateProduct);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     function AutoProductSlider(){
    productInterval = setInterval(changeProduct , time);
     }
    useEffect(()=>{
        if (autoplay){
          AutoProductSlider()
        }
        return () => clearTimeout(productInterval);
    }, [AutoProductSlider, productInterval, autoplay]);

    function Pause(){
        clearTimeout(productInterval)
    }

    // useEffect(()=> {
    //     function showSidebar(){
    //         setActiveSidebar(true)
        
    //         };
    // },[showSidebar])
    
    
    
    return(
        <section className={activeSidebar === true ? "sidebar sidebar__active" : "sidebar"}>
             <div className="slideinbtn" onClick={() => setActiveSidebar(activeSidebar => !activeSidebar)} >
           <span className= 'slidein slide'> <CgPushChevronLeft /> </span>
           <span className= {activeSidebar===true ? 'slideout__active slide' : 'slideout slide'}> <CgPushChevronRight /> </span>
        </div>
            <div className="sidebar__form">
            <h3 className="sidebar__form__heading" > Let Us Contact You </h3>
                <form action="">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="text" placeholder="Address"/>
                    <button className="form__submit__button">Submit</button>
                </form>
            </div>
            <div className="our__products" onMouseEnter={() => Pause()} onMouseLeave = {()=> AutoProductSlider()}>
                <h3>Our Products</h3>
                {Products.map((item, i)=>{
                   return(
                    <div className={i === currentProduct ? " products__slider products__slider__active" : "products__slider" } style={{backgroundImage  : `url(${item.productImage})`}}>
                        <h4 className="product__name">{item.productName}</h4>
                    </div>
                   )
                })}

            </div>
            <div className="follow_us">
                <span  className="social__icons"><MdOutlineFacebook /></span>
                <span className="social__icons"><AiOutlineInstagram /></span>
                <span className="social__icons"><AiOutlineTwitter /></span>
                <span className="social__icons"><AiOutlineLinkedin /></span>
            </div>
        </section>
    )
}