"use client";

import React, { useState, useEffect, useRef } from "react";
import { PiMusicNotesFill, PiMusicNotesDuotone } from "react-icons/pi";

export default function MusicTheme() {
    const [isMusicOn, setMusicOn] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleMusic = () => {
        setMusicOn(!isMusicOn);
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isMusicOn) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isMusicOn]);

    return (
        <>
            <audio ref={audioRef} src="/music_theme.mp3" loop />
            <button className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
                onClick={toggleMusic}>
                {isMusicOn ? <PiMusicNotesFill /> : <PiMusicNotesDuotone className="opacity-50" />}
            </button>
        </>
    );
};