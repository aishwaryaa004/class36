var canvans
var gameState=0
var playerCount
var database
var form,player,game

function setup(){
canvans= createCanvas(400,400)

database = firebase.database()

game = new Game()
game.getState()
game.start()

}

function draw(){

}