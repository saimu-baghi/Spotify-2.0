"use client";

// import useSound from "use-sound";
import React, { useEffect, useState } from 'react'
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { PlaylistItem } from "./PlaylistItem";
import { useSearchParams } from "next/navigation";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

// import { Song } from "@/types";
// import usePlayer from "@/hooks/usePlayer";

// import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import Slider from "./Slider";

function PlayerComponent({ expandPlayer, isExpanded, selectedItem, selectedPlaylist, isPlaying, isLoading }) {
  // const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  return (
    <div className={`player ${isExpanded ? 'w-[100vh]' : ' py-2 px-4 grid grid-cols-2 md:grid-cols-3 w-full'} fixed bottom-0 bg-black`}>
      <div className="flex w-full">
        <div className="flex items-center gap-x-4">
          <MediaItem
            expandPlayer={expandPlayer}
            isExpanded={isExpanded}
            selectedItem={selectedItem}
            selectedPlaylist={selectedPlaylist}
          />
        </div>
      </div>
      {!isExpanded && (
        <div className="text-white">
          <div
            className="
            flex 
            md:hidden 
            col-auto 
            w-full
            h-full 
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
      )}
    </div>
  );
}

export default PlayerComponent