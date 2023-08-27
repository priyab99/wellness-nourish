'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const SectionFour = () => {
    return (
        <div className='container mx-auto'>
             <h4 className='text-center text-sm font-bold mt-5 text-green-600 mb-2'>Meet Our Nutritionist</h4>
            <h1 className='text-center text-5xl text-black font-extrabold mb-5'>Get the Best Diet Plan From The Experts</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                 <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/diet-concept-with-female-scientist-healthy-food_23-2148193279.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Elsa</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/medium-shot-young-doctor-with-tablet-mock-up_23-2148302128.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Veronica</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-laptop-cauliflower_23-2148302072.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Scarllet</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/medium-shot-happy-doctor-with-orange-kiwi_23-2148302076.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Anna Joy</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/medium-shot-young-doctor-with-tablet-mock-up_23-2148302128.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Wanda Winston</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/medium-shot-young-doctor-with-tablet-mock-up_23-2148302128.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Veronica</h3>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide"> {/* Added className */}
                    <div className="relative h-[500px]"> {/* Adjusted height */}
                        <Image
                            layout="fill"
                            objectFit="cover"
                            src="https://img.freepik.com/free-photo/medium-shot-happy-doctor-with-orange-kiwi_23-2148302076.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                            alt=""
                        />
                    </div>
                    <h3 className="text-4xl uppercase text-center absolute bottom-10 left-0 right-0 text-black">Dr. Anna Joy</h3>
                </SwiperSlide>
               

            </Swiper>
            
        </div>
    );
};

export default SectionFour;