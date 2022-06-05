import React from 'react';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Plans from './components/Plans';
import Services from './components/Services';

const App = () => {
    return (
        <div className='relative'>
            <Header/>
            <Banner/>
            <Plans/>
            <Feature/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;