
const classes=[".svg-sunmiddle-crescent",".svg-sunmiddle-big",".bottom-corner",".top-corner"]

const getRandomColor = ()=>{
    return "rgb("+[0,0,0].map(getRandomByte).join(",")+")";
}

const getRandomByte = ()=>{
    return Math.floor(Math.random()*256)
}
console.log(document.querySelector(".svg-sunmiddle.crescent"));

document.querySelectorAll(".tarot-card-svg").forEach(svg=>{

    classes.forEach(c=>{
        console.log(svg,"this is svg")
        console.log(c, 'this is c')
        svg.querySelector(c).setAttribute("fill",getRandomColor())
    })
})
