var game = new Phaser.Game(240,400,Phaser.CANVAS,'game')
var upKey;
game.MyStates = {}
game.MyStates.state1 = {
    preload:function(){
        console.log('preload1')
    },
    create:function(){
        console.log('create1')
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    },
    update:function(){
        console.log('update1')
        if(upKey.isDown){
            console.log('upKey')
            game.state.start('state2')
        }
    }
}

game.MyStates.state2 = {
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

game.state.add('state1',game.MyStates.state1)
game.state.add('state2',game.MyStates.state2)
game.state.start('state1')