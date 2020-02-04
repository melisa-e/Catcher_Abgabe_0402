
/**
    *******************************************************    ENDSEITE ZEITABLAUF   *******************************************************
*/

/**********************************************************     GLOBALE VARIABLEN   **********************************************/

var help_text;
var btn_home, marc;                                         // Button um zum Menü zu kommen
var help_video;


class Help extends Phaser.Scene {

    constructor() {
        super({key: "Help"});
    }

    /**
     ***************************************    BENÖTIGTE BILDER   ***************************************
     Um die Bilder zu ersetzten bitte die Datei mit dem Pfad in die Funktion preload() einfügen
     Es ist darauf zu achten die Bilder in der Funktion create() passend zu skalieren
    */
    preload() {
        this.load.image('Weltall', 'assets/weltall.png');
        this.load.image('Home', 'assets/home.png');
        this.load.image('Marc', 'assets/marc.png');
        this.load.video('Help', 'assets/Help_Video.mp4')
       
    }

    create() {

        /**
         ***********************************    HINTERGRUND     ***********************************************
         Ist die Höhe des Bildes kleiner als die Höhe des Geräts, so wird die Höhe an die des Geräts angepasst
         Ist die Breite kleiner als die des Geräts, so wird die Breite des Bildes dem des Geräts angepasst
         Das Verhältnis des Bildes bleibt gleich, sodass sich das Bild nicht streckt
        **/
        background = this.add.image(0, 0, 'Weltall');   
        background.displayHeight = this.sys.game.config.height;
        background.scaleX = background.scaleY;
        background.y = game.config.height/2;
        background.x = game.config.width/2;
        this.cameras.main.setBackgroundColor('#FFFFFF')
        background.alpha = 0.5;

        title = this.add.text(0,0, "So funktioniert's!", {fontFamily: 'AhkioW05-Light', fontSize: '80px', fill: "#000000"});
        title.y = game.config.height * 0.1;
        title.x = (game.config.width/2) - (title.width/2);

        help_video = this.add.video(game.config.width/2, game.config.height * 0.45, 'Help');
        help_video.play(true);
        help_video.setScale(1.5);

        marc = this.add.image(0, 0, 'Marc');
        marc.y = game.config.height * 0.9;
        marc.x = (game.config.width/2);
        marc.setScale(0.3);

        /**
         ***********************************    HOMEBUTTON     ***********************************************
         Klickt man auf den Button, kommt man zu Hauptmenü
        **/
        btn_home = this.add.image(50, 50, 'Home');
        btn_home.setScale(0.15);
        btn_home.setInteractive();
        btn_home.on('pointerup', () => {
            this.scene.stop('Help');
            this.scene.start('Start');
        });

    }
}