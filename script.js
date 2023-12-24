console.log("welcome to life");

let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myplayer = document.getElementById('myplayer');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname')
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {
        songname: "Kings and Queens", filePath: "songs/1.mp3", coverPath: "covers/cover2.jpeg"
    },
    {
        songname: "Bye", filePath: "songs/2.mp3", coverPath: "covers/cover3.jpeg"
    },
    {
        songname: "Raise up", filePath: "songs/1.mp3", coverPath: "covers/cover5.jpeg"
    },
    {
        songname: "Liggi", filePath: "songs/4.mp3", coverPath: "covers/cover8.jpeg"
    },
    {
        songname: "Look what you made me do", filePath: "songs/5.mp3", coverPath: "covers/cover4.jpeg"
    },
    {
        songname: "Lover", filePath: "songs/6.mp3", coverPath: "covers/cover1.jpg"
    },
    {
        songname: "Ranjhana", filePath: "songs/8.mp3", coverPath: "covers/cover7.jpeg"
    },
    {
        songname: "when i see you again", filePath: "songs/7.mp3", coverPath: "covers/cover6.jpeg"
    }
];


masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
// audioelement.play();

audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myplayer.value = progress;
})

myplayer.addEventListener('change', () => {
    audioelement.currentTime = myplayer.value * audioelement.duration / 100;
})

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `songs/${songindex + 1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 7) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

