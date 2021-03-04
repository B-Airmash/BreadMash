function Gt(player) {
          if (prowlerRadarEnabled) { // this is set from SWAM.Settings.general.useProwlerRadar// we could set prowlerRadarEnabled to true so it's always on, this corresponds to 'Use Prowler Radar' checkbox in the starmash mod options panel, i think
            let redCircle = redCircles[player.id];
            
            if (!redCircle) { // create PIXI graphics object if it doesn't already exist for player
              redCircle = new PIXI.Graphics;
              redCircle.clear();
              
              redCircle.beginFill(0xFF0000, 0.125);
              redCircle.drawCircle(0, 0, minimapRadius); 
              redCircle.endFill();
              
              redCircles[player.id] = redCircle;
              game.graphics.layers.groundobjects.addChild(redCircle);
           }
           
           redCircle.position.set(player.lowResPos.x, player.lowResPos.y);
           redCircle.renderable = !(                      // only display the circle if these aren't true:
                player.removedFromMap                     //   player removed from map (maybe a starmash-only property? not sure)
             || (game.myType != 1 && game.myType != 4)    //   i am not a predator or tornado
             || (player.type != 5)                        //   player is not a prowler
             || player.team == Players.getMe().team       //   player is on my team
             || player.hidden                             //   player is hidden
             || player.render                             //   player is rendered (starmash-only property? again not sure)
             || player.stealthed                          //   player is stealthed (as a prowler)
            );
         }
       }
function Xt() {
  let playerIds = Players.getIDs();
  let myPlayer = Players.getMe();
  
  // this is a <div> with id 'prowlerAlert', it displays the red rectangle indicator when a prowler is near
  prowlerAlertDiv.hide(); 
  
  if (prowlerRadarEnabled) { // this is set from SWAM.Settings.general.useProwlerRadar
    for (var playerId in playerIds) { // iterate through all the player ids
      // get Player object for a player id
      let player = Players.get(playerId);
      
      if ((game.myType == 1 || game.myType == 4)   // if my ship is predator or tornado
          && player.type == 5 &&                   // and their player is a prowler
          && player.team != myPlayer.team)         // and their player is not on my team (for CTF); in FFA this just means, their player is not me (as player team is same as player id)
      {
        
        let distance = Tools.distance(player.lowResPos.x, player.lowResPos.y, myPlayer.pos.x, myPlayer.pos.y); // get distance from me
        if (distance < minimapRadius) { // minimapRadius is the radius of the red circle (600), this checks if a prowler is close by
          // show the 'prowlerAlert' indicator
          prowlerAlertDiv.show();
        }

        // draw the red circle at minimap position on main map
        Gt(player, myPlayer) // according to the definition of Gt(), the second argument is not used, so this is same as: Gt(player)
      }
    }
  }
  function Ht() {
    for (let index in redCircles) {
      jt(index);
    }
  }

  function jt(index) {
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
  This.updateSettings = function() {  
  "undefined" != prowlerRadarEnabled && (zt=prowlerRadarEnabled,!zt && (Kt.hide(),
  Ht()))
  }
