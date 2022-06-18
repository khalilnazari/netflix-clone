import './home.scss'
import {Featured, Navbar, List} from '../../components'

const Home = ({type}) => {
    return (
        <div className='homepage'>
            <Navbar />
            <Featured type={type}/>
            <List />
            <List />
            <List />
            <List />
        </div>
    ) 
}

export default Home; 