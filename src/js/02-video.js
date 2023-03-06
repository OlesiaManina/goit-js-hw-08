import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');

const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function(timeupdate) {
 
const currentTime = JSON.stringify(timeupdate.seconds);
localStorage.setItem(STORAGE_KEY, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));
checkStorage();


function checkStorage() {
    if (STORAGE_KEY) {
        player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    }
}