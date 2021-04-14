import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo'


export default function App() {
  const [photoData, setPhotoData] = useState('')


useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    console.log(res.data)
    setPhotoData(res.data)
  })
  .catch(err => {
    console.log('err')
  })
},[])


  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <Photo photoData={photoData} />
    </div>
  );
}


