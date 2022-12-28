import React, {useContext, useEffect, useRef, useState} from 'react';
import s from "../styles/components/Player.module.scss"

import {convertDurationToTimeString} from "../utils/convertDurationToTimeString";

import {PlayerContext} from "../context/PlayContext";
import Slider from 'rc-slider';

const Player = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [progress, setProgress] = useState<number>(0);

    const {
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        hasPrevious,
        hasNext,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        playNext,
        playPrevious,
        clearPlayerState,
    } = useContext(PlayerContext);

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    function setupProgressListener() {
        audioRef.current!.currentTime = 0;

        audioRef.current!.addEventListener("timeupdate", () => {
            setProgress(Math.floor(audioRef.current!.currentTime));
        });
    }

    function handleSeek(amount: any) {
        audioRef.current!.currentTime = amount;
        setProgress(amount);
    }

    function handleEpisodeEnded() {
        if (hasNext) {
            playNext();
        } else {
            clearPlayerState();
        }
    }

    const episode = episodeList[currentEpisodeIndex];
    return (
        <div className={s.playerContainer}>
            <header>
                <img src="/icons8-music-50.svg" alt="Podcast" />
                <strong>Radio Lorem</strong>
            </header>

            {episode ? (
                <div className={s.currentEpisode}>

                    <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        width={292}
                        height={292}
                        style={{objectFit: "cover"}}
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={s.emptyPlayer}>
                    <strong>Select a podcast to listen to</strong>
                </div>
            )}

            <footer className={!episode ? s.empty : ""}>
                <div className={s.progress}>
                    <span>{convertDurationToTimeString(progress)}</span>
                    <div className={s.slider}>
                        {episode ? (
                            <Slider
                                max={episode.duration}
                                value={progress}
                                onChange={handleSeek}
                                trackStyle={{backgroundColor: "#04d361"}}
                                railStyle={{backgroundColor: "#9f75ff"}}
                                handleStyle={{borderColor: "#04d361", borderWidth: 4}}
                            />
                        ) : (
                            <div className={s.emptySlider}/>
                        )}
                    </div>
                    <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
                </div>

                {episode && (
                    <audio
                        src={episode.url}
                        ref={audioRef}
                        autoPlay
                        loop={isLooping}
                        onLoadedMetadata={setupProgressListener}
                        onEnded={handleEpisodeEnded}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    />
                )}

                <div className={s.buttons}>
                    <button
                        type="button"
                        onClick={toggleShuffle}
                        className={isShuffling ? s.isActive : ""}
                        disabled={!episode || episodeList.length === 1}
                    >
                        <img src="/shuffle.svg" alt="shuffle"/>
                    </button>

                    <button
                        type="button"
                        onClick={playPrevious}
                        disabled={!episode || !hasPrevious}
                    >
                        <img src="/play-previous.svg" alt="Anterior"/>
                    </button>

                    <button
                        type="button"
                        className={s.playButton}
                        disabled={!episode}
                        onClick={togglePlay}
                    >
                        {isPlaying ? (
                            <img src="/pause.svg" alt="pause"/>
                        ) : (
                            <img src="/play.svg" alt="play"/>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={playNext}
                        disabled={!episode || !hasNext}
                    >
                        <img src="/play-next.svg" alt="play"/>
                    </button>

                    <button
                        type="button"
                        onClick={toggleLoop}
                        className={isLooping ? s.isActive : ""}
                        disabled={!episode}
                    >
                        <img src="/repeat.svg" alt="repeat"/>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default Player;