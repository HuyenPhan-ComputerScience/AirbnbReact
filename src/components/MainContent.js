import React from "react";
import data from "../data/Data"
import '../styles/mainContent.css'
import Cards from "./Cards";
export default function MainContent(){
    const card= data.map(house =>{
        return(
            <Cards
            key={house.id}
            // img={house.img}
            // title={house.title}
            // start_img={house.start_img}
            // rating={house.stats.rating}
            // reviewCount={house.stats.reviewCount}
            // price={house.price}
            // openSpots={house.openSpots}
            // location={house.location}/>
            house={house}
            {...house}
            />
           



        )
    })
    return(
       
        
           
                <div className="cards-list">
                   {card}


                </div>
        
        
    )

}