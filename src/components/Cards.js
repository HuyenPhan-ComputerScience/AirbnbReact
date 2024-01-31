import React from "react";
export default function Cards(props){
    let badgeText
    if (props.openSpots===0){
        badgeText="sold out"
    }
    else if (props.location ==="Online"){
        badgeText="Online"
    }
    // console.log(props)
    
    return(
       <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
           {/* {props.openSpots===0&&<div className="card--badge">SOLD OUT</div>} */}
            <img className="card--image" src={`../image/${props.house.img}`}/>
            <p className="card--title">{props.house.title}</p>
            <div className='card--stats'>
                <img  className='card--star'src={`../image/${props.house.start_img}`}/>
                <span>{props.house.stats.rating}</span>
                <span>({props.house.stats.reviewCount})</span>
            </div>

            <p><span>From {props.house.price}</span>/night</p>
        </div>

    )
}