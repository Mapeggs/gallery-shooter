class GeneralShooter extends Phaser.Scene {
    constructor() {
        super("generalShooter");
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("general_shooter_tiles", "monsters-items-tilemap.png", "rouguelike-tilemap.png", "urban-tilemap.png");    // tile sheet   
        this.load.tilemapTiledJSON("map", "generalShooterMap.json");                   // Load JSON of tilemap
    }

    create() {
        // Add a tile map
        // https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#tilemap__anchor
        // "map" refers to the key from load.tilemapTiledJSON
        // The map uses 16x16 pixel tiles, and is 10x10 tiles large
        this.map = this.add.tilemap("map", 16, 16, 25, 20);

        // Add a tileset to the map
        // First parameter: the name we gave to the tileset when it was added to Tiled
        // Second parameter: the key for the tilesheet (from this.load.image above)
        // https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.Tilemap.html#addTilesetImage__anchor
        this.tileset = this.map.addTilesetImage("monster-items", "Rougue-city", "Urban-city", "general_shooter_tiles");

        // Create a tile map layer
        // First parameter: name of the layer from Tiled
        // https://newdocs.phaser.io/docs/3.54.0/Phaser.Tilemaps.Tilemap#createLayer
        this.peoplemonsterinsideLayer = this.map.createLayer("people-monster-inside", this.tileset, 0, 0);
        this.CitybackgroundLayer = this.map.createLayer("City-background", this.tileset, 0, 0);
        this.peoplemonsteroutsideLayer = this.map.createLayer("people-monster-outside", this.tileset, 0, 0);
        this.decorationLayer = this.map.createLayer("decoration", this.tileset, 0, 0);
        this.UXLayer = this.map.createLayer("UX-scoreboard", this.tileset, 0, 0);


        this.CitybackgroundLayer.setScale(4.0);
        this.peoplemonsterinsideLayer.setScale(4.0);
        this.peoplemonsteroutsideLayer.setScale(4.0);


        document.getElementById('description').innerHTML = '<h2>Welcome to DREAM HOME</h2>'

    }

    update() {

    }
}