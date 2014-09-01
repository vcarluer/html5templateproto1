
BasicGame.GamersAssociate = function (game) {

};

BasicGame.GamersAssociate.prototype = {

	create: function () {
		this.add.sprite(0, 0, 'ga');
        var self = this;
        setTimeout(function() {
                self.state.start('Sponsor');
            },
            2000);
	},

	update: function () {
	}

};
