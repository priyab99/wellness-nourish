import Image from 'next/image';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { CiTimer } from 'react-icons/ci';
import { MdOutlineContactSupport } from 'react-icons/md';

const Section = () => {
    return (
        <div>
            <div className="carousel bg-white">
                <div className="carousel-item">
                    <Image width={500} height={723} src="https://img.freepik.com/free-photo/green-broccoli-levitating-white-background_485709-79.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais" alt="" />
                </div>
                <div className='bg-white'>
                    <h4 className='text-center text-sm font-bold mt-5 text-green-600'>Who we are</h4>
                    <h1 className='text-center text-5xl text-black font-extrabold mb-3'>Prioritize Nutrition for Optimal Health</h1>
                    <div className='flex gap-2'>
                        <div className="flex items-center mb-3">
                            <AiFillCheckCircle className="text-green-500 text-5xl" />
                            <p className='text-black text-lg font-bold  ml-2'>Certified Nutritionists</p>
                        </div>
                        <div className="flex items-center">
                            <CiTimer className="text-blue-500 text-5xl" />
                            <p className='text-black text-lg font-bold ml-2'>Always On Time Service</p>
                        </div>
                        <div className="flex items-center">
                            <MdOutlineContactSupport className="text-purple-500 text-5xl" />
                            <p className='text-black text-lg font-bold ml-2'>24/7 Customer Support</p>
                        </div>
                    </div>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit ligula arcu, at dapibus turpis condimentum ac. Sed a ultrices nulla. Nunc venenatis eros ut eros ultrices, vitae sollicitudin augue tincidunt.</p>
                </div>
                <div className="carousel-item">
                    <Image width={500} height={723} src="https://img.freepik.com/free-photo/fresh-fruits-levitate-white-background_485709-69.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais" alt="" />
                </div>
            </div>
            <style>
                {`
                  @media (max-width: 768px) {
                    .carousel {
                      flex-direction: column;
                    }
                  }
                `}
            </style>
        </div>
    );
};

export default Section;
