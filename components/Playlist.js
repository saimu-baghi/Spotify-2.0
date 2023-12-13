"use client"
import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { PlaylistItem } from './PlaylistItem';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Playlist() {
    const router = useRouter();
    const [itemsToShow, setItemsToShow] = useState(5);
    const [itemWidth, setItemWidth] = useState(200); // Initial item width

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1200) {
                setItemsToShow(5);
            } else if (window.innerWidth >= 992) {
                setItemsToShow(4);
            } else if (window.innerWidth >= 525) {
                setItemsToShow(3);
            } else {
                setItemsToShow(2);
            }
            updateItemWidth(); // Update item width based on screen size
        };

        const updateItemWidth = () => {
            const containerWidth = document.documentElement.clientWidth;
            const availableWidth = containerWidth / itemsToShow - 20; // Adjust according to padding and margins

            setItemWidth(availableWidth);
        };

        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);

        return () => window.removeEventListener('resize', updateItemsToShow);
    }, [itemsToShow]);

    return (
        <div className='mt-4 '>
            {PlaylistItem.map((category, categoryIndex) => (
                <div key={categoryIndex} className='mt-2 mb-7 px-6'>
                    <div className="flex justify-between items-center ">
                        <Link key={category} href={{
                            pathname: `/playlist/${category.label}`,
                            query: {
                                playlist: category.label,
                            },
                        }} className="text-white text-2xl font-bold hover:underline capitalize">
                            {/* <a className="group relative flex flex-col items-center rounded-md overflow-hidden gap-y-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition p-4 text-left" style={{ maxWidth: `${itemWidth}px` }}> */}
                            {category.label}
                            {/* </a> */}
                        </Link>
                        <Link href={{
                            pathname: `/playlist/${category.href}`,
                            query: {
                                playlist: category.label,
                            },
                        }} className='text-neutral-400 hover:underline font-semibold'>Show all</Link>
                    </div>
                    <div className='flex gap-4 mt-2 overflow-x-auto' style={{ maxWidth: '100%' }}>
                        {category.list.slice(0, itemsToShow).map((item, index) => (
                            <button
                                onClick={() => router.push(`?playlist=${encodeURIComponent(category.label)}&id=${encodeURIComponent(item.id)}`)}
                                className="group relative flex flex-col items-center rounded-md overflow-hidden gap-y-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition p-4 text-left"
                                key={index}
                                style={{ maxWidth: `${itemWidth}px` }}
                            >
                                <div className="relative">
                                    <Image className='rounded-md' src={item.image} alt={item.title} width={200} height={200} />
                                    <div className="absolute bottom-4 right-4">
                                        <div className="bg-green-500 p-4 rounded-full transition group-hover:opacity-100 hover:scale-110 opacity-0">
                                            <FaPlay className="text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full text-left capitalize'>
                                    <h3 className='text-lg font-bold '>{item.title}</h3>
                                    <p className='text-sm '>{item.artist}</p>
                                </div>
                            </button>

                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Playlist;
