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
        console.log("Mas não desanime, vida de programador é uma luta diária e todo dia é uma novo tropeço")

        el.classList.add("removeEl");
    }, 1000);
}

function onVideoEndEvent() {
    console.log("Só toma cuidado pra não tropeçar trazendo café pro chefe")

    bg3El.classList.add("visible");
    audioEl.play();
    audioEl.volume = 0.3;

    braumBtnEl.classList.add("animation");

    return setTimeout(() => {
        braumBtnEl.classList.remove("animation");
        braumBtnEl.classList.add("pulseWhite");

        console.log("Programar deve ser uma coisa legal")
    }, 6400);
}

function pushContainer() {
    console.log("Sempre tome um tempo para fazer umas besteiras, esse próprio site está sendo uma grande diversão pra min")

    audioEl.pause();
    bg4El.classList.add("visible");
}

function showBackground5() {
    console.log('Acho que ficou visível que o sono e a preguiça afetou a metade pro fim do site HSAUDHAUSHA')

    bg5El.classList.add("visible");
}

video1El.addEventListener('ended', onVideoEndEvent, false);
video2El.onplay = () => {
    return setTimeout(() => {
        lazyBtnEl.classList.add("visible");

        console.log("E por fim, feliz aniversário mais uma vez, desejo muita pipoca em sua vida")
    }, 15000);
}