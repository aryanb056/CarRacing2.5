class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
//reading values from database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//updates amount of players in database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//updates player distance on all screens
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
// see where player is 
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
