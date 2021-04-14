import React from 'react';



export default function Photo(props) {
    const { photoData } = props;


if (!photoData) return <h3>Loading...</h3>; 

    return(
        <>
            <h2>{photoData.title}</h2>
            <img src={photoData.url} />
            <p>{photoData.explanation}</p>
        </>
    );
};