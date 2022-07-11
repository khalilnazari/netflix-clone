import React from 'react'
import './updateMovie.scss'

const UpdateMovie = () => {
  return (
    <div className="update-movie">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Movie Title</label>
                <input type="text" placeholder={movie.title} />

                <label>Year</label>
                <input type="text" placeholder={movie.year} />

                <label>Genre</label>
                <input type="text" placeholder={movie.genre} />

                <label>Limit</label>
                <input type="text" placeholder={movie.limit} />

                <label>Trailer</label>
                <input type="file" placeholder={movie.trailer} />

                <label>Video</label>
                <input type="file" placeholder={movie.video} />
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img
                        src={movie.img}
                        alt=""
                        className="productUploadImg"
                    />
                    <label htmlFor="file">
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateMovie