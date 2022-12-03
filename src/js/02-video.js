import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayPoint, 1000));
function onPlayPoint(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time') || 0;
if (currentTime) {
  player.setCurrentTime(currentTime);
}
