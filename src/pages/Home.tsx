import React, {useContext} from 'react';

import s from "../styles/Home.module.scss";

import {PlayerContext} from "../context/PlayContext";
import {Link} from "react-router-dom";

import {convertDurationToTimeString} from "../utils/convertDurationToTimeString";
import {format, parseISO} from "date-fns";

import data from "../db.json";

import CL from "date-fns/locale/en-US";

const Home = () => {
    const {playList} = useContext(PlayerContext)
    const episodes = data.episodes.map((episode) => {
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
    });

    const latestEpisodes = episodes.slice(0, 2);
    const allEpisodes = episodes.slice(2, episodes.length);

    const episodeList = [...latestEpisodes, ...allEpisodes];


    return (
        <div className={s.homepage}>
            <section className={s.latestEpisodes}>
                <h2>Lorem ipsum.</h2>
                <ul>
                    {latestEpisodes.map((episode, index) => {
                        return (
                            <li key={episode.id}>
                                <img
                                    src={episode.thumbnail}
                                    alt={episode.title}
                                    width={190}
                                    height={190}
                                    style={{objectFit:"cover"}}
                                />

                                <div className={s.episodesDetails}>
                                    <Link to={`/episodes/${episode.id}`}>
                                        <p>{episode.title}</p>
                                    </Link>

                                    <p>{episode.members}</p>
                                    <span>{episode.publishedAt} {episode.durationAsString}</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => playList(episodeList, index)}
                                >
                                    <img src="/play-green.svg" alt="Tocar episódio" />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className={s.allEpisodes}>
                <h2>Radio Lorem</h2>

                <table cellSpacing={0}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Podcast</th>
                        <th>Members</th>
                        <th>Data</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {allEpisodes.map((episode, index) => {
                        return (
                            <tr key={episode.id}>
                                <td style={{ width: 72 }}>
                                    <img
                                        src={episode.thumbnail}
                                        alt={episode.title}
                                        width={120}
                                        height={120}
                                        style={{objectFit:"cover"}}
                                    />
                                </td>
                                <td>
                                    <Link to={`/episodes/${episode.id}`}>
                                        <p>{episode.title}</p>
                                    </Link>
                                </td>
                                <td>{episode.members}</td>
                                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                                <td>{episode.durationAsString}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            playList(episodeList, index + latestEpisodes.length)
                                        }
                                    >
                                        <img src="/play-green.svg" alt="play" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Home;