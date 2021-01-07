import MediaPlayer from "./media-player.js";
import AutoPlay from './plugins/autoplay.js'
import AutoPause from './plugins/autopause.js'

const video = document.querySelector("video")
const button = document.querySelector("button")

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause()],
})

button.onclick = () => player.togglePlay()
mutebutton.onclick = () => player.toggleMute()