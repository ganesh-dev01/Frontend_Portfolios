import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlay, FaPauseCircle, FaStop, FaMusic } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import './MusicPlayer.css';

function MusicPlayer() {
    const audioRef = useRef(null);
    const [audioSrc, setAudioSrc] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAudioSrc(URL.createObjectURL(file));
        }
    };

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(false);
        } else {
            toast.error("Please select a music first", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(true);
        }
    };

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
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

    return (
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
                    {audioSrc ? 'mp3 is selected' : 'No file selected'}
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
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
                / {Math.floor(duration / 60)}:{Math.floor(duration % 60)}

            </div>

            <div className='control_btn_container'>

                {(isPlaying) ? <button className="play_button" onClick={playAudio}><FaPlay /></button>
                    : <button className="pause_button" onClick={pauseAudio}><FaPauseCircle /></button>}

                <button className="stop_button" onClick={stopAudio}><FaStop /></button>

                <button className='favorite_button'>
                    <MdFavoriteBorder className='blank_fav' />
                    {/* <MdOutlineFavorite className='active_fav' /> */}
                </button>
            </div>


        </div>
    );
}

export default MusicPlayer;
