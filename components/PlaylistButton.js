"use client";
import { MdOutlinePlaylistAdd } from "react-icons/md";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useAddToPlaylistModal from "@/hooks/useAddToPlaylistModal";

const PlaylistButton = ({
  songId
}) => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const addToPlaylistModal = useAddToPlaylistModal();

  const handleInsert = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return addToPlaylistModal.onOpen(songId);
  }

  return (
    <button
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={handleInsert}
    >
      <MdOutlinePlaylistAdd size={25} />
    </button>
  );
}

export default PlaylistButton;
