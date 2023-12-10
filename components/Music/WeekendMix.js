"use client"
import { useEffect, useState } from 'react';
import { WeekendMixItem } from './WeekendMixItem';
import { FaPlay } from 'react-icons/fa';

function WeekendMix() {
    const [itemsToShow, setItemsToShow] = useState(5); // Default to 5 items for XL screens

    useEffect(() => {
        // Update number of items based on screen size
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1200) {
                setItemsToShow(5); // XL devices
            } else if (window.innerWidth >= 992) {
                setItemsToShow(4); // LG devices
            } else if (window.innerWidth >= 768) {
                setItemsToShow(3); // MD devices
            } else {
                setItemsToShow(2); // Smaller devices, render 2 items
            }
        };

        // Initial call to set items on component mount
        updateItemsToShow();

        // Event listener to handle window resize
        window.addEventListener('resize', updateItemsToShow);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    return (
        <>
            <div className='flex overflow-x-auto gap-4 mt-4'>
                {WeekendMixItem.slice(0, itemsToShow).map((item, index) => {
                    return (
                        <button className="group relative flex flex-col items-center rounded-md overflow-hidden gap-y-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition p-4 text-left" key={index}>
                             <div className="relative">
                                <img className='rounded-md' src={item.image} alt={item.title} />
                                <div className="absolute bottom-4 right-4">
                                    <div className="bg-green-500 p-4 rounded-full transition opacity-0 group-hover:opacity-100 hover:scale-110">
                                        <FaPlay className="text-black" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-lg font-bold'>{item.title}</h3>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </>
    );
}

export default WeekendMix;
