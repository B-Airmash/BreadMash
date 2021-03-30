function prowler(player) {
          if (prowlerRadarEnabled) {            
            let redCircle = redCircles[player.id];
            
            if (!redCircle) {
              redCircle = new PIXI.Graphics;
              redCircle.clear();
              
              redCircle.beginFill(0xFF0000, 0.125);
              redCircle.drawCircle(0, 0, minimapRadius); 
              redCircle.endFill();
              
              redCircles[player.id] = redCircle;
              game.graphics.layers.groundobjects.addChild(redCircle);
           }
           redCircle.position.set(player.lowResPos.x, player.lowResPos.y);
           redCircle.renderable = !(
                player.removedFromMap
             || (game.myType != 1 && game.myType != 4)
             || (player.type != 5)
             || player.team == Players.getMe().team
             || player.hidden
             || player.render
             || player.stealthed
            );
         }
       }
function playerInfo() {
  let playerIds = Players.getIDs();
  let myPlayer = Players.getMe();
  prowlerAlertDiv.hide(); 
  
  if (prowlerRadarEnabled) {
    for (var playerId in playerIds) {
      let player = Players.get(playerId);
      
      if ((game.myType == 1 || game.myType == 4)
          && player.type == 5 &&
          && player.team != myPlayer.team) {
        
        let distance = Tools.distance(player.lowResPos.x, player.lowResPos.y, myPlayer.pos.x, myPlayer.pos.y);
        if (distance < minimapRadius) {
          prowlerAlertDiv.show();
        }
      }
    }
  }
  function removeRedCircles() {
    for (let index in redCircles) {
      jt(index);
    }
  }
  function unclockedProwler(index) {
    let redCircle = redCircles[index];
    if (redCircle) {
      game.graphics.layers.groundobjects.removeChild(redCircle);
      redCircle.destroy();
      delete redCircles[index];
    }
  }
  let redCircles = {}
          , prowlerRadarEnabled = true
          , minimapRadius = 600
          , qt = 0
          , prowlerAlertDiv = $("<div id='prowlerAlert' style='position: absolute; top: 100px; left: calc(50% - 50px); width: 100px; height: 30px; background-color: red; opacity:0.6;display:none;'></div>");
