import "./movieList.scss";
import { DataGrid} from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function MovieList() {
    const { movies, dispatch } = useContext(MovieContext);

    console.log(movies)

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    };


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
                            state={{movie: params.row }}
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