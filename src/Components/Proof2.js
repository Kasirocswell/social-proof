import React from 'react'
import stars from './images/icon-star.svg'
import colton from './images/image-colton.jpg'
import irene from './images/image-irene.jpg'
import anne from './images/image-anne.jpg'

export const Proof2 = () => {
  return (
    <div id='main' className='w-screen h-[1530px] absolute flex flex-col lg:h-[800px] lg:flex-row lg:flex-wrap'>
        <div className='header flex flex-col'>
            <h1 className='text-[#512051] text-[40px] font-spartan font-bold leading-[32px] text-center mt-[82px] mx-[24px] lg:ml-[165px] lg:text-left lg:w-[245px]'>10,000+ of our users love our products.</h1>
            <p className=' w-[327px] text-[19px] text-[#927B91] leading-[25px] text-center mx-[24px] font-spartan mt-[17px] lg:ml-[165px] lg:text-left'>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>
        <div className='stars flex flex-col w-[327px] h-[266px] mx-auto'>
            <div className='flex flex-col w-[327px] h-[78px] bg-[#F7F2F7] rounded-lg mt-[39px]'> 
                <div className='flex flex-row mx-auto mt-[16px]'>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                </div>
                <p className='text-[#512051] text-center text-[17px] font-spartan font-bold mt-[15px]'>Rated 5 Stars in Reviews</p>
            </div>
            <div className='flex flex-col w-[327px] h-[78px] bg-[#F7F2F7] rounded-lg mt-[16px] lg:ml-[150px]'> 
                <div className='flex flex-row mx-auto mt-[16px]'>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt='' className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                </div>
                <p className='text-[#512051] text-center text-[17px] font-spartan font-bold mt-[15px]'>Rated 5 Stars in Reprt Guru</p>
            </div>
            <div className='flex flex-col w-[327px] h-[78px] bg-[#F7F2F7] rounded-lg mt-[16px] lg:ml-[250px]'> 
                <div className='flex flex-row mx-auto mt-[16px]'>
                    <img src={stars} alt=''  className='w-[16.55px] h-[15.77px]'></img>
                    <img src={stars} alt=''  className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt=''  className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt=''  className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                    <img src={stars} alt=''  className='w-[16.55px] h-[15.77px] ml-[15px]'></img>
                </div>
                <p className='text-[#512051] text-center text-[17px] font-spartan font-bold mt-[15px]'>Rated 5 Stars in BestTech</p>
            </div>
        </div>
        <div className='profiles mx-auto lg:flex lg:flex-row lg:w-[1110px] lg:h-[226px] lg:overflow-visible'>
            <div className='flex flex-col w-[327px] bg-[#512051] rounded-xl mt-[49px] lg:mt-[0px] lg:mr-[30px]'>
                    <div className='flex flex-row mt-[40px] ml-[56px]'>
                        <img src={colton} alt='' className='rounded-full w-[40px] h-[40px] mr-[23px]'></img>
                        <div className='flex-col'>
                            <p className='text-[17px] font-spartan font-bold text-white mb-[-7px]'>Colton Smith</p>
                            <p className='text-[17px] font-spartan text-[#EE69A4]'>Verified Buyer</p>
                        </div>
                    </div>
                    <p className='text-[17px] text-white font-spartan leading-[22px] mx-[56px] mt-[10px] mb-[35px]'>“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”</p>
                </div>
                <div className='flex flex-col w-[327px] bg-[#512051] rounded-xl mt-[26px] lg:mr-[30px] lg:mt-[0px]'>
                    <div className='flex flex-row mt-[40px] ml-[56px]'>
                        <img src={irene} alt='' className='rounded-full w-[40px] h-[40px] mr-[23px]'></img>
                        <div className='flex-col'>
                            <p className='text-[17px] font-spartan font-bold text-white mb-[-7px]'>Irene Roberts</p>
                            <p className='text-[17px] font-spartan text-[#EE69A4]'>Verified Buyer</p>
                        </div>
                    </div>
                    <p className='text-[17px] text-white font-spartan leading-[22px] mx-[56px] mt-[23px] mb-[35px]'>“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”</p>
                </div>
                <div className='flex flex-col w-[327px] bg-[#512051] rounded-xl mt-[16px] lg:mt-[0px]'>
                    <div className='flex flex-row mt-[40px] ml-[56px]'>
                        <img src={anne} alt='' className='rounded-full w-[40px] h-[40px] mr-[23px]'></img>
                        <div className='flex-col'>
                            <p className='text-[17px] font-spartan font-bold text-white mb-[-7px]'>Anne Wallace</p>
                            <p className='text-[17px] font-spartan text-[#EE69A4]'>Verified Buyer</p>
                        </div>
                    </div>
                    <p className='text-[17px] text-white font-spartan leading-[22px] mx-[56px] mt-[23px] mb-[35px]'>“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”</p>
                </div>
        </div>
    </div>
  )
}
