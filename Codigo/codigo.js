const nomemusica = document.getElementById("song-name");
const bandname = document.getElementById("band-name")
const cover = document.getElementById("imagem")
const play = document.getElementById("play")
const next = document.getElementById("next")
const back = document.getElementById("back")
const likeButton = document.getElementById("like-button");
const song = document.getElementById("som");
const barraProgresso = document.getElementById('progresso-atual');
const tempoTotal = document.getElementById('tempo-Total');



const circles = {
    songname: "Circles",
    artista: "Post Malone",
    file: "post_malone_circles",
};

const congratulations = {
    songname: "Congratulations",
    artista: "Post Malone",
    file: "post_malone_congratulations",
};
const playlist = [circles, congratulations];

let index = 0;

let fav = false;

let tocando = false;

function playsong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    tocando = true;
}
function pausesong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    tocando = false;
}
function Decider() {
    if (tocando === true) {
        pausesong();
    }
    else {
        playsong();
    }
}

function inicializar() {
    cover.src = `imagens/${playlist[index].file}.png`;
    song.src = `musicas/${playlist[index].file}.mp3`;
    bandname.innerText = playlist[index].artista;
    nomemusica.innerText = playlist[index].songname;
}

function backsong() {
    if (index === 0) {
        index = playlist.length - 1;
    }
    else {
        index -= 1;
    }
    inicializar();
    playsong();
}
function nextsong() {
    if (index === playlist.length - 1) {
        index = 0;
    }
    else {
        index += 1;
    }
    inicializar();
    playsong();
}

function favlike() {
    like.classList.remove("bi-heart");
    like.classList.add("bi-heart-fill");
    fav = true;
}

function favunlike() {
    like.classList.remove("bi-heart-fill");
    like.classList.add("bi-heart");
    fav = false;
}

function fontlike() {
    if (fav === true) {
        favunlike();
    } else {
        favlike();
    }
}

like.addEventListener("click", fontlike);

song.addEventListener('loadedmetadata', () => {

    const totalTime = song.duration;
    const totalMin = Math.floor(totalTime / 60);
    const totalSec = Math.floor(totalTime % 60);
    const tempoTotalForm = `${totalMin}:${totalSec.toString().padStart(2, '0')}`;

    tempoTotal.textContent = `${tempoTotalForm}`;
});

song.addEventListener('timeupdate', () => {

    const tempoAtual = song.currentTime;
    const duracao = song.duration;
    const progresso = (tempoAtual / duracao) * 100;

    barraProgresso.style.width = progresso + '%';
});


inicializar();
play.addEventListener("click", Decider);
back.addEventListener("click", backsong);
next.addEventListener("click", nextsong);
