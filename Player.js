class Player
{
    constructor()
    {
       this.index = null;
       this.name = null;
       this.positionX = 0;
       this.positionY = 0;
    }

    addPlayer()
    {
        var playerIndex = "players/player" + this.index;
        
        if(this.index === 3 || this.index === 2 || this.index === 1 || this.index === 0)
        {
                this.positionX = Math.round(random(10, width - 10))
                this.positionY = Math.round(random(10, height - 10))
        }

        database.ref(playerIndex).set({
                name: this.name,
                positionX: this.positionX,
                positionY: this.positionY
        })
    }

    getCount()
    {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",data=>{
          playerCount = data.val();
        })
      }

    updateCount(count)
    {
        database.ref('/').update({
            playerCount: count
        })
    }

    static getPlayerInfo()
    {
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",data=>{
            playerInfo = data.val();
        })
    }


    handlePlayerControls()
    {
        if (keyIsDown(UP_ARROW) && player !== lock)
        {
                player.y - 10;
                player.update();
        }

        if (keyIsDown(DOWN_ARROW) && player !== lock)
        {
                player.y + 10;
                player.update();
        }

        if (keyIsDown(RIGHT_ARROW) && player !== lock)
        {
                player.x + 10;
                player.update();
        }

        if (keyIsDown(LEFT_ARROW) && player !== lock)
        {
                player.x - 10;
                player.update();
        }

        if (keyIsDown(UP_ARROW) && denner !== speed)
        {
                denner.y - 10;
                denner.update();
        }

        if (keyIsDown(DOWN_ARROW) && denner !== speed)
        {
                denner.y + 10;
                denner.update();
        }

        if (keyIsDown(RIGHT_ARROW) && denner !== speed)
        {
                denner.x + 10;
                denner.update();
        }

        if (keyIsDown(LEFT_ARROW) && denner !== speed)
        {
                denner.x - 10;
                denner.update();
        }

        if (keyIsDown(UP_ARROW) && denner === speed)
        {
                denner.y - 30;
                denner.update();
        }

        if (keyIsDown(DOWN_ARROW) && denner === speed)
        {
                denner.y + 30;
                denner.update();
        }

        if (keyIsDown(RIGHT_ARROW) && denner === speed)
        {
                denner.x + 30;
                denner.update();
        }

        if (keyIsDown(LEFT_ARROW) && denner === speed)
        {
                denner.x - 30;
                denner.update();
        }
    }
}