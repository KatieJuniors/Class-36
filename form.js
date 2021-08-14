class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Play");
        this.greeting=createElement('h3')

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }
    
    display(){
        var title=createElement('h2');
        title.html("CAR RACING GAME");
        title.position(130,0);

        
        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value(); //value entered in the input box gets stored in var name

            playerCount+=1 // it will increase by 1 and get stored in playerCount
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);
            this.greeting.position(130,160);

        })
    }
}