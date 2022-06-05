import React from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';

const App = () => {
    return (
        <div className=''>
            <Header/>
            <Banner/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;