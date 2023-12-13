"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react'

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import Slider from "./Slider";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


function MediaItem({ expandPlayer, isExpanded, selectedItem, selectedPlaylist }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;
  const audio = new Audio(selectedItem.songUrl);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleClick = () => {
    expandPlayer();
  };

  return (
    <div className="flex flex-row justify-between w-full space-x-3">
    <div
      
      className={`${isExpanded ? 'flex items-center self-stretch w-[100vh] h-[100vh] flex-col text-center p-8 space-y-4' : 'flex items-center gap-x-3 p-2 '}  p-2 rounded-md`}
    >
      <div className={`relative rounded-md ${isExpanded ? 'w-full h-full' : 'min-h-[48px]  min-w-[48px]'}`}>
        <Image
        
          src={selectedItem.image}
          alt="MediaItem"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-1 overflow-hidden ">
        <p className="text-white">{selectedItem.title}</p>
        <p className="text-neutral-400 text-sm">
          By {selectedItem.artist}
        </p>
      </div>
      
        <div className={`${isExpanded ? '' : 'hidden'} overflow-hidden`}>
            <div 
          className="
            flex 
            md:hidden 
            col-auto 
            w-full 
            justify-end 
            items-center
          "
        >
          <div 
            // onClick={handlePlay} 
            className="
              h-10
              w-10
              flex 
              items-center 
              justify-center 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
          >
            <Icon size={30} className="text-black" />
          </div>
        </div>

        <div 
          className="
            hidden
            h-full
            md:flex 
            justify-center 
            items-center 
            w-full 
            max-w-[722px] 
            gap-x-6
          "
        >
          <AiFillStepBackward
            // onClick={onPlayPrevious}
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            "
          />
          <div 
            // onClick={handlePlay} 
            className="
              flex 
              items-center 
              justify-center
              h-10
              w-10 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
          >
            <Icon size={30} className="text-black" />
          </div>
          <AiFillStepForward
            // onClick={onPlayNext}
            size={30} 
            className="
              text-neutral-400 
              cursor-pointer 
              hover:text-white 
              transition
            " 
          />
        </div>

        <div className="hidden md:flex w-full justify-end pr-2">
          <div className="flex items-center gap-x-2 w-[120px]">
            <VolumeIcon 
              // onClick={toggleMute} 
              className="cursor-pointer" 
              size={34} 
            />
            <Slider 
              value={volume} 
              onChange={(value) => setVolume(value)}
            />
          </div>
        </div>
          
          {/* Controls */}
          {/* <div className="flex items-center justify-between">
            <button onClick={togglePlay}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div> */}
        </div>
        <div onClick={handleClick} className={`${isExpanded ? 'hidden' : 'hidden md:block'} cursor-pointer`}>
        <MdExpandLess size={35} className="p-2 hover:bg-neutral-800/50 rounded-full"/>
      </div>
    <div onClick={handleClick} className={`${isExpanded ? 'hidden md:block' : 'hidden'}  cursor-pointer pt-8`}>
        <MdExpandMore size={35} className="p-2 hover:bg-neutral-800/50 rounded-full"/>
      </div>
    </div>
    
    
    </div>
  );
}

export default MediaItem;
