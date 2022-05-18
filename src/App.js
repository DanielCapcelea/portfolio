import React from 'react';
import {About, Navbar, Footer, Header, Skills, Work} from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Footer/>
        </div>
    );
};

export default App;
