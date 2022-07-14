import React from 'react';
import './movie.scss'; 
import { Link, useLocation } from "react-router-dom";


const Movie = () => {
    const location = useLocation();
    const { movie} = location.state;

    return (
        <div className="movie-detail">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/createmovie">
                    <button className="productAddButton">New Movie</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Movide title</span>
                            <span className="productInfoValue">{movie.title}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Desctiption</span>
                            <span className="productInfoValue">{movie.desc}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Series</span>
                            <span className="productInfoValue">{movie.isSeries ? "Yes": "No"}</span>
                        </div>
                    </div>

                    <div className='media'>
                        <div className='media-item img'>
                            <p>Thumbnail</p>
                            <img src={movie.img} alt="" />
                        </div>

                        <div className='media-item img'>
                            <p>Small image</p>
                            <img src={movie.imgSm} alt="" />
                        </div>
                        <div className='media-item img'>
                            <p>Image Title</p>
                            <img src={movie.imgTitle} alt="" />
                        </div>
                        <div className='media-item img'>
                            <p>Trailer</p>
                            <video src={movie.trailer} alt="" />
                        </div>
                        <div className='media-item img'>
                            <p>Video </p>
                            <video src={movie.video} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;