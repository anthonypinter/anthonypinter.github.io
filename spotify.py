import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyOAuth

import json
from pprint import pprint

'''
export SPOTIPY_CLIENT_ID=''
export SPOTIPY_CLIENT_SECRET=''
export SPOTIPY_REDIRECT_URI=''
'''

scope = "user-library-read"
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

pl_id = 'https://open.spotify.com/playlist/7kNtye01dDlWMwiqO98uZS?si=1cbd1dd0e67342fc'
offset = 0

while True:
    response = sp.playlist_items(pl_id, offset=offset, fields='items.track.id,total', additional_types=['track'])
    
    if len(response['items']) == 0:
        break
    
    pprint(response['items'])
    offset = offset + len(response['items'])
    print(offset, "/", response['total'])