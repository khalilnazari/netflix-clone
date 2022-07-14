import { configureStore} from "@reduxjs/toolkit";

import movieSlice from "./reducers/movieSlice";
import userSlice from "./reducers/userSlice";
import listSlice from "./reducers/listSlice";

const store = configureStore({
    reducer: {
        movies: movieSlice,
        users: userSlice, 
        lists: listSlice
    }
})

export default store; 