/* For Nintendo Switch: Asteroids Author Jay Griggs 2018*/
var sdl = require("sdl");
var game = require("game");
var input = require("input");

var p1Score = Number("0000");
var p1Level = Number("001");
var p1Lives = Number("03");
var p1Bombs = Number("1");

sdl.setFPS(80);
sdl.openAudio(__dirname + "/Audio.mp3");

// Text
// This will print the blank stats.
var textStats = new sdl.Text("Score", 40, "   Level", 40, "   Lives", 40 );
textStats.x(395);
textStats.y(20);
textStats.depth(1);
textStats.color({ R: 255, G: 255, B: 255, A: 255 });
textStats.show();

// This will print other fun words.
var text2life = new sdl.Text("OH NO!", 50);
text2life.x(560);
text2life.y(100);
text2life.depth(1);
text2life.color({ R: 255, G: 255, B: 255, A: 255 });

var text1life = new sdl.Text("OH NO YO!!!", 70);
text1life.x(442);
text1life.y(120);
text1life.depth(1);
text1life.color({ R: 255, G: 255, B: 255, A: 255 });

var textGameOver = new sdl.Text("Game Over", 80);
textGameOver.x(437);
textGameOver.y(300);
textGameOver.depth(1);
textGameOver.color({ R: 255, G: 0, B: 0, A: 255 });

var textPaused = new sdl.Text("PAUSED", 80);
textPaused.x(485);
textPaused.y(300);
textPaused.depth(1);
textPaused.color({ R: 255, G: 255, B: 255, A: 255 });

var textIncoming = new sdl.Text("INCOMING YO!!!", 60);
textIncoming.x(440);
textIncoming.y(190);
textIncoming.depth(1);
textIncoming.color({ R: 255, G: 255, B: 0, A: 255 });

var textBigOne = new sdl.Text("BIG ONE YO!!!", 60);
textBigOne.x(442);
textBigOne.y(190);
textBigOne.depth(1);
textBigOne.color({ R: 255, G: 37, B: 0, A: 255 });

var textSaucer = new sdl.Text("UFOS YO!!!", 60);
textSaucer.x(490);
textSaucer.y(190);
textSaucer.depth(1);
textSaucer.color({ R: 76, G: 230, B: 101, A: 255 });

var textMother = new sdl.Text("MOTHERSHIP YO!!!", 60);
textMother.x(360);
textMother.y(190);
textMother.depth(1);
textMother.color({ R: 39, G: 179, B: 61, A: 255 });

var textMeteors = new sdl.Text("METEORS YO!!!", 60);
textMeteors.x(415);
textMeteors.y(190);
textMeteors.depth(1);
textMeteors.color({ R: 253, G: 111, B: 0, A: 255 });

var textRain = new sdl.Text("RAIN YO!!!", 60);
textRain.x(490);
textRain.y(190);
textRain.depth(1);
textRain.color({ R: 20, G: 45, B: 152, A: 255 });

var textHalf = new sdl.Text("HALFWAY YO!!!", 60);
textHalf.x(410);
textHalf.y(190);
textHalf.depth(1);
textHalf.color({ R: 74, G: 255, B: 244, A: 255 });

var textGoodLuck = new sdl.Text("Good Luck", 80);
textGoodLuck.x(437);
textGoodLuck.y(300);
textGoodLuck.depth(1);
textGoodLuck.color({ R: 74, G: 255, B: 244, A: 255 });

var textWonGame = new sdl.Text("YOU SURVIVED YO!", 80);
textWonGame.x(437);
textWonGame.y(300);
textWonGame.depth(1);
textWonGame.color({ R: 74, G: 255, B: 244, A: 255 });

var textrand1 = new sdl.Text("I Pity The Foo Who Dies After He Dead", 50);
textrand1.x(215);
textrand1.y(430);
textrand1.depth(1);
textrand1.color({ R: 255, G: 0, B: 0, A: 255 });

var textrand2 = new sdl.Text("Chuck Norris Would Have Won Twice By Now", 50);
textrand2.x(135);
textrand2.y(430);
textrand2.depth(1);
textrand2.color({ R: 255, G: 0, B: 0, A: 255 });

var textrand3 = new sdl.Text("Step 1 Avoid Asteroids", 50);
textrand3.x(385);
textrand3.y(430);
textrand3.depth(1);
textrand3.color({ R: 255, G: 0, B: 0, A: 255 });

var textrand4 = new sdl.Text("Lives Mean More Than Death", 50);
textrand4.x(310);
textrand4.y(430);
textrand4.depth(1);
textrand4.color({ R: 255, G: 0, B: 0, A: 255 });
//bombs always kill purple and green
//

function scoreUp()
{
if (p1Lives <= 0) {p1Score--;}
else{p1Score++;}
if (p1Score >= 10 && p1Score <= 99 && p1Score % 10 === 0 ) { p1Level++; moonYLocation = moonYLocation + 2; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 100 && p1Score <= 249 && (p1Score - 100) % 15 === 0 ) { p1Level++; moonYLocation = moonYLocation + 2; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 250 && p1Score <= 449 && (p1Score - 250) % 20 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 450 && p1Score <= 699 && (p1Score - 450) % 25 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 700 && p1Score <= 999 && (p1Score - 700) % 30 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 1000 && p1Score <= 1699 && (p1Score - 1000) % 35 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 1700 && p1Score <= 2099 && (p1Score - 1700) % 40 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 2100 && p1Score <= 2549 && (p1Score - 2100) % 45 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
else if (p1Score >= 2550 && p1Score <= 2999 && (p1Score - 2550) % 50 === 0 ) { p1Level++; moonYLocation = moonYLocation + 3; moon.y(moonYLocation); moon.show();}
//remove Intro
if (p1Score > 0) { intro.hide(); }
//renew One Up Life
if (p1Level >=10 && p1Level <= 96 && (p1Level - 2) % 5 === 0) { renewOneUpLife(); }
//renew Bomb
if (p1Level >=6 && p1Level <= 99 && (p1Level - 2) % 7 === 0) { renewBomb(); }
//alien Wave Reset
if (p1Score == 365){
resetUFO();
}



//change moon
if (p1Score == 2800 ){ moon.hide(); moon = new sdl.Object(__dirname + "/moon2.png"); moon.x(1000); moon.y(moonYLocation); moon.show(); }

if (p1Score == 3200){
sdl.stopAudio();
sdl.openAudio(__dirname + "/AudioFinal.mp3");
sdl.playAudio(true); // Play looping
}


if (p1Score == 4000){
wonGame();
}

}

//change the ship 
function changeShip() 
{
if (p1Lives == 10)
{ 
ship.hide();
ship = new sdl.Object(__dirname + "/shipl10.png");
ship.x(shipLocation);
ship.y(670);
ship.show();
powerShip = true;
if (powerShip == true) {
if(createShot1.called == true){	
shot1.hide();
shot1 = new sdl.Object(__dirname + '/shoot2.png');
shot1.show();
}
else {
shot1 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot2.called == true){	
shot2.hide();
shot2 = new sdl.Object(__dirname + '/shoot2.png');
shot2.show();
}
else {
shot2 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot3.called == true){
shot3.hide();
shot3 = new sdl.Object(__dirname + '/shoot2.png');
shot3.show();
}
else {	
shot3 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot4.called == true){
shot4.hide();
shot4 = new sdl.Object(__dirname + '/shoot2.png');
shot4.show();
}
else {	
shot4 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot5.called == true){
shot5.hide();
shot5 = new sdl.Object(__dirname + '/shoot2.png');
shot5.show();
}
else {	
shot5 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot6.called == true){
shot6.hide();
shot6 = new sdl.Object(__dirname + '/shoot2.png');
shot6.show();
}
else {	
shot6 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot7.called == true){
shot7.hide();
shot7 = new sdl.Object(__dirname + '/shoot2.png');
shot7.show();
}
else {	
shot7 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot8.called == true){
shot8.hide();
shot8 = new sdl.Object(__dirname + '/shoot2.png');
shot8.show();
}
else {	
shot8 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot9.called == true){
shot9.hide();
shot9 = new sdl.Object(__dirname + '/shoot2.png');
shot9.show();
}
else {	
shot9 = new sdl.Object(__dirname + '/shoot2.png');	
}
if(createShot10.called == true){
shot10.hide();
shot10 = new sdl.Object(__dirname + '/shoot2.png');
shot10.show();
}
else {	
shot10 = new sdl.Object(__dirname + '/shoot2.png');	
}
}
} 		
if (p1Lives == 9)
{ 
ship.hide();
ship = new sdl.Object(__dirname + "/ship.png");
ship.x(shipLocation);
ship.y(670);
ship.show();
powerShip = false;
if (powerShip == false) {
if(createShot1.called == true){	
shot1.hide();
shot1 = new sdl.Object(__dirname + '/shoot.png');
shot1.show();
}
else {
shot1 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot2.called == true){	
shot2.hide();
shot2 = new sdl.Object(__dirname + '/shoot.png');
shot2.show();
}
else {
shot2 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot3.called == true){
shot3.hide();
shot3 = new sdl.Object(__dirname + '/shoot.png');
shot3.show();
}
else {	
shot3 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot4.called == true){
shot4.hide();
shot4 = new sdl.Object(__dirname + '/shoot.png');
shot4.show();
}
else {	
shot4 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot5.called == true){
shot5.hide();
shot5 = new sdl.Object(__dirname + '/shoot.png');
shot5.show();
}
else {	
shot5 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot6.called == true){
shot6.hide();
shot6 = new sdl.Object(__dirname + '/shoot.png');
shot6.show();
}
else {	
shot6 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot7.called == true){
shot7.hide();
shot7 = new sdl.Object(__dirname + '/shoot.png');
shot7.show();
}
else {	
shot7 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot8.called == true){
shot8.hide();
shot8 = new sdl.Object(__dirname + '/shoot.png');
shot8.show();
}
else {	
shot8 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot9.called == true){
shot9.hide();
shot9 = new sdl.Object(__dirname + '/shoot.png');
shot9.show();
}
else {	
shot9 = new sdl.Object(__dirname + '/shoot.png');	
}
if(createShot10.called == true){
shot10.hide();
shot10 = new sdl.Object(__dirname + '/shoot.png');
shot10.show();
}
else {	
shot10 = new sdl.Object(__dirname + '/shoot.png');	
}
}
} 		
if (p1Lives >= 3 && p1Lives <= 8)
{ 
text2life.hide();
ship.hide();
ship = new sdl.Object(__dirname + "/ship.png");
ship.x(shipLocation);
ship.y(670);
ship.show();
} 	
if (p1Lives == 2)
{ 
text1life.hide();	
text2life.show();
ship.hide();
ship = new sdl.Object(__dirname + "/shipl2.png");
ship.x(shipLocation);
ship.y(670);
ship.show();
} 
if (p1Lives == 1) {
ship.hide();
ship = new sdl.Object(__dirname + "/shipl1.png");
ship.x(shipLocation);
ship.y(670);
ship.show();
text2life.hide();
text1life.show();
}
if (p1Lives === 0) {
ship = new sdl.Object(__dirname + "/shipDestroyed.png");
text1life.hide();
textGameOver.show();
}
if (p1Lives == -2){
if (randomWords == 1)
{textrand1.show();}
else if (randomWords == 2)
{textrand2.show(); }
else if (randomWords == 3)
{textrand3.show(); }
else if (randomWords == 4)
{textrand4.show(); }

 //other random hints, jokes
}
//resets everything
if (p1Lives == -3){
textGameOver.hide();
p1Score = 0;
p1Level = 1;
p1Lives = 3;
p1Bombs = 1;
textrand1.hide();
textrand2.hide();
textrand3.hide();
textrand4.hide();
randomWords = randRange(1, 4);
intro.show();
changeBombs();
changeShip();
resetShot1();
resetShot2();
resetShot3();
resetShot4();
resetShot5();
resetShot6();
resetShot7();
resetShot8();
resetShot9();
resetShot10();
alienShot1.hide();
alienShot2.hide();
alienShot3.hide();
alienShot4.hide();
alienShot5.hide();
alienShot6.hide();
alienShot7.hide();
alienShot8.hide();
alienShot9.hide();
alienShot10.hide();
alienShot11.hide();
alienShot12.hide();
alienShot13.hide();
alienShot14.hide();
alienShot15.hide();
asteroid8.hide();
asteroid9.hide();
asteroid10.hide();
asteroid11.hide();
asteroid12.hide();
asteroid13.hide();
asteroid14.hide();
asteroid15.hide();
asteroid16.hide();
asteroid17.hide();
asteroid18.hide();
asteroid19.hide();
asteroid20.hide();
asteroid21.hide();
asteroid22.hide();
asteroid23.hide();
asteroid24.hide();
asteroid25.hide();
asteroid26.hide();
asteroid27.hide();
asteroid28.hide();
asteroid29.hide();
asteroid30.hide();
asteroid31.hide();
asteroid32.hide();
asteroid33.hide();
asteroid34.hide();
resetAsteroidb1();
resetAsteroidb2();
resetAsteroidb3();
resetAsteroidb4();
resetAsteroidb5();
resetAsteroidb6();
resetAsteroidc1();
resetAsteroidc2();
asteroidb1.hide();
asteroidb2.hide();
asteroidb3.hide();
asteroidb4.hide();
asteroidb5.hide();
asteroidb6.hide();
asteroidc1.hide();
asteroidc2.hide();
resetUFO();
resetUFO2();
resetUFO3();
UFO.hide();
UFO2.hide();
UFO3.hide();
resetMeteor1();
resetMeteor2();
resetMeteor3();
meteor1.hide();
meteor2.hide();
meteor3.hide();
moonYLocation = Number("300");
moon.y(moonYLocation);
moon.show();
sdl.stopAudio();
sdl.openAudio(__dirname + "/Audio.mp3");
sdl.playAudio(true); // Play looping
}

}

function wonGame()
{
textWonGame.show();

}

function destroyShip()
{
ship.hide();
p1Lives--;
changeShip();
renewAsteroids = true;
shipLocation = Number("605");
ship.x(shipLocation);
ship.y(670);
ship.show();
}



function changeBombs()
{

if (p1Bombs == 0)
{ 
bombNumber.hide();
bombNumber = new sdl.Object(__dirname + "/bombs0.png");
bombNumber.x(1140);
bombNumber.y(28);
bombNumber.show();
} 

if (p1Bombs == 1)
{ 
bombNumber.hide();
bombNumber = new sdl.Object(__dirname + "/bombs1.png");
bombNumber.x(1140);
bombNumber.y(28);
bombNumber.show();
} 

if (p1Bombs == 2)
{ 
bombNumber.hide();
bombNumber = new sdl.Object(__dirname + "/bombs2.png");
bombNumber.x(1140);
bombNumber.y(28);
bombNumber.show();
} 

if (p1Bombs == 3)
{ 
bombNumber.hide();
bombNumber = new sdl.Object(__dirname + "/bombs3.png");
bombNumber.x(1140);
bombNumber.y(28);
bombNumber.show();
} 	

}

function renewOneUpLife()
{
oneUpLifeYLocation = Number("100");
oneUpLifeXLocation = randRange(1, 1250);
oneUpLifeRandomSpeed = randRange(1, 8);	
canGetLife = true;
return oneUpLifeXLocation;
}

function moveOneUpLife()
{
oneUpLife.y(oneUpLifeYLocation);
oneUpLife.x(oneUpLifeXLocation);  
oneUpLife.show();
if ( shipLocation >= oneUpLifeXLocation - 28 && shipLocation <= oneUpLifeXLocation + 30 && oneUpLifeYLocation > 664 && canGetLife === true && pauseGame == false)
{
p1Lives++;
changeShip();
oneUpLife.hide();
canGetLife = false;
}
else if (oneUpLifeYLocation < 670 && pauseGame == false) {
oneUpLifeYLocation = oneUpLifeYLocation + Number(oneUpLifeRandomSpeed);
}
else if (canGetLife === false) {
oneUpLife.hide();
} 
else if (oneUpLifeYLocation >= 670) {
oneUpLife.hide();
canGetLife = false;
} 
}

function renewBomb()
{
bombYLocation = Number("100");
bombXLocation = randRange(1, 1250);
bombRandomSpeed = randRange(1, 8);	
canGetBomb = true;
return bombXLocation;
}

function moveBomb()
{
bomb.y(bombYLocation);
bomb.x(bombXLocation);  
bomb.show();
if ( shipLocation >= bombXLocation - 28 && shipLocation <= bombXLocation + 30 && bombYLocation > 664 && canGetBomb === true && pauseGame == false)
{
p1Bombs++;
if (p1Bombs > 3) {p1Bombs = 3;}	
changeBombs();
bomb.hide();
canGetBomb = false;
}
else if (bombYLocation < 670 && pauseGame == false) {
bombYLocation = bombYLocation + Number(bombRandomSpeed);
}
else if (canGetBomb === false) {
bomb.hide();
} 
else if (bombYLocation >= 670) {
bomb.hide();
canGetBomb = false;
} 
}


//Meteor




function resetMeteor1()
{
meteor1randomSpeed = randRange(6, 18);
meteor1EndLocation = randRange(1, 1250);
meteor1XLocation = meteor1EndLocation + 600;
meteor1YLocation = 15;
meteor1XLocation;
meteor1Alive = true;
return meteor1XLocation;
} 


function moveMeteor1()
{
if (meteor1Alive == true){
meteor1.x(meteor1XLocation);
meteor1.y(meteor1YLocation);
meteor1.show();
if (shipLocation >= meteor1XLocation - 25 && shipLocation <= meteor1XLocation + 30 && meteor1YLocation > 580 && pauseGame == false)
{
destroyShip();
}
if (meteor1YLocation < 615 && pauseGame == false) {
meteor1XLocation = meteor1XLocation - Number(meteor1randomSpeed);
meteor1YLocation = meteor1YLocation + Number(meteor1randomSpeed);
}
if (meteor1YLocation >= 615)  {
meteor1.hide();
meteor1Alive = false;
}
}
}




function resetMeteor2()
{
meteor2randomSpeed = randRange(6, 18);
meteor2EndLocation = randRange(1, 1250);
meteor2XLocation = meteor2EndLocation + 600;
meteor2YLocation = 15;
meteor2XLocation;
meteor2Alive = true;
return meteor2XLocation;
} 


function moveMeteor2()
{
if (meteor2Alive == true){
meteor2.x(meteor2XLocation);
meteor2.y(meteor2YLocation);
meteor2.show();
if (shipLocation >= meteor2XLocation - 25 && shipLocation <= meteor2XLocation + 30 && meteor2YLocation > 580 && pauseGame == false)
{
destroyShip();
}
if (meteor2YLocation < 615 && pauseGame == false) {
meteor2XLocation = meteor2XLocation - Number(meteor2randomSpeed);
meteor2YLocation = meteor2YLocation + Number(meteor2randomSpeed);
}
if (meteor2YLocation >= 615)  {
meteor2.hide();
meteor2Alive = false;
}
}
}



function resetMeteor3()
{
meteor3randomSpeed = randRange(6, 18);
meteor3EndLocation = randRange(1, 1250);
meteor3XLocation = meteor2EndLocation - 600;
meteor3YLocation = 15;
meteor3XLocation;
meteor3Alive = true;
return meteor3XLocation;
} 


function moveMeteor3()
{
if (meteor3Alive == true){
meteor3.x(meteor3XLocation);
meteor3.y(meteor3YLocation);
meteor3.show();
if (shipLocation >= meteor3XLocation + 47 && shipLocation <= meteor3XLocation + 106 && meteor3YLocation > 580 && pauseGame == false)
{
destroyShip();
}
if (meteor3YLocation < 615 && pauseGame == false) {
meteor3XLocation = meteor3XLocation + Number(meteor3randomSpeed);
meteor3YLocation = meteor3YLocation + Number(meteor3randomSpeed);
}
if (meteor3YLocation >= 615){
meteor3.hide();
meteor3Alive = false;
}
}
}


//UFO
alienShot1 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot2 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot3 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot4 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot5 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot6 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot7 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot8 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot9 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot10 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot11 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot12 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot13 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot14 = new sdl.Object(__dirname + "/alienShoot.png");
alienShot15 = new sdl.Object(__dirname + "/alienShoot.png");

function createUFO()
{
UFOrandomSpeed = randRange(3, 10);
UFO = new sdl.Object(__dirname + "/ufo.png");
UFO.depth(1);
UFOXLocation = Number("1250");
UFORandomShot1 = randRange(1, 1250);
UFORandomShot2 = randRange(1, 1250);
UFORandomShot3 = randRange(1, 1250);
UFORandomShot4 = randRange(1, 1250);
UFORandomShot5 = randRange(1, 1250);
UFOYLocation = randRange(100, 220);
alienShotYLocation1 = UFOYLocation + 21;
alienShotYLocation2 = UFOYLocation + 21;
alienShotYLocation3 = UFOYLocation + 21;
alienShotYLocation4 = UFOYLocation + 21;
alienShotYLocation5 = UFOYLocation + 21;
UFOAlive = true;
return UFOXLocation;
} 

function resetUFO()
{
UFOrandomSpeed = randRange(3, 10);
UFOXLocation = Number("1250");
UFORandomShot1 = randRange(1, 1250);
UFORandomShot2 = randRange(1, 1250);
UFORandomShot3 = randRange(1, 1250);
UFORandomShot4 = randRange(1, 1250);
UFORandomShot5 = randRange(1, 1250);
UFOYLocation = randRange(100, 220);
createAlienShot1.called = false;
createAlienShot2.called = false;
createAlienShot3.called = false;
createAlienShot4.called = false;
createAlienShot5.called = false;
alienShotYLocation1 = UFOYLocation + 30;
alienShotYLocation2 = UFOYLocation + 30;
alienShotYLocation3 = UFOYLocation + 30;
alienShotYLocation4 = UFOYLocation + 30;
alienShotYLocation5 = UFOYLocation + 30;
UFOAlive = true;
return UFOXLocation;
} 

function moveUFO()
{
if (UFOAlive == true){
UFO.x(UFOXLocation);
UFO.y(UFOYLocation);
UFO.show();

if ( UFOXLocation <= UFORandomShot1 ) { createAlienShot1(); }
if ( UFOXLocation <= UFORandomShot2 ) { createAlienShot2(); }
if ( UFOXLocation <= UFORandomShot3 ) { createAlienShot3(); }
if ( UFOXLocation <= UFORandomShot4 ) { createAlienShot4(); }
if ( UFOXLocation <= UFORandomShot5 ) { createAlienShot5(); } 
 
if (UFOXLocation > 0 && pauseGame == false) {
UFOXLocation = UFOXLocation - Number(UFOrandomSpeed);
}
if (UFOXLocation <= 0 )  {
UFO.hide();
}
else if (shotYLocation1 >= UFOYLocation + 6 && shotYLocation1 <= UFOYLocation + 14 && shotXLocation1 >= UFOXLocation + 2 
&& shotXLocation1 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot1(); scoreUp(); UFOAlive = false; }
else if (shotYLocation2 >= UFOYLocation + 6 && shotYLocation2 <= UFOYLocation + 14 && shotXLocation2 >= UFOXLocation + 2 
&& shotXLocation2 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot2(); scoreUp(); UFOAlive = false; }
else if (shotYLocation3 >= UFOYLocation + 6 && shotYLocation3 <= UFOYLocation + 14 && shotXLocation3 >= UFOXLocation + 2
&& shotXLocation3 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot3(); scoreUp(); UFOAlive = false; }
else if (shotYLocation4 >= UFOYLocation + 6 && shotYLocation4 <= UFOYLocation + 14 && shotXLocation4 >= UFOXLocation + 2 
&& shotXLocation4 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot4(); scoreUp(); UFOAlive = false; }
else if (shotYLocation5 >= UFOYLocation + 6 && shotYLocation5 <= UFOYLocation + 14 && shotXLocation5 >= UFOXLocation + 2
&& shotXLocation5 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot5(); scoreUp(); UFOAlive = false; }
else if (shotYLocation6 >= UFOYLocation + 6 && shotYLocation6 <= UFOYLocation + 14 && shotXLocation6 >= UFOXLocation + 2
&& shotXLocation6 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot6(); scoreUp(); UFOAlive = false; }
else if (shotYLocation7 >= UFOYLocation + 6 && shotYLocation7 <= UFOYLocation + 14 && shotXLocation7 >= UFOXLocation + 2
&& shotXLocation7 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot7(); scoreUp(); UFOAlive = false; }
else if (shotYLocation8 >= UFOYLocation + 6 && shotYLocation8 <= UFOYLocation + 14 && shotXLocation8 >= UFOXLocation + 2
&& shotXLocation8 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot8(); scoreUp(); UFOAlive = false; }
else if (shotYLocation9 >= UFOYLocation + 6 && shotYLocation9 <= UFOYLocation + 14 && shotXLocation9 >= UFOXLocation + 2
&& shotXLocation9 <= UFOXLocation + 28 )
{ UFO.hide(); resetShot9(); scoreUp(); UFOAlive = false; }
else if (shotYLocation10 >= UFOYLocation + 6 && shotYLocation10 <= UFOYLocation + 14 && shotXLocation10 >= UFOXLocation + 2
&& shotXLocation10 <= UFOXLocation + 28)
{ UFO.hide(); resetShot10(); scoreUp(); UFOAlive = false; }
}
}

function createAlienShot1(){ createAlienShot1.called = true; }
function createAlienShot2(){ createAlienShot2.called = true; }
function createAlienShot3(){ createAlienShot3.called = true; }
function createAlienShot4(){ createAlienShot4.called = true; }
function createAlienShot5(){ createAlienShot5.called = true; }

function createUFO2()
{
UFO2randomSpeed = randRange(3, 12);
UFO2 = new sdl.Object(__dirname + "/ufo2.png");
UFO2.depth(1);
UFO2XLocation = Number("1250");
UFO2RandomShot1 = randRange(1, 1250);
UFO2RandomShot2 = randRange(1, 1250);
UFO2RandomShot3 = randRange(1, 1250);
UFO2RandomShot4 = randRange(1, 1250);
UFO2RandomShot5 = randRange(1, 1250);
UFO2YLocation = randRange(100, 220);
alienShotYLocation6 = UFO2YLocation + 30;
alienShotYLocation7 = UFO2YLocation + 30;
alienShotYLocation8 = UFO2YLocation + 30;
alienShotYLocation9 = UFO2YLocation + 30;
alienShotYLocation10 = UFO2YLocation + 30;
UFO2Alive = true;
return UFO2XLocation;
} 

function resetUFO2()
{
UFO2randomSpeed = randRange(3, 12);
UFO2XLocation = Number("1250");
UFO2RandomShot1 = randRange(1, 1250);
UFO2RandomShot2 = randRange(1, 1250);
UFO2RandomShot3 = randRange(1, 1250);
UFO2RandomShot4 = randRange(1, 1250);
UFO2RandomShot5 = randRange(1, 1250);
UFO2YLocation = randRange(100, 220);
createAlienShot6.called = false;
createAlienShot7.called = false;
createAlienShot8.called = false;
createAlienShot9.called = false;
createAlienShot10.called = false;
alienShotYLocation6 = UFO2YLocation + 30;
alienShotYLocation7 = UFO2YLocation + 30;
alienShotYLocation8 = UFO2YLocation + 30;
alienShotYLocation9 = UFO2YLocation + 30;
alienShotYLocation10 = UFO2YLocation + 30;
UFO2Alive = true;
return UFO2XLocation;
} 


function moveUFO2()
{
if (UFO2Alive == true){
UFO2.x(UFO2XLocation);
UFO2.y(UFO2YLocation);
UFO2.show();
if ( UFO2XLocation <= UFO2RandomShot1 ) { createAlienShot6(); }
if ( UFO2XLocation <= UFO2RandomShot2 ) { createAlienShot7(); }
if ( UFO2XLocation <= UFO2RandomShot3 ) { createAlienShot8(); }
if ( UFO2XLocation <= UFO2RandomShot4 ) { createAlienShot9(); }
if ( UFO2XLocation <= UFO2RandomShot5 ) { createAlienShot10(); } 
 
if (UFO2XLocation > 0 && pauseGame == false) {
UFO2XLocation = UFO2XLocation - Number(UFO2randomSpeed);
}
if (UFO2XLocation <= 0 )  {
UFO2.hide();
} 
else if (shotYLocation1 >= UFO2YLocation + 6 && shotYLocation1 <= UFO2YLocation + 14 && shotXLocation1 >= UFO2XLocation + 2 
&& shotXLocation1 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot1(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation2 >= UFO2YLocation + 6 && shotYLocation2 <= UFO2YLocation + 14 && shotXLocation2 >= UFO2XLocation + 2
&& shotXLocation2 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot2(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation3 >= UFO2YLocation + 6 && shotYLocation3 <= UFO2YLocation + 14 && shotXLocation3 >= UFO2XLocation + 2
&& shotXLocation3 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot3(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation4 >= UFO2YLocation + 6 && shotYLocation4 <= UFO2YLocation + 14 && shotXLocation4 >= UFO2XLocation + 2 
&& shotXLocation4 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot4(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation5 >= UFO2YLocation + 6 && shotYLocation5 <= UFO2YLocation + 14 && shotXLocation5 >= UFO2XLocation + 2
&& shotXLocation5 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot5(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation6 >= UFO2YLocation + 6 && shotYLocation6 <= UFO2YLocation + 14 && shotXLocation6 >= UFO2XLocation + 2
&& shotXLocation6 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot6(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation7 >= UFO2YLocation + 6 && shotYLocation7 <= UFO2YLocation + 14 && shotXLocation7 >= UFO2XLocation + 2
&& shotXLocation7 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot7(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation8 >= UFO2YLocation + 6 && shotYLocation8 <= UFO2YLocation + 14 && shotXLocation8 >= UFO2XLocation + 2
&& shotXLocation8 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot8(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation9 >= UFO2YLocation + 6 && shotYLocation9 <= UFO2YLocation + 14 && shotXLocation9 >= UFO2XLocation + 2
&& shotXLocation9 <= UFO2XLocation + 28 )
{ UFO2.hide(); resetShot9(); scoreUp(); UFO2Alive = false; }
else if (shotYLocation10 >= UFO2YLocation + 6 && shotYLocation10 <= UFO2YLocation + 14 && shotXLocation10 >= UFO2XLocation + 2
&& shotXLocation10 <= UFO2XLocation + 28)
{ UFO2.hide(); resetShot10(); scoreUp(); UFO2Alive = false; }
}
}

function createAlienShot6(){ createAlienShot6.called = true; }
function createAlienShot7(){ createAlienShot7.called = true; }
function createAlienShot8(){ createAlienShot8.called = true; }
function createAlienShot9(){ createAlienShot9.called = true; }
function createAlienShot10(){ createAlienShot10.called = true; }





function createUFO3()
{
UFO3randomSpeed = randRange(3, 12);
UFO3 = new sdl.Object(__dirname + "/ufo3.png");
UFO3.depth(1);
UFO3XLocation = Number("0");
UFO3RandomShot1 = randRange(1, 1250);
UFO3RandomShot2 = randRange(1, 1250);
UFO3RandomShot3 = randRange(1, 1250);
UFO3RandomShot4 = randRange(1, 1250);
UFO3RandomShot5 = randRange(1, 1250);
UFO3YLocation = randRange(100, 220);
alienShotYLocation11 = UFO3YLocation + 30;
alienShotYLocation12 = UFO3YLocation + 30;
alienShotYLocation13 = UFO3YLocation + 30;
alienShotYLocation14 = UFO3YLocation + 30;
alienShotYLocation15 = UFO3YLocation + 30;
UFO3Alive = true;
return UFO3XLocation;
} 

function resetUFO3()
{
UFO3randomSpeed = randRange(3, 12);
UFO3XLocation = Number("0");
UFO3RandomShot1 = randRange(1, 1250);
UFO3RandomShot2 = randRange(1, 1250);
UFO3RandomShot3 = randRange(1, 1250);
UFO3RandomShot4 = randRange(1, 1250);
UFO3RandomShot5 = randRange(1, 1250);
UFO3YLocation = randRange(100, 220);
createAlienShot11.called = false;
createAlienShot12.called = false;
createAlienShot13.called = false;
createAlienShot14.called = false;
createAlienShot15.called = false;
alienShotYLocation11 = UFO3YLocation + 30;
alienShotYLocation12 = UFO3YLocation + 30;
alienShotYLocation13 = UFO3YLocation + 30;
alienShotYLocation14 = UFO3YLocation + 30;
alienShotYLocation15 = UFO3YLocation + 30;
UFO3Alive = true;
return UFO3XLocation;
} 


function moveUFO3()
{
if (UFO3Alive == true){
UFO3.x(UFO3XLocation);
UFO3.y(UFO3YLocation);
UFO3.show();
if ( UFO3XLocation >= UFO3RandomShot1 ) { createAlienShot11(); }
if ( UFO3XLocation >= UFO3RandomShot2 ) { createAlienShot12(); }
if ( UFO3XLocation >= UFO3RandomShot3 ) { createAlienShot13(); }
if ( UFO3XLocation >= UFO3RandomShot4 ) { createAlienShot14(); }
if ( UFO3XLocation >= UFO3RandomShot5 ) { createAlienShot15(); } 
 
if (UFO3XLocation < 1250 && pauseGame == false) {
UFO3XLocation = UFO3XLocation + Number(UFO3randomSpeed);
}
if (UFO3XLocation >= 1250 )  {
UFO3.hide();
}
else if (shotYLocation1 >= UFO3YLocation + 6 && shotYLocation1 <= UFO3YLocation + 14 && shotXLocation1 >= UFO3XLocation + 2 
&& shotXLocation1 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot1(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation2 >= UFO3YLocation + 6 && shotYLocation2 <= UFO3YLocation + 14 && shotXLocation2 >= UFO3XLocation + 2
&& shotXLocation2 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot2(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation3 >= UFO3YLocation + 6 && shotYLocation3 <= UFO3YLocation + 14 && shotXLocation3 >= UFO3XLocation + 2
&& shotXLocation3 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot3(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation4 >= UFO3YLocation + 6 && shotYLocation4 <= UFO3YLocation + 14 && shotXLocation4 >= UFO3XLocation + 2
&& shotXLocation4 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot4(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation5 >= UFO3YLocation + 6 && shotYLocation5 <= UFO3YLocation + 14 && shotXLocation5 >= UFO3XLocation + 2
&& shotXLocation5 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot5(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation6 >= UFO3YLocation + 6 && shotYLocation6 <= UFO3YLocation + 14 && shotXLocation6 >= UFO3XLocation + 2
&& shotXLocation6 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot6(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation7 >= UFO3YLocation + 6 && shotYLocation7 <= UFO3YLocation + 14 && shotXLocation7 >= UFO3XLocation + 2
&& shotXLocation7 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot7(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation8 >= UFO3YLocation + 6 && shotYLocation8 <= UFO3YLocation + 14 && shotXLocation8 >= UFO3XLocation + 2
&& shotXLocation8 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot8(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation9 >= UFO3YLocation + 6 && shotYLocation9 <= UFO3YLocation + 14 && shotXLocation9 >= UFO3XLocation + 2
&& shotXLocation9 <= UFO3XLocation + 28 )
{ UFO3.hide(); resetShot9(); scoreUp(); UFO3Alive = false; }
else if (shotYLocation10 >= UFO3YLocation + 6 && shotYLocation10 <= UFO3YLocation + 14 && shotXLocation10 >= UFO3XLocation + 2
&& shotXLocation10 <= UFO3XLocation + 28)
{ UFO3.hide(); resetShot10(); scoreUp(); UFO3Alive = false; }
}
}

function createAlienShot11(){ createAlienShot11.called = true; }
function createAlienShot12(){ createAlienShot12.called = true; }
function createAlienShot13(){ createAlienShot13.called = true; }
function createAlienShot14(){ createAlienShot14.called = true; }
function createAlienShot15(){ createAlienShot15.called = true; }

//End Of UFO


function resetAsteroid1()
{
asteroid1.hide();
scoreUp();
asteroidXLocation1 = randRange(1, 1250);
asteroidYLocation1 = Number("100");
asteroid1.x(asteroidXLocation1);
asteroid1.show();
}

function resetAsteroid2()
{
asteroid2.hide();
scoreUp();
asteroidXLocation2 = randRange(1, 1250);
asteroidYLocation2 = Number("100");
asteroid2.x(asteroidXLocation2);
asteroid2.show();
}

function resetAsteroid3()
{
asteroid3.hide();
scoreUp();
asteroidXLocation3 = randRange(1, 1250);
asteroidYLocation3 = Number("100");
asteroid3.x(asteroidXLocation3);
asteroid3.show();
}

function resetAsteroid4()
{
asteroid4.hide();
scoreUp();
asteroidXLocation4 = randRange(1, 1250);
asteroidYLocation4 = Number("100");
asteroid4.x(asteroidXLocation4);
asteroid4.show();
}

function resetAsteroid5()
{
asteroid5.hide();
scoreUp();
asteroidXLocation5 = randRange(1, 1250);
asteroidYLocation5 = Number("100");
asteroid5.x(asteroidXLocation5);
asteroid5.show();
}

function resetAsteroid6(){
asteroid6.hide();
scoreUp();
asteroidXLocation6 = randRange(1, 1250);
asteroidYLocation6 = Number("100");
asteroid6.x(asteroidXLocation6);
asteroid6.show();
}

function resetAsteroid7(){
asteroid7.hide();
scoreUp();
asteroidXLocation7 = randRange(1, 1250);
asteroidYLocation7 = Number("100");
asteroid7.x(asteroidXLocation7);
asteroid7.show();
}

function resetAsteroid8(){
asteroid8.hide();
scoreUp();
asteroidXLocation8 = randRange(1, 1250);
asteroidYLocation8 = Number("100");
asteroid8.x(asteroidXLocation8);
asteroid8.y(asteroidYLocation8);
asteroid8.show();
}

function resetAsteroid9(){
asteroid9.hide();
scoreUp();
asteroidYLocation9 = Number("100");
asteroidXLocation9 = randRange(1, 1250);
asteroid9.y(asteroidYLocation9);
asteroid9.x(asteroidXLocation9);
asteroid9.show();
}

function resetAsteroid10(){
asteroid10.hide();
scoreUp();
asteroidYLocation10 = Number("100");
asteroidXLocation10 = randRange(1, 1250);
asteroid10.y(asteroidYLocation10);
asteroid10.x(asteroidXLocation10);
asteroid10.show();
}

function resetAsteroid11(){
asteroid11.hide();
scoreUp();
asteroidYLocation11 = Number("100");
asteroidXLocation11 = randRange(1, 1250);
asteroid11.y(asteroidYLocation11);
asteroid11.x(asteroidXLocation11);
asteroid11.show();
}

function resetAsteroidb1(){
asteroidb1Health = 8;
asteroidYLocationb1 = Number("100");
asteroidXLocationb1 = randRange(1, 1250);
asteroidb1.y(asteroidYLocationb1);
asteroidb1.x(asteroidXLocationb1);
asteroidb1.show();
}

function blownAsteroidb1(){
if (asteroidb1Health <= 0)
{
asteroidb1.hide();
scoreUp();
}
}

function resetAsteroid12(){
asteroid12.hide();
scoreUp();
asteroidYLocation12 = Number("100");
asteroidXLocation12 = randRange(1, 1250);
asteroid12.y(asteroidYLocation12);
asteroid12.x(asteroidXLocation12);
asteroid12.show();
}

function resetAsteroid13(){
asteroid13.hide();
scoreUp();
asteroidYLocation13 = Number("100");
asteroidXLocation13 = randRange(1, 1250);
asteroid13.y(asteroidYLocation13);
asteroid13.x(asteroidXLocation13);
asteroid13.show();
}

function resetAsteroidb2(){
asteroidb2Health = 12;
asteroidYLocationb2 = Number("100");
asteroidXLocationb2 = randRange(1, 1250);
asteroidb2.y(asteroidYLocationb2);
asteroidb2.x(asteroidXLocationb2);
asteroidb2.show();
}

function blownAsteroidb2(){
if (asteroidb2Health <= 0)
{
asteroidb2.hide();
scoreUp();
}
}

function resetAsteroid14(){
asteroid14.hide();
scoreUp();
asteroidYLocation14 = Number("100");
asteroidXLocation14 = randRange(1, 1250);
asteroid14.y(asteroidYLocation14);
asteroid14.x(asteroidXLocation14);
asteroid14.show();
}

function resetAsteroid15(){
asteroid15.hide();
scoreUp();
asteroidYLocation15 = Number("100");
asteroidXLocation15 = randRange(1, 1250);
asteroid15.y(asteroidYLocation15);
asteroid15.x(asteroidXLocation15);
asteroid15.show();
}

function resetAsteroid16(){
asteroid16.hide();
scoreUp();
asteroidYLocation16 = Number("100");
asteroidXLocation16 = randRange(1, 1250);
asteroid16.y(asteroidYLocation16);
asteroid16.x(asteroidXLocation16);
asteroid16.show();
}

function resetAsteroid17(){
asteroid17.hide();
scoreUp();
asteroidYLocation17 = Number("100");
asteroidXLocation17 = randRange(1, 1250);
asteroid17.y(asteroidYLocation17);
asteroid17.x(asteroidXLocation17);
asteroid17.show();
}

function resetAsteroidc1(){
asteroidc1Health = 30;
asteroidYLocationc1 = Number("100");
asteroidXLocationc1 = randRange(1, 1100);
asteroidc1.y(asteroidYLocationc1);
asteroidc1.x(asteroidXLocationc1);
asteroidc1.show();
}

function blownAsteroidc1(){
if (asteroidc1Health <= 0)
{
asteroidc1.hide();
scoreUp();
}
}

function resetAsteroid18(){
asteroid18.hide();
scoreUp();
asteroidYLocation18 = Number("100");
asteroidXLocation18 = randRange(1, 1250);
asteroid18.y(asteroidYLocation18);
asteroid18.x(asteroidXLocation18);
asteroid18.show();
}

function resetAsteroid19(){
asteroid19.hide();
scoreUp();
asteroidYLocation19 = Number("100");
asteroidXLocation19 = randRange(1, 1250);
asteroid19.y(asteroidYLocation19);
asteroid19.x(asteroidXLocation19);
asteroid19.show();
}

function resetAsteroidb3(){
asteroidb3Health = 14;
asteroidYLocationb3 = Number("100");
asteroidXLocationb3 = randRange(1, 1250);
asteroidb3.y(asteroidYLocationb3);
asteroidb3.x(asteroidXLocationb3);
asteroidb3.show();
}

function blownAsteroidb3(){
if (asteroidb3Health <= 0)
{
asteroidb3.hide();
scoreUp();
}
}

function resetAsteroid20(){
asteroid20.hide();
scoreUp();
asteroidYLocation20 = Number("100");
asteroidXLocation20 = randRange(1, 1250);
asteroid20.y(asteroidYLocation20);
asteroid20.x(asteroidXLocation20);
asteroid20.show();
}

function resetAsteroid21(){
asteroid21.hide();
scoreUp();
asteroidYLocation21 = Number("100");
asteroidXLocation21 = randRange(1, 1250);
asteroid21.y(asteroidYLocation21);
asteroid21.x(asteroidXLocation21);
asteroid21.show();
}

function resetAsteroidb4(){
asteroidb4Health = 18;
asteroidYLocationb4 = Number("100");
asteroidXLocationb4 = randRange(1, 1250);
asteroidb4.y(asteroidYLocationb4);
asteroidb4.x(asteroidXLocationb4);
asteroidb4.show();
}

function blownAsteroidb4(){
if (asteroidb4Health <= 0)
{
asteroidb4.hide();
scoreUp();
}
}

function resetAsteroid22(){
asteroid22.hide();
scoreUp();
asteroidYLocation22 = Number("100");
asteroidXLocation22 = randRange(1, 1250);
asteroid22.y(asteroidYLocation22);
asteroid22.x(asteroidXLocation22);
asteroid22.show();
}

function resetAsteroid23(){
if (asteroid23Health <= 0)
{
asteroid23.hide();
scoreUp();
asteroid23Health = 2;
asteroidYLocation23 = Number("100");
asteroidXLocation23 = randRange(1, 1250);
asteroid23.y(asteroidYLocation23);
asteroid23.x(asteroidXLocation23);
asteroid23.show();
}
}

function resetAsteroid24(){
if (asteroid24Health <= 0)
{
asteroid24.hide();
scoreUp();
asteroid24Health = 2;
asteroidYLocation24 = Number("100");
asteroidXLocation24 = randRange(1, 1250);
asteroid24.y(asteroidYLocation24);
asteroid24.x(asteroidXLocation24);
asteroid24.show();
}
}

function resetAsteroid25(){
if (asteroid25Health <= 0)
{
asteroid25.hide();
scoreUp();
asteroid25Health = 3;
asteroidYLocation25 = Number("100");
asteroidXLocation25 = randRange(1, 1250);
asteroid25.y(asteroidYLocation25);
asteroid25.x(asteroidXLocation25);
asteroid25.show();
}
}

function resetAsteroidc2(){
asteroidc2Health = 44;
asteroidYLocationc2 = Number("100");
asteroidXLocationc2 = randRange(1, 1100);
asteroidc2.y(asteroidYLocationc2);
asteroidc2.x(asteroidXLocationc2);
asteroidc2.show();
}

function blownAsteroidc2(){
if (asteroidc2Health <= 0)
{
asteroidc2.hide();
scoreUp();
}
}

function resetAsteroid26(){
if (asteroid26Health <= 0)
{
asteroid26.hide();
scoreUp();
asteroid26Health = 3;
asteroidYLocation26 = Number("100");
asteroidXLocation26 = randRange(1, 1250);
asteroid26.y(asteroidYLocation26);
asteroid26.x(asteroidXLocation26);
asteroid26.show();
}
}

function resetAsteroid27(){
if (asteroid27Health <= 0)
{
asteroid27.hide();
scoreUp();
asteroid27Health = 3;
asteroidYLocation27 = Number("100");
asteroidXLocation27 = randRange(1, 1250);
asteroid27.y(asteroidYLocation27);
asteroid27.x(asteroidXLocation27);
asteroid27.show();
}
}

function resetAsteroid28(){
if (asteroid28Health <= 0)
{
asteroid28.hide();
scoreUp();
asteroid28Health = 2;
asteroidYLocation28 = Number("100");
asteroidXLocation28 = randRange(1, 1250);
asteroid28.y(asteroidYLocation28);
asteroid28.x(asteroidXLocation28);
asteroid28.show();
}
}

function resetAsteroid29(){
if (asteroid29Health <= 0)
{
asteroid29.hide();
scoreUp();
asteroid29Health = 3;
asteroidYLocation29 = Number("100");
asteroidXLocation29 = randRange(1, 1250);
asteroid29.y(asteroidYLocation29);
asteroid29.x(asteroidXLocation29);
asteroid29.show();
}
}

function resetAsteroidb5(){
asteroidb5Health = 23;
asteroidYLocationb5 = Number("100");
asteroidXLocationb5 = randRange(1, 1250);
asteroidb5.y(asteroidYLocationb5);
asteroidb5.x(asteroidXLocationb5);
asteroidb5.show();
}

function blownAsteroidb5(){
if (asteroidb5Health <= 0)
{
asteroidb5.hide();
scoreUp();
}
}

function resetAsteroid30(){
if (asteroid30Health <= 0)
{
asteroid30.hide();
scoreUp();
asteroid30Health = 3;
asteroidYLocation30 = Number("100");
asteroidXLocation30 = randRange(1, 1250);
asteroid30.y(asteroidYLocation30);
asteroid30.x(asteroidXLocation30);
asteroid30.show();
}
}

function resetAsteroid31(){
if (asteroid31Health <= 0)
{
asteroid31.hide();
scoreUp();
asteroid31Health = 2;
asteroidYLocation31 = Number("100");
asteroidXLocation31 = randRange(1, 1250);
asteroid31.y(asteroidYLocation31);
asteroid31.x(asteroidXLocation31);
asteroid31.show();
}
}

function resetAsteroid32(){
if (asteroid32Health <= 0)
{
asteroid32.hide();
scoreUp();
asteroid32Health = 3;
asteroidYLocation32 = Number("100");
asteroidXLocation32 = randRange(1, 1250);
asteroid32.y(asteroidYLocation32);
asteroid32.x(asteroidXLocation32);
asteroid32.show();
}
}

function resetAsteroid33(){
if (asteroid33Health <= 0)
{
asteroid33.hide();
scoreUp();
asteroid33Health = 3;
asteroidYLocation33 = Number("100");
asteroidXLocation33 = randRange(1, 1250);
asteroid33.y(asteroidYLocation33);
asteroid33.x(asteroidXLocation33);
asteroid33.show();
}
}

function resetAsteroidb6(){
asteroidb6Health = 28;
asteroidYLocationb6 = Number("100");
asteroidXLocationb6 = randRange(1, 1250);
asteroidb6.y(asteroidYLocationb6);
asteroidb6.x(asteroidXLocationb6);
asteroidb6.show();
}

function blownAsteroidb6(){
if (asteroidb6Health <= 0)
{
asteroidb6.hide();
scoreUp();
}
}

function resetAsteroid34(){
if (asteroid34Health <= 0)
{
asteroid34.hide();
scoreUp();
asteroid34Health = 3;
asteroidYLocation34 = Number("100");
asteroidXLocation34 = randRange(1, 1250);
asteroid34.y(asteroidYLocation34);
asteroid34.x(asteroidXLocation34);
asteroid34.show();
}
}

for (var step = 1; step < 11; step++) {
var str1 = "shotYLocation".concat(step).concat("= 640");
var str1;
}


shot1 = new sdl.Object(__dirname + '/shoot.png');
shot2 = new sdl.Object(__dirname + '/shoot.png');
shot3 = new sdl.Object(__dirname + '/shoot.png');
shot4 = new sdl.Object(__dirname + '/shoot.png');
shot5 = new sdl.Object(__dirname + '/shoot.png');
shot6 = new sdl.Object(__dirname + '/shoot.png');
shot7 = new sdl.Object(__dirname + '/shoot.png');
shot8 = new sdl.Object(__dirname + '/shoot.png');
shot9 = new sdl.Object(__dirname + '/shoot.png');
shot10 = new sdl.Object(__dirname + '/shoot.png');



function createShot1()
{
createShot1.called = true; 
}
function resetShot1()
{
shot1.hide();
createShot1.called = false;
shotYLocation1 = Number("650");
}

function createShot2()
{
createShot2.called = true; 
}
function resetShot2()
{
shot2.hide();
createShot2.called = false;
shotYLocation2 = Number("650");
}

function createShot3()
{
createShot3.called = true; 
}
function resetShot3()
{
shot3.hide();
createShot3.called = false;
shotYLocation3 = Number("650");
}

function createShot4()
{
createShot4.called = true; 
}
function resetShot4()
{
shot4.hide();
createShot4.called = false;
shotYLocation4 = Number("650");
}

function createShot5()
{
createShot5.called = true; 
}
function resetShot5()
{
shot5.hide();
createShot5.called = false;
shotYLocation5 = Number("650");
}

function createShot6()
{
createShot6.called = true; 
}
function resetShot6()
{
shot6.hide();
createShot6.called = false;
shotYLocation6 = Number("650");
}

function createShot7()
{
createShot7.called = true; 
}
function resetShot7()
{
shot7.hide();
createShot7.called = false;
shotYLocation7 = Number("650");
}

function createShot8()
{
createShot8.called = true; 
}
function resetShot8()
{
shot8.hide();
createShot8.called = false;
shotYLocation8 = Number("650");
}

function createShot9()
{
createShot9.called = true; 
}
function resetShot9()
{
shot9.hide();
createShot9.called = false;
shotYLocation9 = Number("650");
}
function createShot10()
{
createShot10.called = true; 
}
function resetShot10()
{
shot10.hide();
createShot10.called = false;
shotYLocation10 = Number("650");
}



var counter = 0;
var bombCounter = 0;
renewAsteroids = false;
pauseGame = false;
useBomb = false;
rainNow = false;
powerShip = false;
gameOver = false;
randomWords = randRange(1, 4);






function shotsFired() 
   {
    if (createShot1.called == true){ shotXLocation1 = shotXLocation1; }
    else { shotXLocation1 = shipLocation + 14; }
    if (createShot2.called == true){ shotXLocation2 = shotXLocation2; }
    else { shotXLocation2 = shipLocation + 14; }
    if (createShot3.called == true){ shotXLocation3 = shotXLocation3; }
    else { shotXLocation3 = shipLocation + 14; }
    if (createShot4.called == true){ shotXLocation4 = shotXLocation4; }
    else { shotXLocation4 = shipLocation + 14; }
    if (createShot5.called == true){ shotXLocation5 = shotXLocation5; }
    else { shotXLocation5 = shipLocation + 14; }
    if (createShot6.called == true){ shotXLocation6 = shotXLocation6; }
    else { shotXLocation6 = shipLocation + 14; }
    if (createShot7.called == true){ shotXLocation7 = shotXLocation7; }
    else { shotXLocation7 = shipLocation + 14; }
    if (createShot8.called == true){ shotXLocation8 = shotXLocation8; }
    else { shotXLocation8 = shipLocation + 14; }
    if (createShot9.called == true){ shotXLocation9 = shotXLocation9; }
    else { shotXLocation9 = shipLocation + 14; }
    if (createShot10.called == true){ shotXLocation10 = shotXLocation10; }
    else { shotXLocation10 = shipLocation + 14; }

if (createShot1.called == true && createShot2.called == true && createShot3.called == true && createShot4.called == true 
&& createShot5.called == true && createShot6.called == true && createShot7.called == true && createShot8.called == true 
&& createShot9.called == true && shotYLocation1 < 600 && shotYLocation2 < 600 && shotYLocation3 < 600 && shotYLocation4 < 600 
&& shotYLocation5 < 600 && shotYLocation6 < 600 && shotYLocation7 < 600 && shotYLocation8 < 600 && shotYLocation9 < 600){
createShot10();
}
else if (createShot1.called == true && createShot2.called == true && createShot3.called == true && createShot4.called == true 
&& createShot5.called == true && createShot6.called == true && createShot7.called == true && createShot8.called == true 
&& shotYLocation1 < 600 && shotYLocation2 < 600 && shotYLocation3 < 600 && shotYLocation4 < 600 && shotYLocation5 < 600 
&& shotYLocation6 < 600 && shotYLocation7 < 600 && shotYLocation8 < 600){
createShot9();
}
else if (createShot1.called == true && createShot2.called == true && createShot3.called == true && createShot4.called == true 
&& createShot5.called == true && createShot6.called == true && createShot7.called == true && shotYLocation1 < 600 && shotYLocation2 < 600 
&& shotYLocation3 < 600 && shotYLocation4 < 600 && shotYLocation5 < 600 && shotYLocation6 < 600 && shotYLocation7 < 600){
createShot8();
}
else if (createShot1.called == true && createShot2.called == true && createShot3.called == true && createShot4.called == true 
&& createShot5.called == true && createShot6.called == true && shotYLocation1 < 600 && shotYLocation2 < 600 && shotYLocation3 < 600
&& shotYLocation4 < 600 && shotYLocation5 < 600 && shotYLocation6 < 600){
createShot7();
}
else if (createShot1.called == true && createShot2.called == true && createShot3.called == true && createShot4.called == true 
&& createShot5.called == true && shotYLocation1 < 600 && shotYLocation2 < 600 && shotYLocation3 < 600 && shotYLocation4 < 600 
&& shotYLocation5 < 600){
createShot6();
}
else if (createShot1.called == true && createShot2.called == true && createShot3.called == true && createShot4.called == true 
&& shotYLocation1 < 600 && shotYLocation2 < 600 && shotYLocation3 < 600 && shotYLocation4 < 600){
createShot5();
}
else if (createShot1.called == true && createShot2.called == true && createShot3.called == true && shotYLocation1 < 600 
&& shotYLocation2 < 600 && shotYLocation3 < 600){
createShot4();
}
else if (createShot1.called == true && createShot2.called == true && shotYLocation1 < 600 && shotYLocation2 < 600){
createShot3();
}
else if (createShot1.called == true && shotYLocation1 < 600){
createShot2();
}
else {
createShot1();
}
}


//setupGame
sdl.playAudio(true); // Play looping

bombNumber = new sdl.Object(__dirname + "/bombs1.png");
bombNumber.x(1140);
bombNumber.y(28);
bombNumber.show();

intro = new sdl.Object(__dirname + "/intro1.png");
intro.x(355);
intro.y(325);
intro.show();

var grass = new sdl.Object(__dirname + "/grass1.png");
grass.x(1);
grass.y(682);
grass.show();

moon = new sdl.Object(__dirname + "/moon.png");
moonYLocation = Number("300");
moon.x(1000);
moon.y(moonYLocation);
moon.show();

resetShot1();
resetShot2();
resetShot3();
resetShot4();
resetShot5();
resetShot6();
resetShot7();
resetShot8();
resetShot9();
resetShot10();

//createship
ship = new sdl.Object(__dirname + "/ship.png");
shipLocation = Number("605");
ship.x(shipLocation);
ship.y(670);
ship.show();

// createOneUpLife
canGetLife = true;
oneUpLifeYLocation = Number("100");
oneUpLifeRandomSpeed = randRange(1, 8);
oneUpLifeXLocation = randRange(1, 1250);
oneUpLife = new sdl.Object(__dirname + "/oneUpLife.png");

// createOneUpBomb
canGetBomb = true;
bombYLocation = Number("100");
bombRandomSpeed = randRange(1, 8);
bombXLocation = randRange(1, 1250);
bomb = new sdl.Object(__dirname + "/bomb.png");

//createMeteor1
meteor1randomSpeed = randRange(6, 18);
meteor1 = new sdl.Object(__dirname + "/meteor.png");
meteor1.depth(1);
meteor1EndLocation = randRange(1, 1250);
meteor1XLocation = meteor1EndLocation + 600;
meteor1YLocation = 15;
meteor1Alive = true;


meteor2randomSpeed = randRange(6, 18);
meteor2 = new sdl.Object(__dirname + "/meteor.png");
meteor2.depth(1);
meteor2EndLocation = randRange(1, 1250);
meteor2XLocation = meteor2EndLocation + 600;
meteor2YLocation = 15;
meteor2Alive = true;


meteor3randomSpeed = randRange(6, 18);
meteor3 = new sdl.Object(__dirname + "/meteor2.png");
meteor3.depth(1);
meteor3EndLocation = randRange(1, 1250);
meteor3XLocation = meteor3EndLocation - 600;
meteor3YLocation = 15;
meteor3Alive = true;

//createUFOS
createUFO();
createUFO2();
createUFO3();

// createRain
rainYLocation1 = rainYLocation2 = rainYLocation3 = rainYLocation4 = rainYLocation5 = rainYLocation6 = rainYLocation7 = rainYLocation8 = rainYLocation9 = rainYLocation10 = 
rainYLocation11 = rainYLocation12 = rainYLocation13 = rainYLocation14 = rainYLocation15 = rainYLocation16 = rainYLocation17 = rainYLocation18 = rainYLocation19 = rainYLocation20 = 
rainYLocation21 = rainYLocation22 = rainYLocation23 = rainYLocation24 = rainYLocation25 = rainYLocation26 = rainYLocation27 = rainYLocation28 = rainYLocation29 = rainYLocation30 = 
rainYLocation31 = rainYLocation32 = rainYLocation33 = rainYLocation34 = rainYLocation35 = rainYLocation36 = rainYLocation37 = rainYLocation38 = rainYLocation39 = rainYLocation40 = Number("100");  

rainSpeed1 = randRange(3, 9);rain1 = new sdl.Object(__dirname + "/rain.png");rainXLocation1 = randRange(1, 1250);rain1.x(rainXLocation1);
rainSpeed2 = randRange(3, 9);rain2 = new sdl.Object(__dirname + "/rain.png");rainXLocation2 = randRange(1, 1250);rain2.x(rainXLocation2);
rainSpeed3 = randRange(3, 9);rain3 = new sdl.Object(__dirname + "/rain.png");rainXLocation3 = randRange(1, 1250);rain3.x(rainXLocation3);
rainSpeed4 = randRange(3, 9);rain4 = new sdl.Object(__dirname + "/rain.png");rainXLocation4 = randRange(1, 1250);rain4.x(rainXLocation4);
rainSpeed5 = randRange(3, 9);rain5 = new sdl.Object(__dirname + "/rain.png");rainXLocation5 = randRange(1, 1250);rain5.x(rainXLocation5);
rainSpeed6 = randRange(3, 9);rain6 = new sdl.Object(__dirname + "/rain.png");rainXLocation6 = randRange(1, 1250);rain6.x(rainXLocation6);
rainSpeed7 = randRange(3, 9);rain7 = new sdl.Object(__dirname + "/rain.png");rainXLocation7 = randRange(1, 1250);rain7.x(rainXLocation7);
rainSpeed8 = randRange(3, 9);rain8 = new sdl.Object(__dirname + "/rain.png");rainXLocation8 = randRange(1, 1250);rain8.x(rainXLocation8);
rainSpeed9 = randRange(3, 9);rain9 = new sdl.Object(__dirname + "/rain.png");rainXLocation9 = randRange(1, 1250);rain9.x(rainXLocation9);
rainSpeed10 = randRange(3, 9);rain10 = new sdl.Object(__dirname + "/rain.png");rainXLocation10 = randRange(1, 1250);rain10.x(rainXLocation10);
rainSpeed11 = randRange(3, 9);rain11 = new sdl.Object(__dirname + "/rain.png");rainXLocation11 = randRange(1, 1250);rain11.x(rainXLocation11);
rainSpeed12 = randRange(3, 9);rain12 = new sdl.Object(__dirname + "/rain.png");rainXLocation12 = randRange(1, 1250);rain12.x(rainXLocation12);
rainSpeed13 = randRange(3, 9);rain13 = new sdl.Object(__dirname + "/rain.png");rainXLocation13 = randRange(1, 1250);rain13.x(rainXLocation13);
rainSpeed14 = randRange(3, 9);rain14 = new sdl.Object(__dirname + "/rain.png");rainXLocation14 = randRange(1, 1250);rain14.x(rainXLocation14);
rainSpeed15 = randRange(3, 9);rain15 = new sdl.Object(__dirname + "/rain.png");rainXLocation15 = randRange(1, 1250);rain15.x(rainXLocation15);
rainSpeed16 = randRange(3, 9);rain16 = new sdl.Object(__dirname + "/rain.png");rainXLocation16 = randRange(1, 1250);rain16.x(rainXLocation16);
rainSpeed17 = randRange(3, 9);rain17 = new sdl.Object(__dirname + "/rain.png");rainXLocation17 = randRange(1, 1250);rain17.x(rainXLocation17);
rainSpeed18 = randRange(3, 9);rain18 = new sdl.Object(__dirname + "/rain.png");rainXLocation18 = randRange(1, 1250);rain18.x(rainXLocation18);
rainSpeed19 = randRange(3, 9);rain19 = new sdl.Object(__dirname + "/rain.png");rainXLocation19 = randRange(1, 1250);rain19.x(rainXLocation19);
rainSpeed20 = randRange(3, 9);rain20 = new sdl.Object(__dirname + "/rain.png");rainXLocation20 = randRange(1, 1250);rain20.x(rainXLocation20);
rainSpeed21 = randRange(3, 9);rain21 = new sdl.Object(__dirname + "/rain.png");rainXLocation21 = randRange(1, 1250);rain21.x(rainXLocation21);
rainSpeed22 = randRange(3, 9);rain22 = new sdl.Object(__dirname + "/rain.png");rainXLocation22 = randRange(1, 1250);rain22.x(rainXLocation22);
rainSpeed23 = randRange(3, 9);rain23 = new sdl.Object(__dirname + "/rain.png");rainXLocation23 = randRange(1, 1250);rain23.x(rainXLocation23);
rainSpeed24 = randRange(3, 9);rain24 = new sdl.Object(__dirname + "/rain.png");rainXLocation24 = randRange(1, 1250);rain24.x(rainXLocation24);
rainSpeed25 = randRange(3, 9);rain25 = new sdl.Object(__dirname + "/rain.png");rainXLocation25 = randRange(1, 1250);rain25.x(rainXLocation25);
rainSpeed26 = randRange(3, 9);rain26 = new sdl.Object(__dirname + "/rain.png");rainXLocation26 = randRange(1, 1250);rain26.x(rainXLocation26);
rainSpeed27 = randRange(3, 9);rain27 = new sdl.Object(__dirname + "/rain.png");rainXLocation27 = randRange(1, 1250);rain27.x(rainXLocation27);
rainSpeed28 = randRange(3, 9);rain28 = new sdl.Object(__dirname + "/rain.png");rainXLocation28 = randRange(1, 1250);rain28.x(rainXLocation28);
rainSpeed29 = randRange(3, 9);rain29 = new sdl.Object(__dirname + "/rain.png");rainXLocation29 = randRange(1, 1250);rain29.x(rainXLocation29);
rainSpeed30 = randRange(3, 9);rain30 = new sdl.Object(__dirname + "/rain.png");rainXLocation30 = randRange(1, 1250);rain30.x(rainXLocation30);
rainSpeed31 = randRange(3, 9);rain31 = new sdl.Object(__dirname + "/rain.png");rainXLocation31 = randRange(1, 1250);rain31.x(rainXLocation31);
rainSpeed32 = randRange(3, 9);rain32 = new sdl.Object(__dirname + "/rain.png");rainXLocation32 = randRange(1, 1250);rain32.x(rainXLocation32);
rainSpeed33 = randRange(3, 9);rain33 = new sdl.Object(__dirname + "/rain.png");rainXLocation33 = randRange(1, 1250);rain33.x(rainXLocation33);
rainSpeed34 = randRange(3, 9);rain34 = new sdl.Object(__dirname + "/rain.png");rainXLocation34 = randRange(1, 1250);rain34.x(rainXLocation34);
rainSpeed35 = randRange(3, 9);rain35 = new sdl.Object(__dirname + "/rain.png");rainXLocation35 = randRange(1, 1250);rain35.x(rainXLocation35);
rainSpeed36 = randRange(3, 9);rain36 = new sdl.Object(__dirname + "/rain.png");rainXLocation36 = randRange(1, 1250);rain36.x(rainXLocation36);
rainSpeed37 = randRange(3, 9);rain37 = new sdl.Object(__dirname + "/rain.png");rainXLocation37 = randRange(1, 1250);rain37.x(rainXLocation37);
rainSpeed38 = randRange(3, 9);rain38 = new sdl.Object(__dirname + "/rain.png");rainXLocation38 = randRange(1, 1250);rain38.x(rainXLocation38);
rainSpeed39 = randRange(3, 9);rain39 = new sdl.Object(__dirname + "/rain.png");rainXLocation39 = randRange(1, 1250);rain39.x(rainXLocation39);
rainSpeed40 = randRange(3, 9);rain40 = new sdl.Object(__dirname + "/rain.png");rainXLocation40 = randRange(1, 1250);rain40.x(rainXLocation40);


//create Asteroids
asteroidYLocation1 = asteroidYLocation2 = asteroidYLocation3 = asteroidYLocation4 = asteroidYLocation5 = asteroidYLocation6 = asteroidYLocation7 = asteroidYLocation8 = asteroidYLocation9 = asteroidYLocation10 = asteroidYLocation11 = asteroidYLocationb1 = asteroidYLocation12 = asteroidYLocation13 = asteroidYLocationb2 = asteroidYLocation14 = asteroidYLocation15 = asteroidYLocation16 = asteroidYLocation17 = asteroidYLocationc1 = asteroidYLocation18 = asteroidYLocation19 = asteroidYLocationb3 = asteroidYLocation20 = asteroidYLocation21 = asteroidYLocationb4 = asteroidYLocation22 = asteroidYLocation23 = asteroidYLocation24 = asteroidYLocation25 = asteroidYLocationc2 = asteroidYLocation26 = asteroidYLocation27 = asteroidYLocation28 = asteroidYLocation29 = asteroidYLocationb5 = 
 asteroidYLocation30 = asteroidYLocation31 = asteroidYLocation32 = asteroidYLocation33 = asteroidYLocationb6 = asteroidYLocation34 = Number("100");



// createAsteroid1
randomSpeed1 = randRange(1, 8);
asteroid1 = new sdl.Object(__dirname + "/asteroid1.png");
asteroidXLocation1 = randRange(1, 1250);
asteroid1.x(asteroidXLocation1);

// createAsteroid2
randomSpeed2 = randRange(1, 8);
asteroid2 = new sdl.Object(__dirname + "/asteroid2.png");
asteroidXLocation2 = randRange(1, 1250);
asteroid2.x(asteroidXLocation2);

// createAsteroid3
randomSpeed3 = randRange(1, 8);
asteroid3 = new sdl.Object(__dirname + "/asteroid3.png");
asteroidXLocation3 = randRange(1, 1250);
asteroid3.x(asteroidXLocation3);

// createAsteroid4
randomSpeed4 = randRange(1, 8);
asteroid4 = new sdl.Object(__dirname + "/asteroid4.png");
asteroidXLocation4 = randRange(1, 1250);
asteroid4.x(asteroidXLocation4);

// createAsteroid5
randomSpeed5 = randRange(1, 8);
asteroid5 = new sdl.Object(__dirname + "/asteroid5.png");
asteroidXLocation5 = randRange(1, 1250);
asteroid5.x(asteroidXLocation5);

// createAsteroid6
randomSpeed6 = randRange(1, 8);
asteroid6 = new sdl.Object(__dirname + "/asteroid6.png");
asteroidXLocation6 = randRange(1, 1250);
asteroid6.x(asteroidXLocation6);


randomSpeed7 = randRange(1, 8);
asteroid7 = new sdl.Object(__dirname + "/asteroid7.png");
asteroid7.depth(1);
asteroidXLocation7 = randRange(1, 1250);
asteroid7.x(asteroidXLocation7);


randomSpeed8 = randRange(1, 8);
asteroid8 = new sdl.Object(__dirname + "/asteroid8.png");
asteroid8.depth(1);
asteroidXLocation8 = randRange(1, 1250);
asteroid8.x(asteroidXLocation8);


randomSpeed9 = randRange(1, 8);
asteroid9 = new sdl.Object(__dirname + "/asteroid9.png");
asteroid9.depth(1);
asteroidXLocation9 = randRange(1, 1250);
asteroid9.x(asteroidXLocation9);


randomSpeed10 = randRange(1, 8);
asteroid10 = new sdl.Object(__dirname + "/asteroid10.png");
asteroid10.depth(1);
asteroidXLocation10 = randRange(1, 1250);
asteroid10.x(asteroidXLocation10);


randomSpeed11 = randRange(1, 8);
asteroid11 = new sdl.Object(__dirname + "/asteroid11.png");
asteroid11.depth(1);
asteroidXLocation11 = randRange(1, 1250);
asteroid11.x(asteroidXLocation11);

// createAsteroidb1
randomSpeedb1 = randRange(1, 6);
asteroidb1 = new sdl.Object(__dirname + "/asteroidb1.png");
asteroidb1.depth(1);
asteroidXLocationb1 = randRange(1, 1250);
asteroidb1Health = 8;
asteroidb1.x(asteroidXLocationb1);

// createAsteroid12
randomSpeed12 = randRange(3, 9);
asteroid12 = new sdl.Object(__dirname + "/asteroid12.png");
asteroid12.depth(1);
asteroidXLocation12 = randRange(1, 1250);
asteroid12.x(asteroidXLocation12);

// createAsteroid13
randomSpeed13 = randRange(3, 9);
asteroid13 = new sdl.Object(__dirname + "/asteroid13.png");
asteroid13.depth(1);
asteroidXLocation13 = randRange(1, 1250);
asteroid13.x(asteroidXLocation13);

// createAsteroidb2
randomSpeedb2 = randRange(2, 7);
asteroidb2 = new sdl.Object(__dirname + "/asteroidb2.png");
asteroidb2.depth(1);
asteroidXLocationb2 = randRange(1, 1250);
asteroidb2Health = 12;
asteroidb2.x(asteroidXLocationb2);


randomSpeed14 = randRange(3, 9);
asteroid14 = new sdl.Object(__dirname + "/asteroid14.png");
asteroid14.depth(1);
asteroidXLocation14 = randRange(1, 1250);
asteroid14.x(asteroidXLocation14);

// createAsteroid15
randomSpeed15 = randRange(3, 9);
asteroid15 = new sdl.Object(__dirname + "/asteroid15.png");
asteroid15.depth(1);
asteroidXLocation15 = randRange(1, 1250);
asteroid15.x(asteroidXLocation15);


randomSpeed16 = randRange(3, 9);
asteroid16 = new sdl.Object(__dirname + "/asteroid16.png");
asteroid16.depth(1);
asteroidXLocation16 = randRange(1, 1250);
asteroid16.x(asteroidXLocation16);


randomSpeed17 = randRange(3, 9);
asteroid17 = new sdl.Object(__dirname + "/asteroid17.png");
asteroid17.depth(1);
asteroidXLocation17 = randRange(1, 1250);
asteroid17.x(asteroidXLocation17);

// createAsteroidC1
randomSpeedc1 = randRange(1, 4);
asteroidc1 = new sdl.Object(__dirname + "/asteroidc1.png");
asteroidc1.depth(1);
asteroidXLocationc1 = randRange(1, 1100);
asteroidc1Health = 30;
asteroidc1.x(asteroidXLocationc1);


// createAsteroid18
randomSpeed18 = randRange(3, 9);
asteroid18 = new sdl.Object(__dirname + "/asteroid18.png");
asteroid18.depth(1);
asteroidXLocation18 = randRange(1, 1250);
asteroid18.x(asteroidXLocation18);


randomSpeed19 = randRange(3, 9);
asteroid19 = new sdl.Object(__dirname + "/asteroid19.png");
asteroid19.depth(1);
asteroidXLocation19 = randRange(1, 1250);
asteroid19.x(asteroidXLocation19);


// createAsteroidb3
randomSpeedb3 = randRange(3, 8);
asteroidb3 = new sdl.Object(__dirname + "/asteroidb3.png");
asteroidb3.depth(1);
asteroidXLocationb3 = randRange(1, 1250);
asteroidb3Health = 14;
asteroidb3.x(asteroidXLocationb3);


randomSpeed20 = randRange(3, 9);
asteroid20 = new sdl.Object(__dirname + "/asteroid20.png");
asteroid20.depth(1);
asteroidXLocation20 = randRange(1, 1250);
asteroid20.x(asteroidXLocation20);


randomSpeed21 = randRange(3, 9);
asteroid21 = new sdl.Object(__dirname + "/asteroid21.png");
asteroid21.depth(1);
asteroidXLocation21 = randRange(1, 1250);
asteroid21.x(asteroidXLocation21);


// createAsteroidb4
randomSpeedb4 = randRange(3, 9);
asteroidb4 = new sdl.Object(__dirname + "/asteroidb4.png");
asteroidb4.depth(1);
asteroidXLocationb4 = randRange(1, 1250);
asteroidb4Health = 18;
asteroidb4.x(asteroidXLocationb4);


randomSpeed22 = randRange(3, 9);
asteroid22 = new sdl.Object(__dirname + "/asteroid22.png");
asteroid22.depth(1);
asteroidXLocation22 = randRange(1, 1250);
asteroid22.x(asteroidXLocation22);


randomSpeed23 = randRange(3, 9);
asteroid23 = new sdl.Object(__dirname + "/asteroid23.png");
asteroid23.depth(1);
asteroidXLocation23 = randRange(1, 1250);
asteroid23Health = 2;
asteroid23.x(asteroidXLocation23);


randomSpeed24 = randRange(3, 9);
asteroid24 = new sdl.Object(__dirname + "/asteroid24.png");
asteroid24.depth(1);
asteroidXLocation24 = randRange(1, 1250);
asteroid24Health = 2;
asteroid24.x(asteroidXLocation24);


// createAsteroid25
randomSpeed25 = randRange(3, 9);
asteroid25 = new sdl.Object(__dirname + "/asteroid25.png");
asteroid25.depth(1);
asteroidXLocation25 = randRange(1, 1250);
asteroid25Health = 3;
asteroid25.x(asteroidXLocation25);

// createAsteroidC2
randomSpeedc2 = randRange(3, 7);
asteroidc2 = new sdl.Object(__dirname + "/asteroidc2.png");
asteroidc2.depth(1);
asteroidXLocationc2 = randRange(1, 1100);
asteroidc2Health = 44;
asteroidc2.x(asteroidXLocationc2);


randomSpeed26 = randRange(3, 9);
asteroid26 = new sdl.Object(__dirname + "/asteroid26.png");
asteroid26.depth(1);
asteroidXLocation26 = randRange(1, 1250);
asteroid26Health = 3;
asteroid26.x(asteroidXLocation26);


randomSpeed27 = randRange(3, 9);
asteroid27 = new sdl.Object(__dirname + "/asteroid27.png");
asteroid27.depth(1);
asteroidXLocation27 = randRange(1, 1250);
asteroid27Health = 3;
asteroid27.x(asteroidXLocation27);


randomSpeed28 = randRange(3, 9);
asteroid28 = new sdl.Object(__dirname + "/asteroid28.png");
asteroid28.depth(1);
asteroidXLocation28 = randRange(1, 1250);
asteroid28Health = 2;
asteroid28.x(asteroidXLocation28);

// createAsteroid29
randomSpeed29 = randRange(3, 9);
asteroid29 = new sdl.Object(__dirname + "/asteroid29.png");
asteroid29.depth(1);
asteroidXLocation29 = randRange(1, 1250);
asteroid29Health = 3;
asteroid29.x(asteroidXLocation29);

// createAsteroidb5
randomSpeedb5 = randRange(3, 10);
asteroidb5 = new sdl.Object(__dirname + "/asteroidb5.png");
asteroidb5.depth(1);
asteroidXLocationb5 = randRange(1, 1250);
asteroidb5Health = 23;
asteroidb5.x(asteroidXLocationb5);

// createAsteroid30
randomSpeed30 = randRange(3, 9);
asteroid30 = new sdl.Object(__dirname + "/asteroid30.png");
asteroid30.depth(1);
asteroidXLocation30 = randRange(1, 1250);
asteroid30Health = 3;
asteroid30.x(asteroidXLocation30);

// createAsteroid31
randomSpeed31 = randRange(3, 9);
asteroid31 = new sdl.Object(__dirname + "/asteroid31.png");
asteroid31.depth(1);
asteroidXLocation31 = randRange(1, 1250);
asteroid31Health = 2;
asteroid31.x(asteroidXLocation31);

// createAsteroid32
randomSpeed32 = randRange(3, 9);
asteroid32 = new sdl.Object(__dirname + "/asteroid32.png");
asteroid32.depth(1);
asteroidXLocation32 = randRange(1, 1250);
asteroid32Health = 3;
asteroid32.x(asteroidXLocation32);

// createAsteroid33
randomSpeed33 = randRange(3, 9);
asteroid33 = new sdl.Object(__dirname + "/asteroid33.png");
asteroid33.depth(1);
asteroidXLocation33 = randRange(1, 1250);
asteroid33Health = 3;
asteroid33.x(asteroidXLocation33);

// createAsteroidb6
randomSpeedb6 = randRange(3, 11);
asteroidb6 = new sdl.Object(__dirname + "/asteroidb6.png");
asteroidb6.depth(1);
asteroidXLocationb6 = randRange(1, 1250);
asteroidb6Health = 28;
asteroidb6.x(asteroidXLocationb6);

// createAsteroid34
randomSpeed34 = randRange(4, 10);
asteroid34 = new sdl.Object(__dirname + "/asteroid34.png");
asteroid34.depth(1);
asteroidXLocation34 = randRange(1, 1250);
asteroid34Health = 3;
asteroid34.x(asteroidXLocation34);

//end of setup
game.mainLoop(function()
{
    var pressed = input.getPressed();
    if (pressed == input.X)
    {
    if (pauseGame == true)
    {
    pauseGame = false;
    textPaused.hide();
    sdl.resumeAudio();
    }	
    else{ 
    pauseGame = true;
    textPaused.show();
    sdl.pauseAudio();
    }
    }


    if (pressed == input.Y && pauseGame == false)
    {
    if(p1Bombs > 0) {
    p1Bombs--;
    useBomb = true;
    changeBombs();
    }
    }


    var key = input.getHeld();
    

    if (key == input.ZL && pauseGame == false)
    {
    if (shipLocation >= 0 && shipLocation <= 6) { shipLocation = shipLocation - Number("0");}
    else { shipLocation = shipLocation - Number("7");}
    ship.x(shipLocation);
    }

    if (key == (input.ZL + input.A) && pauseGame == false || key == (input.ZL + input.B) && pauseGame == false )
    {
    if (shipLocation >= 0 && shipLocation <= 6) { shipLocation = shipLocation - Number("0");}
    else { shipLocation = shipLocation - Number("7");}
    shotsFired();
    ship.x(shipLocation);
    }

    if (key == input.Minus && pauseGame == false)
    {
    if (shipLocation >= 0 && shipLocation <= 2) { shipLocation = shipLocation - Number("0");}
    else  { shipLocation = shipLocation - Number("3");}
    ship.x(shipLocation);
    }

    if (key == (input.Minus + input.A) && pauseGame == false || key == (input.Minus + input.B) && pauseGame == false)
    {
    if (shipLocation >= 0 && shipLocation <= 2) { shipLocation = shipLocation - Number("0");}
    else  { shipLocation = shipLocation - Number("3");}
    shotsFired();
    ship.x(shipLocation);
    }
 
    if (key == input.L && pauseGame == false || key == input.DPadLeft && pauseGame == false 
    || key == input.LStickLeft && pauseGame == false || key == input.RStickLeft && pauseGame == false)
    {
    if (shipLocation >= 0 && shipLocation <= 4) { shipLocation = shipLocation - Number("0");}
    else  { shipLocation = shipLocation - Number("5");}
    ship.x(shipLocation);
    }

    if (key == (input.L + input.A) && pauseGame == false || key == (input.L + input.B) && pauseGame == false 
    || key == (input.DPadLeft + input.A) && pauseGame == false || key == (input.DPadLeft + input.B) && pauseGame == false 
    || key == (input.LStickLeft + input.A) && pauseGame == false || key == (input.LStickLeft + input.B) && pauseGame == false 
    || key == (input.RStickLeft + input.A) && pauseGame == false || key == (input.RStickLeft + input.B) && pauseGame == false)
    {
    if (shipLocation >= 0 && shipLocation <= 4) { shipLocation = shipLocation - Number("0");}
    else  { shipLocation = shipLocation - Number("5");}
    shotsFired();
    ship.x(shipLocation);
    }

    if (key == input.ZR && pauseGame == false)
    { 
    if (shipLocation >= 1244 && shipLocation <= 1250) { shipLocation = shipLocation + Number("0");}
    else { shipLocation = shipLocation + Number("7");}
    ship.x(shipLocation);
    }

    if (key == (input.ZR + input.A) && pauseGame == false || key == (input.ZR + input.B) && pauseGame == false)
    { 
    if (shipLocation >= 1244 && shipLocation <= 1250) { shipLocation = shipLocation + Number("0");}
    else { shipLocation = shipLocation + Number("7");}
    shotsFired();
    ship.x(shipLocation);
    }

    if (key == input.Plus && pauseGame == false)
    {
    if (shipLocation >= 1248 && shipLocation <= 1250) { shipLocation = shipLocation + Number("0");}
    else { shipLocation = shipLocation + Number("3");}
    ship.x(shipLocation);
    }

    if (key == (input.Plus + input.A) && pauseGame == false || key == (input.Plus + input.B) && pauseGame == false)
    {
    if (shipLocation >= 1248 && shipLocation <= 1250) { shipLocation = shipLocation + Number("0");}
    else { shipLocation = shipLocation + Number("3");}
    shotsFired();
    ship.x(shipLocation);
    }

    if (key == input.R && pauseGame == false || key == input.DPadRight && pauseGame == false 
    || key == input.LStickRight && pauseGame == false || key == input.RStickRight && pauseGame == false)
    {
    if (shipLocation >= 1246 && shipLocation <= 1250) { shipLocation = shipLocation + Number("0");}
    else {shipLocation = shipLocation + Number("5"); }
    ship.x(shipLocation);
    }

    if (key == (input.R + input.A) && pauseGame == false || key == (input.R + input.B) && pauseGame == false 
    || key == (input.DPadRight + input.A) && pauseGame == false || key == (input.DPadRight + input.B) && pauseGame == false
    || key == (input.LStickRight + input.A) && pauseGame == false || key == (input.LStickRight + input.B) && pauseGame == false 
    || key == (input.RStickRight + input.A) && pauseGame == false || key == (input.RStickRight + input.B) && pauseGame == false)
    {
    if (shipLocation >= 1246 && shipLocation <= 1250) { shipLocation = shipLocation + Number("0");}
    else {shipLocation = shipLocation + Number("5"); }
    shotsFired();
    ship.x(shipLocation);
    }

    if (key == input.Touch && pauseGame == false)
    {
    // Get touch data, and set it as text's X and Y coordinates
    var tch = input.getTouch();
    //NEEDS WORK HERE FOR ACCURATE SHOTS
    if (tch.Y < 200 && shipLocation - tch.X < 100 || tch.Y < 200 && tch.X - shipLocation < 100) {
    shotsFired();
    }
    if (tch.X > shipLocation && tch.Y > 500) {
    if (shipLocation >= 1246 && shipLocation <= 1250) {shipLocation = shipLocation + Number("0");}
    else { shipLocation = shipLocation + Number("5");}
    ship.x(shipLocation);
    }
    if (tch.X < shipLocation && tch.Y > 500) {
    if (shipLocation >= 0 && shipLocation <= 4) {shipLocation = shipLocation - Number("0");}
    else {shipLocation = shipLocation - Number("5");}
    ship.x(shipLocation);
    }
    }
    //end of touch
    if (key == input.A && pauseGame == false || key == input.B && pauseGame == false)
    {
    shotsFired();
    }
    //end of A B

    /*
    if (key == (input.ZL + input.ZR) && pauseGame == false)
    {
    scoreUp();
    }
    */

      

//move shots

if ( createShot1.called == true && pauseGame == false) { shot1.depth(3); shot1.x(shotXLocation1); shot1.y(shotYLocation1); shot1.show(); shotYLocation1 = shotYLocation1 - 2; } if (shotYLocation1 <= 100){ resetShot1(); }

if ( createShot2.called == true && pauseGame == false) {	
shot2.depth(3);
shot2.x(shotXLocation2);
shot2.y(shotYLocation2);    
shot2.show();
shotYLocation2 = shotYLocation2 - 2;
}
if (shotYLocation2 <= 100){
resetShot2();
}


if ( createShot3.called == true && pauseGame == false) {
shot3.depth(3);
shot3.x(shotXLocation3);
shot3.y(shotYLocation3);    
shot3.show();
shotYLocation3 = shotYLocation3 - 2;
}
if (shotYLocation3 <= 100){
resetShot3();
}

if ( createShot4.called == true && pauseGame == false) {
shot4.depth(3);
shot4.x(shotXLocation4);
shot4.y(shotYLocation4);    
shot4.show();
shotYLocation4 = shotYLocation4 - 2;
}
if (shotYLocation4 <= 100){
resetShot4();
}

if ( createShot5.called == true && pauseGame == false) {
shot5.depth(3);
shot5.x(shotXLocation5);
shot5.y(shotYLocation5);    
shot5.show();
shotYLocation5 = shotYLocation5 - 2;
}
if (shotYLocation5 <= 100){
resetShot5();
}

if ( createShot6.called == true && pauseGame == false) {
shot6.depth(3);
shot6.x(shotXLocation6);
shot6.y(shotYLocation6);    
shot6.show();
shotYLocation6 = shotYLocation6 - 2;
}
if (shotYLocation6 <= 100){
resetShot6();
}

if ( createShot7.called == true && pauseGame == false) {
shot7.depth(3);	
shot7.x(shotXLocation7);
shot7.y(shotYLocation7);    
shot7.show();
shotYLocation7 = shotYLocation7 - 2;
}
if (shotYLocation7 <= 100){
resetShot7();
}

if ( createShot8.called == true && pauseGame == false) {
shot8.depth(3);
shot8.x(shotXLocation8);
shot8.y(shotYLocation8);    
shot8.show();
shotYLocation8 = shotYLocation8 - 2;
}
if (shotYLocation8 <= 100){
resetShot8();
}

if ( createShot9.called == true && pauseGame == false) {
shot9.depth(3);	
shot9.x(shotXLocation9);
shot9.y(shotYLocation9);    
shot9.show();
shotYLocation9 = shotYLocation9 - 2;
}
if (shotYLocation9 <= 100){
resetShot9();
}

if ( createShot10.called == true && pauseGame == false) {
shot10.depth(3);	
shot10.x(shotXLocation10);
shot10.y(shotYLocation10);    
shot10.show();
shotYLocation10 = shotYLocation10 - 2;
}
if (shotYLocation10 <= 100){
resetShot10();
}





if(useBomb == true) {resetAsteroid1();resetAsteroid2();resetAsteroid3();resetAsteroid4();resetAsteroid5();resetAsteroid6();
resetAsteroid7(); if (p1Score >= 30 ) {resetAsteroid8();} if (p1Score >= 50 ) {resetAsteroid9();} 
if (p1Score >= 70 ) {resetAsteroid10();} if (p1Score >= 115 ) {resetAsteroid11();}
if (p1Score >= 145 && asteroidb1Health > 0) {asteroidb1Health--; blownAsteroidb1();}
if (p1Score >= 190 ) {resetAsteroid12();} if (p1Score >= 270 ) {resetAsteroid13();}
if (p1Score >= 310 && asteroidb2Health > 0) {asteroidb2Health--; blownAsteroidb2();}
if (p1Score >= 350 ) {resetAsteroid14();} if (p1Score >= 410 ) {resetAsteroid15();}
if (p1Score >= 450 ) {resetAsteroid16();} if (p1Score >= 500 ) {resetAsteroid17();}
if (p1Score >= 575 && asteroidc1Health > 0) {asteroidc1Health--; blownAsteroidc1();}
if (p1Score >= 625 ) {resetAsteroid18();} if (p1Score >= 700 ) {resetAsteroid19();}
if (p1Score >= 740 && asteroidb3Health > 0) {asteroidb3Health--; blownAsteroidb3();}
if (p1Score >= 760 ) {resetAsteroid20();} if (p1Score >= 820 ) {resetAsteroid21();}
if (p1Score >= 880 && asteroidb4Health > 0) {asteroidb4Health--; blownAsteroidb4();}
if (p1Score >= 910 ) {resetAsteroid22();}
if (p1Score >= 940 && asteroid23Health > 0) {asteroid23Health--; resetAsteroid23();}
if (p1Score >= 1000 && asteroid24Health > 0) {asteroid24Health--; resetAsteroid24();}
if (p1Score >= 1035 && asteroid25Health > 0) {asteroid25Health--; resetAsteroid25();}
if (p1Score >= 1070 && asteroidc2Health > 0) {asteroidc2Health--; blownAsteroidc2();}
if (p1Score >= 1105 && asteroid26Health > 0) {asteroid26Health--; resetAsteroid26();}
if (p1Score >= 1210 && asteroid27Health > 0) {asteroid27Health--; resetAsteroid27();}
if (p1Score >= 1280 && asteroid28Health > 0) {asteroid28Health--; resetAsteroid28();} 
if (p1Score >= 1350 && asteroid29Health > 0) {asteroid29Health--; resetAsteroid29();}
if (p1Score >= 1385 && asteroidb5Health > 0) {asteroidb5Health--; blownAsteroidb5();} 
if (p1Score >= 1420 && asteroid30Health > 0) {asteroid30Health--; resetAsteroid30();} 
if (p1Score >= 1455 && asteroid31Health > 0) {asteroid31Health--; resetAsteroid31();} 
if (p1Score >= 1525 && asteroid32Health > 0) {asteroid32Health--; resetAsteroid32();}
if (p1Score >= 1560 && asteroid33Health > 0) {asteroid33Health--; resetAsteroid33();}
if (p1Score >= 1630 && asteroidb6Health > 0) {asteroidb6Health--; blownAsteroidb6();}
if (p1Score >= 1700 && asteroid34Health > 0) {asteroid34Health--; resetAsteroid34();}

}





if (createShot1.called == true){
if (shotYLocation1 <= asteroidYLocation1 + 10 && shotXLocation1 + 1 >= asteroidXLocation1 && shotXLocation1 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot1();}
else if (shotYLocation1 <= asteroidYLocation2 + 11 && shotXLocation1 + 1 >= asteroidXLocation2 && shotXLocation1 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot1();}
else if (shotYLocation1 <= asteroidYLocation3 + 22 && shotXLocation1 + 1 >= asteroidXLocation3 && shotXLocation1 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot1();}
else if (shotYLocation1 <= asteroidYLocation4 + 14 && shotXLocation1 + 4 >= asteroidXLocation4 && shotXLocation1 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot1();}
else if (shotYLocation1 <= asteroidYLocation5 + 19 && shotXLocation1 + 2 >= asteroidXLocation5 && shotXLocation1 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot1();}
else if (shotYLocation1 <= asteroidYLocation6 + 10 && shotXLocation1 + 1 >= asteroidXLocation6 && shotXLocation1 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot1();}
else if (shotYLocation1 <= asteroidYLocation7 + 20 && shotXLocation1 + 2 >= asteroidXLocation7 && shotXLocation1 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot1();}
else if (p1Score >= 30 && shotYLocation1 <= asteroidYLocation8 + 22 && shotXLocation1 + 1 >= asteroidXLocation8 && shotXLocation1 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot1();}
else if (p1Score >= 50 && shotYLocation1 <= asteroidYLocation9 + 8 && shotXLocation1 + 2 >= asteroidXLocation9 && shotXLocation1 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot1();}
else if (p1Score >= 70 && shotYLocation1 <= asteroidYLocation10 + 18 && shotXLocation1 + 2 >= asteroidXLocation10 && shotXLocation1 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot1();}
else if (p1Score >= 115 && shotYLocation1 <= asteroidYLocation11 + 19 && shotXLocation1 + 2 >= asteroidXLocation11 && shotXLocation1 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot1();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation1 <= asteroidYLocationb1 + 44 && shotXLocation1 + 2 >= asteroidXLocationb1 && shotXLocation1 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1();resetShot1();}else{asteroidb1Health--; blownAsteroidb1(); resetShot1();}
else if (p1Score >= 190 && shotYLocation1 <= asteroidYLocation12 + 10 && shotXLocation1 + 1 >= asteroidXLocation12 && shotXLocation1 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot1();}
else if (p1Score >= 270 && shotYLocation1 <= asteroidYLocation13 + 11 && shotXLocation1 + 1 >= asteroidXLocation13 && shotXLocation1 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot1();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation1 <= asteroidYLocationb2 + 44 && shotXLocation1 + 2 >= asteroidXLocationb2 && shotXLocation1 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2();resetShot1();}else{asteroidb2Health--; blownAsteroidb2(); resetShot1();}
else if (p1Score >= 350 && shotYLocation1 <= asteroidYLocation14 + 22 && shotXLocation1 + 1 >= asteroidXLocation14 && shotXLocation1 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot1();}
else if (p1Score >= 410 && shotYLocation1 <= asteroidYLocation15 + 14 && shotXLocation1 + 4 >= asteroidXLocation15 && shotXLocation1 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot1();}
else if (p1Score >= 450 && shotYLocation1 <= asteroidYLocation16 + 19 && shotXLocation1 + 2 >= asteroidXLocation16 && shotXLocation1 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot1();}
else if (p1Score >= 500 && shotYLocation1 <= asteroidYLocation17 + 10 && shotXLocation1 + 1 >= asteroidXLocation17 && shotXLocation1 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot1();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation1 <= asteroidYLocationc1 + 116 && shotXLocation1 + 2 >= asteroidXLocationc1 && shotXLocation1 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1();resetShot1();}else{asteroidc1Health--; blownAsteroidc1(); resetShot1();}
else if (p1Score >= 625 && shotYLocation1 <= asteroidYLocation18 + 20 && shotXLocation1 + 2 >= asteroidXLocation18 && shotXLocation1 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot1();}
else if (p1Score >= 700 && shotYLocation1 <= asteroidYLocation19 + 22 && shotXLocation1 + 1 >= asteroidXLocation19 && shotXLocation1 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot1();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation1 <= asteroidYLocationb3 + 44 && shotXLocation1 + 2 >= asteroidXLocationb3 && shotXLocation1 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3();resetShot1();}else{asteroidb3Health--; blownAsteroidb3(); resetShot1();}
else if (p1Score >= 760 && shotYLocation1 <= asteroidYLocation20 + 8 && shotXLocation1 + 2 >= asteroidXLocation20 && shotXLocation1 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot1();}
else if (p1Score >= 820 && shotYLocation1 <= asteroidYLocation21 + 18 && shotXLocation1 + 2 >= asteroidXLocation21 && shotXLocation1 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot1();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation1 <= asteroidYLocationb4 + 44 && shotXLocation1 + 2 >= asteroidXLocationb4 && shotXLocation1 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4();resetShot1();}else{asteroidb4Health--; blownAsteroidb4(); resetShot1();}
else if (p1Score >= 910 && shotYLocation1 <= asteroidYLocation22 + 19 && shotXLocation1 + 2 >= asteroidXLocation22 && shotXLocation1 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot1();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation1 <= asteroidYLocation23 + 10 && shotXLocation1 + 1 >= asteroidXLocation23 && shotXLocation1 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23();resetShot1();}else{asteroid23Health--; resetAsteroid23(); resetShot1();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation1 <= asteroidYLocation24 + 11 && shotXLocation1 + 1 >= asteroidXLocation24 && shotXLocation1 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24();resetShot1();}else{asteroid24Health--; resetAsteroid24(); resetShot1();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation1 <= asteroidYLocation25 + 22 && shotXLocation1 + 1 >= asteroidXLocation25 && shotXLocation1 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25();resetShot1();}else{asteroid25Health--; resetAsteroid25(); resetShot1();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation1 <= asteroidYLocationc2 + 116 && shotXLocation1 + 2 >= asteroidXLocationc2 && shotXLocation1 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2();resetShot1();}else{asteroidc2Health--; blownAsteroidc2(); resetShot1();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation1 <= asteroidYLocation26 + 14 && shotXLocation1 + 4 >= asteroidXLocation26 && shotXLocation1 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26();resetShot1();}else{asteroid26Health--; resetAsteroid26(); resetShot1();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation1 <= asteroidYLocation27 + 19 && shotXLocation1 + 2 >= asteroidXLocation27 && shotXLocation1 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27();resetShot1();}else{asteroid27Health--; resetAsteroid27(); resetShot1();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation1 <= asteroidYLocation28 + 10 && shotXLocation1 + 1 >= asteroidXLocation28 && shotXLocation1 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28();resetShot1();}else{asteroid28Health--; resetAsteroid28(); resetShot1();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation1 <= asteroidYLocation29 + 20 && shotXLocation1 + 2 >= asteroidXLocation29 && shotXLocation1 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29();resetShot1();}else{asteroid29Health--; resetAsteroid29(); resetShot1();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation1 <= asteroidYLocationb5 + 44 && shotXLocation1 + 2 >= asteroidXLocationb5 && shotXLocation1 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5();resetShot1();}else{asteroidb5Health--; blownAsteroidb5(); resetShot1();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation1 <= asteroidYLocation30 + 22 && shotXLocation1 + 1 >= asteroidXLocation30 && shotXLocation1 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30();resetShot1();}else{asteroid30Health--; resetAsteroid30(); resetShot1();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation1 <= asteroidYLocation31 + 8 && shotXLocation1 + 2 >= asteroidXLocation31 && shotXLocation1 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot1();}else{asteroid31Health--; resetAsteroid31(); resetShot1();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation1 <= asteroidYLocation32 + 18 && shotXLocation1 + 2 >= asteroidXLocation32 && shotXLocation1 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot1();}else{asteroid32Health--; resetAsteroid32(); resetShot1();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation1 <= asteroidYLocation33 + 19 && shotXLocation1 + 2 >= asteroidXLocation33 && shotXLocation1 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot1();}else{asteroid33Health--; resetAsteroid33(); resetShot1();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation1 <= asteroidYLocationb6 + 44 && shotXLocation1 + 2 >= asteroidXLocationb6 && shotXLocation1 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot1();}else{asteroidb6Health--; blownAsteroidb6(); resetShot1();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation1 <= asteroidYLocation34 + 10 && shotXLocation1 + 1 >= asteroidXLocation34 && shotXLocation1 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot1();}else{asteroid34Health--; resetAsteroid34(); resetShot1();}
}




if (createShot2.called == true){
if (shotYLocation2 <= asteroidYLocation1 + 10 && shotXLocation2 + 1 >= asteroidXLocation1 && shotXLocation2 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot2();}
else if (shotYLocation2 <= asteroidYLocation2 + 11 && shotXLocation2 + 1 >= asteroidXLocation2 && shotXLocation2 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot2();}
else if (shotYLocation2 <= asteroidYLocation3 + 22 && shotXLocation2  + 1 >= asteroidXLocation3 && shotXLocation2 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot2();}
else if (shotYLocation2 <= asteroidYLocation4 + 14 && shotXLocation2 + 4 >= asteroidXLocation4 && shotXLocation2 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot2();}
else if (shotYLocation2 <= asteroidYLocation5 + 19 && shotXLocation2 + 2 >= asteroidXLocation5 && shotXLocation2 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot2();}
else if (shotYLocation2 <= asteroidYLocation6 + 10 && shotXLocation2 + 1 >= asteroidXLocation6 && shotXLocation2 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot2();}
else if (shotYLocation2 <= asteroidYLocation7 + 20 && shotXLocation2 + 2 >= asteroidXLocation7 && shotXLocation2 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot2();}
else if (p1Score >= 30 && shotYLocation2 <= asteroidYLocation8 + 22 && shotXLocation2 + 1 >= asteroidXLocation8 && shotXLocation2 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot2();} 
else if (p1Score >= 50 && shotYLocation2 <= asteroidYLocation9 + 8 && shotXLocation2 + 2 >= asteroidXLocation9 && shotXLocation2 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot2();} 
else if (p1Score >= 70 && shotYLocation2 <= asteroidYLocation10 + 18 && shotXLocation2 + 2 >= asteroidXLocation10 && shotXLocation2 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot2();} 
else if (p1Score >= 115 && shotYLocation2 <= asteroidYLocation11 + 19 && shotXLocation2 + 2 >= asteroidXLocation11 && shotXLocation2 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot2();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation2 <= asteroidYLocationb1 + 44 && shotXLocation2 + 2 >= asteroidXLocationb1 && shotXLocation2 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1();resetShot2();}else{asteroidb1Health--; blownAsteroidb1(); resetShot2();}
else if (p1Score >= 190 && shotYLocation2 <= asteroidYLocation12 + 10 && shotXLocation2 + 1 >= asteroidXLocation12 && shotXLocation2 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot2();}
else if (p1Score >= 270 && shotYLocation2 <= asteroidYLocation13 + 11 && shotXLocation2 + 1 >= asteroidXLocation13 && shotXLocation2 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot2();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation2 <= asteroidYLocationb2 + 44 && shotXLocation2 + 2 >= asteroidXLocationb2 && shotXLocation2 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2();resetShot2();}else{asteroidb2Health--; blownAsteroidb2(); resetShot2();}
else if (p1Score >= 350 && shotYLocation2 <= asteroidYLocation14 + 22 && shotXLocation2 + 1 >= asteroidXLocation14 && shotXLocation2 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot2();}
else if (p1Score >= 410 && shotYLocation2 <= asteroidYLocation15 + 14 && shotXLocation2 + 4 >= asteroidXLocation15 && shotXLocation2 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot2();}
else if (p1Score >= 450 && shotYLocation2 <= asteroidYLocation16 + 19 && shotXLocation2 + 2 >= asteroidXLocation16 && shotXLocation2 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot2();}
else if (p1Score >= 500 && shotYLocation2 <= asteroidYLocation17 + 10 && shotXLocation2 + 1 >= asteroidXLocation17 && shotXLocation2 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot2();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation2 <= asteroidYLocationc1 + 116 && shotXLocation2 + 2 >= asteroidXLocationc1 && shotXLocation2 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1();resetShot2();}else{asteroidc1Health--; blownAsteroidc1(); resetShot2();}
else if (p1Score >= 625 && shotYLocation2 <= asteroidYLocation18 + 20 && shotXLocation2 + 2 >= asteroidXLocation18 && shotXLocation2 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot2();}
else if (p1Score >= 700 && shotYLocation2 <= asteroidYLocation19 + 22 && shotXLocation2 + 1 >= asteroidXLocation19 && shotXLocation2 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot2();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation2 <= asteroidYLocationb3 + 44 && shotXLocation2 + 2 >= asteroidXLocationb3 && shotXLocation2 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3();resetShot2();}else{asteroidb3Health--; blownAsteroidb3(); resetShot2();}
else if (p1Score >= 760 && shotYLocation2 <= asteroidYLocation20 + 8 && shotXLocation2 + 2 >= asteroidXLocation20 && shotXLocation2 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot2();}
else if (p1Score >= 820 && shotYLocation2 <= asteroidYLocation21 + 18 && shotXLocation2 + 2 >= asteroidXLocation21 && shotXLocation2 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot2();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation2 <= asteroidYLocationb4 + 44 && shotXLocation2 + 2 >= asteroidXLocationb4 && shotXLocation2 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4();resetShot2();}else{asteroidb4Health--; blownAsteroidb4(); resetShot2();}
else if (p1Score >= 910 && shotYLocation2 <= asteroidYLocation22 + 19 && shotXLocation2 + 2 >= asteroidXLocation22 && shotXLocation2 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot2();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation2 <= asteroidYLocation23 + 10 && shotXLocation2 + 1 >= asteroidXLocation23 && shotXLocation2 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23();resetShot2();}else{asteroid23Health--; resetAsteroid23(); resetShot2();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation2 <= asteroidYLocation24 + 11 && shotXLocation2 + 1 >= asteroidXLocation24 && shotXLocation2 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24();resetShot2();}else{asteroid24Health--; resetAsteroid24(); resetShot2();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation2 <= asteroidYLocation25 + 22 && shotXLocation2 + 1 >= asteroidXLocation25 && shotXLocation2 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25();resetShot2();}else{asteroid25Health--; resetAsteroid25(); resetShot2();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation2 <= asteroidYLocationc2 + 116 && shotXLocation2 + 2 >= asteroidXLocationc2 && shotXLocation2 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2();resetShot2();}else{asteroidc2Health--; blownAsteroidc2(); resetShot2();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation2 <= asteroidYLocation26 + 14 && shotXLocation2 + 4 >= asteroidXLocation26 && shotXLocation2 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26();resetShot2();}else{asteroid26Health--; resetAsteroid26(); resetShot2();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation2 <= asteroidYLocation27 + 19 && shotXLocation2 + 2 >= asteroidXLocation27 && shotXLocation2 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27();resetShot2();}else{asteroid27Health--; resetAsteroid27(); resetShot2();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation2 <= asteroidYLocation28 + 10 && shotXLocation2 + 1 >= asteroidXLocation28 && shotXLocation2 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28();resetShot2();}else{asteroid28Health--; resetAsteroid28(); resetShot2();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation2 <= asteroidYLocation29 + 20 && shotXLocation2 + 2 >= asteroidXLocation29 && shotXLocation2 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29();resetShot2();}else{asteroid29Health--; resetAsteroid29(); resetShot2();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation2 <= asteroidYLocationb5 + 44 && shotXLocation2 + 2 >= asteroidXLocationb5 && shotXLocation2 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5();resetShot2();}else{asteroidb5Health--; blownAsteroidb5(); resetShot2();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation2 <= asteroidYLocation30 + 22 && shotXLocation2 + 1 >= asteroidXLocation30 && shotXLocation2 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30();resetShot2();}else{asteroid30Health--; resetAsteroid30(); resetShot2();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation2 <= asteroidYLocation31 + 8 && shotXLocation2 + 2 >= asteroidXLocation31 && shotXLocation2 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot2();}else{asteroid31Health--; resetAsteroid31(); resetShot2();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation2 <= asteroidYLocation32 + 18 && shotXLocation2 + 2 >= asteroidXLocation32 && shotXLocation2 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot2();}else{asteroid32Health--; resetAsteroid32(); resetShot2();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation2 <= asteroidYLocation33 + 19 && shotXLocation2 + 2 >= asteroidXLocation33 && shotXLocation2 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot2();}else{asteroid33Health--; resetAsteroid33(); resetShot2();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation2 <= asteroidYLocationb6 + 44 && shotXLocation2 + 2 >= asteroidXLocationb6 && shotXLocation2 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot2();}else{asteroidb6Health--; blownAsteroidb6(); resetShot2();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation2 <= asteroidYLocation34 + 10 && shotXLocation2 + 1 >= asteroidXLocation34 && shotXLocation2 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot2();}else{asteroid34Health--; resetAsteroid34(); resetShot2();}
}


if (createShot3.called == true){
if (shotYLocation3 <= asteroidYLocation1 + 10 && shotXLocation3 + 1 >= asteroidXLocation1 && shotXLocation3 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot3();}
else if (shotYLocation3 <= asteroidYLocation2 + 11 && shotXLocation3 + 1 >= asteroidXLocation2 && shotXLocation3 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot3();}
else if (shotYLocation3 <= asteroidYLocation3 + 22 && shotXLocation3 + 1 >= asteroidXLocation3 && shotXLocation3 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot3();}
else if (shotYLocation3 <= asteroidYLocation4 + 14 && shotXLocation3 + 4 >= asteroidXLocation4 && shotXLocation3 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot3();}
else if (shotYLocation3 <= asteroidYLocation5 + 19 && shotXLocation3 + 2 >= asteroidXLocation5 && shotXLocation3 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot3();}
else if (shotYLocation3 <= asteroidYLocation6 + 10 && shotXLocation3 + 1 >= asteroidXLocation6 && shotXLocation3 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot3();}
else if (shotYLocation3 <= asteroidYLocation7 + 20 && shotXLocation3 + 2 >= asteroidXLocation7 && shotXLocation3 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot3();} 
else if (p1Score >= 30 && shotYLocation3 <= asteroidYLocation8 + 22 && shotXLocation3 + 1 >= asteroidXLocation8 && shotXLocation3 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot3();}
else if (p1Score >= 50 && shotYLocation3 <= asteroidYLocation9 + 8 && shotXLocation3 + 2 >= asteroidXLocation9 && shotXLocation3 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot3();}
else if (p1Score >= 70 && shotYLocation3 <= asteroidYLocation10 + 18 && shotXLocation3 + 2 >= asteroidXLocation10 && shotXLocation3 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot3();}
else if (p1Score >= 115 && shotYLocation3 <= asteroidYLocation11 + 19 && shotXLocation3 + 2 >= asteroidXLocation11 && shotXLocation3 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot3();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation3 <= asteroidYLocationb1 + 44 && shotXLocation3 + 2 >= asteroidXLocationb1 && shotXLocation3 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot3();}else{asteroidb1Health--; blownAsteroidb1(); resetShot3();}
else if (p1Score >= 190 && shotYLocation3 <= asteroidYLocation12 + 10 && shotXLocation3 + 1 >= asteroidXLocation12 && shotXLocation3 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot3();}
else if (p1Score >= 270 && shotYLocation3 <= asteroidYLocation13 + 11 && shotXLocation3 + 1 >= asteroidXLocation13 && shotXLocation3 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot3();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation3 <= asteroidYLocationb2 + 44 && shotXLocation3 + 2 >= asteroidXLocationb2 && shotXLocation3 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot3();}else{asteroidb2Health--; blownAsteroidb2(); resetShot3();}
else if (p1Score >= 350 && shotYLocation3 <= asteroidYLocation14 + 22 && shotXLocation3 + 1 >= asteroidXLocation14 && shotXLocation3 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot3();}
else if (p1Score >= 410 && shotYLocation3 <= asteroidYLocation15 + 14 && shotXLocation3 + 4 >= asteroidXLocation15 && shotXLocation3 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot3();}
else if (p1Score >= 450 && shotYLocation3 <= asteroidYLocation16 + 19 && shotXLocation3 + 2 >= asteroidXLocation16 && shotXLocation3 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot3();}
else if (p1Score >= 500 && shotYLocation3 <= asteroidYLocation17 + 10 && shotXLocation3 + 1 >= asteroidXLocation17 && shotXLocation3 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot3();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation3 <= asteroidYLocationc1 + 116 && shotXLocation3 + 2 >= asteroidXLocationc1 && shotXLocation3 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot3();}else{asteroidc1Health--; blownAsteroidc1(); resetShot3();}
else if (p1Score >= 625 && shotYLocation3 <= asteroidYLocation18 + 20 && shotXLocation3 + 2 >= asteroidXLocation18 && shotXLocation3 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot3();}
else if (p1Score >= 700 && shotYLocation3 <= asteroidYLocation19 + 22 && shotXLocation3 + 1 >= asteroidXLocation19 && shotXLocation3 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot3();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation3 <= asteroidYLocationb3 + 44 && shotXLocation3 + 2 >= asteroidXLocationb3 && shotXLocation3 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot3();}else{asteroidb3Health--; blownAsteroidb3(); resetShot3();}
else if (p1Score >= 760 && shotYLocation3 <= asteroidYLocation20 + 8 && shotXLocation3 + 2 >= asteroidXLocation20 && shotXLocation3 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot3();}
else if (p1Score >= 820 && shotYLocation3 <= asteroidYLocation21 + 18 && shotXLocation3 + 2 >= asteroidXLocation21 && shotXLocation3 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot3();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation3 <= asteroidYLocationb4 + 44 && shotXLocation3 + 2 >= asteroidXLocationb4 && shotXLocation3 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot3();}else{asteroidb4Health--; blownAsteroidb4(); resetShot3();}
else if (p1Score >= 910 && shotYLocation3 <= asteroidYLocation22 + 19 && shotXLocation3 + 2 >= asteroidXLocation22 && shotXLocation3 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot3();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation3 <= asteroidYLocation23 + 10 && shotXLocation3 + 1 >= asteroidXLocation23 && shotXLocation3 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot3();}else{asteroid23Health--; resetAsteroid23(); resetShot3();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation3 <= asteroidYLocation24 + 11 && shotXLocation3 + 1 >= asteroidXLocation24 && shotXLocation3 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot3();}else{asteroid24Health--; resetAsteroid24(); resetShot3();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation3 <= asteroidYLocation25 + 22 && shotXLocation3 + 1 >= asteroidXLocation25 && shotXLocation3 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot3();}else{asteroid25Health--; resetAsteroid25(); resetShot3();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation3 <= asteroidYLocationc2 + 116 && shotXLocation3 + 2 >= asteroidXLocationc2 && shotXLocation3 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot3();}else{asteroidc2Health--; blownAsteroidc2(); resetShot3();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation3 <= asteroidYLocation26 + 14 && shotXLocation3 + 4 >= asteroidXLocation26 && shotXLocation3 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot3();}else{asteroid26Health--; resetAsteroid26(); resetShot3();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation3 <= asteroidYLocation27 + 19 && shotXLocation3 + 2 >= asteroidXLocation27 && shotXLocation3 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot3();}else{asteroid27Health--; resetAsteroid27(); resetShot3();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation3 <= asteroidYLocation28 + 10 && shotXLocation3 + 1 >= asteroidXLocation28 && shotXLocation3 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot3();}else{asteroid28Health--; resetAsteroid28(); resetShot3();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation3 <= asteroidYLocation29 + 20 && shotXLocation3 + 2 >= asteroidXLocation29 && shotXLocation3 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot3();}else{asteroid29Health--; resetAsteroid29(); resetShot3();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation3 <= asteroidYLocationb5 + 44 && shotXLocation3 + 2 >= asteroidXLocationb5 && shotXLocation3 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot3();}else{asteroidb5Health--; blownAsteroidb5(); resetShot3();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation3 <= asteroidYLocation30 + 22 && shotXLocation3 + 1 >= asteroidXLocation30 && shotXLocation3 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot3();}else{asteroid30Health--; resetAsteroid30(); resetShot3();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation3 <= asteroidYLocation31 + 8 && shotXLocation3 + 2 >= asteroidXLocation31 && shotXLocation3 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot3();}else{asteroid31Health--; resetAsteroid31(); resetShot3();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation3 <= asteroidYLocation32 + 18 && shotXLocation3 + 2 >= asteroidXLocation32 && shotXLocation3 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot3();}else{asteroid32Health--; resetAsteroid32(); resetShot3();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation3 <= asteroidYLocation33 + 19 && shotXLocation3 + 2 >= asteroidXLocation33 && shotXLocation3 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot3();}else{asteroid33Health--; resetAsteroid33(); resetShot3();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation3 <= asteroidYLocationb6 + 44 && shotXLocation3 + 2 >= asteroidXLocationb6 && shotXLocation3 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot3();}else{asteroidb6Health--; blownAsteroidb6(); resetShot3();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation3 <= asteroidYLocation34 + 10 && shotXLocation3 + 1 >= asteroidXLocation34 && shotXLocation3 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot3();}else{asteroid34Health--; resetAsteroid34(); resetShot3();}
}


if (createShot4.called == true){
if (shotYLocation4 <= asteroidYLocation1 + 10 && shotXLocation4 + 1 >= asteroidXLocation1 && shotXLocation4 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot4();}
else if (shotYLocation4 <= asteroidYLocation2 + 11 && shotXLocation4 + 1 >= asteroidXLocation2 && shotXLocation4 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot4();}
else if (shotYLocation4 <= asteroidYLocation3 + 22 && shotXLocation4 + 1 >= asteroidXLocation3 && shotXLocation4 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot4();}
else if (shotYLocation4 <= asteroidYLocation4 + 14 && shotXLocation4 + 4 >= asteroidXLocation4 && shotXLocation4 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot4();}
else if (shotYLocation4 <= asteroidYLocation5 + 19 && shotXLocation4 + 2 >= asteroidXLocation5 && shotXLocation4 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot4();}
else if (shotYLocation4 <= asteroidYLocation6 + 10 && shotXLocation4 + 1 >= asteroidXLocation6 && shotXLocation4 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot4();}
else if (shotYLocation4 <= asteroidYLocation7 + 20 && shotXLocation4 + 2 >= asteroidXLocation7 && shotXLocation4 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot4();} 
else if (p1Score >= 30 && shotYLocation4 <= asteroidYLocation8 + 22 && shotXLocation4 + 1 >= asteroidXLocation8 && shotXLocation4 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot4();}
else if (p1Score >= 50 && shotYLocation4 <= asteroidYLocation9 + 8 && shotXLocation4 + 2 >= asteroidXLocation9 && shotXLocation4 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot4();}
else if (p1Score >= 70 && shotYLocation4 <= asteroidYLocation10 + 18 && shotXLocation4 + 2 >= asteroidXLocation10 && shotXLocation4 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot4();}
else if (p1Score >= 115 && shotYLocation4 <= asteroidYLocation11 + 19 && shotXLocation4 + 2 >= asteroidXLocation11 && shotXLocation4 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot4();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation4 <= asteroidYLocationb1 + 44 && shotXLocation4 + 2 >= asteroidXLocationb1 && shotXLocation4 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot4();}else{asteroidb1Health--; blownAsteroidb1(); resetShot4();}
else if (p1Score >= 190 && shotYLocation4 <= asteroidYLocation12 + 10 && shotXLocation4 + 1 >= asteroidXLocation12 && shotXLocation4 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot4();}
else if (p1Score >= 270 && shotYLocation4 <= asteroidYLocation13 + 11 && shotXLocation4 + 1 >= asteroidXLocation13 && shotXLocation4 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot4();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation4 <= asteroidYLocationb2 + 44 && shotXLocation4 + 2 >= asteroidXLocationb2 && shotXLocation4 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot4();}else{asteroidb2Health--; blownAsteroidb2(); resetShot4();}
else if (p1Score >= 350 && shotYLocation4 <= asteroidYLocation14 + 22 && shotXLocation4 + 1 >= asteroidXLocation14 && shotXLocation4 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot4();}
else if (p1Score >= 410 && shotYLocation4 <= asteroidYLocation15 + 14 && shotXLocation4 + 4 >= asteroidXLocation15 && shotXLocation4 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot4();}
else if (p1Score >= 450 && shotYLocation4 <= asteroidYLocation16 + 19 && shotXLocation4 + 2 >= asteroidXLocation16 && shotXLocation4 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot4();}
else if (p1Score >= 500 && shotYLocation4 <= asteroidYLocation17 + 10 && shotXLocation4 + 1 >= asteroidXLocation17 && shotXLocation4 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot4();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation4 <= asteroidYLocationc1 + 116 && shotXLocation4 + 2 >= asteroidXLocationc1 && shotXLocation4 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot4();}else{asteroidc1Health--; blownAsteroidc1(); resetShot4();}
else if (p1Score >= 625 && shotYLocation4 <= asteroidYLocation18 + 20 && shotXLocation4 + 2 >= asteroidXLocation18 && shotXLocation4 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot4();}
else if (p1Score >= 700 && shotYLocation4 <= asteroidYLocation19 + 22 && shotXLocation4 + 1 >= asteroidXLocation19 && shotXLocation4 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot4();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation4 <= asteroidYLocationb3 + 44 && shotXLocation4 + 2 >= asteroidXLocationb3 && shotXLocation4 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot4();}else{asteroidb3Health--; blownAsteroidb3(); resetShot4();}
else if (p1Score >= 760 && shotYLocation4 <= asteroidYLocation20 + 8 && shotXLocation4 + 2 >= asteroidXLocation20 && shotXLocation4 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot4();}
else if (p1Score >= 820 && shotYLocation4 <= asteroidYLocation21 + 18 && shotXLocation4 + 2 >= asteroidXLocation21 && shotXLocation4 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot4();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation4 <= asteroidYLocationb4 + 44 && shotXLocation4 + 2 >= asteroidXLocationb4 && shotXLocation4 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot4();}else{asteroidb4Health--; blownAsteroidb4(); resetShot4();}
else if (p1Score >= 910 && shotYLocation4 <= asteroidYLocation22 + 19 && shotXLocation4 + 2 >= asteroidXLocation22 && shotXLocation4 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot4();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation4 <= asteroidYLocation23 + 10 && shotXLocation4 + 1 >= asteroidXLocation23 && shotXLocation4 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot4();}else{asteroid23Health--; resetAsteroid23(); resetShot4();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation4 <= asteroidYLocation24 + 11 && shotXLocation4 + 1 >= asteroidXLocation24 && shotXLocation4 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot4();}else{asteroid24Health--; resetAsteroid24(); resetShot4();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation4 <= asteroidYLocation25 + 22 && shotXLocation4 + 1 >= asteroidXLocation25 && shotXLocation4 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot4();}else{asteroid25Health--; resetAsteroid25(); resetShot4();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation4 <= asteroidYLocationc2 + 116 && shotXLocation4 + 2 >= asteroidXLocationc2 && shotXLocation4 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot4();}else{asteroidc2Health--; blownAsteroidc2(); resetShot4();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation4 <= asteroidYLocation26 + 14 && shotXLocation4 + 4 >= asteroidXLocation26 && shotXLocation4 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot4();}else{asteroid26Health--; resetAsteroid26(); resetShot4();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation4 <= asteroidYLocation27 + 19 && shotXLocation4 + 2 >= asteroidXLocation27 && shotXLocation4 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot4();}else{asteroid27Health--; resetAsteroid27(); resetShot4();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation4 <= asteroidYLocation28 + 10 && shotXLocation4 + 1 >= asteroidXLocation28 && shotXLocation4 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot4();}else{asteroid28Health--; resetAsteroid28(); resetShot4();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation4 <= asteroidYLocation29 + 20 && shotXLocation4 + 2 >= asteroidXLocation29 && shotXLocation4 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot4();}else{asteroid29Health--; resetAsteroid29(); resetShot4();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation4 <= asteroidYLocationb5 + 44 && shotXLocation4 + 2 >= asteroidXLocationb5 && shotXLocation4 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot4();}else{asteroidb5Health--; blownAsteroidb5(); resetShot4();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation4 <= asteroidYLocation30 + 22 && shotXLocation4 + 1 >= asteroidXLocation30 && shotXLocation4 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot4();}else{asteroid30Health--; resetAsteroid30(); resetShot4();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation4 <= asteroidYLocation31 + 8 && shotXLocation4 + 2 >= asteroidXLocation31 && shotXLocation4 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot4();}else{asteroid31Health--; resetAsteroid31(); resetShot4();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation4 <= asteroidYLocation32 + 18 && shotXLocation4 + 2 >= asteroidXLocation32 && shotXLocation4 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot4();}else{asteroid32Health--; resetAsteroid32(); resetShot4();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation4 <= asteroidYLocation33 + 19 && shotXLocation4 + 2 >= asteroidXLocation33 && shotXLocation4 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot4();}else{asteroid33Health--; resetAsteroid33(); resetShot4();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation4 <= asteroidYLocationb6 + 44 && shotXLocation4 + 2 >= asteroidXLocationb6 && shotXLocation4 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot4();}else{asteroidb6Health--; blownAsteroidb6(); resetShot4();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation4 <= asteroidYLocation34 + 10 && shotXLocation4 + 1 >= asteroidXLocation34 && shotXLocation4 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot4();}else{asteroid34Health--; resetAsteroid34(); resetShot4();}
}


if (createShot5.called == true){
if (shotYLocation5 <= asteroidYLocation1 + 10 && shotXLocation5 + 1 >= asteroidXLocation1 && shotXLocation5 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot5();}
else if (shotYLocation5 <= asteroidYLocation2 + 11 && shotXLocation5 + 1 >= asteroidXLocation2 && shotXLocation5 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot5();}
else if (shotYLocation5 <= asteroidYLocation3 + 22 && shotXLocation5 + 1 >= asteroidXLocation3 && shotXLocation5 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot5();}
else if (shotYLocation5 <= asteroidYLocation4 + 14 && shotXLocation5 + 4 >= asteroidXLocation4 && shotXLocation5 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot5();}
else if (shotYLocation5 <= asteroidYLocation5 + 19 && shotXLocation5 + 2 >= asteroidXLocation5 && shotXLocation5 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot5();}
else if (shotYLocation5 <= asteroidYLocation6 + 10 && shotXLocation5 + 1 >= asteroidXLocation6 && shotXLocation5 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot5();}
else if (shotYLocation5 <= asteroidYLocation7 + 20 && shotXLocation5 + 2 >= asteroidXLocation7 && shotXLocation5 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot5();} 
else if (p1Score >= 30 && shotYLocation5 <= asteroidYLocation8 + 22 && shotXLocation5 + 1 >= asteroidXLocation8 && shotXLocation5 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot5();}
else if (p1Score >= 50 && shotYLocation5 <= asteroidYLocation9 + 8 && shotXLocation5 + 2 >= asteroidXLocation9 && shotXLocation5 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot5();}
else if (p1Score >= 70 && shotYLocation5 <= asteroidYLocation10 + 18 && shotXLocation5 + 2 >= asteroidXLocation10 && shotXLocation5 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot5();}
else if (p1Score >= 115 && shotYLocation5 <= asteroidYLocation11 + 19 && shotXLocation5 + 2 >= asteroidXLocation11 && shotXLocation5 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot5();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation5 <= asteroidYLocationb1 + 44 && shotXLocation5 + 2 >= asteroidXLocationb1 && shotXLocation5 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot5();}else{asteroidb1Health--; blownAsteroidb1(); resetShot5();}
else if (p1Score >= 190 && shotYLocation5 <= asteroidYLocation12 + 10 && shotXLocation5 + 1 >= asteroidXLocation12 && shotXLocation5 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot5();}
else if (p1Score >= 270 && shotYLocation5 <= asteroidYLocation13 + 11 && shotXLocation5 + 1 >= asteroidXLocation13 && shotXLocation5 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot5();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation5 <= asteroidYLocationb2 + 44 && shotXLocation5 + 2 >= asteroidXLocationb2 && shotXLocation5 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot5();}else{asteroidb2Health--; blownAsteroidb2(); resetShot5();}
else if (p1Score >= 350 && shotYLocation5 <= asteroidYLocation14 + 22 && shotXLocation5 + 1 >= asteroidXLocation14 && shotXLocation5 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot5();}
else if (p1Score >= 410 && shotYLocation5 <= asteroidYLocation15 + 14 && shotXLocation5 + 4 >= asteroidXLocation15 && shotXLocation5 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot5();}
else if (p1Score >= 450 && shotYLocation5 <= asteroidYLocation16 + 19 && shotXLocation5 + 2 >= asteroidXLocation16 && shotXLocation5 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot5();}
else if (p1Score >= 500 && shotYLocation5 <= asteroidYLocation17 + 10 && shotXLocation5 + 1 >= asteroidXLocation17 && shotXLocation5 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot5();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation5 <= asteroidYLocationc1 + 116 && shotXLocation5 + 2 >= asteroidXLocationc1 && shotXLocation5 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot5();}else{asteroidc1Health--; blownAsteroidc1(); resetShot5();}
else if (p1Score >= 625 && shotYLocation5 <= asteroidYLocation18 + 20 && shotXLocation5 + 2 >= asteroidXLocation18 && shotXLocation5 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot5();}
else if (p1Score >= 700 && shotYLocation5 <= asteroidYLocation19 + 22 && shotXLocation5 + 1 >= asteroidXLocation19 && shotXLocation5 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot5();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation5 <= asteroidYLocationb3 + 44 && shotXLocation5 + 2 >= asteroidXLocationb3 && shotXLocation5 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot5();}else{asteroidb3Health--; blownAsteroidb3(); resetShot5();}
else if (p1Score >= 760 && shotYLocation5 <= asteroidYLocation20 + 8 && shotXLocation5 + 2 >= asteroidXLocation20 && shotXLocation5 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot5();}
else if (p1Score >= 820 && shotYLocation5 <= asteroidYLocation21 + 18 && shotXLocation5 + 2 >= asteroidXLocation21 && shotXLocation5 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot5();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation5 <= asteroidYLocationb4 + 44 && shotXLocation5 + 2 >= asteroidXLocationb4 && shotXLocation5 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot5();}else{asteroidb4Health--; blownAsteroidb4(); resetShot5();}
else if (p1Score >= 910 && shotYLocation5 <= asteroidYLocation22 + 19 && shotXLocation5 + 2 >= asteroidXLocation22 && shotXLocation5 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot5();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation5 <= asteroidYLocation23 + 10 && shotXLocation5 + 1 >= asteroidXLocation23 && shotXLocation5 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot5();}else{asteroid23Health--; resetAsteroid23(); resetShot5();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation5 <= asteroidYLocation24 + 11 && shotXLocation5 + 1 >= asteroidXLocation24 && shotXLocation5 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot5();}else{asteroid24Health--; resetAsteroid24(); resetShot5();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation5 <= asteroidYLocation25 + 22 && shotXLocation5 + 1 >= asteroidXLocation25 && shotXLocation5 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot5();}else{asteroid25Health--; resetAsteroid25(); resetShot5();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation5 <= asteroidYLocationc2 + 116 && shotXLocation5 + 2 >= asteroidXLocationc2 && shotXLocation5 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot5();}else{asteroidc2Health--; blownAsteroidc2(); resetShot5();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation5 <= asteroidYLocation26 + 14 && shotXLocation5 + 4 >= asteroidXLocation26 && shotXLocation5 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot5();}else{asteroid26Health--; resetAsteroid26(); resetShot5();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation5 <= asteroidYLocation27 + 19 && shotXLocation5 + 2 >= asteroidXLocation27 && shotXLocation5 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot5();}else{asteroid27Health--; resetAsteroid27(); resetShot5();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation5 <= asteroidYLocation28 + 10 && shotXLocation5 + 1 >= asteroidXLocation28 && shotXLocation5 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot5();}else{asteroid28Health--; resetAsteroid28(); resetShot5();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation5 <= asteroidYLocation29 + 20 && shotXLocation5 + 2 >= asteroidXLocation29 && shotXLocation5 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot5();}else{asteroid29Health--; resetAsteroid29(); resetShot5();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation5 <= asteroidYLocationb5 + 44 && shotXLocation5 + 2 >= asteroidXLocationb5 && shotXLocation5 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot5();}else{asteroidb5Health--; blownAsteroidb5(); resetShot5();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation5 <= asteroidYLocation30 + 22 && shotXLocation5 + 1 >= asteroidXLocation30 && shotXLocation5 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot5();}else{asteroid30Health--; resetAsteroid30(); resetShot5();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation5 <= asteroidYLocation31 + 8 && shotXLocation5 + 2 >= asteroidXLocation31 && shotXLocation5 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot5();}else{asteroid31Health--; resetAsteroid31(); resetShot5();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation5 <= asteroidYLocation32 + 18 && shotXLocation5 + 2 >= asteroidXLocation32 && shotXLocation5 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot5();}else{asteroid32Health--; resetAsteroid32(); resetShot5();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation5 <= asteroidYLocation33 + 19 && shotXLocation5 + 2 >= asteroidXLocation33 && shotXLocation5 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot5();}else{asteroid33Health--; resetAsteroid33(); resetShot5();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation5 <= asteroidYLocationb6 + 44 && shotXLocation5 + 2 >= asteroidXLocationb6 && shotXLocation5 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot5();}else{asteroidb6Health--; blownAsteroidb6(); resetShot5();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation5 <= asteroidYLocation34 + 10 && shotXLocation5 + 1 >= asteroidXLocation34 && shotXLocation5 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot5();}else{asteroid34Health--; resetAsteroid34(); resetShot5();}
}


if (createShot6.called == true){
if (shotYLocation6 <= asteroidYLocation1 + 10 && shotXLocation6 + 1 >= asteroidXLocation1 && shotXLocation6 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot6();}
else if (shotYLocation6 <= asteroidYLocation2 + 11 && shotXLocation6 + 1 >= asteroidXLocation2 && shotXLocation6 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot6();}
else if (shotYLocation6 <= asteroidYLocation3 + 22 && shotXLocation6 + 1 >= asteroidXLocation3 && shotXLocation6 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot6();}
else if (shotYLocation6 <= asteroidYLocation4 + 14 && shotXLocation6 + 4 >= asteroidXLocation4 && shotXLocation6 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot6();}
else if (shotYLocation6 <= asteroidYLocation5 + 19 && shotXLocation6 + 2 >= asteroidXLocation5 && shotXLocation6 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot6();}
else if (shotYLocation6 <= asteroidYLocation6 + 10 && shotXLocation6 + 1 >= asteroidXLocation6 && shotXLocation6 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot6();}
else if (shotYLocation6 <= asteroidYLocation7 + 20 && shotXLocation6 + 2 >= asteroidXLocation7 && shotXLocation6 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot6();}
else if (p1Score >= 30 && shotYLocation6 <= asteroidYLocation8 + 22 && shotXLocation6 + 1 >= asteroidXLocation8 && shotXLocation6 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot6();}
else if (p1Score >= 50 && shotYLocation6 <= asteroidYLocation9 + 8 && shotXLocation6 + 2 >= asteroidXLocation9 && shotXLocation6 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot6();}
else if (p1Score >= 70 && shotYLocation6 <= asteroidYLocation10 + 18 && shotXLocation6 + 2 >= asteroidXLocation10 && shotXLocation6 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot6();}
else if (p1Score >= 115 && shotYLocation6 <= asteroidYLocation11 + 19 && shotXLocation6 + 2 >= asteroidXLocation11 && shotXLocation6 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot6();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation6 <= asteroidYLocationb1 + 44 && shotXLocation6 + 2 >= asteroidXLocationb1 && shotXLocation6 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot6();}else{asteroidb1Health--; blownAsteroidb1(); resetShot6();}
else if (p1Score >= 190 && shotYLocation6 <= asteroidYLocation12 + 10 && shotXLocation6 + 1 >= asteroidXLocation12 && shotXLocation6 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot6();}
else if (p1Score >= 270 && shotYLocation6 <= asteroidYLocation13 + 11 && shotXLocation6 + 1 >= asteroidXLocation13 && shotXLocation6 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot6();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation6 <= asteroidYLocationb2 + 44 && shotXLocation6 + 2 >= asteroidXLocationb2 && shotXLocation6 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot6();}else{asteroidb2Health--; blownAsteroidb2(); resetShot6();}
else if (p1Score >= 350 && shotYLocation6 <= asteroidYLocation14 + 22 && shotXLocation6 + 1 >= asteroidXLocation14 && shotXLocation6 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot6();}
else if (p1Score >= 410 && shotYLocation6 <= asteroidYLocation15 + 14 && shotXLocation6 + 4 >= asteroidXLocation15 && shotXLocation6 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot6();}
else if (p1Score >= 450 && shotYLocation6 <= asteroidYLocation16 + 19 && shotXLocation6 + 2 >= asteroidXLocation16 && shotXLocation6 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot6();}
else if (p1Score >= 500 && shotYLocation6 <= asteroidYLocation17 + 10 && shotXLocation6 + 1 >= asteroidXLocation17 && shotXLocation6 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot6();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation6 <= asteroidYLocationc1 + 116 && shotXLocation6 + 2 >= asteroidXLocationc1 && shotXLocation6 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot6();}else{asteroidc1Health--; blownAsteroidc1(); resetShot6();}
else if (p1Score >= 625 && shotYLocation6 <= asteroidYLocation18 + 20 && shotXLocation6 + 2 >= asteroidXLocation18 && shotXLocation6 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot6();}
else if (p1Score >= 700 && shotYLocation6 <= asteroidYLocation19 + 22 && shotXLocation6 + 1 >= asteroidXLocation19 && shotXLocation6 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot6();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation6 <= asteroidYLocationb3 + 44 && shotXLocation6 + 2 >= asteroidXLocationb3 && shotXLocation6 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot6();}else{asteroidb3Health--; blownAsteroidb3(); resetShot6();}
else if (p1Score >= 760 && shotYLocation6 <= asteroidYLocation20 + 8 && shotXLocation6 + 2 >= asteroidXLocation20 && shotXLocation6 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot6();}
else if (p1Score >= 820 && shotYLocation6 <= asteroidYLocation21 + 18 && shotXLocation6 + 2 >= asteroidXLocation21 && shotXLocation6 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot6();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation6 <= asteroidYLocationb4 + 44 && shotXLocation6 + 2 >= asteroidXLocationb4 && shotXLocation6 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot6();}else{asteroidb4Health--; blownAsteroidb4(); resetShot6();}
else if (p1Score >= 910 && shotYLocation6 <= asteroidYLocation22 + 19 && shotXLocation6 + 2 >= asteroidXLocation22 && shotXLocation6 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot6();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation6 <= asteroidYLocation23 + 10 && shotXLocation6 + 1 >= asteroidXLocation23 && shotXLocation6 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot6();}else{asteroid23Health--; resetAsteroid23(); resetShot6();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation6 <= asteroidYLocation24 + 11 && shotXLocation6 + 1 >= asteroidXLocation24 && shotXLocation6 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot6();}else{asteroid24Health--; resetAsteroid24(); resetShot6();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation6 <= asteroidYLocation25 + 22 && shotXLocation6 + 1 >= asteroidXLocation25 && shotXLocation6 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot6();}else{asteroid25Health--; resetAsteroid25(); resetShot6();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation6 <= asteroidYLocationc2 + 116 && shotXLocation6 + 2 >= asteroidXLocationc2 && shotXLocation6 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot6();}else{asteroidc2Health--; blownAsteroidc2(); resetShot6();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation6 <= asteroidYLocation26 + 14 && shotXLocation6 + 4 >= asteroidXLocation26 && shotXLocation6 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot6();}else{asteroid26Health--; resetAsteroid26(); resetShot6();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation6 <= asteroidYLocation27 + 19 && shotXLocation6 + 2 >= asteroidXLocation27 && shotXLocation6 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot6();}else{asteroid27Health--; resetAsteroid27(); resetShot6();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation6 <= asteroidYLocation28 + 10 && shotXLocation6 + 1 >= asteroidXLocation28 && shotXLocation6 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot6();}else{asteroid28Health--; resetAsteroid28(); resetShot6();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation6 <= asteroidYLocation29 + 20 && shotXLocation6 + 2 >= asteroidXLocation29 && shotXLocation6 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot6();}else{asteroid29Health--; resetAsteroid29(); resetShot6();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation6 <= asteroidYLocationb5 + 44 && shotXLocation6 + 2 >= asteroidXLocationb5 && shotXLocation6 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot6();}else{asteroidb5Health--; blownAsteroidb5(); resetShot6();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation6 <= asteroidYLocation30 + 22 && shotXLocation6 + 1 >= asteroidXLocation30 && shotXLocation6 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot6();}else{asteroid30Health--; resetAsteroid30(); resetShot6();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation6 <= asteroidYLocation31 + 8 && shotXLocation6 + 2 >= asteroidXLocation31 && shotXLocation6 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot6();}else{asteroid31Health--; resetAsteroid31(); resetShot6();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation6 <= asteroidYLocation32 + 18 && shotXLocation6 + 2 >= asteroidXLocation32 && shotXLocation6 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot6();}else{asteroid32Health--; resetAsteroid32(); resetShot6();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation6 <= asteroidYLocation33 + 19 && shotXLocation6 + 2 >= asteroidXLocation33 && shotXLocation6 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot6();}else{asteroid33Health--; resetAsteroid33(); resetShot6();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation6 <= asteroidYLocationb6 + 44 && shotXLocation6 + 2 >= asteroidXLocationb6 && shotXLocation6 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot6();}else{asteroidb6Health--; blownAsteroidb6(); resetShot6();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation6 <= asteroidYLocation34 + 10 && shotXLocation6 + 1 >= asteroidXLocation34 && shotXLocation6 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot6();}else{asteroid34Health--; resetAsteroid34(); resetShot6();}
}


if (createShot7.called == true){
if (shotYLocation7 <= asteroidYLocation1 + 10 && shotXLocation7 + 1 >= asteroidXLocation1 && shotXLocation7 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot7();}
else if (shotYLocation7 <= asteroidYLocation2 + 11 && shotXLocation7 + 1 >= asteroidXLocation2 && shotXLocation7 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot7();}
else if (shotYLocation7 <= asteroidYLocation3 + 22 && shotXLocation7 + 1 >= asteroidXLocation3 && shotXLocation7 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot7();}
else if (shotYLocation7 <= asteroidYLocation4 + 14 && shotXLocation7 + 4 >= asteroidXLocation4 && shotXLocation7 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot7();}
else if (shotYLocation7 <= asteroidYLocation5 + 19 && shotXLocation7 + 2 >= asteroidXLocation5 && shotXLocation7 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot7();}
else if (shotYLocation7 <= asteroidYLocation6 + 10 && shotXLocation7 + 1 >= asteroidXLocation6 && shotXLocation7 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot7();}
else if (shotYLocation7 <= asteroidYLocation7 + 20 && shotXLocation7 + 2 >= asteroidXLocation7 && shotXLocation7 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot7();}
else if (p1Score >= 30 && shotYLocation7 <= asteroidYLocation8 + 22 && shotXLocation7 + 1 >= asteroidXLocation8 && shotXLocation7 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot7();}
else if (p1Score >= 50 && shotYLocation7 <= asteroidYLocation9 + 8 && shotXLocation7 + 2 >= asteroidXLocation9 && shotXLocation7 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot7();}
else if (p1Score >= 70 && shotYLocation7 <= asteroidYLocation10 + 18 && shotXLocation7 + 2 >= asteroidXLocation10 && shotXLocation7 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot7();}
else if (p1Score >= 115 && shotYLocation7 <= asteroidYLocation11 + 19 && shotXLocation7 + 2 >= asteroidXLocation11 && shotXLocation7 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot7();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation7 <= asteroidYLocationb1 + 44 && shotXLocation7 + 2 >= asteroidXLocationb1 && shotXLocation7 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot7();}else{asteroidb1Health--; blownAsteroidb1(); resetShot7();}
else if (p1Score >= 190 && shotYLocation7 <= asteroidYLocation12 + 10 && shotXLocation7 + 1 >= asteroidXLocation12 && shotXLocation7 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot7();}
else if (p1Score >= 270 && shotYLocation7 <= asteroidYLocation13 + 11 && shotXLocation7 + 1 >= asteroidXLocation13 && shotXLocation7 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot7();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation7 <= asteroidYLocationb2 + 44 && shotXLocation7 + 2 >= asteroidXLocationb2 && shotXLocation7 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot7();}else{asteroidb2Health--; blownAsteroidb2(); resetShot7();}
else if (p1Score >= 350 && shotYLocation7 <= asteroidYLocation14 + 22 && shotXLocation7 + 1 >= asteroidXLocation14 && shotXLocation7 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot7();}
else if (p1Score >= 410 && shotYLocation7 <= asteroidYLocation15 + 14 && shotXLocation7 + 4 >= asteroidXLocation15 && shotXLocation7 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot7();}
else if (p1Score >= 450 && shotYLocation7 <= asteroidYLocation16 + 19 && shotXLocation7 + 2 >= asteroidXLocation16 && shotXLocation7 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot7();}
else if (p1Score >= 500 && shotYLocation7 <= asteroidYLocation17 + 10 && shotXLocation7 + 1 >= asteroidXLocation17 && shotXLocation7 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot7();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation7 <= asteroidYLocationc1 + 116 && shotXLocation7 + 2 >= asteroidXLocationc1 && shotXLocation7 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot7();}else{asteroidc1Health--; blownAsteroidc1(); resetShot7();}
else if (p1Score >= 625 && shotYLocation7 <= asteroidYLocation18 + 20 && shotXLocation7 + 2 >= asteroidXLocation18 && shotXLocation7 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot7();}
else if (p1Score >= 700 && shotYLocation7 <= asteroidYLocation19 + 22 && shotXLocation7 + 1 >= asteroidXLocation19 && shotXLocation7 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot7();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation7 <= asteroidYLocationb3 + 44 && shotXLocation7 + 2 >= asteroidXLocationb3 && shotXLocation7 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot7();}else{asteroidb3Health--; blownAsteroidb3(); resetShot7();}
else if (p1Score >= 760 && shotYLocation7 <= asteroidYLocation20 + 8 && shotXLocation7 + 2 >= asteroidXLocation20 && shotXLocation7 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot7();}
else if (p1Score >= 820 && shotYLocation7 <= asteroidYLocation21 + 18 && shotXLocation7 + 2 >= asteroidXLocation21 && shotXLocation7 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot7();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation7 <= asteroidYLocationb4 + 44 && shotXLocation7 + 2 >= asteroidXLocationb4 && shotXLocation7 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot7();}else{asteroidb4Health--; blownAsteroidb4(); resetShot7();}
else if (p1Score >= 910 && shotYLocation7 <= asteroidYLocation22 + 19 && shotXLocation7 + 2 >= asteroidXLocation22 && shotXLocation7 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot7();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation7 <= asteroidYLocation23 + 10 && shotXLocation7 + 1 >= asteroidXLocation23 && shotXLocation7 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot7();}else{asteroid23Health--; resetAsteroid23(); resetShot7();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation7 <= asteroidYLocation24 + 11 && shotXLocation7 + 1 >= asteroidXLocation24 && shotXLocation7 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot7();}else{asteroid24Health--; resetAsteroid24(); resetShot7();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation7 <= asteroidYLocation25 + 22 && shotXLocation7 + 1 >= asteroidXLocation25 && shotXLocation7 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot7();}else{asteroid25Health--; resetAsteroid25(); resetShot7();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation7 <= asteroidYLocationc2 + 116 && shotXLocation7 + 2 >= asteroidXLocationc2 && shotXLocation7 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot7();}else{asteroidc2Health--; blownAsteroidc2(); resetShot7();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation7 <= asteroidYLocation26 + 14 && shotXLocation7 + 4 >= asteroidXLocation26 && shotXLocation7 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot7();}else{asteroid26Health--; resetAsteroid26(); resetShot7();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation7 <= asteroidYLocation27 + 19 && shotXLocation7 + 2 >= asteroidXLocation27 && shotXLocation7 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot7();}else{asteroid27Health--; resetAsteroid27(); resetShot7();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation7 <= asteroidYLocation28 + 10 && shotXLocation7 + 1 >= asteroidXLocation28 && shotXLocation7 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot7();}else{asteroid28Health--; resetAsteroid28(); resetShot7();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation7 <= asteroidYLocation29 + 20 && shotXLocation7 + 2 >= asteroidXLocation29 && shotXLocation7 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot7();}else{asteroid29Health--; resetAsteroid29(); resetShot7();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation7 <= asteroidYLocationb5 + 44 && shotXLocation7 + 2 >= asteroidXLocationb5 && shotXLocation7 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot7();}else{asteroidb5Health--; blownAsteroidb5(); resetShot7();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation7 <= asteroidYLocation30 + 22 && shotXLocation7 + 1 >= asteroidXLocation30 && shotXLocation7 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot7();}else{asteroid30Health--; resetAsteroid30(); resetShot7();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation7 <= asteroidYLocation31 + 8 && shotXLocation7 + 2 >= asteroidXLocation31 && shotXLocation7 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot7();}else{asteroid31Health--; resetAsteroid31(); resetShot7();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation7 <= asteroidYLocation32 + 18 && shotXLocation7 + 2 >= asteroidXLocation32 && shotXLocation7 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot7();}else{asteroid32Health--; resetAsteroid32(); resetShot7();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation7 <= asteroidYLocation33 + 19 && shotXLocation7 + 2 >= asteroidXLocation33 && shotXLocation7 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot7();}else{asteroid33Health--; resetAsteroid33(); resetShot7();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation7 <= asteroidYLocationb6 + 44 && shotXLocation7 + 2 >= asteroidXLocationb6 && shotXLocation7 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot7();}else{asteroidb6Health--; blownAsteroidb6(); resetShot7();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation7 <= asteroidYLocation34 + 10 && shotXLocation7 + 1 >= asteroidXLocation34 && shotXLocation7 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot7();}else{asteroid34Health--; resetAsteroid34(); resetShot7();}
}


if (createShot8.called == true){
if (shotYLocation8 <= asteroidYLocation1 + 10 && shotXLocation8 + 1 >= asteroidXLocation1 && shotXLocation8 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot8();}
else if (shotYLocation8 <= asteroidYLocation2 + 11 && shotXLocation8 + 1 >= asteroidXLocation2 && shotXLocation8 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot8();}
else if (shotYLocation8 <= asteroidYLocation3 + 22 && shotXLocation8 + 1 >= asteroidXLocation3 && shotXLocation8 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot8();}
else if (shotYLocation8 <= asteroidYLocation4 + 14 && shotXLocation8 + 4 >= asteroidXLocation4 && shotXLocation8 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot8();} 
else if (shotYLocation8 <= asteroidYLocation5 + 19 && shotXLocation8 + 2 >= asteroidXLocation5 && shotXLocation8 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot8();}
else if (shotYLocation8 <= asteroidYLocation6 + 10 && shotXLocation8 + 1 >= asteroidXLocation6 && shotXLocation8 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot8();}
else if (shotYLocation8 <= asteroidYLocation7 + 20 && shotXLocation8 + 2 >= asteroidXLocation7 && shotXLocation8 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot8();}
else if (p1Score >= 30 && shotYLocation8 <= asteroidYLocation8 + 22 && shotXLocation8 + 1 >= asteroidXLocation8 && shotXLocation8 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot8();}
else if (p1Score >= 50 && shotYLocation8 <= asteroidYLocation9 + 8 && shotXLocation8 + 2 >= asteroidXLocation9 && shotXLocation8 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot8();}
else if (p1Score >= 70 && shotYLocation8 <= asteroidYLocation10 + 18 && shotXLocation8 + 2 >= asteroidXLocation10 && shotXLocation8 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot8();}
else if (p1Score >= 115 && shotYLocation8 <= asteroidYLocation11 + 19 && shotXLocation8 + 2 >= asteroidXLocation11 && shotXLocation8 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot8();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation8 <= asteroidYLocationb1 + 44 && shotXLocation8 + 2 >= asteroidXLocationb1 && shotXLocation8 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot8();}else{asteroidb1Health--; blownAsteroidb1(); resetShot8();}
else if (p1Score >= 190 && shotYLocation8 <= asteroidYLocation12 + 10 && shotXLocation8 + 1 >= asteroidXLocation12 && shotXLocation8 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot8();}
else if (p1Score >= 270 && shotYLocation8 <= asteroidYLocation13 + 11 && shotXLocation8 + 1 >= asteroidXLocation13 && shotXLocation8 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot8();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation8 <= asteroidYLocationb2 + 44 && shotXLocation8 + 2 >= asteroidXLocationb2 && shotXLocation8 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot8();}else{asteroidb2Health--; blownAsteroidb2(); resetShot8();}
else if (p1Score >= 350 && shotYLocation8 <= asteroidYLocation14 + 22 && shotXLocation8 + 1 >= asteroidXLocation14 && shotXLocation8 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot8();}
else if (p1Score >= 410 && shotYLocation8 <= asteroidYLocation15 + 14 && shotXLocation8 + 4 >= asteroidXLocation15 && shotXLocation8 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot8();}
else if (p1Score >= 450 && shotYLocation8 <= asteroidYLocation16 + 19 && shotXLocation8 + 2 >= asteroidXLocation16 && shotXLocation8 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot8();}
else if (p1Score >= 500 && shotYLocation8 <= asteroidYLocation17 + 10 && shotXLocation8 + 1 >= asteroidXLocation17 && shotXLocation8 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot8();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation8 <= asteroidYLocationc1 + 116 && shotXLocation8 + 2 >= asteroidXLocationc1 && shotXLocation8 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot8();}else{asteroidc1Health--; blownAsteroidc1(); resetShot8();}
else if (p1Score >= 625 && shotYLocation8 <= asteroidYLocation18 + 20 && shotXLocation8 + 2 >= asteroidXLocation18 && shotXLocation8 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot8();}
else if (p1Score >= 700 && shotYLocation8 <= asteroidYLocation19 + 22 && shotXLocation8 + 1 >= asteroidXLocation19 && shotXLocation8 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot8();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation8 <= asteroidYLocationb3 + 44 && shotXLocation8 + 2 >= asteroidXLocationb3 && shotXLocation8 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot8();}else{asteroidb3Health--; blownAsteroidb3(); resetShot8();}
else if (p1Score >= 760 && shotYLocation8 <= asteroidYLocation20 + 8 && shotXLocation8 + 2 >= asteroidXLocation20 && shotXLocation8 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot8();}
else if (p1Score >= 820 && shotYLocation8 <= asteroidYLocation21 + 18 && shotXLocation8 + 2 >= asteroidXLocation21 && shotXLocation8 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot8();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation8 <= asteroidYLocationb4 + 44 && shotXLocation8 + 2 >= asteroidXLocationb4 && shotXLocation8 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot8();}else{asteroidb4Health--; blownAsteroidb4(); resetShot8();}
else if (p1Score >= 910 && shotYLocation8 <= asteroidYLocation22 + 19 && shotXLocation8 + 2 >= asteroidXLocation22 && shotXLocation8 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot8();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation8 <= asteroidYLocation23 + 10 && shotXLocation8 + 1 >= asteroidXLocation23 && shotXLocation8 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot8();}else{asteroid23Health--; resetAsteroid23(); resetShot8();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation8 <= asteroidYLocation24 + 11 && shotXLocation8 + 1 >= asteroidXLocation24 && shotXLocation8 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot8();}else{asteroid24Health--; resetAsteroid24(); resetShot8();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation8 <= asteroidYLocation25 + 22 && shotXLocation8 + 1 >= asteroidXLocation25 && shotXLocation8 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot8();}else{asteroid25Health--; resetAsteroid25(); resetShot8();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation8 <= asteroidYLocationc2 + 116 && shotXLocation8 + 2 >= asteroidXLocationc2 && shotXLocation8 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot8();}else{asteroidc2Health--; blownAsteroidc2(); resetShot8();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation8 <= asteroidYLocation26 + 14 && shotXLocation8 + 4 >= asteroidXLocation26 && shotXLocation8 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot8();}else{asteroid26Health--; resetAsteroid26(); resetShot8();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation8 <= asteroidYLocation27 + 19 && shotXLocation8 + 2 >= asteroidXLocation27 && shotXLocation8 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot8();}else{asteroid27Health--; resetAsteroid27(); resetShot8();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation8 <= asteroidYLocation28 + 10 && shotXLocation8 + 1 >= asteroidXLocation28 && shotXLocation8 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot8();}else{asteroid28Health--; resetAsteroid28(); resetShot8();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation8 <= asteroidYLocation29 + 20 && shotXLocation8 + 2 >= asteroidXLocation29 && shotXLocation8 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot8();}else{asteroid29Health--; resetAsteroid29(); resetShot8();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation8 <= asteroidYLocationb5 + 44 && shotXLocation8 + 2 >= asteroidXLocationb5 && shotXLocation8 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot8();}else{asteroidb5Health--; blownAsteroidb5(); resetShot8();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation8 <= asteroidYLocation30 + 22 && shotXLocation8 + 1 >= asteroidXLocation30 && shotXLocation8 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot8();}else{asteroid30Health--; resetAsteroid30(); resetShot8();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation8 <= asteroidYLocation31 + 8 && shotXLocation8 + 2 >= asteroidXLocation31 && shotXLocation8 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot8();}else{asteroid31Health--; resetAsteroid31(); resetShot8();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation8 <= asteroidYLocation32 + 18 && shotXLocation8 + 2 >= asteroidXLocation32 && shotXLocation8 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot8();}else{asteroid32Health--; resetAsteroid32(); resetShot8();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation8 <= asteroidYLocation33 + 19 && shotXLocation8 + 2 >= asteroidXLocation33 && shotXLocation8 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot8();}else{asteroid33Health--; resetAsteroid33(); resetShot8();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation8 <= asteroidYLocationb6 + 44 && shotXLocation8 + 2 >= asteroidXLocationb6 && shotXLocation8 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot8();}else{asteroidb6Health--; blownAsteroidb6(); resetShot8();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation8 <= asteroidYLocation34 + 10 && shotXLocation8 + 1 >= asteroidXLocation34 && shotXLocation8 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot8();}else{asteroid34Health--; resetAsteroid34(); resetShot8();}
}


if (createShot9.called == true){
if (shotYLocation9 <= asteroidYLocation1 + 10 && shotXLocation9 + 1 >= asteroidXLocation1 && shotXLocation9 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot9();}
else if (shotYLocation9 <= asteroidYLocation2 + 11 && shotXLocation9 + 1 >= asteroidXLocation2 && shotXLocation9 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot9();}
else if (shotYLocation9 <= asteroidYLocation3 + 22 && shotXLocation9 + 1 >= asteroidXLocation3 && shotXLocation9 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot9();}
else if (shotYLocation9 <= asteroidYLocation4 + 14 && shotXLocation9 + 4 >= asteroidXLocation4 && shotXLocation9 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot9();}
else if (shotYLocation9 <= asteroidYLocation5 + 19 && shotXLocation9 + 2 >= asteroidXLocation5 && shotXLocation9 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot9();}
else if (shotYLocation9 <= asteroidYLocation6 + 10 && shotXLocation9 + 1 >= asteroidXLocation6 && shotXLocation9 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot9();}
else if (shotYLocation9 <= asteroidYLocation7 + 20 && shotXLocation9 + 2 >= asteroidXLocation7 && shotXLocation9 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot9();}
else if (p1Score >= 30 && shotYLocation9 <= asteroidYLocation8 + 22 && shotXLocation9 + 1 >= asteroidXLocation8 && shotXLocation9 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot9();}
else if (p1Score >= 50 && shotYLocation9 <= asteroidYLocation9 + 8 && shotXLocation9 + 2 >= asteroidXLocation9 && shotXLocation9 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot9();}
else if (p1Score >= 70 && shotYLocation9 <= asteroidYLocation10 + 18 && shotXLocation9 + 2 >= asteroidXLocation10 && shotXLocation9 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot9();}
else if (p1Score >= 115 && shotYLocation9 <= asteroidYLocation11 + 19 && shotXLocation9 + 2 >= asteroidXLocation11 && shotXLocation9 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot9();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation9 <= asteroidYLocationb1 + 44 && shotXLocation9 + 2 >= asteroidXLocationb1 && shotXLocation9 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot9();}else{asteroidb1Health--; blownAsteroidb1(); resetShot9();}
else if (p1Score >= 190 && shotYLocation9 <= asteroidYLocation12 + 10 && shotXLocation9 + 1 >= asteroidXLocation12 && shotXLocation9 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot9();}
else if (p1Score >= 270 && shotYLocation9 <= asteroidYLocation13 + 11 && shotXLocation9 + 1 >= asteroidXLocation13 && shotXLocation9 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot9();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation9 <= asteroidYLocationb2 + 44 && shotXLocation9 + 2 >= asteroidXLocationb2 && shotXLocation9 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot9();}else{asteroidb2Health--; blownAsteroidb2(); resetShot9();}
else if (p1Score >= 350 && shotYLocation9 <= asteroidYLocation14 + 22 && shotXLocation9 + 1 >= asteroidXLocation14 && shotXLocation9 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot9();}
else if (p1Score >= 410 && shotYLocation9 <= asteroidYLocation15 + 14 && shotXLocation9 + 4 >= asteroidXLocation15 && shotXLocation9 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot9();}
else if (p1Score >= 450 && shotYLocation9 <= asteroidYLocation16 + 19 && shotXLocation9 + 2 >= asteroidXLocation16 && shotXLocation9 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot9();}
else if (p1Score >= 500 && shotYLocation9 <= asteroidYLocation17 + 10 && shotXLocation9 + 1 >= asteroidXLocation17 && shotXLocation9 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot9();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation9 <= asteroidYLocationc1 + 116 && shotXLocation9 + 2 >= asteroidXLocationc1 && shotXLocation9 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot9();}else{asteroidc1Health--; blownAsteroidc1(); resetShot9();}
else if (p1Score >= 625 && shotYLocation9 <= asteroidYLocation18 + 20 && shotXLocation9 + 2 >= asteroidXLocation18 && shotXLocation9 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot9();}
else if (p1Score >= 700 && shotYLocation9 <= asteroidYLocation19 + 22 && shotXLocation9 + 1 >= asteroidXLocation19 && shotXLocation9 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot9();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation9 <= asteroidYLocationb3 + 44 && shotXLocation9 + 2 >= asteroidXLocationb3 && shotXLocation9 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot9();}else{asteroidb3Health--; blownAsteroidb3(); resetShot9();}
else if (p1Score >= 760 && shotYLocation9 <= asteroidYLocation20 + 8 && shotXLocation9 + 2 >= asteroidXLocation20 && shotXLocation9 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot9();}
else if (p1Score >= 820 && shotYLocation9 <= asteroidYLocation21 + 18 && shotXLocation9 + 2 >= asteroidXLocation21 && shotXLocation9 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot9();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation9 <= asteroidYLocationb4 + 44 && shotXLocation9 + 2 >= asteroidXLocationb4 && shotXLocation9 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot9();}else{asteroidb4Health--; blownAsteroidb4(); resetShot9();}
else if (p1Score >= 910 && shotYLocation9 <= asteroidYLocation22 + 19 && shotXLocation9 + 2 >= asteroidXLocation22 && shotXLocation9 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot9();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation9 <= asteroidYLocation23 + 10 && shotXLocation9 + 1 >= asteroidXLocation23 && shotXLocation9 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot9();}else{asteroid23Health--; resetAsteroid23(); resetShot9();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation9 <= asteroidYLocation24 + 11 && shotXLocation9 + 1 >= asteroidXLocation24 && shotXLocation9 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot9();}else{asteroid24Health--; resetAsteroid24(); resetShot9();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation9 <= asteroidYLocation25 + 22 && shotXLocation9 + 1 >= asteroidXLocation25 && shotXLocation9 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot9();}else{asteroid25Health--; resetAsteroid25(); resetShot9();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation9 <= asteroidYLocationc2 + 116 && shotXLocation9 + 2 >= asteroidXLocationc2 && shotXLocation9 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot9();}else{asteroidc2Health--; blownAsteroidc2(); resetShot9();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation9 <= asteroidYLocation26 + 14 && shotXLocation9 + 4 >= asteroidXLocation26 && shotXLocation9 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot9();}else{asteroid26Health--; resetAsteroid26(); resetShot9();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation9 <= asteroidYLocation27 + 19 && shotXLocation9 + 2 >= asteroidXLocation27 && shotXLocation9 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot9();}else{asteroid27Health--; resetAsteroid27(); resetShot9();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation9 <= asteroidYLocation28 + 10 && shotXLocation9 + 1 >= asteroidXLocation28 && shotXLocation9 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot9();}else{asteroid28Health--; resetAsteroid28(); resetShot9();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation9 <= asteroidYLocation29 + 20 && shotXLocation9 + 2 >= asteroidXLocation29 && shotXLocation9 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot9();}else{asteroid29Health--; resetAsteroid29(); resetShot9();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation9 <= asteroidYLocationb5 + 44 && shotXLocation9 + 2 >= asteroidXLocationb5 && shotXLocation9 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb1(); resetShot9();}else{asteroidb5Health--; blownAsteroidb5(); resetShot9();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation9 <= asteroidYLocation30 + 22 && shotXLocation9 + 1 >= asteroidXLocation30 && shotXLocation9 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot9();}else{asteroid30Health--; resetAsteroid30(); resetShot9();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation9 <= asteroidYLocation31 + 8 && shotXLocation9 + 2 >= asteroidXLocation31 && shotXLocation9 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31();resetShot9();}else{asteroid31Health--; resetAsteroid31(); resetShot9();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation9 <= asteroidYLocation32 + 18 && shotXLocation9 + 2 >= asteroidXLocation32 && shotXLocation9 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot9();}else{asteroid32Health--; resetAsteroid32(); resetShot9();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation9 <= asteroidYLocation33 + 19 && shotXLocation9 + 2 >= asteroidXLocation33 && shotXLocation9 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot9();}else{asteroid33Health--; resetAsteroid33(); resetShot9();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation9 <= asteroidYLocationb6 + 44 && shotXLocation9 + 2 >= asteroidXLocationb6 && shotXLocation9 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot9();}else{asteroidb6Health--; blownAsteroidb6(); resetShot9();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation9 <= asteroidYLocation34 + 10 && shotXLocation9 + 1 >= asteroidXLocation34 && shotXLocation9 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot9();}else{asteroid34Health--; resetAsteroid34(); resetShot9();}
}


if (createShot10.called == true){
if (shotYLocation10 <= asteroidYLocation1 + 10 && shotXLocation10 + 1 >= asteroidXLocation1 && shotXLocation10 <= asteroidXLocation1 + 17)if(powerShip == true){resetAsteroid1();}else{resetAsteroid1(); resetShot10();}
else if (shotYLocation10 <= asteroidYLocation2 + 11 && shotXLocation10 + 1 >= asteroidXLocation2 && shotXLocation10 <= asteroidXLocation2 + 19)if(powerShip == true){resetAsteroid2();}else{resetAsteroid2(); resetShot10();}
else if (shotYLocation10 <= asteroidYLocation3 + 22 && shotXLocation10 + 1 >= asteroidXLocation3 && shotXLocation10 <= asteroidXLocation3 + 35)if(powerShip == true){resetAsteroid3();}else{resetAsteroid3(); resetShot10();}
else if (shotYLocation10 <= asteroidYLocation4 + 14 && shotXLocation10 + 4 >= asteroidXLocation4 && shotXLocation10 <= asteroidXLocation4 + 34)if(powerShip == true){resetAsteroid4();}else{resetAsteroid4(); resetShot10();} 
else if (shotYLocation10 <= asteroidYLocation5 + 19 && shotXLocation10 + 2 >= asteroidXLocation5 && shotXLocation10 <= asteroidXLocation5 + 35)if(powerShip == true){resetAsteroid5();}else{resetAsteroid5(); resetShot10();}
else if (shotYLocation10 <= asteroidYLocation6 + 10 && shotXLocation10 + 1 >= asteroidXLocation6 && shotXLocation10 <= asteroidXLocation6 + 15)if(powerShip == true){resetAsteroid6();}else{resetAsteroid6(); resetShot10();}
else if (shotYLocation10 <= asteroidYLocation7 + 20 && shotXLocation10 + 2 >= asteroidXLocation7 && shotXLocation10 <= asteroidXLocation7 + 35)if(powerShip == true){resetAsteroid7();}else{resetAsteroid7(); resetShot10();}
else if (p1Score >= 30 && shotYLocation10 <= asteroidYLocation8 + 22 && shotXLocation10 + 1 >= asteroidXLocation8 && shotXLocation10 <= asteroidXLocation8 + 35)if(powerShip == true){resetAsteroid8();}else{resetAsteroid8(); resetShot10();}
else if (p1Score >= 50 && shotYLocation10 <= asteroidYLocation9 + 8 && shotXLocation10 + 2 >= asteroidXLocation9 && shotXLocation10 <= asteroidXLocation9 + 19)if(powerShip == true){resetAsteroid9();}else{resetAsteroid9(); resetShot10();}
else if (p1Score >= 70 && shotYLocation10 <= asteroidYLocation10 + 18 && shotXLocation10 + 2 >= asteroidXLocation10 && shotXLocation10 <= asteroidXLocation10 + 32)if(powerShip == true){resetAsteroid10();}else{resetAsteroid10(); resetShot10();}
else if (p1Score >= 115 && shotYLocation10 <= asteroidYLocation11 + 19 && shotXLocation10 + 2 >= asteroidXLocation11 && shotXLocation10 <= asteroidXLocation11 + 35)if(powerShip == true){resetAsteroid11();}else{resetAsteroid11(); resetShot10();}
else if (p1Score >= 145 && asteroidb1Health > 0 && shotYLocation10 <= asteroidYLocationb1 + 44 && shotXLocation10 + 2 >= asteroidXLocationb1 && shotXLocation10 <= asteroidXLocationb1 + 52)if(powerShip == true){asteroidb1Health--; asteroidb1Health--; blownAsteroidb1(); resetShot10();}else{asteroidb1Health--; blownAsteroidb1(); resetShot10();}
else if (p1Score >= 190 && shotYLocation10 <= asteroidYLocation12 + 10 && shotXLocation10 + 1 >= asteroidXLocation12 && shotXLocation10 <= asteroidXLocation12 + 17)if(powerShip == true){resetAsteroid12();}else{resetAsteroid12(); resetShot10();}
else if (p1Score >= 270 && shotYLocation10 <= asteroidYLocation13 + 11 && shotXLocation10 + 1 >= asteroidXLocation13 && shotXLocation10 <= asteroidXLocation13 + 19)if(powerShip == true){resetAsteroid13();}else{resetAsteroid13(); resetShot10();}
else if (p1Score >= 310 && asteroidb2Health > 0 && shotYLocation10 <= asteroidYLocationb2 + 44 && shotXLocation10 + 2 >= asteroidXLocationb2 && shotXLocation10 <= asteroidXLocationb2 + 52)if(powerShip == true){asteroidb2Health--; asteroidb2Health--; blownAsteroidb2(); resetShot10();}else{asteroidb2Health--; blownAsteroidb2(); resetShot10();}
else if (p1Score >= 350 && shotYLocation10 <= asteroidYLocation14 + 22 && shotXLocation10 + 1 >= asteroidXLocation14 && shotXLocation10 <= asteroidXLocation14 + 35)if(powerShip == true){resetAsteroid14();}else{resetAsteroid14(); resetShot10();}
else if (p1Score >= 410 && shotYLocation10 <= asteroidYLocation15 + 14 && shotXLocation10 + 4 >= asteroidXLocation15 && shotXLocation10 <= asteroidXLocation15 + 34)if(powerShip == true){resetAsteroid15();}else{resetAsteroid15(); resetShot10();}
else if (p1Score >= 450 && shotYLocation10 <= asteroidYLocation16 + 19 && shotXLocation10 + 2 >= asteroidXLocation16 && shotXLocation10 <= asteroidXLocation16 + 35)if(powerShip == true){resetAsteroid16();}else{resetAsteroid16(); resetShot10();}
else if (p1Score >= 500 && shotYLocation10 <= asteroidYLocation17 + 10 && shotXLocation10 + 1 >= asteroidXLocation17 && shotXLocation10 <= asteroidXLocation17 + 15)if(powerShip == true){resetAsteroid17();}else{resetAsteroid17(); resetShot10();}
else if (p1Score >= 575 && asteroidc1Health > 0 && shotYLocation10 <= asteroidYLocationc1 + 116 && shotXLocation10 + 2 >= asteroidXLocationc1 && shotXLocation10 <= asteroidXLocationc1 + 150)if(powerShip == true){asteroidc1Health--; asteroidc1Health--; blownAsteroidc1(); resetShot10();}else{asteroidc1Health--; blownAsteroidc1(); resetShot10();}
else if (p1Score >= 625 && shotYLocation10 <= asteroidYLocation18 + 20 && shotXLocation10 + 2 >= asteroidXLocation18 && shotXLocation10 <= asteroidXLocation18 + 35)if(powerShip == true){resetAsteroid18();}else{resetAsteroid18(); resetShot10();}
else if (p1Score >= 700 && shotYLocation10 <= asteroidYLocation19 + 22 && shotXLocation10 + 1 >= asteroidXLocation19 && shotXLocation10 <= asteroidXLocation19 + 35)if(powerShip == true){resetAsteroid19();}else{resetAsteroid19(); resetShot10();}
else if (p1Score >= 740 && asteroidb3Health > 0 && shotYLocation10 <= asteroidYLocationb3 + 44 && shotXLocation10 + 2 >= asteroidXLocationb3 && shotXLocation10 <= asteroidXLocationb3 + 52)if(powerShip == true){asteroidb3Health--; asteroidb3Health--; blownAsteroidb3(); resetShot10();}else{asteroidb3Health--; blownAsteroidb3(); resetShot10();}
else if (p1Score >= 760 && shotYLocation10 <= asteroidYLocation20 + 8 && shotXLocation10 + 2 >= asteroidXLocation20 && shotXLocation10 <= asteroidXLocation20 + 20)if(powerShip == true){resetAsteroid20();}else{resetAsteroid20(); resetShot10();}
else if (p1Score >= 820 && shotYLocation10 <= asteroidYLocation21 + 18 && shotXLocation10 + 2 >= asteroidXLocation21 && shotXLocation10 <= asteroidXLocation21 + 32)if(powerShip == true){resetAsteroid21();}else{resetAsteroid21(); resetShot10();}
else if (p1Score >= 880 && asteroidb4Health > 0 && shotYLocation10 <= asteroidYLocationb4 + 44 && shotXLocation10 + 2 >= asteroidXLocationb4 && shotXLocation10 <= asteroidXLocationb4 + 52)if(powerShip == true){asteroidb4Health--; asteroidb4Health--; blownAsteroidb4(); resetShot10();}else{asteroidb4Health--; blownAsteroidb4(); resetShot10();}
else if (p1Score >= 910 && shotYLocation10 <= asteroidYLocation22 + 19 && shotXLocation10 + 2 >= asteroidXLocation22 && shotXLocation10 <= asteroidXLocation22 + 35)if(powerShip == true){resetAsteroid22();}else{resetAsteroid22(); resetShot10();}
else if (p1Score >= 940 && asteroid23Health > 0 && shotYLocation10 <= asteroidYLocation23 + 10 && shotXLocation10 + 1 >= asteroidXLocation23 && shotXLocation10 <= asteroidXLocation23 + 17)if(powerShip == true){asteroid23Health--; asteroid23Health--; resetAsteroid23(); resetShot10();}else{asteroid23Health--; resetAsteroid23(); resetShot10();}
else if (p1Score >= 1000 && asteroid24Health > 0 && shotYLocation10 <= asteroidYLocation24 + 11 && shotXLocation10 + 1 >= asteroidXLocation24 && shotXLocation10 <= asteroidXLocation24 + 19)if(powerShip == true){asteroid24Health--; asteroid24Health--; resetAsteroid24(); resetShot10();}else{asteroid24Health--; resetAsteroid24(); resetShot10();}
else if (p1Score >= 1035 && asteroid25Health > 0 && shotYLocation10 <= asteroidYLocation25 + 22 && shotXLocation10 + 1 >= asteroidXLocation25 && shotXLocation10 <= asteroidXLocation25 + 35)if(powerShip == true){asteroid25Health--; asteroid25Health--; resetAsteroid25(); resetShot10();}else{asteroid25Health--; resetAsteroid25(); resetShot10();}
else if (p1Score >= 1070 && asteroidc2Health > 0 && shotYLocation10 <= asteroidYLocationc2 + 116 && shotXLocation10 + 2 >= asteroidXLocationc2 && shotXLocation10 <= asteroidXLocationc2 + 150)if(powerShip == true){asteroidc2Health--; asteroidc2Health--; blownAsteroidc2(); resetShot10();}else{asteroidc2Health--; blownAsteroidc2(); resetShot10();}
else if (p1Score >= 1105 && asteroid26Health > 0 && shotYLocation10 <= asteroidYLocation26 + 14 && shotXLocation10 + 4 >= asteroidXLocation26 && shotXLocation10 <= asteroidXLocation26 + 34)if(powerShip == true){asteroid26Health--; asteroid26Health--; resetAsteroid26(); resetShot10();}else{asteroid26Health--; resetAsteroid26(); resetShot10();}
else if (p1Score >= 1210 && asteroid27Health > 0 && shotYLocation10 <= asteroidYLocation27 + 19 && shotXLocation10 + 2 >= asteroidXLocation27 && shotXLocation10 <= asteroidXLocation27 + 35)if(powerShip == true){asteroid27Health--; asteroid27Health--; resetAsteroid27(); resetShot10();}else{asteroid27Health--; resetAsteroid27(); resetShot10();}
else if (p1Score >= 1280 && asteroid28Health > 0 && shotYLocation10 <= asteroidYLocation28 + 10 && shotXLocation10 + 1 >= asteroidXLocation28 && shotXLocation10 <= asteroidXLocation28 + 15)if(powerShip == true){asteroid28Health--; asteroid28Health--; resetAsteroid28(); resetShot10();}else{asteroid28Health--; resetAsteroid28(); resetShot10();}
else if (p1Score >= 1350 && asteroid29Health > 0 && shotYLocation10 <= asteroidYLocation29 + 20 && shotXLocation10 + 2 >= asteroidXLocation29 && shotXLocation10 <= asteroidXLocation29 + 35)if(powerShip == true){asteroid29Health--; asteroid29Health--; resetAsteroid29(); resetShot10();}else{asteroid29Health--; resetAsteroid29(); resetShot10();}
else if (p1Score >= 1385 && asteroidb5Health > 0 && shotYLocation10 <= asteroidYLocationb5 + 44 && shotXLocation10 + 2 >= asteroidXLocationb5 && shotXLocation10 <= asteroidXLocationb5 + 52)if(powerShip == true){asteroidb5Health--; asteroidb5Health--; blownAsteroidb5(); resetShot10();}else{asteroidb5Health--; blownAsteroidb5(); resetShot10();}
else if (p1Score >= 1420 && asteroid30Health > 0 && shotYLocation10 <= asteroidYLocation30 + 22 && shotXLocation10 + 1 >= asteroidXLocation30 && shotXLocation10 <= asteroidXLocation30 + 35)if(powerShip == true){asteroid30Health--; asteroid30Health--; resetAsteroid30(); resetShot10();}else{asteroid30Health--; resetAsteroid30(); resetShot10();}
else if (p1Score >= 1455 && asteroid31Health > 0 && shotYLocation10 <= asteroidYLocation31 + 8 && shotXLocation10 + 2 >= asteroidXLocation31 && shotXLocation10 <= asteroidXLocation31 + 19)if(powerShip == true){asteroid31Health--; asteroid31Health--; resetAsteroid31(); resetShot10();}else{asteroid31Health--; resetAsteroid31(); resetShot10();}
else if (p1Score >= 1525 && asteroid32Health > 0 && shotYLocation10 <= asteroidYLocation32 + 18 && shotXLocation10 + 2 >= asteroidXLocation32 && shotXLocation10 <= asteroidXLocation32 + 32)if(powerShip == true){asteroid32Health--; asteroid32Health--; resetAsteroid32();resetShot10();}else{asteroid32Health--; resetAsteroid32(); resetShot10();}
else if (p1Score >= 1560 && asteroid33Health > 0 && shotYLocation10 <= asteroidYLocation33 + 19 && shotXLocation10 + 2 >= asteroidXLocation33 && shotXLocation10 <= asteroidXLocation33 + 35)if(powerShip == true){asteroid33Health--; asteroid33Health--; resetAsteroid33();resetShot10();}else{asteroid33Health--; resetAsteroid33(); resetShot10();}
else if (p1Score >= 1630 && asteroidb6Health > 0 && shotYLocation10 <= asteroidYLocationb6 + 44 && shotXLocation10 + 2 >= asteroidXLocationb6 && shotXLocation10 <= asteroidXLocationb6 + 52)if(powerShip == true){asteroidb6Health--; asteroidb6Health--; blownAsteroidb6();resetShot10();}else{asteroidb6Health--; blownAsteroidb6(); resetShot10();}
else if (p1Score >= 1700 && asteroid34Health > 0 && shotYLocation10 <= asteroidYLocation34 + 10 && shotXLocation10 + 1 >= asteroidXLocation34 && shotXLocation10 <= asteroidXLocation34 + 17)if(powerShip == true){asteroid34Health--; asteroid34Health--; resetAsteroid34();resetShot10();}else{asteroid34Health--; resetAsteroid34(); resetShot10();}
}






//end of move shots


//moveAlienShot1
if (createAlienShot1.called == true){
if ( alienShotYLocation1 > 100 && pauseGame == false) {
alienShot1.depth(3);
alienShot1.x(UFORandomShot1);
alienShot1.y(alienShotYLocation1);    
alienShot1.show();
alienShotYLocation1 = alienShotYLocation1 + 3;
}
if ( UFORandomShot1 >= shipLocation - 0 && UFORandomShot1 <= shipLocation + 30 && alienShotYLocation1 > 683 && alienShotYLocation1 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation1 >= 705){
alienShot1.hide();
}
}

//moveAlienShot2
if (createAlienShot2.called == true){
if ( alienShotYLocation2 > 100 && pauseGame == false) {
alienShot2.depth(3);
alienShot2.x(UFORandomShot2);
alienShot2.y(alienShotYLocation2);    
alienShot2.show();
alienShotYLocation2 = alienShotYLocation2 + 3;
}
if ( UFORandomShot2 >= shipLocation && UFORandomShot2 <= shipLocation + 30 && alienShotYLocation2 > 683 && alienShotYLocation2 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation2 >= 705){
alienShot2.hide();
}
}

//moveAlienShot3
if (createAlienShot3.called == true){
if ( alienShotYLocation3 > 100 && pauseGame == false) {
alienShot3.depth(3);
alienShot3.x(UFORandomShot3);
alienShot3.y(alienShotYLocation3);    
alienShot3.show();
alienShotYLocation3 = alienShotYLocation3 + 3;
}
if ( UFORandomShot3 >= shipLocation && UFORandomShot3 <= shipLocation + 30 && alienShotYLocation3 > 683 && alienShotYLocation3 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation3 >= 705){
alienShot3.hide();
}
}

//moveAlienShot4
if (createAlienShot4.called == true){
if ( alienShotYLocation4 > 100 && pauseGame == false) {
alienShot4.depth(3);
alienShot4.x(UFORandomShot4);
alienShot4.y(alienShotYLocation4);    
alienShot4.show();
alienShotYLocation4 = alienShotYLocation4 + 3;
}
if ( UFORandomShot4 >= shipLocation && UFORandomShot4 <= shipLocation + 30 && alienShotYLocation4 > 683 && alienShotYLocation4 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation4 >= 705){
alienShot4.hide();
}
}

//moveAlienShot5
if (createAlienShot5.called == true){
if ( alienShotYLocation5 > 100 && pauseGame == false) {
alienShot5.depth(3);
alienShot5.x(UFORandomShot5);
alienShot5.y(alienShotYLocation5);    
alienShot5.show();
alienShotYLocation5 = alienShotYLocation5 + 3;
}
if ( UFORandomShot5 >= shipLocation && UFORandomShot5 <= shipLocation + 30 && alienShotYLocation5 > 683 && alienShotYLocation5 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation5 >= 705){
alienShot5.hide();
}
}

//moveAlienShot6
if (createAlienShot6.called == true){
if ( alienShotYLocation6 > 100 && pauseGame == false) {
alienShot6.depth(3);
alienShot6.x(UFO2RandomShot1);
alienShot6.y(alienShotYLocation6);    
alienShot6.show();
alienShotYLocation6 = alienShotYLocation6 + 4;
}
if ( UFO2RandomShot1 >= shipLocation && UFO2RandomShot1 <= shipLocation + 30 && alienShotYLocation6 > 683 && alienShotYLocation6 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation6 >= 705){
alienShot6.hide();
}
}

//moveAlienShot7
if (createAlienShot7.called == true){
if ( alienShotYLocation7 > 100 && pauseGame == false) {
alienShot7.depth(3);
alienShot7.x(UFO2RandomShot2);
alienShot7.y(alienShotYLocation7);    
alienShot7.show();
alienShotYLocation7 = alienShotYLocation7 + 4;
}
if ( UFO2RandomShot2 >= shipLocation && UFO2RandomShot2 <= shipLocation + 30 && alienShotYLocation7 > 683 && alienShotYLocation7 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation7 >= 705){
alienShot7.hide();
}
}

//moveAlienShot8
if (createAlienShot8.called == true){
if ( alienShotYLocation8 > 100 && pauseGame == false) {
alienShot8.depth(3);
alienShot8.x(UFO2RandomShot3);
alienShot8.y(alienShotYLocation8);    
alienShot8.show();
alienShotYLocation8 = alienShotYLocation8 + 4;
}
if ( UFO2RandomShot3 >= shipLocation && UFO2RandomShot3 <= shipLocation + 30 && alienShotYLocation8 > 683 && alienShotYLocation8 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation8 >= 705){
alienShot8.hide();
}
}

//moveAlienShot9
if (createAlienShot9.called == true){
if ( alienShotYLocation9 > 100 && pauseGame == false) {
alienShot9.depth(3);
alienShot9.x(UFO2RandomShot4);
alienShot9.y(alienShotYLocation9);    
alienShot9.show();
alienShotYLocation9 = alienShotYLocation9 + 4;
}
if ( UFO2RandomShot4 >= shipLocation && UFO2RandomShot4 <= shipLocation + 30 && alienShotYLocation9 > 683 && alienShotYLocation9 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation9 >= 705){
alienShot9.hide();
}
}

//moveAlienShot10
if (createAlienShot10.called == true){
if ( alienShotYLocation10 > 100 && pauseGame == false) {
alienShot10.depth(3);
alienShot10.x(UFO2RandomShot5);
alienShot10.y(alienShotYLocation10);    
alienShot10.show();
alienShotYLocation10 = alienShotYLocation10 + 4;
}
if ( UFO2RandomShot5 >= shipLocation && UFO2RandomShot5 <= shipLocation + 30 && alienShotYLocation10 > 683 && alienShotYLocation10 < 700 && pauseGame == false)
{
destroyShip();
}
if (alienShotYLocation10 >= 705){
alienShot10.hide();
}
}

//moveAlienShot11
if (createAlienShot11.called == true){
if ( alienShotYLocation11 > 100 && pauseGame == false) {
alienShot11.depth(3);
alienShot11.x(UFO3RandomShot1);
alienShot11.y(alienShotYLocation11);    
alienShot11.show();
alienShotYLocation11 = alienShotYLocation11 + 3;
}
if ( UFO3RandomShot1 >= shipLocation && UFO3RandomShot1 <= shipLocation + 30 && alienShotYLocation11 > 683 && alienShotYLocation11 < 700)
{
destroyShip();
}
if (alienShotYLocation11 >= 705){
alienShot11.hide();
}
}


//moveAlienShot12
if (createAlienShot12.called == true){
if ( alienShotYLocation12 > 100 && pauseGame == false) {
alienShot12.depth(3);
alienShot12.x(UFO3RandomShot2);
alienShot12.y(alienShotYLocation12);    
alienShot12.show();
alienShotYLocation12 = alienShotYLocation12 + 3;
}
if ( UFO3RandomShot2 >= shipLocation && UFO3RandomShot2 <= shipLocation + 30 && alienShotYLocation12 > 683 && alienShotYLocation12 < 700)
{
destroyShip();
}
if (alienShotYLocation12 >= 705){
alienShot12.hide();
}
}

//moveAlienShot13
if (createAlienShot13.called == true){
if (alienShotYLocation13 > 100 && pauseGame == false) {
alienShot13.depth(3);
alienShot13.x(UFO3RandomShot3);
alienShot13.y(alienShotYLocation13);    
alienShot13.show();
alienShotYLocation13 = alienShotYLocation13 + 3;
}
if ( UFO3RandomShot3 >= shipLocation && UFO3RandomShot3 <= shipLocation + 30 && alienShotYLocation13 > 683 && alienShotYLocation13 < 700)
{
destroyShip();
}
if (alienShotYLocation13 >= 705){
alienShot13.hide();
}
}

//moveAlienShot14
if (createAlienShot14.called == true){
if (alienShotYLocation14 > 100 && pauseGame == false) {
alienShot14.depth(3);
alienShot14.x(UFO3RandomShot4);
alienShot14.y(alienShotYLocation14);    
alienShot14.show();
alienShotYLocation14 = alienShotYLocation14 + 3;
}
if ( UFO3RandomShot4 >= shipLocation && UFO3RandomShot4 <= shipLocation + 30 && alienShotYLocation14 > 683 && alienShotYLocation14 < 700)
{
destroyShip();
}
if (alienShotYLocation14 >= 705){
alienShot14.hide();
}
}

//moveAlienShot15
if (createAlienShot15.called == true){
if (alienShotYLocation15 > 100 && pauseGame == false) {
alienShot15.depth(3);
alienShot15.x(UFO3RandomShot5);
alienShot15.y(alienShotYLocation15);    
alienShot15.show();
alienShotYLocation15 = alienShotYLocation15 + 4;
}
if ( UFO3RandomShot5 >= shipLocation && UFO3RandomShot5 <= shipLocation + 30 && alienShotYLocation15 > 683 && alienShotYLocation15 < 700)
{
destroyShip();
}
if (alienShotYLocation15 >= 705){
alienShot15.hide();
}
}

//moveRain
if (rainNow == true) {
rain1.x(rainXLocation1);rain1.y(rainYLocation1);rain1.show();if (rainYLocation1 < 710 && pauseGame == false) {rainYLocation1 = rainYLocation1 + Number(rainSpeed1);}else if (pauseGame == false){rainYLocation1 = 100;rainXLocation1 = randRange(1, 1250);} 
rain2.x(rainXLocation2);rain2.y(rainYLocation3);rain2.show();if (rainYLocation2 < 710 && pauseGame == false) {rainYLocation2 = rainYLocation2 + Number(rainSpeed2);}else if (pauseGame == false){rainYLocation2 = 100;rainXLocation2 = randRange(1, 1250);} 
rain3.x(rainXLocation3);rain3.y(rainYLocation3);rain3.show();if (rainYLocation3 < 710 && pauseGame == false) {rainYLocation3 = rainYLocation3 + Number(rainSpeed3);}else if (pauseGame == false){rainYLocation3 = 100;rainXLocation3 = randRange(1, 1250);} 
rain4.x(rainXLocation4);rain4.y(rainYLocation4);rain4.show();if (rainYLocation4 < 710 && pauseGame == false) {rainYLocation4 = rainYLocation4 + Number(rainSpeed4);}else if (pauseGame == false){rainYLocation4 = 100;rainXLocation4 = randRange(1, 1250);}
rain5.x(rainXLocation5);rain5.y(rainYLocation5);rain5.show();if (rainYLocation5 < 710 && pauseGame == false) {rainYLocation5 = rainYLocation5 + Number(rainSpeed5);}else if (pauseGame == false){rainYLocation5 = 100;rainXLocation5 = randRange(1, 1250);}
rain6.x(rainXLocation6);rain6.y(rainYLocation6);rain6.show();if (rainYLocation6 < 710 && pauseGame == false) {rainYLocation6 = rainYLocation6 + Number(rainSpeed6);}else if (pauseGame == false){rainYLocation6 = 100;rainXLocation6 = randRange(1, 1250);}
rain7.x(rainXLocation7);rain7.y(rainYLocation7);rain7.show();if (rainYLocation7 < 710 && pauseGame == false) {rainYLocation7 = rainYLocation7 + Number(rainSpeed7);}else if (pauseGame == false){rainYLocation7 = 100;rainXLocation7 = randRange(1, 1250);}
rain8.x(rainXLocation8);rain8.y(rainYLocation8);rain8.show();if (rainYLocation8 < 710 && pauseGame == false) {rainYLocation8 = rainYLocation8 + Number(rainSpeed8);}else if (pauseGame == false){rainYLocation8 = 100;rainXLocation8 = randRange(1, 1250);}
rain9.x(rainXLocation9);rain9.y(rainYLocation9);rain9.show();if (rainYLocation9 < 710 && pauseGame == false) {rainYLocation9 = rainYLocation9 + Number(rainSpeed9);}else if (pauseGame == false){rainYLocation9 = 100;rainXLocation9 = randRange(1, 1250);}
rain10.x(rainXLocation10);rain10.y(rainYLocation10);rain10.show();if (rainYLocation10 < 710 && pauseGame == false) {rainYLocation10 = rainYLocation10 + Number(rainSpeed10);}else if (pauseGame == false){rainYLocation10 = 100;rainXLocation10 = randRange(1, 1250);}
rain11.x(rainXLocation11);rain11.y(rainYLocation11);rain11.show();if (rainYLocation11 < 710 && pauseGame == false) {rainYLocation11 = rainYLocation11 + Number(rainSpeed11);}else if (pauseGame == false){rainYLocation11 = 100;rainXLocation11 = randRange(1, 1250);}
rain12.x(rainXLocation12);rain12.y(rainYLocation12);rain12.show();if (rainYLocation12 < 710 && pauseGame == false) {rainYLocation12 = rainYLocation12 + Number(rainSpeed12);}else if (pauseGame == false){rainYLocation12 = 100;rainXLocation12 = randRange(1, 1250);}
rain13.x(rainXLocation13);rain13.y(rainYLocation13);rain13.show();if (rainYLocation13 < 710 && pauseGame == false) {rainYLocation13 = rainYLocation13 + Number(rainSpeed13);}else if (pauseGame == false){rainYLocation13 = 100;rainXLocation13 = randRange(1, 1250);}
rain14.x(rainXLocation14);rain14.y(rainYLocation14);rain14.show();if (rainYLocation14 < 710 && pauseGame == false) {rainYLocation14 = rainYLocation14 + Number(rainSpeed14);}else if (pauseGame == false){rainYLocation14 = 100;rainXLocation14 = randRange(1, 1250);}
rain15.x(rainXLocation15);rain15.y(rainYLocation15);rain15.show();if (rainYLocation15 < 710 && pauseGame == false) {rainYLocation15 = rainYLocation15 + Number(rainSpeed15);}else if (pauseGame == false){rainYLocation15 = 100;rainXLocation15 = randRange(1, 1250);}
rain16.x(rainXLocation16);rain16.y(rainYLocation16);rain16.show();if (rainYLocation16 < 710 && pauseGame == false) {rainYLocation16 = rainYLocation16 + Number(rainSpeed16);}else if (pauseGame == false){rainYLocation16 = 100;rainXLocation16 = randRange(1, 1250);}
rain17.x(rainXLocation17);rain17.y(rainYLocation17);rain17.show();if (rainYLocation17 < 710 && pauseGame == false) {rainYLocation17 = rainYLocation17 + Number(rainSpeed17);}else if (pauseGame == false){rainYLocation17 = 100;rainXLocation17 = randRange(1, 1250);}
rain18.x(rainXLocation18);rain18.y(rainYLocation18);rain18.show();if (rainYLocation18 < 710 && pauseGame == false) {rainYLocation18 = rainYLocation18 + Number(rainSpeed18);}else if (pauseGame == false){rainYLocation18 = 100;rainXLocation18 = randRange(1, 1250);}
rain19.x(rainXLocation19);rain19.y(rainYLocation19);rain19.show();if (rainYLocation19 < 710 && pauseGame == false) {rainYLocation19 = rainYLocation19 + Number(rainSpeed19);}else if (pauseGame == false){rainYLocation19 = 100;rainXLocation19 = randRange(1, 1250);}
rain20.x(rainXLocation20);rain20.y(rainYLocation20);rain20.show();if (rainYLocation20 < 710 && pauseGame == false) {rainYLocation20 = rainYLocation20 + Number(rainSpeed20);}else if (pauseGame == false){rainYLocation20 = 100;rainXLocation20 = randRange(1, 1250);}
rain21.x(rainXLocation21);rain21.y(rainYLocation21);rain21.show();if (rainYLocation21 < 710 && pauseGame == false) {rainYLocation21 = rainYLocation21 + Number(rainSpeed21);}else if (pauseGame == false){rainYLocation21 = 100;rainXLocation21 = randRange(1, 1250);}
rain22.x(rainXLocation22);rain22.y(rainYLocation22);rain22.show();if (rainYLocation22 < 710 && pauseGame == false) {rainYLocation22 = rainYLocation22 + Number(rainSpeed22);}else if (pauseGame == false){rainYLocation22 = 100;rainXLocation22 = randRange(1, 1250);}
rain23.x(rainXLocation23);rain23.y(rainYLocation23);rain23.show();if (rainYLocation23 < 710 && pauseGame == false) {rainYLocation23 = rainYLocation23 + Number(rainSpeed23);}else if (pauseGame == false){rainYLocation23 = 100;rainXLocation23 = randRange(1, 1250);}
rain24.x(rainXLocation24);rain24.y(rainYLocation24);rain24.show();if (rainYLocation24 < 710 && pauseGame == false) {rainYLocation24 = rainYLocation24 + Number(rainSpeed24);}else if (pauseGame == false){rainYLocation24 = 100;rainXLocation24 = randRange(1, 1250);}
rain25.x(rainXLocation25);rain25.y(rainYLocation25);rain25.show();if (rainYLocation25 < 710 && pauseGame == false) {rainYLocation25 = rainYLocation25 + Number(rainSpeed25);}else if (pauseGame == false){rainYLocation25 = 100;rainXLocation25 = randRange(1, 1250);}
rain26.x(rainXLocation26);rain26.y(rainYLocation26);rain26.show();if (rainYLocation26 < 710 && pauseGame == false) {rainYLocation26 = rainYLocation26 + Number(rainSpeed26);}else if (pauseGame == false){rainYLocation26 = 100;rainXLocation26 = randRange(1, 1250);}
rain27.x(rainXLocation27);rain27.y(rainYLocation27);rain27.show();if (rainYLocation27 < 710 && pauseGame == false) {rainYLocation27 = rainYLocation27 + Number(rainSpeed27);}else if (pauseGame == false){rainYLocation27 = 100;rainXLocation27 = randRange(1, 1250);}
rain28.x(rainXLocation28);rain28.y(rainYLocation28);rain28.show();if (rainYLocation28 < 710 && pauseGame == false) {rainYLocation28 = rainYLocation28 + Number(rainSpeed28);}else if (pauseGame == false){rainYLocation28 = 100;rainXLocation28 = randRange(1, 1250);}
rain29.x(rainXLocation29);rain29.y(rainYLocation29);rain29.show();if (rainYLocation29 < 710 && pauseGame == false) {rainYLocation29 = rainYLocation29 + Number(rainSpeed29);}else if (pauseGame == false){rainYLocation29 = 100;rainXLocation29 = randRange(1, 1250);}
rain30.x(rainXLocation30);rain30.y(rainYLocation30);rain30.show();if (rainYLocation30 < 710 && pauseGame == false) {rainYLocation30 = rainYLocation30 + Number(rainSpeed30);}else if (pauseGame == false){rainYLocation30 = 100;rainXLocation30 = randRange(1, 1250);}
rain31.x(rainXLocation31);rain31.y(rainYLocation31);rain31.show();if (rainYLocation31 < 710 && pauseGame == false) {rainYLocation31 = rainYLocation31 + Number(rainSpeed31);}else if (pauseGame == false){rainYLocation31 = 100;rainXLocation31 = randRange(1, 1250);}
rain32.x(rainXLocation32);rain32.y(rainYLocation32);rain32.show();if (rainYLocation32 < 710 && pauseGame == false) {rainYLocation32 = rainYLocation32 + Number(rainSpeed32);}else if (pauseGame == false){rainYLocation32 = 100;rainXLocation32 = randRange(1, 1250);}
rain33.x(rainXLocation33);rain33.y(rainYLocation33);rain33.show();if (rainYLocation33 < 710 && pauseGame == false) {rainYLocation33 = rainYLocation33 + Number(rainSpeed33);}else if (pauseGame == false){rainYLocation33 = 100;rainXLocation33 = randRange(1, 1250);}
rain34.x(rainXLocation34);rain34.y(rainYLocation34);rain34.show();if (rainYLocation34 < 710 && pauseGame == false) {rainYLocation34 = rainYLocation34 + Number(rainSpeed34);}else if (pauseGame == false){rainYLocation34 = 100;rainXLocation34 = randRange(1, 1250);}
rain35.x(rainXLocation35);rain35.y(rainYLocation35);rain35.show();if (rainYLocation35 < 710 && pauseGame == false) {rainYLocation35 = rainYLocation35 + Number(rainSpeed35);}else if (pauseGame == false){rainYLocation35 = 100;rainXLocation35 = randRange(1, 1250);}
rain36.x(rainXLocation36);rain36.y(rainYLocation36);rain36.show();if (rainYLocation36 < 710 && pauseGame == false) {rainYLocation36 = rainYLocation36 + Number(rainSpeed36);}else if (pauseGame == false){rainYLocation36 = 100;rainXLocation36 = randRange(1, 1250);}
rain37.x(rainXLocation37);rain37.y(rainYLocation37);rain37.show();if (rainYLocation37 < 710 && pauseGame == false) {rainYLocation37 = rainYLocation37 + Number(rainSpeed37);}else if (pauseGame == false){rainYLocation37 = 100;rainXLocation37 = randRange(1, 1250);}
rain38.x(rainXLocation38);rain38.y(rainYLocation38);rain38.show();if (rainYLocation38 < 710 && pauseGame == false) {rainYLocation38 = rainYLocation38 + Number(rainSpeed38);}else if (pauseGame == false){rainYLocation38 = 100;rainXLocation38 = randRange(1, 1250);}
rain39.x(rainXLocation39);rain39.y(rainYLocation39);rain39.show();if (rainYLocation39 < 710 && pauseGame == false) {rainYLocation39 = rainYLocation39 + Number(rainSpeed39);}else if (pauseGame == false){rainYLocation39 = 100;rainXLocation39 = randRange(1, 1250);}
rain40.x(rainXLocation40);rain40.y(rainYLocation40);rain40.show();if (rainYLocation40 < 710 && pauseGame == false) {rainYLocation40 = rainYLocation40 + Number(rainSpeed40);}else if (pauseGame == false){rainYLocation40 = 100;rainXLocation40 = randRange(1, 1250);}
}

//moveAsteroid1
asteroid1.x(asteroidXLocation1);
asteroid1.y(asteroidYLocation1);
asteroid1.show();
                         // new game    -16                                         +33
if ( shipLocation >= asteroidXLocation1 - 28 && shipLocation <= asteroidXLocation1 + 17 && asteroidYLocation1 > 671 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation1 < 685 && pauseGame == false) {
asteroidYLocation1 = asteroidYLocation1 + Number(randomSpeed1);
}
else if (pauseGame == false){
asteroidYLocation1 = 100;
if (p1Score > 230) {
asteroidXLocation1 = randRange(1, 1250);
}
} 

// moveAsteroid2
asteroid2.x(asteroidXLocation2);
asteroid2.y(asteroidYLocation2);
asteroid2.show();
if ( shipLocation >= asteroidXLocation2 - 28 && shipLocation <= asteroidXLocation2 + 17 && asteroidYLocation2 > 669 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation2 < 683 && pauseGame == false) {
asteroidYLocation2 = asteroidYLocation2 + Number(randomSpeed2);
}
else if (pauseGame == false){
asteroidYLocation2 = 100;
if (p1Score > 230) {
asteroidXLocation2 = randRange(1, 1250);
}
} 

//moveAsteroid3
asteroid3.x(asteroidXLocation3);
asteroid3.y(asteroidYLocation3);
asteroid3.show();
if ( shipLocation >= asteroidXLocation3 - 28 && shipLocation <= asteroidXLocation3 + 31 && asteroidYLocation3 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation3 < 668 && pauseGame == false) {
asteroidYLocation3 = asteroidYLocation3 + Number(randomSpeed3);
}
else if (pauseGame == false){
asteroidYLocation3 = 100;
if (p1Score > 230) {
asteroidXLocation3 = randRange(1, 1250); 
}
} 

//moveAsteroid4
asteroid4.x(asteroidXLocation4);
asteroid4.y(asteroidYLocation4);
asteroid4.show();
if ( shipLocation >= asteroidXLocation4 - 28 && shipLocation <= asteroidXLocation4 + 31 && asteroidYLocation4 > 656 && pauseGame == false)
{
destroyShip();
} 
else if (asteroidYLocation4 < 670 && pauseGame == false) {
asteroidYLocation4 = asteroidYLocation4 + Number(randomSpeed4);
}
else if (pauseGame == false){
asteroidYLocation4 = 100;
if (p1Score > 230) { asteroidXLocation4 = randRange(1, 1250);
}
} 

//moveAsteroid5
asteroid5.x(asteroidXLocation5);
asteroid5.y(asteroidYLocation5);
asteroid5.show();
if ( shipLocation >= asteroidXLocation5 - 28 && shipLocation <= asteroidXLocation5 + 31 && asteroidYLocation5 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation5 < 668 && pauseGame == false) {
asteroidYLocation5 = asteroidYLocation5 + Number(randomSpeed5);
}
else if (pauseGame == false){
asteroidYLocation5 = 100;
if (p1Score > 230) { asteroidXLocation5 = randRange(1, 1250);
}
} 

//moveAsteroid6
asteroid6.x(asteroidXLocation6);
asteroid6.y(asteroidYLocation6);
asteroid6.show();
if ( shipLocation >= asteroidXLocation6 - 28 && shipLocation <= asteroidXLocation6 + 15 && asteroidYLocation6 > 673 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation6 < 687 && pauseGame == false) {
asteroidYLocation6 = asteroidYLocation6 + Number(randomSpeed6);
}
else if (pauseGame == false){
asteroidYLocation6 = 100;
if (p1Score > 230) { asteroidXLocation6 = randRange(1, 1250);
}
} 

//moveAsteroid7
asteroid7.x(asteroidXLocation7);
asteroid7.y(asteroidYLocation7);
asteroid7.show();
if ( shipLocation >= asteroidXLocation7 - 28 && shipLocation <= asteroidXLocation7 + 31 && asteroidYLocation7 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation7 < 668 && pauseGame == false) {
asteroidYLocation7 = asteroidYLocation7 + Number(randomSpeed7);
}
else if (pauseGame == false){
asteroidYLocation7 = 100;
if (p1Score > 230) { asteroidXLocation7 = randRange(1, 1250);
}
} 

//moveAsteroid8
if (p1Score >= 30 ) { 
asteroid8.x(asteroidXLocation8);	
asteroid8.y(asteroidYLocation8);
asteroid8.show();
if ( shipLocation >= asteroidXLocation8  - 28 && shipLocation <= asteroidXLocation8 + 31 && asteroidYLocation8 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation8 < 668 && pauseGame == false) {
asteroidYLocation8 = asteroidYLocation8 + Number(randomSpeed8);
}
else if (pauseGame == false){
asteroidYLocation8 = 100;
if (p1Score > 230) { asteroidXLocation8 = randRange(1, 1250); }
} 
}

//moveAsteroid9
if (p1Score >= 50 ) {
asteroid9.x(asteroidXLocation9);	
asteroid9.y(asteroidYLocation9);
asteroid9.show();
if ( shipLocation >= asteroidXLocation9 - 28 && shipLocation <= asteroidXLocation9 + 17 && asteroidYLocation9 > 669 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation9 < 683 && pauseGame == false) {
asteroidYLocation9 = asteroidYLocation9 + Number(randomSpeed9);
}
else if (pauseGame == false){
asteroidYLocation9 = 100;
if (p1Score > 230) { asteroidXLocation9 = randRange(1, 1250); }
} 
}

//moveAsteroid10
if (p1Score >= 70 ) {
asteroid10.x(asteroidXLocation10);	
asteroid10.y(asteroidYLocation10);
asteroid10.show();
if ( shipLocation >= asteroidXLocation10 - 28 && shipLocation <= asteroidXLocation10 + 30 && asteroidYLocation10 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation10 < 668 && pauseGame == false) {
asteroidYLocation10 = asteroidYLocation10 + Number(randomSpeed10);
}
else if (pauseGame == false){
asteroidYLocation10 = 100;
if (p1Score > 230) { asteroidXLocation10 = randRange(1, 1250); }
}
}


//moveAsteroidb1
if (p1Score >= 145 && asteroidb1Health > 0) {
asteroidb1.x(asteroidXLocationb1);		
asteroidb1.y(asteroidYLocationb1);
asteroidb1.show();
if ( shipLocation >= asteroidXLocationb1 - 46 && shipLocation <= asteroidXLocationb1 + 50 && asteroidYLocationb1 > 640 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationb1 < 655 && pauseGame == false) {
asteroidYLocationb1 = asteroidYLocationb1 + Number(randomSpeedb1);
}
else if (pauseGame == false) {	
asteroidYLocationb1 = Number("100"); 
asteroidXLocationb1 = randRange(1, 1250);
}
}

//moveAsteroid11
if (p1Score >= 115 ) {	
asteroid11.x(asteroidXLocation11);
asteroid11.y(asteroidYLocation11);
asteroid11.show();
if ( shipLocation >= asteroidXLocation11 - 28 && shipLocation <= asteroidXLocation11 + 31 && asteroidYLocation11 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation11 < 668 && pauseGame == false) {
asteroidYLocation11 = asteroidYLocation11 + Number(randomSpeed11);
}
else if (pauseGame == false){
asteroidYLocation11 = 100;
if (p1Score > 230) { asteroidXLocation11 = randRange(1, 1250); }
}
}

//moveAsteroid12
if (p1Score >= 190 ) {
asteroid12.x(asteroidXLocation12);	
asteroid12.y(asteroidYLocation12);
asteroid12.show();
if ( shipLocation >= asteroidXLocation12 - 28 && shipLocation <= asteroidXLocation12 + 17 && asteroidYLocation12 > 671 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation12 < 685 && pauseGame == false) {
asteroidYLocation12 = asteroidYLocation12 + Number(randomSpeed12);
}
else if (pauseGame == false){
asteroidYLocation12 = 100;
if (p1Score > 970) { asteroidXLocation12 = randRange(1, 1250); randomSpeed12 = randRange(3, 9);}
}
}

//moveAsteroid13
if (p1Score >= 270 ) {
asteroid13.x(asteroidXLocation13);	
asteroid13.y(asteroidYLocation13);
asteroid13.show();
if ( shipLocation >= asteroidXLocation13 - 28 && shipLocation <= asteroidXLocation13 + 17 && asteroidYLocation13 > 669 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation13 < 683 && pauseGame == false) {
asteroidYLocation13 = asteroidYLocation13 + Number(randomSpeed13);
}
else if ( pauseGame == false){
asteroidYLocation13 = 100;
if (p1Score > 970) { asteroidXLocation13 = randRange(1, 1250); randomSpeed13 = randRange(3, 9);}
}
}

//moveAsteroidb2
if (p1Score >= 310 && asteroidb2Health > 0 && pauseGame == false) {
asteroidb2.x(asteroidXLocationb2);		
asteroidb2.y(asteroidYLocationb2);
asteroidb2.show();
if ( shipLocation >= asteroidXLocationb2 - 46 && shipLocation <= asteroidXLocationb2 + 50 && asteroidYLocationb2 > 640 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationb2 < 655 && pauseGame == false) {
asteroidYLocationb2 = asteroidYLocationb2 + Number(randomSpeedb2);
}
else if (pauseGame == false){
asteroidYLocationb2 = Number("100"); 
asteroidXLocationb2 = randRange(1, 1250);
}
}

//moveAsteroid14
if (p1Score >= 350 ) {
asteroid14.x(asteroidXLocation14);	
asteroid14.y(asteroidYLocation14);
asteroid14.show();
if ( shipLocation >= asteroidXLocation14 - 28 && shipLocation <= asteroidXLocation14 + 31 && asteroidYLocation14 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation14 < 668 && pauseGame == false) {
asteroidYLocation14 = asteroidYLocation14 + Number(randomSpeed14);
}
else if (pauseGame == false){
asteroidYLocation14 = 100;
if (p1Score > 970) { asteroidXLocation14 = randRange(1, 1250); randomSpeed14 = randRange(3, 9);}
}
}

//moveAsteroid15
if (p1Score >= 410 ) {
asteroid15.x(asteroidXLocation15);	
asteroid15.y(asteroidYLocation15);
asteroid15.show();
if ( shipLocation >= asteroidXLocation15 - 28 && shipLocation <= asteroidXLocation15 + 31 && asteroidYLocation15 > 656 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation15 < 670 && pauseGame == false) {
asteroidYLocation15 = asteroidYLocation15 + Number(randomSpeed15);
}
else if (pauseGame == false){
asteroidYLocation15 = 100;
if (p1Score > 970) { asteroidXLocation15 = randRange(1, 1250); randomSpeed15 = randRange(3, 9);}
}
}

//moveAsteroid16
if (p1Score >= 450 ) {
asteroid16.x(asteroidXLocation16);
asteroid16.y(asteroidYLocation16);
asteroid16.show();
if ( shipLocation >= asteroidXLocation16 - 28 && shipLocation <= asteroidXLocation16 + 31 && asteroidYLocation16 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation16 < 668 && pauseGame == false) {
asteroidYLocation16 = asteroidYLocation16 + Number(randomSpeed16);
}
else if (pauseGame == false){
asteroidYLocation16 = 100;
if (p1Score > 970) { asteroidXLocation16 = randRange(1, 1250); randomSpeed16 = randRange(3, 9);}
}
}

//moveAsteroid17
if (p1Score >= 500 ) {
asteroid17.x(asteroidXLocation17);	
asteroid17.y(asteroidYLocation17);
asteroid17.show();
if ( shipLocation >= asteroidXLocation17 - 28 && shipLocation <= asteroidXLocation17 + 15 && asteroidYLocation17 > 673 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation17 < 687 && pauseGame == false) {
asteroidYLocation17 = asteroidYLocation17 + Number(randomSpeed17);
}
else if (pauseGame == false){
asteroidYLocation17 = 100;
if (p1Score > 970) { asteroidXLocation17 = randRange(1, 1250); randomSpeed17 = randRange(3, 9);}
}
}

//moveAsteroidc1
if (p1Score >= 575 && asteroidc1Health > 0) {
asteroidc1.x(asteroidXLocationc1);		
asteroidc1.y(asteroidYLocationc1);
asteroidc1.show();
if ( shipLocation >= asteroidXLocationc1 - 27 && shipLocation <= asteroidXLocationc1 + 146 && asteroidYLocationc1 > 560 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationc1 < 575 && pauseGame == false) {
asteroidYLocationc1 = asteroidYLocationc1 + Number(randomSpeedc1);
}
else if (pauseGame == false) {	
asteroidYLocationc1 = Number("100"); 
asteroidXLocationc1 = randRange(1, 1100);
}
}

//moveAsteroid18
if (p1Score >= 625 ) {
asteroid18.x(asteroidXLocation18);	
asteroid18.y(asteroidYLocation18);
asteroid18.show();
if ( shipLocation >= asteroidXLocation18 - 28 && shipLocation <= asteroidXLocation18 + 31 && asteroidYLocation18 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation18 < 668 && pauseGame == false) {
asteroidYLocation18 = asteroidYLocation18 + Number(randomSpeed18);
}
else if (pauseGame == false){
asteroidYLocation18 = 100;	
if (p1Score > 970) { asteroidXLocation18 = randRange(1, 1250); randomSpeed18 = randRange(3, 9);}
}
}

//moveAsteroid19
if (p1Score >= 700 ) {
asteroid19.x(asteroidXLocation19);	
asteroid19.y(asteroidYLocation19);
asteroid19.show();
if ( shipLocation >= asteroidXLocation19 - 28 && shipLocation <= asteroidXLocation19 + 31 && asteroidYLocation19 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation19 < 668 && pauseGame == false) {
asteroidYLocation19 = asteroidYLocation19 + Number(randomSpeed19);
}
else if (pauseGame == false){
asteroidYLocation19 = 100;
if (p1Score > 970) { asteroidXLocation19 = randRange(1, 1250); randomSpeed19 = randRange(3, 9);}
}
}

//moveAsteroidb3

if (p1Score >= 740 && asteroidb3Health > 0) {
asteroidb3.x(asteroidXLocationb3);		
asteroidb3.y(asteroidYLocationb3);
asteroidb3.show();
if ( shipLocation >= asteroidXLocationb3 - 46 && shipLocation <= asteroidXLocationb3 + 50 && asteroidYLocationb3 > 640 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationb3 < 655 && pauseGame == false) {
asteroidYLocationb3 = asteroidYLocationb3 + Number(randomSpeedb3);
}
else if (pauseGame == false){
asteroidYLocationb3 = Number("100"); 
asteroidXLocationb3 = randRange(1, 1250);
}
}

//moveAsteroid20
if (p1Score >= 760 ) {
asteroid20.x(asteroidXLocation20);	
asteroid20.y(asteroidYLocation20);
asteroid20.show();
if ( shipLocation >= asteroidXLocation20 - 28 && shipLocation <= asteroidXLocation20 + 17 && asteroidYLocation20 > 669 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation20 < 683 && pauseGame == false) {
asteroidYLocation20 = asteroidYLocation20 + Number(randomSpeed20);
}
else if (pauseGame == false){
asteroidYLocation20 = 100;
if (p1Score > 970) { asteroidXLocation20 = randRange(1, 1250); randomSpeed20 = randRange(3, 9);}
}
}

//moveAsteroid21
if (p1Score >= 820 ) {
asteroid21.x(asteroidXLocation21);		
asteroid21.y(asteroidYLocation21);
asteroid21.show();
if ( shipLocation >= asteroidXLocation21 - 28 && shipLocation <= asteroidXLocation21 + 30 && asteroidYLocation21 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation21 < 668 && pauseGame == false) {
asteroidYLocation21 = asteroidYLocation21 + Number(randomSpeed21);
}
else if (pauseGame == false){
asteroidYLocation21 = 100;
if (p1Score > 970) { asteroidXLocation21 = randRange(1, 1250); randomSpeed21 = randRange(3, 9);}
}
}

//moveAsteroidb4
if (p1Score >= 880 && asteroidb4Health > 0) {
asteroidb4.x(asteroidXLocationb4);		
asteroidb4.y(asteroidYLocationb4);
asteroidb4.show();
if ( shipLocation >= asteroidXLocationb4 - 46 && shipLocation <= asteroidXLocationb4 + 50 && asteroidYLocationb4 > 640 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationb4 < 655 && pauseGame == false) {
asteroidYLocationb4 = asteroidYLocationb4 + Number(randomSpeedb4);
}
else if (pauseGame == false){
asteroidYLocationb4 = Number("100"); 
asteroidXLocationb4 = randRange(1, 1250);
}
}

//moveAsteroid22
if (p1Score >= 910 ) {
asteroid22.x(asteroidXLocation22);	
asteroid22.y(asteroidYLocation22);
asteroid22.show();
if ( shipLocation >= asteroidXLocation22 - 28 && shipLocation <= asteroidXLocation22 + 31 && asteroidYLocation22 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation22 < 668 && pauseGame == false) {
asteroidYLocation22 = asteroidYLocation22 + Number(randomSpeed22);
}
else if (pauseGame == false){
asteroidYLocation22 = 100;
if (p1Score > 970) { asteroidXLocation22 = randRange(1, 1250); randomSpeed22 = randRange(3, 9);}
}
}

//moveAsteroid23
if (p1Score >= 940 && asteroid23Health > 0) {
asteroid23.x(asteroidXLocation23);		
asteroid23.y(asteroidYLocation23);
asteroid23.show();
if ( shipLocation >= asteroidXLocation23 - 28 && shipLocation <= asteroidXLocation23 + 17 && asteroidYLocation23 > 671 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation23 < 685 && pauseGame == false) {
asteroidYLocation23 = asteroidYLocation23 + Number(randomSpeed23);
}
else if (pauseGame == false){
asteroidYLocation23 = Number("100"); 
asteroidXLocation23 = randRange(1, 1250);
}
}

//moveAsteroid24
if (p1Score >= 1000 && asteroid24Health > 0) {
asteroid24.x(asteroidXLocation24);		
asteroid24.y(asteroidYLocation24);
asteroid24.show();
if ( shipLocation >= asteroidXLocation24 - 28 && shipLocation <= asteroidXLocation24 + 17 && asteroidYLocation24 > 669 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation24 < 683 && pauseGame == false) {
asteroidYLocation24 = asteroidYLocation24 + Number(randomSpeed24);
}
else if (pauseGame == false){
asteroidYLocation24 = Number("100"); 
asteroidXLocation24 = randRange(1, 1250);
}
}

//moveAsteroid25
if (p1Score >= 1035 && asteroid25Health > 0) {
asteroid25.x(asteroidXLocation25);		
asteroid25.y(asteroidYLocation25);
asteroid25.show();
if ( shipLocation >= asteroidXLocation25 - 28 && shipLocation <= asteroidXLocation25 + 31 && asteroidYLocation25 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation25 < 668 && pauseGame == false) {
asteroidYLocation25 = asteroidYLocation25 + Number(randomSpeed25);
}
else if (pauseGame == false){
asteroidYLocation25 = Number("100"); 
asteroidXLocation25 = randRange(1, 1250);
}
}

//moveAsteroidc2
if (p1Score >= 1070 && asteroidc2Health > 0) {
asteroidc2.x(asteroidXLocationc2);		
asteroidc2.y(asteroidYLocationc2);
asteroidc2.show();
if ( shipLocation >= asteroidXLocationc2 - 27 && shipLocation <= asteroidXLocationc2 + 146 && asteroidYLocationc2 > 560 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationc2 < 575 && pauseGame == false) {
asteroidYLocationc2 = asteroidYLocationc2 + Number(randomSpeedc2);
}
else if (pauseGame == false) {	
asteroidYLocationc2 = Number("100"); 
asteroidXLocationc2 = randRange(1, 1100);
}
}

//moveAsteroid26
if (p1Score >= 1105 && asteroid26Health > 0) {
asteroid26.x(asteroidXLocation26);		
asteroid26.y(asteroidYLocation26);
asteroid26.show();
if ( shipLocation >= asteroidXLocation26 - 28 && shipLocation <= asteroidXLocation26 + 31 && asteroidYLocation26 > 656 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation26 < 670 && pauseGame == false) {
asteroidYLocation26 = asteroidYLocation26 + Number(randomSpeed26);
}
else if (pauseGame == false){
asteroidYLocation26 = Number("100"); 
asteroidXLocation26 = randRange(1, 1250);
}
}

//moveAsteroid27
if (p1Score >= 1210 && asteroid27Health > 0) {
asteroid27.x(asteroidXLocation27);		
asteroid27.y(asteroidYLocation27);
asteroid27.show();
if ( shipLocation >= asteroidXLocation27 - 28 && shipLocation <= asteroidXLocation27 + 31 && asteroidYLocation27 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation27 < 668 && pauseGame == false) {
asteroidYLocation27 = asteroidYLocation27 + Number(randomSpeed27);
}
else if (pauseGame == false){
asteroidYLocation27 = Number("100"); 
asteroidXLocation27 = randRange(1, 1250);
}
}

//moveAsteroid28
if (p1Score >= 1280 && asteroid28Health > 0) {
asteroid28.x(asteroidXLocation28);		
asteroid28.y(asteroidYLocation28);
asteroid28.show();
if ( shipLocation >= asteroidXLocation28 - 28 && shipLocation <= asteroidXLocation28 + 15 && asteroidYLocation28 > 673 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation28 < 687 && pauseGame == false) {
asteroidYLocation28 = asteroidYLocation28 + Number(randomSpeed28);
}
else if (pauseGame == false){
asteroidYLocation28 = Number("100"); 
asteroidXLocation28 = randRange(1, 1250);
}
}

//moveAsteroid29
if (p1Score >= 1350 && asteroid29Health > 0) {
asteroid29.x(asteroidXLocation29);		
asteroid29.y(asteroidYLocation29);
asteroid29.show();
if ( shipLocation >= asteroidXLocation29 - 28 && shipLocation <= asteroidXLocation29 + 31 && asteroidYLocation29 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation29 < 668 && pauseGame == false) {
asteroidYLocation29 = asteroidYLocation29 + Number(randomSpeed29);
}
else if (pauseGame == false){
asteroidYLocation29 = Number("100"); 
asteroidXLocation29 = randRange(1, 1250);
}
}

//moveAsteroidb5
if (p1Score >= 1385 && asteroidb5Health > 0) {
asteroidb5.x(asteroidXLocationb5);		
asteroidb5.y(asteroidYLocationb5);
asteroidb5.show();
if ( shipLocation >= asteroidXLocationb5 - 46 && shipLocation <= asteroidXLocationb5 + 50 && asteroidYLocationb5 > 640 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationb5 < 655 && pauseGame == false) {
asteroidYLocationb5 = asteroidYLocationb5 + Number(randomSpeedb5);
}
else if (pauseGame == false){
asteroidYLocationb5 = Number("100"); 
asteroidXLocationb5 = randRange(1, 1250);
}
}

//moveAsteroid30
if (p1Score >= 1420 && asteroid30Health > 0) {
asteroid30.x(asteroidXLocation30);		
asteroid30.y(asteroidYLocation30);
asteroid30.show();
if ( shipLocation >= asteroidXLocation30 - 28 && shipLocation <= asteroidXLocation30 + 31 && asteroidYLocation30 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation30 < 668 && pauseGame == false) {
asteroidYLocation30 = asteroidYLocation30 + Number(randomSpeed30);
}
else if (pauseGame == false){
asteroidYLocation30 = Number("100"); 
asteroidXLocation30 = randRange(1, 1250);
}
}

//moveAsteroid31
if (p1Score >= 1455 && asteroid31Health > 0) {
asteroid31.x(asteroidXLocation31);		
asteroid31.y(asteroidYLocation31);
asteroid31.show();
if ( shipLocation >= asteroidXLocation31 - 28 && shipLocation <= asteroidXLocation31 + 17 && asteroidYLocation31 > 669 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation31 < 683 && pauseGame == false) {
asteroidYLocation31 = asteroidYLocation31 + Number(randomSpeed31);
}
else if (pauseGame == false){
asteroidYLocation31 = Number("100"); 
asteroidXLocation31 = randRange(1, 1250);
}
}

//moveAsteroid32
if (p1Score >= 1525 && asteroid32Health > 0) {
asteroid32.x(asteroidXLocation32);		
asteroid32.y(asteroidYLocation32);
asteroid32.show();
if ( shipLocation >= asteroidXLocation32 - 28 && shipLocation <= asteroidXLocation32 + 30 && asteroidYLocation32 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation32 < 668 && pauseGame == false) {
asteroidYLocation32 = asteroidYLocation32 + Number(randomSpeed32);
}
else if (pauseGame == false){
asteroidYLocation32 = Number("100"); 
asteroidXLocation32 = randRange(1, 1250);
}
}

//moveAsteroid33
if (p1Score >= 1560 && asteroid33Health > 0) {
asteroid33.x(asteroidXLocation33);		
asteroid33.y(asteroidYLocation33);
asteroid33.show();
if ( shipLocation >= asteroidXLocation33 - 28 && shipLocation <= asteroidXLocation33 + 31 && asteroidYLocation33 > 654 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation33 < 668 && pauseGame == false) {
asteroidYLocation33 = asteroidYLocation33 + Number(randomSpeed33);
}
else if (pauseGame == false){
asteroidYLocation33 = Number("100");
asteroidXLocation33 = randRange(1, 1250);
}
}

//moveAsteroidb6
if (p1Score >= 1630 && asteroidb6Health > 0) {
asteroidb6.x(asteroidXLocationb6);		
asteroidb6.y(asteroidYLocationb6);
asteroidb6.show();
if ( shipLocation >= asteroidXLocationb6 - 46 && shipLocation <= asteroidXLocationb6 + 50 && asteroidYLocationb6 > 640 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocationb6 < 655 && pauseGame == false) {
asteroidYLocationb6 = asteroidYLocationb6 + Number(randomSpeedb6);
}
else if (pauseGame == false){
asteroidYLocationb6 = Number("100"); 
asteroidXLocationb6 = randRange(1, 1250);
}
}

//moveAsteroid34
if (p1Score >= 1700 && asteroid34Health > 0) {
asteroid34.x(asteroidXLocation34);		
asteroid34.y(asteroidYLocation34);
asteroid34.show();
if ( shipLocation >= asteroidXLocation34 - 28 && shipLocation <= asteroidXLocation34 + 17 && asteroidYLocation34 > 671 && pauseGame == false)
{
destroyShip();
}
else if (asteroidYLocation34 < 685 && pauseGame == false) {
asteroidYLocation34 = asteroidYLocation34 + Number(randomSpeed34);
}
else if (pauseGame == false){
asteroidYLocation34 = Number("100");
asteroidXLocation34 = randRange(1, 1250);
}
}


//Restarts Asteroids At Death
if (renewAsteroids == true) { asteroidYLocation1 = 100; asteroidYLocation2 = 100; asteroidYLocation3 = 100; 
asteroidYLocation4 = 100; asteroidYLocation5 = 100; asteroidYLocation6 = 100; asteroidYLocation7 = 100; 
asteroidYLocation8 = 100; asteroidYLocation9 = 100; asteroidYLocation10 = 100; asteroidYLocation11 = 100;
asteroidYLocationb1 = 100; asteroidYLocation12 = 100; asteroidYLocation13 = 100; asteroidYLocationb2 = 100; 
asteroidYLocation14 = 100; asteroidYLocation15 = 100; asteroidYLocation16 = 100; asteroidYLocation17 = 100;
asteroidYLocationc1 = 100; asteroidYLocation18 = 100; asteroidYLocation19 = 100; asteroidYLocationb3 = 100;
asteroidYLocation20 = 100; asteroidYLocation21 = 100; asteroidYLocationb4 = 100; asteroidYLocation22 = 100;
asteroidYLocation23 = 100; asteroidYLocation24 = 100; asteroidYLocation25 = 100; asteroidYLocationc2 = 100;
asteroidYLocation26 = 100; asteroidYLocation27 = 100; asteroidYLocation28 = 100; asteroidYLocation29 = 100;
asteroidYLocationb5 = 100; asteroidYLocation30 = 100; asteroidYLocation31 = 100; asteroidYLocation32 = 100;
asteroidYLocation33 = 100; asteroidYLocationb6 = 100; asteroidYLocation34 = 100;
renewAsteroids = false;
}

//Added Words
//Meteor Waves
if (p1Score >= 475 && p1Score <= 478 || p1Score >= 480 && p1Score <= 483 || p1Score >= 491 && p1Score <= 495){
moveMeteor1();
moveMeteor2();
}
if (p1Score == 479 || p1Score == 484 || p1Score == 496){
resetMeteor1();
resetMeteor2();
}

//Alien Waves
if (p1Score >= 350 && p1Score <= 360){
moveUFO();
}
if (p1Score == 370){
resetUFO();
}


//incoming
if (p1Score >= 143 && p1Score <= 144 || p1Score >= 308 && p1Score <= 309 || p1Score >= 738 && p1Score <= 739 || p1Score >= 878 && p1Score <= 879 || p1Score >= 1383 && p1Score <= 1384) {
counter++;	
if (counter <= 20){ textIncoming.show(); }
if (counter > 20 && counter < 40){ textIncoming.hide(); }
else if (counter >= 40) {counter = 0;} }

if (p1Score == 0 || p1Score == 145 || p1Score == 310 || p1Score == 740 || p1Score == 880 || p1Score == 1385){ textIncoming.hide(); counter = 0; }

//big one
if (p1Score >= 573 && p1Score <= 574 || p1Score >= 1068 && p1Score <= 1069) {
counter++;	
if (counter <= 10){ textBigOne.show(); }
if (counter > 10 && counter < 20){ textBigOne.hide(); }
else if (counter >= 20) {counter = 0;} }

if (p1Score == 0 || p1Score == 575 || p1Score == 1070){ textBigOne.hide(); counter = 0; }
   
 //ufo  
if (p1Score >= 348 && p1Score <= 349){
counter++;
if (counter <= 20){	 textSaucer.show(); }
if (counter > 20 && counter < 40){ textSaucer.hide(); }
else if (counter >= 40)
{counter = 0;} }

if (p1Score == 0 || p1Score == 350){ textSaucer.hide(); counter = 0; }

//rain
if (p1Score >= 228 && p1Score <= 232 || p1Score >= 968 && p1Score <= 972){
rainNow = true;	
counter++;
if (counter <= 20){ textRain.show(); }
if (counter > 20 && counter < 40){ textRain.hide(); }
else if (counter >= 40)
{counter = 0;} }

if (p1Score == 0 || p1Score == 233 || p1Score == 973){ textRain.hide(); counter = 0; rainNow = false; rain1.hide();rain2.hide();rain3.hide();rain4.hide();rain5.hide();rain6.hide();rain7.hide();rain8.hide();rain9.hide();rain10.hide();
rain11.hide();rain12.hide();rain13.hide();rain14.hide();rain15.hide();rain16.hide();rain17.hide();rain18.hide();rain19.hide();rain20.hide();rain21.hide();rain22.hide();rain23.hide();rain24.hide();rain25.hide();
rain26.hide();rain27.hide();rain28.hide();rain29.hide();rain30.hide();rain31.hide();rain32.hide();rain33.hide();rain34.hide();rain35.hide();rain36.hide();rain37.hide();rain38.hide();rain39.hide();rain40.hide();}

//meteors
if (p1Score >= 472 && p1Score <= 474){
counter++;
if (counter <= 10){ textMeteors.show(); }
if (counter > 10 && counter < 20){ textMeteors.hide(); }
else if (counter >= 20)
{counter = 0;} }

if (p1Score == 0 || p1Score == 475){ textMeteors.hide(); counter = 0; }


//Move Bomb
if (p1Level >=6 && p1Level <= 99 && p1Level % 7 === 0  || p1Level >=6 && p1Level <= 99 && (p1Level - 1) % 7 === 0)  { moveBomb(); }
//Move One Up Life
if (p1Level >=10 && p1Level <= 96 && p1Level % 5 === 0 || p1Level >=10 && p1Level <= 96 && (p1Level - 1) % 5 === 0) { moveOneUpLife(); }
//change background
if (p1Level > 10 && useBomb == false){ sdl.setBackground({ R: 0, G: 0, B: p1Level, A: 0 }); }
else if (p1Level > 80 && useBomb == false){ sdl.setBackground({ R: 0, G: 0, B: p1Level * 2 - 70, A: 0 }); }
else if  (useBomb == true ) { bombCounter++; sdl.setBackground({ R: 255, G: 255, B: 255, A: 0 });
if (bombCounter = 10) { useBomb = false; bombCounter = bombCounter - 10;} }
else { sdl.setBackground({ R: 0, G: 0, B: 0, A: 0 }); }
// stats
var p1s = p1Score.toString(); var p1le = p1Level.toString(); var p1li = p1Lives.toString();
textStats.text("Score " + p1s + "   Level " + p1le + "   Lives " + p1li)

});

//end of asteroids game