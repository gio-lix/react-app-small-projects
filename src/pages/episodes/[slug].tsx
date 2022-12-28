import React, {useContext} from 'react';

import {Link, useParams} from "react-router-dom"

import s from "../../styles/components/Episode.module.scss"

import data from "../../db.json";

import {convertDurationToTimeString} from "../../utils/convertDurationToTimeString";
import {format, parseISO} from "date-fns";

import {EpisodeType} from "../../types/typing";

import {PlayerContext} from "../../context/PlayContext";
import CL from "date-fns/locale/en-US";



interface EpisodeState  extends EpisodeType {
    description: string
}
const Episode = () => {
    const {play} = useContext(PlayerContext)
    const {slug} = useParams()



     const episode = data.episodes.map((episode) => {
         return {
             id: episode.id,
             title: episode.title,
             thumbnail: episode.thumbnail,
             members: episode.members,
             publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
                 locale: CL,
             }),
             duration: Number(episode.file.duration),
             durationAsString: convertDurationToTimeString(
                 Number(episode.file.duration)
             ),
             url: episode.file.url,
         };
     }).find(t => t.id === slug) as EpisodeState

    return (
        <div className={s.episodeContainer}>
            <div className={s.episode}>
                <div className={s.thumbnailContainer}>
                    <Link to="/">
                        <button type="button">
                            <img src="/arrow-left.svg" alt="Voltar" />
                        </button>
                    </Link>
                    <img
                        src={episode.thumbnail}
                        alt={episode.title}
                        style={{objectFit:"cover"}}
                    />
                    <button type="button" onClick={() => play(episode)}>
                        <img src="/play.svg" alt="Tocar episódio" />
                    </button>
                </div>

                <header>
                    <h1>{(episode).title}</h1>
                    <span>{episode.members}</span>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                </header>

                <div
                    className={s.description}
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                />
            </div>
        </div>
    );
};

export default Episode;