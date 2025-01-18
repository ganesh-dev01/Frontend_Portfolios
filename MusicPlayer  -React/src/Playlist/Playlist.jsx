import React from 'react'
import './Playlist.css'
import playing_icon from '../Images/playing.gif'

function Playlist({ v, onClick, onRemove, playingAudio }) {

    return (
        (v.length > 0) &&
        < div className='playlist-container' >
            <h4 className='fvrt-hd'>Favourites</h4>

            {
                v.map(({ audioSrc, audioName }) => (
                    <div key={audioSrc} className='music-queue' onClick={() => onClick(audioSrc, audioName)} >
                        <h4 className='music-name'>{audioName}</h4>
                        <div className='status-bar'>

                            {playingAudio === audioSrc && (
                                <img src={playing_icon} className='status' alt="playing icon" />
                            )}
                            <button
                                className='remove-btn'
                                onClick={() => onRemove(audioSrc)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export default Playlist;
