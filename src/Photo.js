import React from 'react';
import styled from 'styled-components'


const Title = styled.h2`
  color: ${pr => pr.theme.black};
  font-family: ${pr => pr.theme.fontOne};
  font-size: 2rem;
  padding: 1%;
  margin: 0;
`
const Explanation = styled.p`
color: ${pr => pr.theme.white};
background-color: ${pr => pr.theme.primaryColor};
font-size: 1.1rem;
padding: 5%;
margin: 5%;
`

export default function Photo({ photoData }) {
   

if (!photoData) return <h3>Loading...</h3>; 

    return(
        <>
            <Title>{photoData.title}</Title>
            <img src={photoData.url} />
            <Explanation>{photoData.explanation}</Explanation>
        </>
    );
};