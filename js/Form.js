class Form {
  constructor() {
    // ELEMENTOS DA CLASSE
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    
  }

  setElementPosition() {
    //1.2-- DEFINA A POSIÇÃO DOS ELEMENTOS
    this.titleImg.position(120, 50);
    this.input.position(width/2-120, height/2-90);
    this.playButton.position(width/2-100, height/2-40);
    this.greeting.position(width / 2 - 200, height / 2 - 100);
  }
  
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }




  hide() {
   //1.3-- USE A FUNÇÃO PARA DESAPARECER OS ELEMENTOS
   this.playButton.hide();
   this.input.hide();
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
   this.playButton.mousePressed(()=>{
    this.playButton.hide();
    this.input.hide();

    playerCount += 1;
    player.name=this.input.value();
    player.index=playerCount;
    player.updateCount(playerCount);

   });

   /* O símbolo usado para escrever a mensagem abaixo (laranja) é a crase. */
  }

  display() {
    // CHAME A FUNÇÃO DE POSIÇÃO DOS ELEMENTOS
    this.setElementPosition();
    this.setElementsStyle();
    // CHAME A FUNÇÃO DE PRESSIONAMENTO DE TECLA
    this.handleMousePressed();
  }
}
