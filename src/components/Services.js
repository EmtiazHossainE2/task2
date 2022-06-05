import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:px-12 bg-slate-100 pt-20 pb-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-bold italic'>Our Services </h2>
                <div>
                    <p className='text-lg px-2 lg:px-24 lg:text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repudiandae minima ipsum eveniet nihil dolores eos earum eligendi est laboriosam! Debitis commodi cupiditate delectus quos minima voluptatem, in ducimus? Sequi fuga esse quos ex, unde excepturi earum quis consequatur optio? </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 my-12 px-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;