import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadPlaylistImage = (playlist) => {
  const supabaseClient = useSupabaseClient();
  
  if (!playlist) {
    return null;
  }

  const { data: imageData } = supabaseClient
    .storage
    .from('playlist-images')
    .getPublicUrl(playlist.image_path);

  return imageData.publicUrl;
};

export default useLoadPlaylistImage;
