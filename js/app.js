class enemy {
    constructor(x,y){
          // The following variables are used to determine the x and y axis and speed and image  of the enemy
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.speed = Math.random() * 6 + 2;
    }

    update(dt){
        // Update the enemy's position, and change the speed of enemy

        this.x += this.speed + dt;
        if(this.x > 505){
            this.x= 0;
        }
            // Checks for collisions between the player and the enemies
        if (player.x < this.x + 80 && player.x + 80 > this.x
             && player.y < this.y + 60 &&  60 + player.y > this.y) {
            player.x = 200;
            player.y = 380;
        };


    }
    //Renders the image of the enemy into the game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class playerClass {
    constructor(x,y){
          // The following variables are used to determine the x and y axis  and image  of the player
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-horn-girl.png';
        
    }
    update(dt){

    }
     //Renders the image of the plyera into the game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput(direction){
        switch(direction){
            // Enables user on left arrow key to move left on the x axis by 101
            case'left':
            if(this.x > -2) {this.x -= 101}
            break;
             // Enables user on up arrow key to move up on the x axis by 83
            case'up':
            if(this.y > -24){this.y -= 83 } 
                // Once the player reaches the top of the page, the water, the player is
                //  reset to the starting position 
            if (this.y < 0){ 
                player.x = 200;
                player.y = 380;}
            break;
             // Enables user on right arrow key to move right on the x axis by 101
            case'right':
            if(this.x < 402) {this.x += 101}
            break;
             // Enables user on down arrow key to move down on the x axis by 83
            case'down':
            if(this.y < 380){this.y += 83}
            break;
        }
    }
}
// Now instantiate your objects.
// Location of the 3 enemies on the x axis and y axis located on the stone road
let enemyNum1 = new enemy(100, 61);
let enemyNum2 = new enemy(100, 145);
let enemyNum3 = new enemy(100, 230);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemyNum1, enemyNum2, enemyNum3];
// Place the player object in a variable called player
// and the location of the player is located at x=200, y=380
let player = new playerClass(200, 380);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


