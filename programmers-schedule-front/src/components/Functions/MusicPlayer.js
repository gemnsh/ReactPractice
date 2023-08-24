import React,{useState,useRef} from "react";
import Card from "../UI/Card";
import "./MusicPlayer.css";
import testMusic from"../Music/0001.mp3";


const MusicPlayer = () =>{
    const [musicState,setMusicState]=useState(false);
    const audioRef=useRef(new Audio(testMusic));
    const musicClicked = () => {
        if(musicState){
            audioRef.current.pause();
        }
        else{
            audioRef.current.play();
        }
        setMusicState(!musicState);
        }
        
        
        
        
    return (
        <Card className="music_player">
            <button onClick={musicClicked} >{musicState?'stop':'play'}</button>
        
        </Card>
        )
};

export default MusicPlayer;