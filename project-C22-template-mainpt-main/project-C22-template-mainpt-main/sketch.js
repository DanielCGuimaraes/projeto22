const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImage;
var playerImage

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var static_options = {
    isStatic:true
  }


  //criar corpo da base do jogador
  base = Bodies.rectangle(100,300,100,100,static_options)
  World.add(world,base)
  //criar corpo do jogador
  player = Bodies.rectangle(100,239,50,50,static_options)
  World.add(world,player)

  player = new Player(100,239,50,50)
}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()

  //exibir a imagem da base do jogador usando a função image()

  push();
  imageMode(CENTER);
  image(baseImage,base.position.x, base.position.y, 100, 100);
  pop(); 

  Engine.update(engine);

  player.display()

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
