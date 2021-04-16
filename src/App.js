import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo';
import styled from 'styled-components';
import { IoMdRocket } from 'react-icons/io'


const Icon = styled.span`
  color: ${pr => pr.theme.secondaryColor};
  font-size: 2rem;
  margin: 0 3%;

`


const Title = styled.nav`
  font-family: ${pr => pr.theme.fontTwo};
  font-size: 3rem;
  color: ${pr => pr.theme.white};
  background-color: ${pr => pr.theme.primaryColor};

`

export default function App() {
  const [photoData, setPhotoData] = useState('')


useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    console.log(res)
    console.log(res.data)
    setPhotoData(res.data)
  })
  .catch(err => {
    console.log('err')
  })
},[])


  return (
  
    <div className="App">
      <Title><Icon><IoMdRocket /></Icon>NASA Photo of the Day<Icon><IoMdRocket /></Icon></Title>
      <Photo photoData={photoData}/>
    </div>
  
  );
}


