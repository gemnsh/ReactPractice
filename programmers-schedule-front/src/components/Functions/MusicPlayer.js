import React from "react";
import Card from "../UI/Card";
import "./MusicPlayer.css";
import testMusic from"../Music/0001.mp3";
const MusicPlayer = () =>{

    let audio = new Audio(testMusic);
    const start = () => {
        audio.play()
        }
        
        
        
        
    return (
        <Card className="music_player">
            <button onClick={start} >play</button>
        </Card>
        )
};

export default MusicPlayer;