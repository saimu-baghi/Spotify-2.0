"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

import useLoadPlaylistImage from '@/hooks/useLoadPlaylistImage';
import Link from 'next/link';

const PlaylistItem = ({ data }) => {
  const router = useRouter();
  const imageUrl = useLoadPlaylistImage(data);



  return (
    <Link
      href={{
        pathname: `/${data.title}`,
        query: {
          id: data.id,
        },
      }}
      className="
        relative
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
        group
      "
    >
      <div
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "https://picsum.photos/500"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden capitalize">
        <p className="text-white truncate">{data.title}</p>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 hover:scale-110 transition transform rounded-full bg-green-500 p-4 drop-shadow-md right-5">
        <FaPlay className="text-black" />
      </div>
    </Link>
  );
};

export default PlaylistItem;
