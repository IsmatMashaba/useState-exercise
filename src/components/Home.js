import React from "react";

export default function Home ({ title, price, image }){

    return (
        <div>
            <div className='product'>
                <div className='title'>Name: {title}</div>
                <div className='price'>Price: ${price}</div>
                <img src={image} alt={title} />
            </div>

        </div>
    );

}