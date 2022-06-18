import './app.scss';
import { Home, Watch, Login, Register} from './containers'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

function App() {
  const login = true; 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login ? <Home /> : (<Navigate replace to="/register" />)}/>
        <Route path='/movies' element={login ? <Home type="movie"/> : <Navigate replace to="/login" />}/>
        <Route path='/series' element={login ? <Home type="series"/> : <Navigate replace to="/login" />}/>
        <Route path='/watch' element={login ? <Watch/> : <Navigate replace to="/login" />}/>
        <Route path='/login' element={!login ? <Login/> : <Navigate replace to="/" />}/>
        <Route path='/register' element={!login ? <Register/> : <Navigate replace to="/" />}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
