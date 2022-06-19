import './list.scss'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons'
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';

const List = ({list}) => {
    // Ref hook 
    const listRef = useRef();

    // slideNumber 
    const [slideNumber, setSlideNumber] = useState(0); 
    const [isMoved, setIsMoved] = useState(false)

    // handle slide click 
    const handleSliding = (direction) => {
        setIsMoved(true)
        const distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translate(${230 + distance}px)`;
        }

        if(direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translate(${-230 + distance}px)`;
        }
    }

    // jsx
    // this is a single slider
    return (
        <section className="list">
            <span className='listTitle'>{list.title}</span>
            
            {/* slider wrapper */}
            <div className="wrapper">
                {/* left arrow */}
                <ArrowBackIosOutlined 
                    className='slideArrow left'  
                    onClick={() => handleSliding('left')}
                    style={{display: !isMoved && "none"}}
                />

                <div className="container" ref={listRef}>
                    {list.content.map((item, index) => {
                        return <ListItem index={index} item={item} key={index}/>
                    })}
                </div>
                
                {/* right arrow */}
                <ArrowForwardIosOutlined className='slideArrow right' onClick={() => handleSliding('right')}/>
            </div>
        </section>
    )
}

export default List;  