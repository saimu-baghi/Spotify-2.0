"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import Header from '@/components/Header';
import Loading from '../loading';
import useLoadPlaylistImage from '@/hooks/useLoadPlaylistImage';
import DeletePlaylistButton from '@/components/DeletePlaylistButton';

function PlaylistHeader({ playlists }) {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const id = searchParams.get('id');
        const parsedId = parseInt(id);

        const foundPlaylist = playlists.find(playlist => playlist.id === parsedId);

        if (foundPlaylist) {
            setSelectedPlaylist(foundPlaylist);
        } else {
            setSelectedPlaylist(null);
        }
        setIsLoading(false);
    }, [searchParams, playlists]);


    if (isLoading) {
        return <Loading />
    }

    if (!selectedPlaylist) {
        return <p></p>;
    }

    const imageUrl = useLoadPlaylistImage(selectedPlaylist);

    return (
        <Header>
            <div className="mt-20">
                <div
                    className="
                        flex 
                        flex-col 
                        md:flex-row 
                        items-center 
                        gap-x-5
                    "
                >
                    <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                        <Image
                            className="object-cover"
                            fill
                            src={imageUrl || "https://picsum.photos/500"}
                            alt="Playlist"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                        <p className="hidden md:block font-semibold text-sm">
                            Playlist
                        </p>
                        <h1
                            className="
                                capitalize
                                text-white 
                                text-4xl 
                                sm:text-5xl 
                                lg:text-7xl 
                                font-bold
                            "
                        >
                            {selectedPlaylist.title}
                        </h1>
                        <DeletePlaylistButton playlistId={selectedPlaylist.id}/>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default PlaylistHeader