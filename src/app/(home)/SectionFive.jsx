import React from 'react';
import { CiTimer } from 'react-icons/ci';

const SectionFive = () => {
    return (
        <div className='w-3/4 mt-5 mx-auto bg-slate-100'>
            <h4 className='text-center text-sm font-bold pt-8 text-green-600'>Membership Program</h4>
            <h1 className='text-center text-5xl text-black font-extrabold mb-3'>Lets Join Our <br /> Membership Catering</h1>
            <div className='flex items-center justify-center'>
                <p className='bg-white rounded-sm p-2 flex items-center'><CiTimer className='mr-2' /> Mon-Sat: 08:00-18:00</p>
            </div>
            <div className='flex gap-3 mt-8 items-center justify-center'>
                <div className="card mb-8 w-96 bg-base-100 shadow-xl">
                    
                    <div className="card-body">
                      <div className="text-center">  <h2 className='text-xl font-bold mb-5' >Weekly</h2>
                        <p>Upgrade your social portfolio with a stunning profile & enhanced shots.</p>
                       <p className='text-5xl font-extrabold mt-5 mb-5'>$105</p>
                       <p>per week, two pax/day</p>
                       <button className='btn btn-info rounded-lg mt-5 mb-5'>Get Started</button></div>
                       <li>Free to choose Menu</li>
                       <li>24/7 consultation</li>
                       <li>Weight Assessment</li>
                       <li>Meal planning ans analysis</li>
                    </div>
                </div>
                <div className="card mb-8 w-96 bg-green-700 shadow-xl">
                    
                <div className="card-body">
                <div className="text-center">  <h2 className='text-xl font-bold mb-5' >Monthly</h2>
                        <p>Upgrade your social portfolio with a stunning profile & enhanced shots.</p>
                       <p className='text-5xl font-extrabold mt-5 mb-5'>$105</p>
                       <p>per week, two pax/day</p>
                       <button className='btn btn-info rounded-lg mt-5 mb-5'>Get Started</button></div>
                       <li>Free to choose Menu</li>
                       <li>24/7 consultation</li>
                       <li>Weight Assessment</li>
                       <li>Meal planning ans analysis</li>
                    </div>
                </div>

            </div>
           <div className="flex justify-center"> <a className='text-lg underline font-bold text-black mb-5' href="">View All Pricing</a></div>
        </div>
    );
};

export default SectionFive;