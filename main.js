var game = new Phaser.Game(240,400,Phaser.CANVAS,'game')
var upKey;
game.MyStates = {}

game.MyStates.boot = function () {
    this.preload = function () {
        game.load.image('loading', 'assets/preloader.gif');
    };
    this.create = function () {
        game.state.start('preload');
    };
};
game.MyStates.preload = function () {
    this.preload = function () {
        var preloadSprite = game.add.sprite(10, game.height / 2, 'loading');
        game.load.setPreloadSprite(preloadSprite);
        game.load.image('background', 'assets/bg.jpg');
        game.load.image('copyright', 'assets/copyright.png');
        game.load.spritesheet('myplane', 'assets/myplane.png', 40, 40, 4);
        game.load.spritesheet('startbutton', 'assets/startbutton.png', 100, 40, 2);
        game.load.spritesheet('replaybutton', 'assets/replaybutton.png', 80, 30, 2);
        game.load.spritesheet('sharebutton', 'assets/sharebutton.png', 80, 30, 2);
        game.load.image('mybullet', 'assets/mybullet.png');
        game.load.image('bullet', 'assets/bullet.png');
        game.load.image('enemy1', 'assets/enemy1.png');
        game.load.image('enemy2', 'assets/enemy2.png');
        game.load.image('enemy3', 'assets/enemy3.png');
        game.load.spritesheet('explode1', 'assets/explode1.png', 20, 20, 3);
        game.load.spritesheet('explode2', 'assets/explode2.png', 30, 30, 3);
        game.load.spritesheet('explode3', 'assets/explode3.png', 50, 50, 3);
        game.load.spritesheet('myexplode', 'assets/myexplode.png', 40, 40, 3);
        game.load.image('award', 'assets/award.png');
        game.load.audio('normalback', 'assets/normalback.mp3');
        game.load.audio('playback', 'assets/playback.mp3');
        game.load.audio('fashe', 'assets/fashe.mp3');
        game.load.audio('crash1', 'assets/crash1.mp3');
        game.load.audio('crash2', 'assets/crash2.mp3');
        game.load.audio('crash3', 'assets/crash3.mp3');
        game.load.audio('ao', 'assets/ao.mp3');
        game.load.audio('pi', 'assets/pi.mp3');
        game.load.audio('deng', 'assets/deng.mp3');
    };
    this.create = function () {
        game.state.start('main');
    };
};
game.MyStates.main = function () {
    this.create = function () {
        // 背景
        var bg = game.add.tileSprite(0, 0, game.width, game.height, 'background');
        // 版权
        this.copyright = game.add.image(12, game.height - 16, 'copyright');
        // 我的飞机
        this.myplane = game.add.sprite(100, 100, 'myplane');
        this.myplane.animations.add('fly');
        this.myplane.animations.play('fly', 12, true);
        // 开始按钮
        this.startbutton = game.add.button(70, 200, 'startbutton', this.onStartClick, this, 1, 1, 0);
        // 背景音乐
        this.normalback = game.add.audio('normalback', 0.2, true);
        this.normalback.play();
    };
    this.onStartClick = function () {
        game.state.start('start');
        this.normalback.stop();
    };
};
game.MyStates.start = {
    preload:function(){
        console.log('preload1')
    },
    create:function(){
        console.log('进入主游戏场景')
    },
    update:function(){
        console.log('update1')
    }
}
game.MyStates.over = {
    preload: function () {
        console.log('preload2')
    },
    create: function () {
        console.log('create2')
    },
    update: function () {
        console.log('update2')
    }
}

game.state.add('boot',game.MyStates.boot)
game.state.add('preload',game.MyStates.preload)
game.state.add('main', game.MyStates.main)
game.state.add('start', game.MyStates.start)
game.state.add('over', game.MyStates.over)
game.state.start('boot')