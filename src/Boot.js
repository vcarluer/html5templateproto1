BasicGame = {

    /* Here we've just got some global level vars that persist regardless of State swaps */
    score: 0,

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    music: null,

    /* Your game can check BasicGame.orientated in internal loops to know if it should pause or not */
    orientated: false

};

BasicGame.Boot = function (game) {
};

BasicGame.Boot.prototype = {

    preload: function () {
        this.game.stage.backgroundColor = "#fff";
        //  Here we load the assets required for our preloader (in this case a background and a loading bar)
        this.load.image('ga', 'images/ga1024.png');
        this.load.image('sponsor', 'images/sponsor1024.png');
        this.load.audio('gaHeartbeat', ['audio/heartbeat.mp3', 'audio/heartbeat.ogg']);

        this.load.image('preloaderBackground', 'images/preloader_background.png');
        this.load.image('preloaderBar', 'images/preloadr_bar.png');

    },

    create: function () {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

	    if (this.game.device.desktop)
        {
            BasicGame.orientated = true;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 480;
            this.scale.minHeight = 260;
            this.scale.maxWidth = 1024;
            this.scale.maxHeight = 768;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
        }
        else
        {
            BasicGame.orientated = true;
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.minWidth = 480;
            this.scale.minHeight = 260;
            this.scale.maxWidth = 1024;
            this.scale.maxHeight = 768;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.hasResized.add(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
        }

        this.state.start('CheckOrientation');
    },

    gameResized: function (width, height) {

        //  This could be handy if you need to do any extra processing if the game resizes.
        //  A resize could happen if for example swapping orientation on a device.

    },

    enterIncorrectOrientation: function () {

        BasicGame.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        BasicGame.orientated = true;

        document.getElementById('orientation').style.display = 'none';
        this.scale.setScreenSize(true);

    }

};