import React from 'react';
import {Link} from 'react-router-dom';

import './Banner.styles.css'

function Banner(props){

    if(props.displayOrder%2==0){
        return (
        
            <div className='banner'>
                <div className='banner-img'>
                    <img src={`${props.item.imageUrl}`} alt={props.item.key}/>
                </div>
                <div className='banner-content'>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                    <Link className='link' to={`/products/${props.item.id}`}>Explore {props.item.key}</Link>
                </div>
    
            </div>
        )
    }else{
        return(
            <div className='banner banner-img-right'>
                <div className='banner-content'>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                    <Link className='link' to={`/products/${props.item.id}`}>Explore {props.item.key}</Link>
                </div>  
                <div className='banner-img'>
                    <img src={`${props.item.imageUrl}`} alt={props.item.key}/>
                </div>
            </div>
        )
    }


}

export default Banner;