/// <reference path="phaser/phaser.d.ts"/>

class mainState extends Phaser.State {
    game: Phaser.Game;


    preload():void {
        super.preload()
        // carregar la foto
        this.game.load.image('player', 'assets/player.png');
        this.game.physics.startSystem(Phaser.Physics.ARCADE)
    }

    create():void {
        super.create();

        //canviar el color fons de pantalla
        this.game.stage.backgroundColor = "#4488AA";
        //afegir el monigote
        var player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
        player.anchor.set(0.5);
        player.tint = 0xff00ff;
    }

    update():void {
        super.update();
    }
}

class SimpleGame {
    game:Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

        this.game.state.add('main', mainState);
        this.game.state.start('main');
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
