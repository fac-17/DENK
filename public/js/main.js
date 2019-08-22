
const classes = [".svg-sunmiddle-crescent", ".svg-sunmiddle-big", ".bottom-corner", ".top-corner"]

const tarotHand = document.querySelector(".fullsvg");

window.onload = () => {
    tarotHand.classList.add("hand-grow");
}



const getRandomColor = () => {
    return "rgb(" + [0, 0, 0].map(getRandomByte).join(",") + ")";
}

const getRandomByte = () => {
    return Math.floor(Math.random() * 256)
}
console.log(document.querySelector(".svg-sunmiddle.crescent"));

const cardClickHandler = () => {
    location.href = "/tarot"
}

document.querySelectorAll(".tarot-card-svg").forEach(svg => {
    svg.addEventListener("click", cardClickHandler)
    classes.forEach(c => {
        console.log(svg, "this is svg")
        console.log(c, 'this is c')
        try {
            svg.querySelector(c).setAttribute("fill", getRandomColor())
            console.log("WO")
        }
        catch (e) {
            console.log("DIDN")
        }
    })
})

