import React, {createContext, useState} from 'react';


interface Episode {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}


interface PlayerContextData {
    episodeList: Array<Episode>;
    currentEpisodeIndex: number;
    isPlaying: boolean;
    isLooping: boolean;
    isShuffling: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
    play: (episode: Episode) => void;
    playList: (list: Episode[], index: number) => void;
    togglePlay: () => void;
    toggleLoop: () => void;
    toggleShuffle: () => void;
    setPlayingState: (state: boolean) => void;
    playNext: () => void;
    playPrevious: () => void;
    clearPlayerState: () => void;
}

interface PlayerContextProviderProps  {
    children: React.ReactNode;
}
export const PlayerContext = createContext({} as PlayerContextData);
const PlayContextProvider = ({children}: PlayerContextProviderProps) => {
    const [episodeList, setEpisodeList] = useState<Episode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState<number>(0);
    const [isShuffling, setIsShuffling] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLooping, setIsLooping] = useState<boolean>(false);

    const play = (episode: Episode) => {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    const playList = (list: Episode[], index: number) => {
        setEpisodeList(list);
        setCurrentEpisodeIndex(index);
        setIsPlaying(true);
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }

    const toggleLoop = () => {
        setIsLooping(!isLooping);
    }

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
    }

    const setPlayingState = (state: boolean) => {
        setIsPlaying(state);
    }

    const clearPlayerState = () => {
        setEpisodeList([]);
        setCurrentEpisodeIndex(0);
    }

    const hasPrevious = currentEpisodeIndex > 0;
    const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

    const playNext = () => {
        if (isShuffling) {
            const nextRandomEpisodeIndex = Math.floor(
                Math.random() * episodeList.length
            );
            setCurrentEpisodeIndex(nextRandomEpisodeIndex);
        } else if (hasNext) {
            setCurrentEpisodeIndex(currentEpisodeIndex + 1);
        }
    }
    const playPrevious = () => {
        if (hasPrevious) {
            setCurrentEpisodeIndex(currentEpisodeIndex - 1);
        }
    }

    return (
        <PlayerContext.Provider value={{
            episodeList,
            currentEpisodeIndex,
            play,
            playList,
            isPlaying,
            isLooping,
            isShuffling,
            togglePlay,
            toggleLoop,
            toggleShuffle,
            setPlayingState,
            playNext,
            playPrevious,
            hasPrevious,
            hasNext,
            clearPlayerState,
        }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayContextProvider;