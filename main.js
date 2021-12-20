const bg2El = document.querySelector(".background-2");
const bg3El = document.querySelector(".background-3");
const bg4El = document.querySelector(".background-4");
const playerBtnEl = document.querySelector(".player-button");
const braumBtnEl = document.querySelector(".braum-button");
const videoEl = document.querySelector("video");
let audioEl = document.querySelector("audio");

// Cuidado, gambiarra abixo
function playVideo(el) {
    videoEl.play();
    playerBtnEl.classList.add("hidden");

    return setTimeout(() => {
        bg3El.classList.add("visible");
        audioEl.play();
        audioEl.volume = 0.3;

        braumBtnEl.classList.add("animation");

        return setInterval(() => {
            braumBtnEl.classList.remove("animation");
            braumBtnEl.classList.add("pulseWhite");
        }, 6400);
    }, 8800);
}

function hiddenButton(el) {
    el.classList.add("hidden");
    bg2El.classList.add("visible");

    return setTimeout(() => {
        el.classList.add("removeEl");
    }, 1000);
}

function pushContainer() {
    audioEl.pause();
    bg4El.classList.add("visible");
}