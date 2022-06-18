import { ArrowBackOutlined } from '@material-ui/icons';
import './watch.scss'
import { Link } from 'react-router-dom';

const Watch = () => {
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    // jsx
    return (
        <div className='watch'>
            <Link className="back" to="/">
                <ArrowBackOutlined /> Home
            </Link>
            <video className='video' autoPlay controls progress src={trailer} />
        </div>
    )
}

export default Watch;