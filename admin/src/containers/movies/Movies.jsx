import React, { useEffect } from "react";
import "./movies.scss";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { getMoviesAPI } from "../../redux/api/api";
import { getMovies } from "../../redux/reducers/movieSlice";

export default function MovieList() {
    const { movies } = useSelector((state) => state.movies);
    const dispatch = useDispatch(); 
    console.log(movies)

    // fetch movies and update store
    const moviesData = async () => {
        try {
            const res = await getMoviesAPI(); 
            dispatch(getMovies(res.data)); 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        moviesData(); 
    }, [dispatch]);


    // delete movie
    const handleDelete = (id) => {
        console.log(id)
    };
   
    // DataGrid  column setup
    const columns = [
        { 
            field: "_id", 
            headerName: "ID", 
            width: 250 
        },
        {
            field: "movie",
            headerName: "Movie",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="movieListItem">
                        <img className="movieListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { 
            field: "genre", 
            headerName: "Genre", 
            width: 120 
        },
        { 
            field: "year", 
            headerName: "year", 
            width: 120 
        },
        { 
            field: "limit", 
            headerName: "limit", 
            width: 120 
        },
        { 
            field: "isSeries", 
            headerName: "isSeries", 
            width: 120 
        },

        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link
                            to={`/movie/${params.row._id}`} 
                            state={{movie: params.row, id:params.row._id }}
                        >
                            <button className="movieListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                        className="movieListDelete"
                        onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="movieList">
            <DataGrid
                height='500px'
                rows={movies}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(r) => r._id}
            />
        </div>
    );
}