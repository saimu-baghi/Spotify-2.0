"use client";
import usePlayer from '@/app/hooks/usePlayer';
import React from 'react'
import PlayerComponent from './PlayerComponent';

function Player() {
    // const player = usePlayer();

    const songUrl = "/";
  return (
    <div 
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
        <PlayerComponent />
    </div>
  )
}

export default Player