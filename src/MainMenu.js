
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {
        var self = this;

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
        this.game.soundMute = false;
		this.music.play();

        this.background = this.add.sprite(0, 0, 'backgroundMenu');
        this.title = this.add.sprite(this.game.width / 2, this.game.height / 3, 'title');
        this.title.anchor.setTo(0.5, 0.5);
        var soundX = soundY = 25
        this.soundButonOn = this.add.button(soundX, soundY, 'soundOn', function() { self.switchSound(); });
        this.soundButonOff = this.add.button(soundX, soundY, 'soundOff', function() { self.switchSound(); });
        this.soundButonOff.visible = false;

		this.playButton = this.add.button(400, 600, 'playButton', this.startGame, this, 2, 1, 0);
	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

    switchSound: function () {
        this.game.soundMute = !this.game.soundMute;
        if (!this.game.soundMute) {
            this.music.resume();
        } else {
            this.music.pause();
        }

        this.soundButonOn.visible = !this.game.soundMute;
        this.soundButonOff.visible = this.game.soundMute;
    },

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

		/*this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.startFullScreen();*/

	}

};
