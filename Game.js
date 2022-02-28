
class Game
{
    constructor()
    {

    }

    getState()
    {
        var getStateRef = database.ref('gameState')
        getStateRef.on("value", function(data)
        {
             gameState = data.val()
        })
    }

    update(state)
    {
        database.ref('/').update({
            gameState: state
        })
    }

 /*   async start()
    {
        if(gameState = 0)
        {
            player = new Player();
            var playerCuntRef = await database.ref('playerCount').once("value");
            if(playerCount.ref.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }
        }
      }*/
    
    start()
    {
        form = new Form();
        form.display();

        player = new Player();
        playerCount = player.getCount();

        player1 = createSprite(Math.round(random(10, width - 10)),
            Math.round(random(10, height - 10)));
        player1.addImage("player1", player1_img);
        player1.scale = 0.1;

        player2 = createSprite(Math.round(random(10, width - 10)),
            Math.round(random(10, height - 10)));
        player2.addImage("player2", player2_img);
        player2.scale = 0.1;

        denner = createSprite(Math.round(random(10, width - 10)),
            Math.round(random(10, height - 10)));
        denner.addImage("denner", player3_img);
        denner.scale = 0.1;

        player4 = createSprite(Math.round(random(10, width - 10)),
            Math.round(random(10, height - 10)));
        player4.addImage("player4", player4_img);
        player4.scale = 0.14;
        
        tree = createSprite(Math.round(random(10, width - 10)),
            Math.round(random(10, height - 10)));
        tree.addImage("tree", tree_img);
        tree.scale = 0.19;

        playerArray = [player1,player2,denner,player4]
        
    }


    /*lock()
    {
        

        if(denner.touches(player))
        {
            player = locked;
        }
    }



    invisibilityCloak()
    {
        cloak = createSprite()
        cloak.addImage("innvisible", cloak_img);

        if(player.touches(cloak))
        {
            player.visible = false;
        }
    }

    
    
    timeleft()
    {
        setInterval(invisibilityCloak)

        var timeleft = 35;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 35 - timeleft;
        timeleft -= 1;
        }, 1000);
    }*/

    speed()
    {
        speed = createSprite(Math.round(random(10, width - 10)))
        speed.addImage("speed", speed_png);
    }

    timeleft()
    {
        setInterval(speed)

        var timeleft = 30;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 30 - timeleft;
        timeleft -= 1;
        }, 1000);
    }

    handleElements()
    {
        form.hide();
        form.title.position(40,50)
    }

    play()
    {
        this.handleElements();
        Player.getPlayerInfo();

        if(allPlayers !== undefined)
        {
            background("skyblue");
        }

        drawSprites();
    }
}