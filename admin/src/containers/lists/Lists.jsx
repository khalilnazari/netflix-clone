import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { getLists } from '../../context/listContext/apiCall';
import { ListContext } from '../../context/listContext/ListContext';
import './lists.scss'


const Lists = () => {
    const { lists, dispatch } = useContext(ListContext)
    
    useEffect(() => {
        getLists(dispatch);
    }, [dispatch])


    const handleDelete = (e) => {
        console.log(e)
    }
    
    // columns
    const columns = [
        { field: "_id", headerName: "ID", width: 300 },
        { field: "title", headerName: "title", width: 300 },
        { field: "genre", headerName: "Genre", width: 200 },
        { field: "type", headerName: "type", width: 200 },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link
                  to={{ pathname: "/list/" + params.row._id, list: params.row }}
                >
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
    ];
    
    
    return (
        <div className="productList">
          <DataGrid
            rows={lists}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={(r) => r._id}
          />
        </div>
    );
};

export default Lists;