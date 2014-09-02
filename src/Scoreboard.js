'use strict';
var Scoreboard = function(game) {
    var gameover;

    Phaser.Group.call(this, game);
    gameover = this.create(this.game.width / 2, 100, 'gameover');
    gameover.anchor.setTo(0.5, 0.5);

    this.scoreboard = this.create(this.game.width / 2, 200, 'scoreboard');
    this.scoreboard.anchor.setTo(0.5, 0.5);

    this.scoreText = this.game.add.bitmapText(this.scoreboard.width, 180, 'gameFont', '', 18);
    this.add(this.scoreText);

    this.bestScoreText = this.game.add.bitmapText(this.scoreboard.width, 230, 'gameFont', '', 18);
    this.add(this.bestScoreText);

    // add our start button with a callback
	this.startButton = this.game.add.button(this.game.width/2, 600, 'playButton', this.startClick, this, 2, 1, 0);
    this.startButton.anchor.setTo(0.5,0.5);

	this.add(this.startButton);
	/*this.ga = this.game.add.button(this.game.width/2, 360, 'ga', this.gotoGA, this);
	this.ga.anchor.setTo(0.5, 0);

	this.add(this.ga);
	 */
    this.y = this.game.height;
    this.x = 0;
};

Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

Scoreboard.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

Scoreboard.prototype.show = function(score) {
    var medal, bestScore;

    // Step 1
    this.scoreText.setText(score.toString());

    if(!!localStorage) {
        // Step 2
        bestScore = localStorage.getItem('bestScore');

        // Step 3
        if(!bestScore || bestScore < score) {
            bestScore = score;
            localStorage.setItem('bestScore', bestScore);
        }
    } else {
        // Fallback. LocalStorage isn't available
        bestScore = 'N/A';
    }

    // Step 4
    this.bestScoreText.setText(bestScore.toString());
    this.game.add.tween(this).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);
};

Scoreboard.prototype.startClick = function() {
    this.game.state.start('Game');
};
