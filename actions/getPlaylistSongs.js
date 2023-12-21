import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getPlaylistSongs = async ({selectedPlaylist}) => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data } = await supabase 
    .from('playlist_songs')
    .select('*, songs(*)')
    .eq('user_id', session?.user?.id)
    .eq('playlist_id', selectedPlaylist)
    .order('created_at', { ascending: false })

  if (!data) return [];

  return data.map((item) => ({
    ...item.songs
  }))
};

export default getPlaylistSongs;
