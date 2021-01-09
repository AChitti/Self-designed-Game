var hero;
var edges;

function preload() {

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    //edges = createEdgeSprites();
    hero = createSprite(displayWidth/2, displayHeight/2, 50, 50);
}

function draw(){
    background(0);

    if (keyDown("W")){
        hero.y = hero.y-10;
    }
    if (keyDown("D")){
        hero.x = hero.x+10;
    }
    if (keyDown("A")){
        hero.x = hero.x-10;
    }
    if (keyDown("S")){
        hero.y = hero.y+10;
    }
    edges = createEdgeSprites();
    if (hero.isTouching(edges[1])||hero.isTouching(edges[2])||hero.isTouching(edges[3])||hero.isTouching(edges[4])){
        hero.velocityX = 0;
        hero.velocityY = 0; 
    }

    drawSprites();
}