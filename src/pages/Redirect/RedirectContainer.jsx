import React, { useEffect } from 'react'
import { getData } from '../../services/http/spotify-service';
import { connect } from 'react-redux'
import { loginUser } from '../../redux/auth/auth.actions';

const mapDispatchToProps = (dispatch) => ({
    loginUser: (user) => dispatch(loginUser(user))
});

const mapStateToProps = (state) => ({

})

const RedirectContainer = ({ location, loginUser }) => {



    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = 'BQDG9InNTsXzD4NrKNFcbqrQXbZrRCaVywcV84m-QpQVtqAanJELPsbXoxoPX3Ty03_asaddcYog5Vsnz0ObdxbdhU0-na6VyPdHX9PPaUjkH3Bybb2dieT1EMF_FQUXDXgE1lJNO6ain1VBppCqZA7zhyZKzHPUKj3B49ud-nHCDLQf3byJco8';
        const player = new window.Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); }
        });
        
    
      
        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });
      
        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });
      
        // Ready
        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
        });
      
        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });
      
        // Connect to the player!
        player.connect();
    };
      

   useEffect(() => {
    let params  = new URLSearchParams(location.hash.slice(1));
    const token = params.get('access_token');
    getData('', 'BQDG9InNTsXzD4NrKNFcbqrQXbZrRCaVywcV84m-QpQVtqAanJELPsbXoxoPX3Ty03_asaddcYog5Vsnz0ObdxbdhU0-na6VyPdHX9PPaUjkH3Bybb2dieT1EMF_FQUXDXgE1lJNO6ain1VBppCqZA7zhyZKzHPUKj3B49ud-nHCDLQf3byJco8');
    loginUser({token: 'aaaaaaa', validTill: '12'});
    console.log('xd');
   }, []);

    return (
        <div>
            TESTT
        </div>
    )
}

export default connect(null, mapDispatchToProps)(RedirectContainer);
