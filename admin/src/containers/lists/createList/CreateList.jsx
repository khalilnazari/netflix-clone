import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import './createList.scss';

const NewList = () => {
    const { movies } = useSelector(state => state.movies); 
    const [newList, setNewList] = useState(); 


    const handleChange = (e) => {
        setNewList({...newList, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault(); 
        console.log('list form submitted', newList)
    } 
 
    return (
        <div className='createList'>
            <div className="page-header">
                <h1 className='title'>Create New List</h1>
                <button className='btn btn-primary'>Update</button>
            </div>

            <form action="" onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' onChange={handleChange}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="genre">Genre</label>
                    <input type="text" name='genre' id='genre' onChange={handleChange}/>
                </div>
                
                <div className='form-control'>
                    <label htmlFor="type">Type</label>
                    <select name="type" id='type' onChange={handleChange}>
                        <option>Choose Genre</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor="content">Content</label>
                    <select name="content" id='content' onChange={handleChange}>
                        <option>Choose Movie</option>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>
                                {movie.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='form-control btns'>
                    <button className='btn btn-danger'>Delete</button>
                    <button type='submit' className='btn btn-success'>Submit</button> 
                </div>
            </form>
        </div>
    );
};

export default NewList;