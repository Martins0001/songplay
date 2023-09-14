const nomemusica = document.getElementById("song-name");
const bandname = document.getElementById("band-name")
const song = document.getElementById("som");
const cover = document.getElementById("imagem")
const play = document.getElementById("play")
const next = document.getElementById("next")
const back = document.getElementById("back")
const likeButton = document.getElementById("like-button");




const circles = {
    songname : "Circles",
    artista : "Post Malone",
    file: "post_malone_circles"
};

const congratulations = {
    songname : "Congratulations",
    artista : "Post Malone",
    file: "post_malone_congratulations"
};
const playlist = [circles, congratulations];

let index = 0;

let fav = false;

let tocando = false;

song.play();
song.pause();
function playsong(){
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    tocando = true;
}
function pausesong(){
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    tocando = false;
}
function Decider(){
    if(tocando === true){
        pausesong();
    }
    else{
        playsong();
    }
}
    
function inicializar(){
    cover.src = `imagens/${playlist[index].file}.png`;
    song.src = `musicas/${playlist[index].file}.mp3`;
    bandname.innerText = playlist[index].artista;
    nomemusica.innerText = playlist[index].songname; 
}   

function backsong(){
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -= 1;
    }
    inicializar();
    playsong();
}
function netxsong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
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




inicializar();
play.addEventListener("click", Decider);
back.addEventListener("click",backsong);
next.addEventListener("click",netxsong);
