import React, {useState} from 'react';
import {MediaType} from "./types/typing";

import {media} from './media'


const App = () => {
    const [file, setFile] = useState<MediaType | null>(null)
    const [favourite, setFavourite] = useState<boolean>(false)

    return (
        <main className="container">
            <div className="media-container">
                {media.map((file, index) => (
                    <div
                        onClick={() => setFile(file)}
                        className="media" key={index}>
                        {
                            file.type === "image"
                                ? <img src={file.url} alt="img"/>
                                : <video
                                    src={`${file?.url}#t=0.001`}
                                    preload="metadata"
                                    muted
                                />
                        }
                        <div className="media-info">
                            <i onClick={(e) => {
                                e.stopPropagation()
                                setFavourite(!favourite)
                            }} className="material-icons">
                                {favourite ? "favorite" : "favorite_border"}
                            </i>
                            <i className="material-icons">
                                chat_bubble_outline
                            </i>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`popup-media ${file ? "active" : ""}`} >

                <span onClick={() => setFile(null)}>&times;</span>
                {
                    file?.type === "video"
                        ? <video src={file?.url} muted autoPlay controls/>
                        : <img src={file?.url} alt="image"/>
                }
            </div>
        </main>
    );
}
export default App;
// for error