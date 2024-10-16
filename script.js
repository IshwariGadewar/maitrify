'use strict'

const music = new Audio('Songs/song1.mp3');

//music.play();

const songDetail = [
    {
        id: 1,
        songName : `On My Way <br> <div class="subtitle">Alan Walker</div>`,
        poster : "img/SongsPop/1.jpeg"
    },
    {
        id: 2,
        songName : `Alan Walker-Fade<br> <div class="subtitle">Alan Walker</div>`,
        poster : "img/SongsPop/2.jpeg"
    },
    {
        id: 3,
        songName : `Cartoon-On & On<br> <div class="subtitle">Daniel Levi</div>`,
        poster : "img/SongsPop/3.jpeg"
    },
    {
        id: 4,
        songName : `Warriyo-Mortals<br> <div class="subtitle">Mortals</div>`,
        poster : "img/SongsPop/4.jpeg"
    },
    {
        id: 5,
        songName : `Ertugrul Gazi<br> <div class="subtitle">Ertugrul</div>`,
        poster : "img/SongsPop/5.jpeg"
    },
    {
        id: 6,
        songName : `Electronic Music<br> <div class="subtitle">Electro</div>`,
        poster : "img/SongsPop/6.jpeg"
    },
    {
        id: 7,
        songName : `Agar Tum Sath Ho<br> <div class="subtitle">Tamashaa</div>`,
        poster : "img/SongsPop/7.jpeg"
    },
    {
        id: 8,
        songName : `Suna Hai<br> <div class="subtitle">Neha Kakker</div>`,
        poster : "img/SongsPop/8.jpeg"
    },
    {
        id: 9,
        songName : `Dilber<br> <div class="subtitle">Satyameva Jayate</div>`,
        poster : "img/SongsPop/9.jpeg"
    },
    {
        id: 10,
        songName : `Duniya<br> <div class="subtitle">Luka Chuppi</div>`,
        poster : "img/SongsPop/10.jpeg"
    },
    {
        id: 11,
        songName : `Lagadi Lahore Di<br> <div class="subtitle">Street Dancer 3D</div>`,
        poster : "img/SongsPop/11.jpeg"
    },
    {
        id: 12,
        songName : `Putt Jatt Da<br> <div class="subtitle">Putt Jatt Da</div>`,
        poster : "img/SongsPop/12.jpeg"
    },
    {
        id: 13,
        songName : `Baarishein<br> <div class="subtitle">Atif Aslam</div>`,
        poster : "img/SongsPop/13.jpeg"
    },
    {
        id: 14,
        songName : `Vaaste<br> <div class="subtitle">Dhvani Bhanushali</div>`,
        poster : "img/SongsPop/14.jpeg"
    },
    {
        id: 15,
        songName : `Tum hi ho<br> <div class="subtitle">Aashique 2</div>`,
        poster : "img/SongsPop/15.jpeg"
    },
    {
        id: 16,
        songName : `Ihahi<br> <div class="subtitle">Yeh Jawaani Hai Deewani</div>`,
        poster : "img/SongsPop/16.jpeg"
    },
    {
        id: 17,
        songName : `Aaj Ki Raat<br> <div class="subtitle">Stree 2</div>`,
        poster : "img/SongsPop/17.jpeg"
    },
    {
        id: 18,
        songName : `Arjan Vaily<br> <div class="subtitle">Animal</div>`,
        poster : "img/SongsPop/18.jpeg"
    },
    {
        id: 19,
        songName : `Nadaan Parinda<br> <div class="subtitle">Rockstar</div>`,
        poster : "img/SongsPop/19.jpeg"
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songDetail[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songDetail[i].songName;
});



//search data start

let searchResult = document.getElementsByClassName('searchResult')[0];

songDetail.forEach(ele =>{
    const {id, songName, poster} = ele;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#"+id;
    card.innerHTML = `<img src="${poster}" alt="">
                        <div class="content">
                            ${songName}
                        </div>`;

    searchResult.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let inputValue = input.value.toUpperCase();
    let items = searchResult.getElementsByTagName('a');
    
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let textValue = as.textContent || as.innerHTML;

        if (textValue.toUpperCase().indexOf(inputValue) > -1) {
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            searchResult.style.display = "none";
        } else {
            searchResult.style.display = "";
        }
    }
})

//search data end


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
        music.src = `Songs/song${index}.mp3`;
        posterMasterPlay.src = `img/SongsPop/${index}.jpeg`;
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
            downloadMusic.setAttribute('download',songName.split('<br>')[0]);
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
    music.src = `Songs/song${index}.mp3`;
    posterMasterPlay.src = `img/SongsPop/${index}.jpeg`;
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
    music.src = `Songs/song${index}.mp3`;
    posterMasterPlay.src = `img/SongsPop/${index}.jpeg`;
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





let popSongLeft = document.getElementById('popSongLeft');
let popSongRight = document.getElementById('popSongRight');
let popSong = document.getElementsByClassName('popSong')[0];

popSongRight.addEventListener('click',()=>{
    popSong.scrollLeft += 330;
});

popSongLeft.addEventListener('click',()=>{
    popSong.scrollLeft -= 330;
});

let popArtLeft = document.getElementById('popArtLeft');
let popArtRight = document.getElementById('popArtRight');
let popItems = document.getElementsByClassName('items')[0];

popArtRight.addEventListener('click',()=>{
    popItems.scrollLeft += 330;
});

popArtLeft.addEventListener('click',()=>{
    popItems.scrollLeft -= 330;
});

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

    music.src = `Songs/song${index}.mp3`;
    posterMasterPlay.src = `img/SongsPop/${index}.jpeg`;
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
    music.src = `Songs/song${index}.mp3`;
    posterMasterPlay.src = `img/SongsPop/${index}.jpeg`;
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

    music.src = `Songs/song${index}.mp3`;
    posterMasterPlay.src = `img/SongsPop/${index}.jpeg`;
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