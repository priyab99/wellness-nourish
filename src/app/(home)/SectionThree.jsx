import React from 'react';
import Image from 'next/image';

const SectionThree = () => {
    return (
        <div className='container mx-auto bg-white p-10'>
            <h4 className='text-center text-sm font-bold mt-5 text-green-600'>Why Choose Us</h4>
            <h1 className='text-center text-5xl text-black font-extrabold mb-3'>Clean and Fresh Food with Great Nutrition</h1>

            <div className='flex justify-center items-center gap-5'>
                <div className='w-1/2'>
                    <div className='bg-slate-100 mb-5 p-5 rounded-lg'>
                        <p className='font-bold text-black'>100% Natural</p>
                        <p className='text-gray-700'>
                            Proin nec eleifend augue. Praesent nec feugiat mauris. Duis ac lacus non lacus malesuada semper. Morbi odio nulla, consequat et sapien ut, euismod cursus magna.
                        </p>
                    </div>
                    <div className='bg-slate-100 mb-5 p-5 rounded-lg'>
                        <p className='font-bold text-black'>Optimal Weight Gain</p>
                        <p className='text-gray-700'>
                            Proin nec eleifend augue. Praesent nec feugiat mauris. Duis ac lacus non lacus malesuada semper. Morbi odio nulla, consequat et sapien ut, euismod cursus magna.
                        </p>
                    </div>
                    <div className='bg-slate-100 p-5 rounded-lg'>
                        <p className='font-bold text-black'>Diet Health Service</p>
                        <p className='text-gray-700'>
                            Proin nec eleifend augue. Praesent nec feugiat mauris. Duis ac lacus non lacus malesuada semper. Morbi odio nulla, consequat et sapien ut, euismod cursus magna.
                        </p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Image width={500} height={700} src="https://img.freepik.com/free-photo/poke-bowl-with-rice-salmoncucumbermangoonionwakame-salad-poppy-seeds-ands-sunflowers-seeds_123827-22754.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
