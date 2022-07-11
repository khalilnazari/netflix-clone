import './App.scss';
import {Dashboard, Lists, List, UpdateList, CreateList, Movies, Movie, UpdateMovie, CreateMovie, User, Users, UpdateUser, CreateUser, Login} from './containers'
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
                
                <Route path='/lists' element={<Lists />}/>
                <Route path='/list/:id' element={<List />}/>
                <Route path='/createlist' element={<CreateList />}/>
                <Route path='/update/:id' element={<UpdateList />}/>
                
                <Route path='/movies' element={<Movies />}/>
                <Route path='/movie/:id' element={<Movie />}/>
                <Route path='/createmovie' element={<CreateMovie />}/>
                <Route path='/updatemovie/:id' element={<UpdateMovie />}/>
                
                <Route path='/users' element={<Users />}/>  
                <Route path='/user' element={<User />}/>  
                <Route path='/updateuser' element={<UpdateUser />}/>  
                <Route path='/createuser' element={<CreateUser />}/>  
                <Route path='*' element={<div>Page not found</div>}/>
              </>
            }
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
