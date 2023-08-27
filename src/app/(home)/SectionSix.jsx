'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const SectionSix = () => {
    const circularImageStyle = {
        borderRadius: '50%', // Make the image circular
     
    };
    const swiperSlideStyle = {
        border: '1px solid #ccc',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column'
    
    };
    return (
        <div>
            <h4 className='text-center text-sm font-bold pt-8 text-green-600'>Tesitimonial</h4>
            <h1 className='text-center text-5xl text-black font-extrabold mb-5'>Our Cleints Say</h1>
           <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2' >
                        <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src=" https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt=""/>
                        <div>
                            <p>Juli Radina</p>
                            <p>Copy Writer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2'>
                        <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt="" />
                        <div>
                            <p className='font-bold'>Chirs Evans</p>
                            <p>Freelancer</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2'>
                        <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt="" />
                        <div>
                            <p className='font-bold'>Maruf Rahim</p>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2'>
                        <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt="" />
                        <div>
                            <p className='font-bold'>Kamal Hasan</p>
                            <p>Copy Writer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2'>
                    <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt="" />
                        <div >
                            <p className='font-bold'>Walter White</p>
                            <p>Copy Writer</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2'>
                    <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src=" https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt=""/>
                        <div>
                            <p className='font-bold'>Max Walker</p>
                            <p>Free Lancer</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide" style={swiperSlideStyle}> {/* Added className */}
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, suscipit facere sint molestias delectus sit pariatur consectetur accusantium nobis mollitia quasi, maiores deserunt, provident dolorum rem modi libero ipsam aut voluptatibus sapiente explicabo perferendis quaerat.</p>
                    <div className='flex gap-2 mt-3 mb-2'>
                    <Image width={100} // Specify width
                            height={100} style={circularImageStyle} src=" https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R98662133&ga=GA1.2.928138083.1680619194&semt=ais" alt=""/>
                        <div>
                            <p className='font-bold'>Juli Radina</p>
                            <p>Copy Writer</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper></div>
        
    );
};

export default SectionSix;