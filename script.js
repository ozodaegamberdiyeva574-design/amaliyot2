/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸ Music";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Music";

        playing = false;
    }

});


/* =========================
   CODE DATA
========================= */

const codes = {

    HTML: `
<!DOCTYPE html>

<html>

<head>
    <title>My Website</title>
</head>

<body>

    <h1>Hello World!</h1>

    <p>
        My first website.
    </p>

</body>

</html>
`,

    CSS: `
body {

    background: #050711;

    color: white;

    font-family: Arial;

}

.card {

    padding: 30px;

    border-radius: 20px;

    background: #10182b;

    transition: .3s;
}

.card:hover {

    transform: translateY(-10px);

}
`,

    JavaScript: `
// JavaScript

const button =
    document.querySelector("button");

button.addEventListener(
    "click",
    () => {

        alert("Hello Developer!");

    }
);
`,

    React: `
import React from "react";

function App() {

    return (

        <div className="app">

            <h1>
                Hello React!
            </h1>

            <button>
                Start Coding
            </button>

        </div>

    );

}

export default App;
`
};


/* =========================
   OPEN CODE
========================= */

function showCode(language) {

    const popup =
        document.getElementById("popup");

    const title =
        document.getElementById("popupTitle");

    const code =
        document.getElementById("popupCode");

    title.innerText = language;

    code.innerText = codes[language];

    popup.classList.add("active");
}


/* =========================
   CLOSE CODE
========================= */

function closeCode() {

    document
        .getElementById("popup")
        .classList.remove("active");

}


/* =========================
   CLOSE ON BACKGROUND
========================= */

document
    .getElementById("popup")
    .addEventListener("click", function(e) {

        if (e.target === this) {

            closeCode();

        }

    });


/* =========================
   MOUSE PARALLAX
========================= */

const technologies =
    document.querySelectorAll(".tech");

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - .5);

    const y =
        (e.clientY / window.innerHeight - .5);

    technologies.forEach((item, index) => {

        const speed = (index + 1) * 12;

        item.style.transform =
            `translate(${x * speed}px,
                       ${y * speed}px)`;

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const cards =
    document.querySelectorAll(
        ".tech-card, .project, .editor"
    );

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: .15
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);

});


/* =========================
   RANDOM FLOWER MOVEMENT
========================= */

const flowers =
    document.querySelectorAll(".flowers span");

flowers.forEach((flower, index) => {

    flower.style.animationDuration =
        `${5 + Math.random() * 5}s`;

    flower.style.animationDelay =
        `${Math.random() * 3}s`;

});


/* =========================
   ESC KEY
========================= */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeCode();

    }

});