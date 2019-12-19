document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded")
})
// const { Engine, World, Bodies, MouseConstraint, Constraint } = Matter;

let ground
const boxes = []
let missile
let world, engine
let mConstraint
let slingshot

function setup() {
    const canvas = createCanvas(800, 400)
    engine = Matter.Engine.create()
    world = engine.world
    ground = new Ground(width / 2, height - 10, width, 20)
    for (let i = 0; i < 3; i++) {
        boxes[i] = new Box(600, 250 - i * 75, 50, 75)

    }
    missile = new Missile(150, 300, 25)
    slingshot = new SlingShot(150, 300, missile.body)

    const mouse = Matter.Mouse.create(canvas.elt)
    const options = {
        mouse: mouse
    }
    mConstraint = Matter.MouseConstraint.create(engine, options)
    Matter.World.add(world, mConstraint)
}
        
function draw() {
    background(44)
    ground.show()
    for (let box of boxes) {
    box.show()
    }
    missile.show()
    Matter.Engine.update(engine)
    slingshot.show()
}

function createCanvasDiv() {
    let bodyEl = document.querySelector('body')
    let canvasDiv = document.createElement('div')
    canvasDiv.classList.add('canvas-container')
    bodyEl.appendChild(canvasDiv)
}