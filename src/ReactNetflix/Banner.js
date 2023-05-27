import React, { useEffect, useState } from 'react'
import axios from "./axios"
import requests from './request';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request  = await axios.get(requests.fetchNetflixOrigin);
      console.log(request.data.results); //.../.../.../
    }
    fetchData();
  }, []);

  return (
    <header>
      {/* background image */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  )
}

export default Banner
