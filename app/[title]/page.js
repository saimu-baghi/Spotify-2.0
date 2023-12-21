import getPlaylistSongs from "@/actions/getPlaylistSongs";
import getPlaylistsByUserId from "@/actions/getPlaylistsByUserId";

import PlaylistHeader from "./components/PlaylistHeader";
import PlaylistContent from "./components/PlaylistContent";

export const revalidate = 0;

const Playlist = async ({ searchParams }) => {
    const userPlaylists = await getPlaylistsByUserId();

    const selectedPlaylist = parseInt(searchParams.id);
    const songs = await getPlaylistSongs({ selectedPlaylist });

    return (
        <div
            className="
                bg-neutral-900 
                rounded-lg 
                h-full 
                w-full 
                overflow-hidden 
                overflow-y-auto
            "
        >
            <PlaylistHeader playlists={userPlaylists} />
            <PlaylistContent songs={songs} playlistId={selectedPlaylist} />
        </div>
    );
}

export default Playlist;
