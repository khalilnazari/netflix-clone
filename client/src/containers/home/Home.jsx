import './home.scss'
import {Featured, Navbar, List} from '../../components'
import { useState,useEffect } from 'react'
import axios from 'axios'; 

const Home = ({type}) => {
    const [lists, setLists] = useState([]); 
    const [genre, setGenre] = useState(null); 

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const queryString = `lists${type ? "?type="+type: ""}${genre ? "genre="+genre: ""}`; 
                // console.log(queryString)

                const res = await axios.get(queryString, 
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWQ1MzdhNGZjYjRhNzA4NjE1MTIwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTU2NDYyMSwiZXhwIjoxNjU1NzM3NDIxfQ.eQKXmJdbuUgF-BVSSL8noZ14qHfvO0matfolkZmCqnQ"
                        }
                    });
                    setLists(res.data) 
            } catch (error) {
                console.log(error)
            }
        }

        getRandomList()
    },[genre, type])

    // jsx
    return (
        <div className='homepage'>
            <Navbar />
            <Featured type={type}/>
            {lists.map((list, index) => (
                <List list={list} key={index}/>
            ))}
        </div>
    ) 
}

export default Home; 