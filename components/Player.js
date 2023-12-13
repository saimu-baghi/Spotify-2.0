"use client";
import usePlayer from '@/app/hooks/usePlayer';
import React, { useEffect, useState } from 'react'
import PlayerComponent from './PlayerComponent';
import { PlaylistItem } from './PlaylistItem';
import { useSearchParams } from 'next/navigation';

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";


function Player() {
    const searchParams = useSearchParams();

    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    
  
    useEffect(() => {
      const playlist = searchParams.get("playlist");
      const id = searchParams.get("id");
      const playlistItems = PlaylistItem.find(item => item.label === playlist);

      if(!id || !playlist){
        return;
      }

      if (playlistItems) {
        setSelectedPlaylist(playlistItems);
      }
      else{
        setSelectedPlaylist(null);
      }
      const foundItem = playlistItems.list.find(item => item.id === id);
  
      if (foundItem) {
        setSelectedItem(foundItem);
      } else {
        setSelectedItem(null);
      }
      setIsLoading(false);
    }, [searchParams, selectedPlaylist, selectedItem]);
  
    if (isLoading) {
      return;
    }
  
    if (!selectedItem) {
      return <p>404:Invalid Song</p>;
    }
  
    const expandPlayer = () => {
      setIsExpanded(!isExpanded);
    };
  
    const audio = new Audio(selectedItem.songUrl);
  
    const togglePlay = () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };

  return (
    <div
      className="
        
      "
    >
      <PlayerComponent
      expandPlayer={expandPlayer}
      isExpanded={isExpanded}
      selectedItem={selectedItem}
      selectedPlaylist={selectedPlaylist}
      isPlaying={isPlaying}
      isLoading={isLoading}
      />

    </div>
  )
}

export default Player