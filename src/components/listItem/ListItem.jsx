import './listItem.scss'
import {listItemImage1} from '../../assets'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, } from '@material-ui/icons';
import { useState } from 'react';

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false); 
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    // jsx
    return (
        <div className='listItem' onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}
        style={{left: isHovered && index * 225 - 50 + index * 2.5}}>
            <img src={listItemImage1} alt="list item" />

            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon'/>
                            <Add className='icon'/>
                            <ThumbDownAltOutlined className='icon'/>
                            <ThumbUpAltOutlined className='icon'/>
                            
                        </div>

                        <div className="itemInfoTop">
                            <span>1 hour 04 mins</span>
                            <span className='limit'>16+</span>
                            <span>1999</span>
                        </div>

                        <div className='desc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reprehenderit.
                        </div>

                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )  
}

export default ListItem; 