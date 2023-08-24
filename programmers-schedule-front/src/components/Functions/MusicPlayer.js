import React,{useState,useRef} from "react";
import Card from "../UI/Card";
import "./MusicPlayer.css";

class MusicPlayer extends React.Component {
    state = {
      playing: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      currentTrack: 0,
      tracks: [{
        src: `${process.env.PUBLIC_URL}/0001.mp3`,
        name: 'Track 1'
    },],
    }
  
    audioRef = React.createRef()
  
    componentDidMount() {
        this.setState({ tracks: this.props.tracks });
    }
  
    playHandler = () => {
      this.audioRef.current.play()
      this.setState({ playing: true })
    }
  
    pauseHandler = () => {
      this.audioRef.current.pause()
      this.setState({ playing: false })
    }
  
    timeUpdateHandler = () => {
      this.setState({
        currentTime: this.audioRef.current.currentTime,
        duration: this.audioRef.current.duration
      })
    }
  
    volumeChangeHandler = (e) => {
      this.setState({ volume: e.target.value });
      this.audioRef.current.volume = e.target.value;
    }
  
    seekHandler = (e) => {
      this.audioRef.current.currentTime = e.target.value;
    }
  
    nextTrackHandler = () => {
      if (this.state.currentTrack < this.state.tracks.length - 1) {
        this.setState(prevState => ({ currentTrack: prevState.currentTrack + 1 }));
        //this.audioRef.current.play() //The play() request was interrupted by a new load request.에러 발생
      }
      else{
        this.setState({ currentTrack: 0 });
      }
    }
  
    prevTrackHandler = () => {
      if (this.state.currentTrack > 0) {
        this.setState(prevState => ({ currentTrack: prevState.currentTrack - 1}));
      }
      else{
        this.setState({ currentTrack: this.state.tracks.length - 1 });
      }
    }
  
    render() {
      const { playing, currentTime, duration, volume, currentTrack, tracks } = this.state
        return (
        <Card className="music_player">
        <div>
          <audio
            ref={this.audioRef}
            src={tracks[currentTrack].src}
            onTimeUpdate={this.timeUpdateHandler}
            onEnded={this.nextTrackHandler}
            onCanPlayThrough={this.playHandler}
          />
          <div>
            <button onClick={this.prevTrackHandler}>Prev</button>
            <button onClick={playing ? this.pauseHandler : this.playHandler}>
              {playing ? 'Pause' : 'Play'}
            </button>
            <button onClick={this.nextTrackHandler}>Next</button>
          </div>
            <svg className="volume" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input
                className="music_volume"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={this.volumeChangeHandler}
                />
            <input
              className="music_time"
              type="range"
              min={0}
              max={duration ? duration*0.99 : `${duration}`}
              step={0.01}
              value={currentTime}
              onChange={this.seekHandler}
            />
        </div>
        </Card>
      )
    }
  }


export default MusicPlayer;