console.log("wlcome to javascript");

let songindex=0;
let audioelement=new Audio('1.mp3');  //1.mp3 is an fike of the song which i dont have
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar')
let songs=[
    {songName: "mickey",filePath:"song/1.mp3",cowerPath:"cover/1.jpg"},
    {songName: "mickey",filePath:"song/1.mp3",cowerPath:"cover/1.jpg"},
    {songName: "mickey",filePath:"song/1.mp3",cowerPath:"cover/1.jpg"},
    {songName: "mickey",filePath:"song/1.mp3",cowerPath:"cover/1.jpg"},
    {songName: "mickey",filePath:"song/1.mp3",cowerPath:"cover/1.jpg"},
    {songName: "mickey",filePath:"song/1.mp3",cowerPath:"cover/1.jpg"},
]


audioelement.play(); //it plays the song with play function

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
audioelement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
  console.log(progress);
  myprogressbar.value = progress;
})
