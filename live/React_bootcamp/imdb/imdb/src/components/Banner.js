import React from 'react';
import Image from '../banner.jpg'
function Banner() {
    return <>
        <div className=
        {`bg-[url(${Image})] h-[40vh] md:h-[60vh] 
        bg-center bg-cover
        flex items-end  
    `}>
        <div className=" text-xl md:text-3xl text-white
            p-6 
            bg-gray-900 bg-opacity-50
            w-full
            flex justify-center
        ">
                Spider-Man : No Way Home
                </div>
        </div>
    </>;
}

export default Banner;
