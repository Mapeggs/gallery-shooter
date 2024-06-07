// Anthony Nguyen
// Created: 05/08/2024
// Phaser: 3.70.0
//
// gallery shooter

"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 800,
    height: 640,
    scene: [Shooter,Load]
}

const game = new Phaser.Game(config);