class Game {

    constructor(){

    }

    getState() {    //reading gamestate from db
        var x=database.ref('gameState'); 
        x.on("value",(data)=> {     //which value are we concerned abut
            gameState=data.val();              //create a listener which will read from the db and call a function if there is a change in value
        })                                                    
    }            
    
    update(state) {    //writing the gamestate into db
        database.ref('/').update({     // '/' because gamestate is the parent node
            gameState:state   //JSON format
        })                                              
    }

    async start() {

        if(gameState===0) {
            player=new Player();
            player.getCount();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form=new Form();
            form.display();
        }

    }
    play(){
        form.hide();
        textSize(30);
        text("GAME START",120,100);
        Player.getPlayerInfo();

        if(allPlayers!=undefined){
            var texty=130;
            for(var plr in allPlayers){
                if(plr==="player"+player.index)
                fill("red");
                else
                fill("black")
            
               texty+=20;
               textSize(15);
               text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,texty)
            }

        }   
        if(keyIsDown(UP_ARROW) && player.index!=null){
            player.distance+=20
            player.update();
        }
    }
}