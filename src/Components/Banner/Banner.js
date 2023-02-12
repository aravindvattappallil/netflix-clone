import './Banner.css'
import {API_KEY,imgurl} from '../Constants/Constants'
import  axios from '../../axios'

import React , {useEffect, useState} from 'react'


function Banner() {
  const [movie, setMovie] = useState()
     
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[3])
      setMovie(response.data.results[3])
      console.log(movie?.title);
    })
    
  },[])    
    
       
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imgurl+movie.backdrop_path: ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{ movie ? movie.title:" Movie Title"}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='description'>{movie ? movie.overview :"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner