import React, { useState } from 'react';
import './createMovie.scss';
import storage from "../../../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch } from 'react-redux';
import { createMovie2 } from '../../../redux/data/moviesData';

const NewMovie = () => {
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);
    const [fileUploadProgress, setFileUploadProgress] = useState(0); 
    const [displayFileProgress, setDisplayFileProgress] = useState('none');
    const dispatch = useDispatch(); 
    
    // upload function
    const upload = (items) => {
        items.forEach(item => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, 'items/' + fileName);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on("state_changed", 
                (snapshot) => {
                    const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setFileUploadProgress(progress); 
                    setDisplayFileProgress('block')
                }, 
                (error) => {
                     console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setMovie((prev) => {
                          return { ...prev, [item.label]: url };
                        });
                        setUploaded((prev) => prev + 1);
                    });
                }
            )
        })
    }

    // feilds state
    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    }

    // upload files
    const handleUpload = (e) => {
        e.preventDefault();
        
        if(!img || !imgTitle || !imgSm || !trailer || !video) {
            alert("upload all fiels")
            return; 
        }
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ]);
    }

    // submit
    const handleSubmit  = (e) => {
        e.preventDefault();
        createMovie2(movie, dispatch); 
    } 

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <div style={{"display":`${displayFileProgress}`, "margin": "2 auto"}}>
                <label for="file">Uploading Files</label>
                <progress id="file" value={fileUploadProgress} max="100" style={{"width":"80%"}}></progress>
            </div>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Trailer</label>
                    <input
                        type="file"
                        name="trailer"
                        onChange={(e) => setTrailer(e.target.files[0])}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Video</label>
                    <input
                        type="file"
                        name="video"
                        onChange={(e) => setVideo(e.target.files[0])}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Image</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={(e) => setImg(e.target.files[0])}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Title image</label>
                    <input
                        type="file"
                        id="imgTitle"
                        name="imgTitle"
                        onChange={(e) => setImgTitle(e.target.files[0])}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Thumbnail image</label>
                    <input
                        type="file"
                        id="imgSm"
                        name="imgSm"
                        onChange={(e) => setImgSm(e.target.files[0])}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="John Wick"
                        name="title"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder="description"
                        name="desc"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Year</label>
                    <input
                        type="text"
                        placeholder="Year"
                        name="year"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Genre</label>
                    <input
                        type="text"
                        placeholder="Genre"
                        name="genre"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Duration</label>
                    <input
                        type="text"
                        placeholder="Duration"
                        name="duration"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Limit</label>
                    <input
                        type="text"
                        placeholder="limit"
                        name="limit"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="addProductItem">
                    <label>Is Series?</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange} required>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>
                
                {uploaded === 5 ? (
                    <button className="addProductButton" onClick={handleSubmit}>
                        Create Movie
                    </button>
                ) : (
                    <button className="addProductButton" onClick={handleUpload}>
                        Upload Files
                    </button>
                )}
            </form>
        </div>
    );
};

export default NewMovie;