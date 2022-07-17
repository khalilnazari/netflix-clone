import { configureStore } from '@reduxjs/toolkit';

import movieSlice from "./reducers/movieSlice";
import userSlice from "./reducers/userSlice";
import listSlice from "./reducers/listSlice";
import loginSlice from './reducers/loginSlice';


export default configureStore({
  reducer: {
    movies: movieSlice,
    users: userSlice,
    lists: listSlice,
    login: loginSlice
  },
});

