import './App.scss';
import {Dashboard, List, Lists, Login, NewMovie, Movie, MovieList, User, UserList, NewUser, NewList} from './containers'
import {Sidebar, Topbar} from './components'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext)
  return (
    <BrowserRouter>
      {user && <Topbar />}
      <div className="body-container">
        {user && <Sidebar />}
        <div className='main-content'>
          <Routes>
            <Route path='/login' element={ !user ? <Login />: <Navigate replace to="/" />}/>
            {user && 
              <>
                <Route path='/' element={ <Dashboard /> }/>
                <Route path='/list' element={<List />}/>
                <Route path='/lists' element={<Lists />}/>
                <Route path='/nemmovie' element={<NewMovie />}/>
                <Route path='/movie/:id' element={<Movie />}/>
                <Route path='/movies' element={<MovieList />}/>
                <Route path='/user' element={<User />}/>
                <Route path='/userlist' element={<UserList />}/>
                <Route path='/newuser' element={<NewUser />}/>
                <Route path='/newlist' element={<NewList />}/>  
              </>
            }
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
