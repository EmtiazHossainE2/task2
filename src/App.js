import React from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <div className=''>
            <Header/>
            <Banner/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;