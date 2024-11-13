import React from 'react'
import './Playlist.css'
import playing_icon from '../Test/playing.gif'

function Playlist() {
    return (
        <div className='playlist-container'>
            <h4 className='fvrt-hd'>Favourites</h4>


            <div className='music-queue'>
                <h4 className='music-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <div className='status-bar'>
                    <img src={playing_icon} className='status' />
                    <button className='remove-btn'>remove</button>
                </div>
            </div>

        </div>
    )
}

export default Playlist
