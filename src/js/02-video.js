import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const playbackTime = JSON.parse(localStorage.getItem(TIME_KEY));
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(SetTimeToStorage, 1000));

function SetTimeToStorage({ seconds }) {
  localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
}

if (playbackTime) {
  player.setCurrentTime(playbackTime);
}

// function SetTimeToStorage(currentTime) {
//   console.log('currentTime', currentTime); //{seconds: 0.2, percent: 0, duration: 571.563}
//   localStorage.setItem(TIME_KEY, JSON.stringify(currentTime.seconds));
// }

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
