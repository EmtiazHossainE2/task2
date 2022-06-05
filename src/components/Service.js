import React from 'react';

const Service = ({service}) => {
    const {name,img,des} = service
    return (
        <div className="card lg:max-w-lg bg-base-100 ">
            <figure><img className='w-full' src={img} alt="Pipes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='pb-2'>{des}</p>
                
                <div className="card-actions pt-3 ">
                    <button className='btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;