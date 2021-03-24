import React from 'react'
import { authorize } from '../../services/http/spotify-service';

const HomePage = () => {
    return (
        <div>
            <button
                onClick={authorize}>
                LOGIN TO SPOTIFYYYYYY
            </button>
        </div>
    )
}

export default HomePage
