"use client";

import Image from "next/image";
import React from 'react'

function MediaItem() {
    return ( 
        <div
        //   onClick={handleClick}
          className="
            flex 
            items-center 
            gap-x-3 
            cursor-pointer 
            hover:bg-neutral-800/50 
            w-full 
            p-2 
            rounded-md
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
              src={'https://picsum.photos/500'}
              alt="MediaItem"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-1 overflow-hidden">
            <p className="text-white truncate">Song title</p>
            <p className="text-neutral-400 text-sm truncate">
              By Song artist
            </p>
          </div>
        </div>
      );
}

export default MediaItem