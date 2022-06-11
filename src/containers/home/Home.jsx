import './home.scss'
import {Featured, Navbar} from '../../components'

const Home = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <Featured />
        </div>
    ) 
}

export default Home; 