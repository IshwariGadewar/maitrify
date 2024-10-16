'use strict'

const music = new Audio('Songs/song1.mp3');

//music.play();


const songDetail = [
    {
        id: 1,
        songName : "Ashq Na Ho",
        poster : "img/Arjit/1.jpeg",
        album : "Holiday",
        songTime : '',
    },
    {
        id: 2,
        songName : "Khairiyat",
        poster : "img/Arjit/2.jpeg",
        album : "Chhichhore",
        songTime : '',
    },
    {
        id: 3,
        songName : "Desh Mere",
        poster : "img/Arjit/3.jpeg",
        album : "Bhuj",
        songTime : '',
    },
    {
        id: 4,
        songName : "Dhokha",
        poster : "img/Arjit/4.jpeg",
        album : "Dhokha",
        songTime : '',
    },
    {
        id: 5,
        songName : "Tera Yaar Hoon Main",
        poster : "img/Arjit/5.jpeg",
        album : "Sonu ke Titu ki sweety",
        songTime : '',
    },
    {
        id: 6,
        songName : "Galti se Mistake",
        poster : "img/Arjit/6.jpeg",
        album : "Jagga Jasoos",
        songTime : '',
    },
    {
        id: 7,
        songName : "Hamari Adhuri Kahani",
        poster : "img/Arjit/7.jpeg",
        album : "Hamari Adhuri Kahani",
        songTime : '',
    },
    {
        id: 8,
        songName : "Neki ki Raah",
        poster : "img/Arjit/8.jpeg",
        album : "Traffic",
        songTime : '',
    },
    {
        id: 9,
        songName : "Gaalliyan",
        poster : "img/Arjit/9.jpeg",
        album : "Ek Villain",
        songTime : '',
    },
    {
        id: 10,
        songName : "Mere Yaaraa",
        poster : "img/Arjit/10.jpeg",
        album : "Sooryavanshi",
        songTime : '',
    },
    {
        id: 11,
        songName : "Ude Dil Befikre",
        poster : "img/Arjit/11.jpeg",
        album : "Befikre",
        songTime : '',
    },
    {
        id: 12,
        songName : "Ae Watan",
        poster : "img/Arjit/12.jpeg",
        album : "Raazi",
        songTime : '',
    },
    {
        id: 13,
        songName : "Agar Tum Sath Ho",
        poster : "img/Arjit/13.jpeg",
        album : "Tamasha",
        songTime : '',
    },
    {
        id: 14,
        songName : "Pachtaoge",
        poster : "img/Arjit/14.jpeg",
        album : "Jaani Ve",
        songTime : '',
    }
]


Array.from(document.getElementsByClassName('tableTitle')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songDetail[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songDetail[i].songName;
    e.querySelector('#album').innerHTML = songDetail[i].album;
    e.querySelector('#songTime').innerHTML = songDetail[i].songTime;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',() => {
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105,.0)';
    })
}

let index = 0;
let posterMasterPlay = document.getElementById('posterMasterPlay');
let downloadMusic = document.getElementById('downloadMusic');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `Songs/Arjit/${index}.mp3`;
        posterMasterPlay.src = `img/Arjit/${index}.jpeg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        downloadMusic.href = `Songs/song${index}.mp3`;

        let songTitles = songDetail.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
            downloadMusic.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});

let currentStart= document.getElementById('currentStart');
let currentEnd= document.getElementById('currentEnd');
let seek= document.getElementById('seek');
let bar2= document.getElementById('bar2');
let dot= document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let musicCurr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(musicCurr / 60);
    let sec2 = Math.floor(musicCurr % 60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }
    
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((musicCurr/music_dur)*100);
    seek.value = progressBar;

    let seekBar = seek.value;
    console.log(seek.value);
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let volBar = document.getElementsByClassName('volBar')[0];
let vol_dot = document.getElementById('volDot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    console.log(vol.value);
    volBar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index= Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `Songs/Arjit/${index}.mp3`;
    posterMasterPlay.src = `img/Arjit/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songDetail.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index= 1;
    }
    music.src = `Songs/Arjit/${index}.mp3`;
    posterMasterPlay.src = `img/Arjit/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songDetail.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch(a){
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const nextMusic = () =>{
    if(index == songDetail.length){
        index = 1;
    }
    else{
        index++;
    }

    music.src = `Songs/Arjit/${index}.mp3`;
    posterMasterPlay.src = `img/Arjit/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songDetail.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeatMusic = () =>{
    index;
    music.src = `Songs/Arjit/${index}.mp3`;
    posterMasterPlay.src = `img/Arjit/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songDetail.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const randomMusic = () =>{
    if(index == songDetail.length){
        index = 1;
    }
    else{
        index = Math.floor((Math.random() * songDetail.length) + 1)
    }

    music.src = `Songs/Arjit/${index}.mp3`;
    posterMasterPlay.src = `img/Arjit/${index}.jpeg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songDetail.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;
    switch(b){
        case "repeat":
            repeatMusic();
            break;
        case "next":
            nextMusic();
            break;
        case "random":
            randomMusic();
            break;
    }
})
