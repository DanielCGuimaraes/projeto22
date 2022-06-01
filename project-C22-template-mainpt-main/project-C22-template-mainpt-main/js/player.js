class Player {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.playerImage = loadImage('./assets/player.png')
      this.baseImage = loadImage('./assets/base.png')
  
    }
  
    display() {

      push()

      imageMode(CENTER)
      image(this.playerImage,this.x,this.y,this.width,this.height)
      noFill()
  
      pop()
      
    }
  
  }