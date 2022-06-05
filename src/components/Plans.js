import React from 'react';
import { AiTwotoneContainer } from 'react-icons/ai';


const Plans = () => {
    return (
        <div id='plans' className='pt-12'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-bold'>Find A Plan That Works For You</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita <br /> voluptatibus et sapiente doloribus reiciendis iste ea .!</p>
            </div>
            <div className='lg:px-12 md:pt-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 mx-4  mb-12'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <span className='text-5xl'><AiTwotoneContainer /></span>
                        <h4 className='text-3xl font-bold'>Basic</h4>
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title  text-3xl ">Start building beautiful websites.</h2>
                        <p className='text-2xl font-bold'>$/ <span className='text-3xl '>199</span></p>
                        <button className='btn bg-blue-500 border-0 text-white'>Choose Plan</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <span className='text-5xl'><AiTwotoneContainer /></span>
                        <h4 className='text-3xl font-bold'>Professional</h4>
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title  text-3xl ">Start building beautiful websites.</h2>
                        <p className='text-2xl font-bold'>$/ <span className='text-3xl '>299</span></p>
                        <button className='btn bg-blue-500 border-0 text-white'>Choose Plan</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <span className='text-5xl'><AiTwotoneContainer /></span>
                        <h4 className='text-3xl font-bold'>Ultimate</h4>
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title  text-3xl ">Start building beautiful websites.</h2>
                        <p className='text-2xl font-bold'>$/ <span className='text-3xl '>399</span></p>
                        <button className='btn bg-blue-500 border-0 text-white'>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;