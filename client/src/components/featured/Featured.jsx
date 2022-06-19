import './featured.scss'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Featured = ({type}) => {
    const [randomMovie, setRadnomMovie] = useState({}); 
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWQ1MzdhNGZjYjRhNzA4NjE1MTIwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTU2NDYyMSwiZXhwIjoxNjU1NzM3NDIxfQ.eQKXmJdbuUgF-BVSSL8noZ14qHfvO0matfolkZmCqnQ"
                    }
                });

                setRadnomMovie(res.data[0]);
            } catch (error) {
                console.log(error)
            }
        }
        // call get movie
        getMovie()

    }, [type]) 

    // jsx
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    
                    <select name="genre" id="genre" className='category-options'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img className='featured-image'
                src={randomMovie.img}
                alt="featuredImage1"
            />

            <div className="info">
                <img className='info-image'
                    src={randomMovie.imgSm}
                    alt={randomMovie.title}
                />
                <span className="info-desc">
                    {randomMovie.desc}
                </span>

                <div className="buttons">
                    <button className="play-btn btn">
                        <PlayArrow />
                        <Link className='btn-text' to='/watch' state={{movie:randomMovie}}>Play</Link>
                    </button>
                    <button className="more-btn btn">
                        <InfoOutlined />
                        <span className='btn-text'>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;