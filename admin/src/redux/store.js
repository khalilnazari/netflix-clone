import { configureStore } from '@reduxjs/toolkit';

import movieSlice from "./reducers/movieSlice";
import userSlice from "./reducers/userSlice";
import listSlice from "./reducers/listSlice";
import authSlice from './reducers/authSlice';


export default configureStore({
  reducer: {
    movies: movieSlice,
    users: userSlice,
    lists: listSlice,
    auth: authSlice
  },
});

