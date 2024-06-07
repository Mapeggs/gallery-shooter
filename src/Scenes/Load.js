class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload(){
        this.load.setPath("./assets/");

        // Load tilemap info
        this.load.image("tilemap_backgrounds", "monster_pack.png");
        this.load.image("tilemap_tiles", "tilemap_packed.png");
        this.load.tilemapTiledJSON("map", "shootertilemap.tmj");        
    }

    create(){
        this.scene.start("shooter");
    }

    update(){

    }
}
