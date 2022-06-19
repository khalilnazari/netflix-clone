import React from 'react';
import { Home, Watch, Login, Register} from './containers'
import { Dashboard } from './admin/containers'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

const Routing = () => {
    const login = true; 
    const isADmin = true; 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={login ? <Home /> : (<Navigate replace to="/register" />)}/>
                <Route path='/movies' element={login ? <Home type="movie"/> : <Navigate replace to="/login" />}/>
                <Route path='/series' element={login ? <Home type="series"/> : <Navigate replace to="/login" />}/>
                <Route path='/watch' element={login ? <Watch/> : <Navigate replace to="/login" />}/>
                <Route path='/login' element={!login ? <Login/> : <Navigate replace to="/" />}/>
                <Route path='/register' element={!login ? <Register/> : <Navigate replace to="/" />}/>

                {isADmin && (
                    <Route path='/admin'>
                        <Route path='/admin/' element={<Dashboard />}/>
                        <Route path='/admin/' element={<Dashboard />}/>
                    </Route>
                    )}
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;