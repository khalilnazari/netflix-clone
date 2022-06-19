import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss'
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
    const location = useLocation(); 
    const movie = location.state.movie; 
    
    // jsx.
    return (
        <div className='watch'>
            <Link className="back" to="/">
                <ArrowBackOutlined /> Home
            </Link>
            <video className='video' autoPlay={true} controls progress="true" src={movie.video} />
        </div>
    )
}

export default Watch;