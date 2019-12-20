
let ground
const boxes = []
let missile
let world, engine
let mConstraint
let slingshot

function setup() {
    const canvas = createCanvas(800, 600)
    canvas.parent("game")
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
        
function keyPressed() {
    if (key == 'r') {
        slingshot.fly()
    }
}


function mouseReleased() {
    setTimeout(() => {
    slingshot.fly()
    }, 15)
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




function login() {
    // create canvas
    // debugger
    const canvas = document.querySelector("canvas")
    // canvas.remove()
    var myCanvas = createCanvas(710, 400);
    myCanvas.parent("main")
    background(0)
    input = createInput();
    input.position(50, 65);
    input.parent("login")
  
    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(missiles);
    button.id("submit")
    button.parent("login")
  
    greeting = createElement('h1', 'what is your name?');
    greeting.position(20, 5);
    greeting.parent("main")
  
    textAlign(CENTER);
    textSize(50);
  }
  
  function greet() {
    const name = input.value();
    greeting.html('hello ' + name + '!');
    input.value('');
  
    for (let i = 0; i < 200; i++) {
      push();
      fill(random(255), 255, 255);
      translate(random(width), random(height));
      rotate(random(2 * PI));
      text(name, 0, 0);
      pop();
    }
  }
  
  function missiles(){
    document.getElementById("login").innerHTML = ""
    greet()

    missile = createElement('h1', 'choose one of missile');
    missile.position(150, 150);
    missile.parent("main")

  }
  