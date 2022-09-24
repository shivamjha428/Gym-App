import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Protected from './components/protected';
import Dashboard from './components/Dashboard';
import Dashboard1 from './components/Dashboard2';
const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup"element={<Signup/>}></Route>
      <Route path="/data"element={<Protected><Dashboard/></Protected>}></Route>
      <Route path="/data2"element={<Protected><Dashboard1/></Protected>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;