import './App.scss';
import {Dashboard, List, Lists, Login, NewMovie, Movie, MovieList, User, UserList, NewUser, NewList} from './containers'
import {Sidebar, Topbar} from './components'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const login = false; 
  return (
    <BrowserRouter>
      {login && <Topbar />}
      <div className="body-container">
        {login && <Sidebar />}
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/list' element={<List />}/>
            <Route path='/lists' element={<Lists />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/nemmovie' element={<NewMovie />}/>
            <Route path='/movie' element={<Movie />}/>
            <Route path='/movies' element={<MovieList />}/>
            <Route path='/user' element={<User />}/>
            <Route path='/userlist' element={<UserList />}/>
            <Route path='/newuser' element={<NewUser />}/>
            <Route path='/newlist' element={<NewList />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
