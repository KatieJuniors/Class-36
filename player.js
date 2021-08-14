class Player {

    constructor() {
      this.index=null;
      this.distance=0;
      this.name=null;
    }

    getCount(){ //reading playercount from db
        var x=database.ref('playerCount');
        x.on("value",(data)=>{
            playerCount=data.val();
        })
    }
    update() {    //writing into db
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    updateCount(playerCount) {   //writing into db
        database.ref('/').update({              //JSON format
                playerCount:playerCount
            })                    
    }

    static getPlayerInfo(){
        var x=database.ref('players');
        x.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}