import MediaPlayer from "./media-player";
import AutoPlay from './plugins/autoplay'
import AutoPause from './plugins/autopause'
import Ads from "./plugins/Ads"

const video: HTMLElement = document.querySelector('video')

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new Ads()],
})

const playButton: HTMLElement = document.querySelector('#playButton')
playButton.onclick = () => player.togglePlay()

const muteButton: HTMLElement = document.querySelector('#muteButton')
muteButton.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => {
		console.log(error.message);
	})
}