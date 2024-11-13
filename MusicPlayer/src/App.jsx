import React from 'react'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import Playlist from './Playlist/Playlist'

function App() {
  return (
    <div className='app-container'>
      <Playlist />
      <MusicPlayer />
    </div>
  )
}

export default App
