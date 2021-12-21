const bg2El = document.querySelector(".background-2");
const bg3El = document.querySelector(".background-3");
const bg4El = document.querySelector(".background-4");
const bg5El = document.querySelector(".background-5");

const playerBtnEl = document.querySelector(".player-button");
const braumBtnEl = document.querySelector(".braum-button");
const lazyBtnEl = document.querySelector(".lazyButton");

const video1El = document.querySelector("#video-1");
const video2El = document.querySelector("#video-2");
const audioEl = document.querySelector("audio");

console.log("Eae, Neo")

function playVideo() {
    video1El.play();
    playerBtnEl.classList.add("hidden");
}

function hiddenButton(el) {
    console.log("Equanto eu desenvolvia essa esquizofrenia teve seu Fuvest e você não passou pra segunda fase")

    el.classList.add("hidden");
    bg2El.classList.add("visible");

    return setTimeout(() => {
        console.log("Mas não desista, nem desanime, vida de programador é uma luta diária")

        el.classList.add("removeEl");
    }, 1000);
}

function onVideoEndEvent() {
    console.log("A comunidade de programadores é incrível, provavelmente é a área que o pessoal mais gosta de compartilhar conhecimento a troco de nada")

    bg3El.classList.add("visible");
    audioEl.play();
    audioEl.volume = 0.3;

    braumBtnEl.classList.add("animation");

    return setTimeout(() => {
        braumBtnEl.classList.remove("animation");
        braumBtnEl.classList.add("pulseWhite");

        console.log("E lembre-se, se estiver chato programar, vc ta fazendo errado")
    }, 6400);
}

function pushContainer() {
    console.log("Sempre tome um tempo para fazer umas brincadeiras, esse próprio site está sendo uma grande diversão pra min, e é em coisas desse tipo que a gente aprender mais")

    audioEl.pause();
    bg4El.classList.add("visible");
}

function showBackground5() {
    console.log("E por fim, Feliz aniversário mais uma vez, desejo muita pipoca em sua vida")

    bg5El.classList.add("visible");
}

video1El.addEventListener('ended', onVideoEndEvent, false);
video2El.onplay = () => {
    return setTimeout(() => {
        lazyBtnEl.classList.add("visible");
    }, 15000);
}