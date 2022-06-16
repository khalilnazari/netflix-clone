import './featured.scss'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import {featuredImage1, featuredImage2} from '../../assets'

const Featured = ({type}) => {
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
                src={featuredImage1}
                alt="featuredImage1"
            />

            <div className="info">
                <img className='info-image'
                    src={featuredImage2}
                    alt="featuredImage2"
                />
                <span className="info-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                    adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                    sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                    temporibus eum earum?
                </span>

                <div className="buttons">
                    <button className="play-btn btn">
                        <PlayArrow />
                        <span className='btn-text'>Play</span>
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