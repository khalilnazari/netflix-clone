import './home.scss'
import {Featured, Navbar, List} from '../../components'

const Home = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    ) 
}

export default Home; 