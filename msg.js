function showMessage(type) {
    const box = document.getElementById("messageBox");

    let message = "";

    if (type === "sad") {
        message = "Hey babyy… I know may mga times na you are down nd i'm here to remind u na I’m always here for youuu through your highs and lows. You’re stronger than you think, and I believe in you every single day mweheheh ❤️";
    } 
    else if (type === "miss") {
        message = "If you miss me, just remember I’m probably thinking about you toooo. You’re always on my mind babiii mwaaaapss! 😘❤️";
    } 
    else if (type === "surprise") {
        message = "Just a random thought lang. It's kind of funny how someone I met online can always sneak into my mind, yess it's you Cassyy 😙 HAHAHAHHAHAHAHA From our late night talks, kulitan, asaran, sweet to eo you name it!! I catch myself smiling at the weirdest things then realize, siguro crush mo ko no? CHAR. I want u to know that I’m really lucky to have you in my world, because you make my day shine the brightest mweeheh love uuuu bb ko 💖";
    }

    box.classList.remove("show");

    setTimeout(() => {
        box.innerText = message;
        box.classList.add("show");
    }, 200);
}

/* Generate Floating Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerText = "Pause Music ⏸️";
    } else {
        music.pause();
        btn.innerText = "Play Music 🎵";
    }
}