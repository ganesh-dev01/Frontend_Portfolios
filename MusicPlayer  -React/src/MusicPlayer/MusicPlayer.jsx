import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlay, FaPauseCircle, FaStop, FaMusic } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import './MusicPlayer.css';
import Playlist from '../Playlist/Playlist';

function MusicPlayer() {
    const audioRef = useRef(null);
    const [audioSrc, setAudioSrc] = useState(null);
    const [audioName, setAudioName] = useState("");
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [favArr, setFavArr] = useState([]);
    const [playingAudio, setPlayingAudio] = useState(null);



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudioSrc(URL.createObjectURL(file));
            setAudioName(file.name);
            stopAudio();
        }
    };

    const addFav = () => {
        if (!favArr.some(fav => fav.audioSrc === audioSrc)) {
            const newFavs = [{ audioSrc, audioName }, ...favArr];
            setFavArr(newFavs);

            toast.success("Added to Favorites!", {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            toast.info("Already in Favorites", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            toast.error("Please select a music file first", {
                position: "top-right",
                autoClose: 5000,
                theme: "dark",
            });
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleRangeChange = (event) => {
        const newTime = event.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handlePlaylistClick = (audioSrc, audioName) => {
        setAudioSrc(audioSrc);
        setAudioName(audioName);
        setPlayingAudio(audioSrc);
        setIsPlaying(false);
    };

    const handleRemoveFromFav = (audioSrc) => {
        const updatedFavs = favArr.filter(fav => fav.audioSrc !== audioSrc);
        setFavArr(updatedFavs);
        if (playingAudio === audioSrc) {
            stopAudio();
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.onloadedmetadata = () => setDuration(audio.duration);
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [audioSrc]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="app-container">


            <div className="music-player-container">
                <ToastContainer />
                <div className="file-input-container">
                    <label className="custom-file-label">
                        Choose Music <FaMusic />
                        <input
                            type="file"
                            className="audio_input"
                            accept="audio/*"
                            onChange={handleFileChange}
                        />
                    </label>
                    <label className="selected-file-label">
                        {audioSrc ? audioName : 'No file selected'}
                    </label>
                </div>

                {audioSrc && (
                    <audio ref={audioRef} src={audioSrc} />
                )}

                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleRangeChange}
                    className="audio_slider"
                />
                <div className="time-display">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </div>

                <div className='control_btn_container'>
                    {isPlaying ? (
                        <button className="play_button" onClick={pauseAudio}>
                            <FaPauseCircle />
                        </button>
                    ) : (
                        <button className="pause_button" onClick={playAudio}>
                            <FaPlay />
                        </button>
                    )}
                    <button className="stop_button" onClick={stopAudio}><FaStop /></button>

                    <button
                        className="favorite_button"
                        onClick={addFav}
                    >
                        {favArr.some(fav => fav.audioSrc === audioSrc) ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
                    </button>
                </div>
            </div>

            <Playlist
                v={favArr}
                onClick={handlePlaylistClick}
                onRemove={handleRemoveFromFav}
                playingAudio={playingAudio}
            />

        </div>
    );
}

export default MusicPlayer;
