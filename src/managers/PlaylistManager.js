import axios from 'axios'

export class PlaylistManager {

    async fetchPlaylist(playlistId) {
        let playlist = {
            status: undefined,
            info: {}
        }
        if (playlistId && playlistId !== null && playlistId !== '') {
            const deezerResponse = await axios.get("http://localhost:1337/api.deezer.com/playlist/" + playlistId)
            const playlistData = deezerResponse.data
            playlist.status = deezerResponse.status
            if (playlistData) {
                playlist.info.id = playlistData.id
                playlist.info.description = playlistData.description
                playlist.info.nb_tracks = playlistData.nb_tracks
            } else {
                playlist.info = 'An error occurred while fetching the playlist.'
            }
        }
        return playlist
    }

}
