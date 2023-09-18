import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/styles.scss';

import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header/>

      <Routes>
        <Route path='/' exact={true} element={<Home/>}/>
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </div>
  );
}

export default App;