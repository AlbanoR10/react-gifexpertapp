// import React, { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifts } from '../helpers/GetGift';

const GifGrid = ({ category }) => {
    const {data, loading} = useFetchGifs(category);
    // console.log(loading);
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifts(category)
    //         .then(img => {setImages((asd)=>img)})
        
    // }, [category])


    // getGift();
    return (
        <>
            <h3>{category}</h3>
            {loading && "Cargando..."}
            <div className="card-grid">
                {
                    data.map((img) =>
                        (<GifGridItem img={img} key={img.id} />))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {}

export default GifGrid