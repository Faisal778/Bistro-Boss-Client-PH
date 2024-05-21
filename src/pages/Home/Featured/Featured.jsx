import React from 'react';
import SEctionTitle from '../../../components/SectionTitle/SEctionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed  text-white pt-8 my-20'>
            <SEctionTitle heading={"Check it Out"} subHeading={"Featured Item"}></SEctionTitle> 
            <div className='flex md:flex-row justify-center bg-slate-500 bg-opacity-80 items-center pb-20 pt-12 px-36 '>
           <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 02, 2024</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, facilis cumque a pariatur ipsa soluta labore itaque expedita magnam nemo corporis consequuntur veniam. Qui adipisci, magnam expedita explicabo corporis nam quibusdam aspernatur non tenetur, ipsa provident. Magnam, minima quibusdam? Voluptates nihil enim praesentium nostrum adipisci sint provident explicabo, cum laudantium!</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

            </div>
            </div>
        </div>
    );
};

export default Featured;