import React from 'react';
import contact from '../images/img1.jpg'
import { AiOutlineContacts } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className='py-20 px-3 lg:px-12 bg-[#e4e6ed]' id='contact'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='basis-1/3'>
                    <div>
                        <img className='lg:max-w-xl' src={contact} alt="factory" />

                    </div>
                    <div className=' p-5 space-y-4'>
                        <div className=" items-center justify-center">
                            <div className='space-y-2 '>
                                <span className='text-8xl'><AiOutlineContacts /></span>
                                <p>contact@gmail.com</p>
                                <div className='pt-4'>
                                    <h4 className='text-primary'>PHONE </h4>
                                    <p>(123) 456-78-90</p>
                                    <p>(123) 456-78-90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-3/4 flex items-center justify-center'>
                    <div className=''>
                        <div className='space-y-4 text-center'>
                            <p className='uppercase text-secondary text-2xl text-center'>Get in touch</p>
                            <h2 className='text-4xl font-bold '>How can we help <br />
                                your business?</h2>
                            <p className='text-lg text-gray-500'>Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                        </div>
                        <div className='grid grid-cols-1  pt-5 capitalize'>
                            <div className="card bg-white">
                                <div className="card-body">
                                    <form className='space-y-3'>
                                        <input
                                            type='text'
                                            placeholder='Email Address'
                                            className='input  input-bordered w-full max-w-md'
                                        />
                                        <input
                                            type='text'
                                            placeholder='Subject'
                                            className='input  input-bordered w-full max-w-md'
                                        />
                                        <textarea
                                            className='textarea  input-bordered w-full max-w-md'
                                            placeholder='Your message'
                                            rows={3}
                                        ></textarea>
                                        <input type="submit" value="Submit Your Message" className="btn btn-primary text-white w-full max-w-md text-lg" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;