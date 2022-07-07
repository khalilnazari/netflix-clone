// get
export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
});

// delete
export const deleteListStart = () => ({
  type: "DELETE_LIST_START"
})

export const deleteListSuccess = (data) => ({
  type: "DELETE_LIST_SUCCESS", 
  payload: data
})

export const deleteListFailure = (error) => ({
  type: "DELETE_LIST_FAILURE", 
  payload: error
})

// update
