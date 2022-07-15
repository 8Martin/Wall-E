class Form{

  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your Name");
    this.playButton = createButton("Play");
    this.text = createElement("h2");
    this.goButton = createButton("GO!");
    this.startButton = createButton("Start");
    this.settingButton = createButton("Setting");
    this.musicButton = createButton("Music");
    this.muteButton = createButton("Mute");
    this.convertButton = createButton("Convert");
    this.collectButton = createButton("Collect Plant");
    this.nextLevel = createButton("Next Level");
    this.insideView = createButton("View Map")
    this.outsideView = createButton("View Ship");
    this.go1Button = createButton("GO!");
    
  }

  setElementsPosition() { 
    this.input.position(width / 2 - 110, height / 2 - 20);
    this.playButton.position(width / 2 - 90, height / 2 + 40);
    this.text.position(width / 2 - 340, height / 2 - 230);
    this.goButton.position(width / 2 - 900, height / 2 + 240);
    this.startButton.position(width / 2 - 9000, height / 2 + 240);
    this.settingButton.position(width / 2 - 530, height / 2 - 320);
    this.musicButton.position(width / 2 - 530, height / 2 - 32000);
    this.muteButton.position(width / 2 - 530, height / 2 - 32000);
    this.convertButton.position(width / 2 + 230, height / 2 - 2900);
    this.collectButton.position(width / 2 + 280, height / 2 + 3000);
    this.nextLevel.position(width / 2 - 1000, height / 2 );
    this.insideView.position(width / 2 + 90, height / 2 - 28000);
    this.outsideView.position(width / 2 + 90, height / 2 - 28000);
    this.go1Button.position(width / 2 + 24000, height / 2 + 50);
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.text.class("greeting");
    this.goButton.class("customButton");
    this.startButton.class("customButton");
    this.settingButton.class("resetButton");
    this.musicButton.class("resetButton");
    this.muteButton.class("resetButton");
    this.convertButton.class("customButton");
    this.collectButton.class("customButton_2");
    this.nextLevel.class("customButton");
    this.insideView.class("customButton"); 
    this.outsideView.class("customButton"); 
    this.go1Button.class("customButton_3");
  }

 handleMousePressed(){
    this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        this.goButton.position(width / 2 - 90, height / 2 + 10);
        this.settingButton.position(width / 2 - 530, height / 2 - 320);
        gameState = 1;
        var message = `
        Hello I am WALL - E
        </br> Will you help me cleaning up the trash ?  `
        this.text.html(message);
    })

    this.goButton.mousePressed(()=>{
        this.text.hide();
        this.goButton.hide();
        this.settingButton.hide();
        this.muteButton.hide();
        this.musicButton.hide();
        gameState = 2;
        this.convertButton.position(width / 2 + 230, height / 2 - 290);
        sound.stop();
    })
   

    this.settingButton.mousePressed(()=>{
      this.musicButton.position(width / 2 - 530, height / 2 - 240);
    })
    
    this.musicButton.mousePressed(()=>{
      this.muteButton.position(width / 2 - 530, height / 2 - 240);
      sound.play();
      sound.loop();
    })

    this.muteButton.mousePressed(()=>{
      this.musicButton.position(width / 2 - 530, height / 2 - 240);
      this.muteButton.position(width / 2 - 530, height / 2 - 24000);
      sound.stop();
    })

    this.convertButton.mousePressed(()=>{
     if(Tscore>0){
      cube = cube+1;
      Tscore = Tscore-10;
      c = createSprite(random(80,330),650,40,40);
      c.addImage("c_1",cubeImg)
      c.scale = 0.2;
     } 
   if(cube === 10){ 
    this.convertButton.position(width / 2 + 230, height / 2 - 2900); 
    this.collectButton.position(width / 2 + 280, height / 2 + 30);
   }
    })

    this.collectButton.mousePressed(()=>{
      this.collectButton.position(width / 2 + 2800, height / 2 + 30);
      this.nextLevel.position(width / 2 - 100, height / 2 );
      this.Allert();
      plant.visible = false;
      this.nextLevel.mousePressed(()=>{
      gameState = 3;
      this.nextLevel.position(width / 2 - 1000, height / 2 );
      this.insideView.position(width / 2 + 90, height / 2 - 280);
      this.go1Button.position(width / 2 + 240, height / 2 + 50);
    }) 
    
    this.insideView.mousePressed(()=>{
      axiom_m.x = 430;
      this.outsideView.position(width / 2 + 90, height / 2 - 280);
      this.insideView.position(width / 2 + 90, height / 2 - 2000);

      this.outsideView.mousePressed(()=>{
        axiom_m.x = 43000;
        this.outsideView.position(width / 2 + 90, height / 2 - 2000);
        this.insideView.position(width / 2 + 90, height / 2 - 280);
      })
    })

    this.go1Button.mousePressed(()=>{
      this.outsideView.position(width / 2 + 90, height / 2 - 2000);
      this.insideView.position(width / 2 + 90, height / 2 - 20000);
      this.go1Button.position(width / 2 + 90, height / 2 - 2000);
      gameState = 4;
    })

    })
  
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
   
  Allert(){
    ok = 1;
    swal({
      title: `Awesome!`,
      text: "You Have Collected The Plant! ",
      imageUrl:
      "https://www.pngkey.com/png/detail/160-1609764_wall-e-eve-symbol.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }
}