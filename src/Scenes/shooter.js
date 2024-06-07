class Shooter extends Phaser.Scene {
    constructor() {
        super("shooter");
    }


    create() {
        // Add a tile map
        // https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html#tilemap__anchor
        // "map" refers to the key from load.tilemapTiledJSON
        // The map uses 16x16 pixel tiles, and is 40x40 tiles large 640x640 pixels
        this.map = this.add.tilemap("map", 16, 16, 40, 40);

        // Add a tileset to the map
        // First parameter: the name we gave to the tileset when it was added to Tiled
        // Second parameter: the key for the tilesheet (from this.load.image above)
        // https://photonstorm.github.io/phaser3-docs/Phaser.Tilemaps.Tilemap.html#addTilesetImage__anchor
        this.tileset = this.map.addTilesetImage("");

        // Create a tile map layer
        // First parameter: name of the layer from Tiled
        // https://newdocs.phaser.io/docs/3.54.0/Phaser.Tilemaps.Tilemap#createLayer



        this.CitybackgroundLayer.setScale(4.0);
        this.peoplemonsterinsideLayer.setScale(4.0);
        this.peoplemonsteroutsideLayer.setScale(4.0);


        document.getElementById('description').innerHTML = '<h2>Welcome to DREAM HOME</h2>'

    }

    update() {

    }
}