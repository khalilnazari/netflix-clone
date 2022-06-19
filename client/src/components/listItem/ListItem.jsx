import './listItem.scss'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false); 
    const [movie, setMovie] = useState({}); 

    // useEffect hook
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/"+item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWQ1MzdhNGZjYjRhNzA4NjE1MTIwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTU2NDYyMSwiZXhwIjoxNjU1NzM3NDIxfQ.eQKXmJdbuUgF-BVSSL8noZ14qHfvO0matfolkZmCqnQ"
                    }
                });

                setMovie(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        getMovie()
    }, [item]) 

    // console.log(movie)
    // jsx  
    return (
        // pass movie through Link
        <Link to="/watch" state={{movie:movie}}>
            <div className='listItem' onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}>
                <img src={movie.img} alt="list item" />

                {/* when hover */}
                {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon'/>
                            <Add className='icon'/>
                            <ThumbDownAltOutlined className='icon'/>
                            <ThumbUpAltOutlined className='icon'/>
                            
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 04 mins</span>
                            <span className='limit'>{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className='desc'>{movie.desc}</div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
                )}
            </div>
        </Link>
    )  
}

export default ListItem; 