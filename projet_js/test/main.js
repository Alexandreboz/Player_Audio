let player = document.querySelector('#audioPlayer')
player.play();
player.pause();
player.currentTime = 0;
let surprise = document.querySelector('#surprise')

function play(idPlayer, control) {
    let player = document.querySelector('#' + idPlayer);
    if (player.paused){
        player.play();
        control.textContent = 'Pause';
    } else {
        player.pause();
        control.textContent = 'Play';
    }
}

function resume(idPlayer){
    let player = document.querySelector('#' + idPlayer);
    player.currentTime = 0;
    player.pause();
}

function volume(idPlayer, vol){
    let player = document.querySelector('#' + idPlayer);
    
    player.volume = vol;
}

function update(player){
    let duration = player.duration ; //Durée total
    let time = player.currentTime; // Temps écoulé
    let fraction = time / duration;
    let percent = Math.ceil(fraction * 100);
    document.querySelector('#progressTime').textContent = formatTime(time);

    let progress = document.querySelector('#progressBar');

    progress.style.width = percent + '%';
    progress.textContent = percent + '%';
}
function formatTime (time){
    let hours = Math.floor(time/ 3600);
    let mins = Math.floor(time % 3600 / 60);
    let secs = Math.floor(time % 3600);
    if (secs <10) {
        secs = "0" + secs;
    }
    if (hours) {
        if (mins < 10) {
            mins = "0" + mins;
        }
        return hours + ":" + mins + ":" + secs 
    } else {
        return mins + ":" + secs;
    }
}
function getMousePosition (event) {
    if (event.pageX) {
        return {
            x : event.pageX,
            y : event.pageY
        };
    } else {
        return {
            x : event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
            y : event.clientY + document.bodu.scrollTop + document.documentElement.scrollTop
        };
    }
}
function getPosition(element){
    let top =0, left = 0;
    while (element){
        left += element.offsetLeft;
        top += element.offsetTop;
        element = element.offsetParent;
    }
    return { x : left, y : top}
}

function clickProgress (idPlayer, control, event){
    let parent = getPosition(control);
    let traget = getMousePositon(event);
    let player = document.querySelector('#' + idPlayer);
    let x = traget.x - parent.x;
    let wrapperWidth = docuement.querySelector('#progressBarControl').offsetWidth;
    let percent = Math.ceil((x / wrapperWidth)*100);
    let duration = player.duration;
    player.currentTime = (duration= percent) /100
}