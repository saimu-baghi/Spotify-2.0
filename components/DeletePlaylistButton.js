"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import Button from "./Button";

const DeletePlaylistButton = ({
  playlistId
}) => {
  const router = useRouter();
  const {
    supabaseClient
  } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const handleDelete = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    else {
      const { error } = await supabaseClient
        .from('playlists')
        .delete()
        .eq('id', playlistId)
        .eq('user_id', user.id)

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Playlist deleted!")
        router.push('/');
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
      onClick={handleDelete}
    >
      <Button>Delete playlist</Button>
    </button>
  );
}

export default DeletePlaylistButton;
