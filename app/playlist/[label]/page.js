"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { PlaylistItem } from "@/components/PlaylistItem";
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import Header from '@/components/Header';

function Label() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const searchParams = useSearchParams();
    useEffect(() => {
  const label = searchParams.get('id');

        // const currentUrl = new URL(window.location.href);
        // const label = currentUrl.searchParams.get("id");
        const foundCategory = PlaylistItem.find(category => category.label === `${label}`);

        if (foundCategory) {
            setSelectedCategory(foundCategory);
        } else {
            setSelectedCategory(null);
        }
        setIsLoading(false);
    }, [searchParams]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!selectedCategory) {
        return <p>404:Invalid URL</p>;
    }
    return (
        <>
        <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
        <Header />
        <div className='p-6'>
            <div key={selectedCategory.label}><h1 className="text-white text-2xl font-bold">
            {selectedCategory.label}
                </h1></div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-x-auto gap-4 mt-2'>
                {selectedCategory.list.map((item, index) => (
                    <button className="group relative flex flex-col items-center rounded-md overflow-hidden gap-y-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition p-4 text-left" key={index}>
                        <div className="relative">
                            <Image className='rounded-md' src={item.image} alt={item.title} width={200} height={200} />
                            <div className="absolute bottom-4 right-4">
                                <div className="bg-green-500 p-4 rounded-full transition opacity-0 group-hover:opacity-100 hover:scale-110">
                                    <FaPlay className="text-black" />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full text-left'>
                            <h3 className='text-lg font-bold'>{item.title}</h3>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    </button>
                ))}
            </div>
            </div>
            </div>
        </>
    );
}

export default Label;
