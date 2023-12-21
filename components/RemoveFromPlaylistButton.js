"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";

const RemoveFromPlaylistButton = ({
  songId,
  playlistId
}) => {
  const router = useRouter();
  const {
    supabaseClient
  } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const handleRemove = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    else {
      const { error } = await supabaseClient
        .from('playlist_songs')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .eq('playlist_id', playlistId)

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Song removed!")
      }
    }

    router.refresh();
  }

  return (
    <button 
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={handleRemove}
    >
      <MdOutlinePlaylistAddCheck size={25} />
    </button>
  );
}

export default RemoveFromPlaylistButton;
