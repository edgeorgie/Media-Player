import MediaPlayer from "./media-player.js";
import AutoPlay from './plugins/autoplay.js'

const video = document.querySelector("video")
const button = document.querySelector("button")

const player = new MediaPlayer({
    el: video, plugins: [
    new AutoPlay
] })

button.onclick = () => player.togglePlay()
mutebutton.onclick = () => player.toggleMute()