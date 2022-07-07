import axios from 'axios';
import {getListsFailure, getListsSuccess, getListsStart, deleteListFailure, deleteListStart, deleteListSuccess} from './ListActions'

export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
      const res = await axios.get("/lists", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getListsSuccess(res.data));
    } catch (err) {
      dispatch(getListsFailure());
    }
};

export const deleteLists = async (dispatch, id) => {
  dispatch(deleteListStart());
  try {
    const response = await axios.delete("/lists/"+id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    // message from server
    const message = response.data;

    dispatch(deleteListSuccess({id, message}));
  } catch (err) {
    dispatch(deleteListFailure(err));
  }
};