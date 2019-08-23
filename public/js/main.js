
const classes = [".svg-sunmiddle-crescent", ".svg-sunmiddle-big"]

const tarotHand = document.querySelector(".fullsvg");

if (tarotHand !== null) {
    window.onload = () => {
        tarotHand.classList.add("hand-grow");
    }
}

const getRandomColor = () => {
    return "rgb(" + [0, 0, 0].map(getRandomByte).join(",") + ")";
}

const getRandomByte = () => {
    return Math.floor(Math.random() * 256)
}

const cardClickHandler = () => {
    location.href = "/tarot"
}

document.querySelectorAll(".tarot-card-svg").forEach(svg => {
    svg.addEventListener("click", cardClickHandler)
    classes.forEach(c => {
        try {
            svg.querySelector(c).setAttribute("fill", getRandomColor())
        }
        catch (e) {
        }
    })
})

