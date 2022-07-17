import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './list.scss'

const List = () => {
    // get list id form URL
    const {id} = useParams();
    
    // get list from store based based on the id
    const list = useSelector(state => state.lists.lists.find(list => list._id === id)); 
    

    // get movies  
    const { movies } = useSelector(state => state.movies); 

    // get movies based on content id
    const contentList = list.content.map(contentId => {
        return movies.find(movie => movie._id === contentId); 
    })

    // jsx
    return (
        <div className='createList'>
            <div className="page-header">
                <h1 className='title'>List Detail</h1>
                <div>
                    <Link to={`/updatelist`} className='btn btn-primary'>Update</Link> &nbsp;
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </div>
           
            <div className='form-control'>
                <label htmlFor="title">Title</label>
                <p>{list.title}</p>
            </div>

            <div className='form-control'>
                <label htmlFor="genre">Genre</label>
                <p>{list.genre}</p>
            </div>
            
            <div className='form-control'>
                <label htmlFor="type">Type</label>
                <p>{list.type}</p>
            </div>
            <div className='form-control'>
                <label htmlFor="content">Content</label>
                {contentList.map(c => <p>{c.title}</p>)}
            </div>
           
        </div>
    );
};

export default List;