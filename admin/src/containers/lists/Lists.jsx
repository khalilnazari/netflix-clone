import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { getListsAPI } from '../../redux/api/api'
import { getLists } from '../../redux/reducers/listSlice';
import { DataGrid } from "@material-ui/data-grid";
import { OpenInNew } from "@material-ui/icons";
import { Link } from "react-router-dom";
import './lists.scss'

const Lists = () => {
  const { lists } = useSelector((state) => state.lists); 
  const dispatch = useDispatch(); 
  
  const listData = async () => {
    try {
      const res = await getListsAPI(); 
      dispatch(getLists(res.data)); 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listData(); 
  }, [dispatch]) 
  

    const handleDelete = (id) => {
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
            return <Link to={`/list/${params.row._id}`}><OpenInNew /></Link>
          },
        },
    ];
    
    
    return (
      <div className="productList">
        <div className='page-header'>
          <h2>Movie Lists</h2>
          <button className='btn'>New List</button>
        </div>
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