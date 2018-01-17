var game = new Phaser.Game(240,400,Phaser.CANVAS,'game')
var upKey;
game.MyStates = {}
game.MyStates.state1 = {
    preload:function(){
        console.log('preload')
    },
    create:function(){
        console.log('create')
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP)
    },
    update:function(){
        console.log('update')
        if(upKey.isDown){
            console.log('upKey')
        }
    }
}

game.MyStates.state2 = {
    preload: function () {
        console.log('preload')
    },
    create: function () {
        console.log('create')
    },
    update: function () {
        console.log('update')
    }
}

game.state.add('state1',game.MyStates.state1)
game.state.add('state2',game.MyStates.state2)
game.state.start('state1')