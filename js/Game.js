class Game {
  constructor() {}
 //2--mudar estado do jogo
  getState(){
    var gameStateRef= database.ref("gameState");

      gameStateRef.on("value", function(data){

        gameState=data.val();

      })

  }

  //3-atualização dos dados de referencia
  update(state){

    database.ref("/").update({
      gameState:state
    })

  }

  start() {
    //2.3 INCLUA A CLASSE DO JOGO
    player = new Player();
    form = new Form();
    form.display();
  }



  
  handleElements(){
    form.hide();
    form.titleImg.position(40, 40);
    form.titleImg.class("gameTitleAfterEffects");
  }

  play(){
    this.handleElements();
    drawSprite();
  }
}
