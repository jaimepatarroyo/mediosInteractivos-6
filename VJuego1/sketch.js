//figuras invisibles nivel 1
var posxinv1 = 18
var posyinv1 = 550
var taminvx1 = 10
var taminvy1 = 50
var posxinv2 = 30
var posyinv2 = 528
var taminvx2 = 887
var taminvy2 = 20
var posxinv3 = 30
var posyinv3 = 602
var taminvx3 = 940
var taminvy3 = 20
var posxinv4 = 972
var posyinv4 = 300
var taminvx4 = 10
var taminvy4 = 300
var posxinv5 = 907
var posyinv5 = 352
var taminvx5 = 10
var taminvy5 = 190
var posxinv6 = 80
var posyinv6 = 352
var taminvx6 = 827
var taminvy6 = 20
var posxinv7 = 67
var posyinv7 = 110
var taminvx7 = 10
var taminvy7 = 240
var posxinv8 = 80
var posyinv8 = 87
var taminvx8 = 880
var taminvy8 = 20
var posxinv9 = 132
var posyinv9 = 163
var taminvx9 = 827
var taminvy9 = 133
// figuras invisibles nivel 2 
var posxin1 = 83
var posyin1 = 88
var taminx1 = 870
var taminy1 = 20
var posxin2 = 58
var posyin2 = 110
var taminx2 = 20
var taminy2 = 490
var posxin3 = 80
var posyin3 = 601
var taminx3 = 880
var taminy3 = 20
var posxin4 = 961
var posyin4 = 110
var taminx4 = 20
var taminy4 = 490
var posxin5 = 131
var posyin5 = 161
var taminx5 = 827
var taminy5 = 87
var posxin6 = 131
var posyin6 = 248
var taminx6 = 67
var taminy6 = 300
var posxin7 = 198
var posyin7 = 441
var taminx7 = 710
var taminy7 = 107
var posxin8 = 251
var posyin8 = 301
var taminx8 = 657
var taminy8 = 87
var posxin9 = 801
var posyin9 = 389
var taminx9 = 107
var taminy9 = 51
//figuras invisibles nivel 3
var posxi1 = 931
var posyi1 = 119
var tamix1 = 20
var tamiy1 = 530
var posxi2 = 480
var posyi2 = 98
var tamix2 = 449
var tamiy2 = 20
var posxi3 = 531
var posyi3 = 171
var tamix3 = 347
var tamiy3 = 147
var posxi4 = 681
var posyi4 = 319
var tamix4 = 197
var tamiy4 = 69
var posxi5 = 681
var posyi5 = 389
var tamix5 = 67
var tamiy5 = 260
var posxi6 = 801
var posyi6 = 389
var tamix6 = 77
var tamiy6 = 209
var posxi7 = 99
var posyi7 = 601
var tamix7 = 581
var tamiy7 = 20
var posxi8 = 251
var posyi8 = 80
var tamix8 = 227
var tamiy8 = 468
var posxi9 = 478
var posyi9 = 371
var tamix9 = 150
var tamiy9 = 177
var posxi10 = 78
var posyi10 = 400
var tamix10 = 20
var tamiy10 = 200
var posxi11 = 30
var posyi11 = 131
var tamix11 = 168
var tamiy11 = 267
var posxi12 = 30
var posyi12 = 58
var tamix12 = 300
var tamiy12 = 20
var posxi13 = 151
var posyi13 = 451
var tamix13 = 99
var tamiy13 = 97

//fotos comida
var mihamburguesa
var mipizza
var mispapas
var mizanahoria
var zanaa
var miEjercito = []
//ZANAHORIAS que matan
//personaje
var mioso
//acciones
var x = 0
var y = 0
var tam
//estados del juego
var estado = 0
var inicio = 1
var nivelham = 3
var nivelpiz = 4
var nivelpap = 5
var perdiste = 9
var ganaste = 8
var y1

function preload() {
  mihamburguesa = loadImage('assets/hamburguesa.png')
  mipizza = loadImage('assets/pizza.png')
  mispapas = loadImage('assets/papas.png')
  mizanahoria = loadImage('assets/zana.png')
  mioso = loadImage('assets/personaje.png')
  miCancion = loadSound('assets/super.mp3');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  x = 60 * width / 1000
  y = 575 * height / 700
  tam = 60
  zanaa = new carrot(230, 150)
  for (var i = 0; i < 8; i = i + 1) {
    var tempX = random(0, width)
    var tempY = random(0, height)
    miEjercito[i] = new carrot(tempX, tempY)
  }
}

function draw() {

  if (mouseIsPressed == true) {
    if (miCancion.isPlaying() == false) {
      miCancion.play();
    }
  } else {
    miCancion.pause();
  }

  if (estado == 0) {
    background(255)
    textFont("Shadows Into Light");
    textSize(100)
    text("carrot skip", 300 * width / 1000, 350 * height / 700)
    image(mioso, 350 * width / 1000, 500 * height / 700, 300, 350)
    image(mioso, 350 * width / 1000, -200 * height / 700, 300, 350)
    image(mizanahoria, 310 * width / 1000, 307 * height / 700, 25 * width / 1000, 25 * height / 700)
  }
  //introduccion
  if (estado == 1) {
    background(153, 153, 255)
    textFont("Shadows Into Light");
    textSize(25)
    stroke(255)
    fill(255)
    text("1. Arrastra el oso con tu mouse por el laberinto", 20 * width / 1000, 60 * height / 700)
    text("2. Llega hasta la comida mas rica para pasar al siguiente nivel", 20 * width / 1000, 100 * height / 700)
    text("3. OJO! si las zanahoras te tocan, pierdes", 20 * width / 1000, 140 * height / 700)
    text("4. Si intentas hacer trampa y salirte del laberinto, tambien vas a perder", 20 * width / 1000, 180 * height / 700)
    text("5. Si pierdes vuelves a empezar", 20 * width / 1000, 220 * height / 700)
    text("6. Suerte! disfruta tu comida", 20 * width / 1000, 260 * height / 700)
    textSize(20)
    text("* toca la zanahoria para empezar", 30 * width / 1000, 620 * height / 700)
    image(mispapas, 100 * width / 1000, 320 * height / 700, 70 * width / 1000, 70 * height / 700)
    image(mihamburguesa, 450 * width / 1000, 275 * height / 700, 70 * width / 1000, 70 * height / 700)
    image(mipizza, 850 * width / 1000, 70 * height / 700, 70 * width / 1000, 70 * height / 700)
    image(mioso, 680 * width / 1000, 360 * height / 700, 300 * width / 1000, 320 * height / 700)
    image(mizanahoria, 45 * width / 1000, 555 * height / 700, 40 * width / 1000, 40 * height / 700)
    if (mouseX > 45 * width / 1000 && mouseX < 45 * width / 1000 + 40 * width / 1000 && mouseY > 555 * height / 700 && mouseY < 555 * height / 700 + 40 * height / 700) {
      estado = 3
    }


  }
  //primer nivel
  if (estado == 3) {
    background(255, 153, 204);
    strokeWeight(1)
    stroke(255)
    fill(255)
    // cuadraddos para hacer el laberinto
    quad(30 * width / 1000, 600 * height / 700, 30 * width / 1000, 550 * height / 700, 970 * width / 1000, 550 * height / 700, 970 * width / 1000, 600 * height / 700)
    quad(920 * width / 1000, 550 * height / 700, 970 * width / 1000, 550 * height / 700, 970 * width / 1000, 300 * height / 700, 920 * width / 1000, 300 * height / 700)
    quad(920 * width / 1000, 350 * height / 700, 920 * width / 1000, 300 * height / 700, 80 * width / 1000, 300 * height / 700, 80 * width / 1000, 350 * height / 700)
    quad(80 * width / 1000, 300 * height / 700, 130 * width / 1000, 300 * height / 700, 130 * width / 1000, 110 * height / 700, 80 * width / 1000, 110 * height / 700)
    quad(130 * width / 1000, 110 * height / 700, 130 * width / 1000, 160 * height / 700, 960 * width / 1000, 160 * height / 700, 960 * width / 1000, 110 * height / 700)
    //para que se muera si se sale del laberinto 
    fill(255, 153, 204)
    stroke(255, 153, 204)
    rect(posxinv1 * width / 1000, posyinv1 * height / 700, taminvx1 * width / 1000, taminvy1 * height / 700)
    rect(posxinv2 * width / 1000, posyinv2 * height / 700, taminvx2 * width / 1000, taminvy2 * height / 700)
    rect(posxinv3 * width / 1000, posyinv3 * height / 700, taminvx3 * width / 1000, taminvy3 * height / 700)
    rect(posxinv4 * width / 1000, posyinv4 * height / 700, taminvx4 * width / 1000, taminvy4 * height / 700)
    rect(posxinv5 * width / 1000, posyinv5 * height / 700, taminvx5 * width / 1000, taminvy5 * height / 700)
    rect(posxinv6 * width / 1000, posyinv6 * height / 700, taminvx6 * width / 1000, taminvy6 * height / 700)
    rect(posxinv7 * width / 1000, posyinv7 * height / 700, taminvx7 * width / 1000, taminvy7 * height / 700)
    rect(posxinv8 * width / 1000, posyinv8 * height / 700, taminvx8 * width / 1000, taminvy8 * height / 700)
    rect(posxinv9 * width / 1000, posyinv9 * height / 700, taminvx9 * width / 1000, taminvy9 * height / 700)

    zanaa.dibujarse()
    zanaa.moverse()
    if (dist(mouseX, mouseY, zanaa.x, zanaa.y) < 12) {
      estado = 9
    }
    //HACER ESTO CON CUADRADOS INVISIBLESS CON TAM Y TODO
    if (mouseX > posxinv1 * width / 1000 && mouseX < posxinv1 * width / 1000 + taminvx1 * width / 1000 && mouseY > posyinv1 * height / 700 && mouseY < posyinv1 * height / 700 + taminvy1 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv2 * width / 1000 && mouseX < posxinv2 * width / 1000 + taminvx2 * width / 1000 && mouseY > posyinv2 * height / 700 && mouseY < posyinv2 * height / 700 + taminvy2 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv3 * width / 1000 && mouseX < posxinv3 * width / 1000 + taminvx3 * width / 1000 && mouseY > posyinv3 * height / 700 && mouseY < posyinv3 * height / 700 + taminvy3 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv4 * width / 1000 && mouseX < posxinv4 * width / 1000 + taminvx4 * width / 1000 && mouseY > posyinv4 * height / 700 && mouseY < posyinv4 * height / 700 + taminvy4 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv5 * width / 1000 && mouseX < posxinv5 * width / 1000 + taminvx5 * width / 1000 && mouseY > posyinv5 * height / 700 && mouseY < posyinv5 * height / 700 + taminvy5 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv6 * width / 1000 && mouseX < posxinv6 * width / 1000 + taminvx6 * width / 1000 && mouseY > posyinv6 * height / 700 && mouseY < posyinv6 * height / 700 + taminvy6 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv7 * width / 1000 && mouseX < posxinv7 * width / 1000 + taminvx7 * width / 1000 && mouseY > posyinv7 * height / 700 && mouseY < posyinv7 * height / 700 + taminvy7 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv8 * width / 1000 && mouseX < posxinv8 * width / 1000 + taminvx8 * width / 1000 && mouseY > posyinv8 * height / 700 && mouseY < posyinv8 * height / 700 + taminvy8 * height / 700) {
      estado = 9
    }
    if (mouseX > posxinv9 * width / 1000 && mouseX < posxinv9 * width / 1000 + taminvx9 * width / 1000 && mouseY > posyinv9 * height / 700 && mouseY < posyinv9 * height / 700 + taminvy9 * height / 700) {
      estado = 9
    }

    for (var i = 0; i < miEjercito.length; i = i + 1) {
      miEjercito[i].dibujarse()
      miEjercito[i].moverse()
      if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 12) {
        estado = 9
      }
    }
    image(mihamburguesa, 910 * width / 1000, 110 * height / 700, 50 * width / 1000, 50 * height / 700)
    image(mioso, x - 60 / 2 * width / 1000, y - 60 / 2 * height / 700, tam * width / 1000, tam * height / 700)
    if (dist(mouseX, mouseY, 920 * width / 1000, 120 * height / 700) < 20) {
      estado = 4
    }
  }
  //nivel 2
  if (estado == 4) {
    background(240, 153, 255)
    strokeWeight(1)
    stroke(255)
    fill(255)
    quad(130 * width / 1000, 110 * height / 700, 130 * width / 1000, 160 * height / 700, 960 * width / 1000, 160 * height / 700, 960 * width / 1000, 110 * height / 700)
    quad(130 * width / 1000, 110 * height / 700, 80 * width / 1000, 110 * height / 700, 80 * width / 1000, 600 * height / 700, 130 * width / 1000, 600 * height / 700)
    quad(130 * width / 1000, 600 * height / 700, 130 * width / 1000, 550 * height / 700, 960 * width / 1000, 550 * height / 700, 960 * width / 1000, 600 * height / 700)
    quad(960 * width / 1000, 600 * height / 700, 910 * width / 1000, 600 * height / 700, 910 * width / 1000, 250 * height / 700, 960 * width / 1000, 250 * height / 700)
    quad(910 * width / 1000, 250 * height / 700, 910 * width / 1000, 300 * height / 700, 200 * width / 1000, 300 * height / 700, 200 * width / 1000, 250 * height / 700)
    quad(200 * width / 1000, 300 * height / 700, 250 * width / 1000, 300 * height / 700, 250 * width / 1000, 440 * height / 700, 200 * width / 1000, 440 * height / 700)
    quad(250 * width / 1000, 440 * height / 700, 250 * width / 1000, 390 * height / 700, 800 * width / 1000, 390 * height / 700, 800 * width / 1000, 440 * height / 700)
    // figuras invisibles 
    stroke(240, 153, 255)
    fill(240, 153, 255)
    rect(posxin1 * width / 1000, posyin1 * height / 700, taminx1 * width / 1000, taminy1 * height / 700)
    rect(posxin2 * width / 1000, posyin2 * height / 700, taminx2 * width / 1000, taminy2 * height / 700)
    rect(posxin3 * width / 1000, posyin3 * height / 700, taminx3 * width / 1000, taminy3 * height / 700)
    rect(posxin4 * width / 1000, posyin4 * height / 700, taminx4 * width / 1000, taminy4 * height / 700)
    rect(posxin5 * width / 1000, posyin5 * height / 700, taminx5 * width / 1000, taminy5 * height / 700)
    rect(posxin6 * width / 1000, posyin6 * height / 700, taminx6 * width / 1000, taminy6 * height / 700)
    rect(posxin7 * width / 1000, posyin7 * height / 700, taminx7 * width / 1000, taminy7 * height / 700)
    rect(posxin8 * width / 1000, posyin8 * height / 700, taminx8 * width / 1000, taminy8 * height / 700)
    rect(posxin9 * width / 1000, posyin9 * height / 700, taminx9 * width / 1000, taminy9 * height / 700)

    zanaa.dibujarse()
    zanaa.moverse()
    if (dist(mouseX, mouseY, zanaa.x, zanaa.y) < 12) {
      estado = 9
    }

    //HACER ESTO CON CUADRADOS INVISIBLESS CON TAM Y TODO
    if (mouseX > posxin1 * width / 1000 && mouseX < posxin1 * width / 1000 + taminx1 * width / 1000 && mouseY > posyin1 * height / 700 && mouseY < posyin1 * height / 700 + taminy1 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin2 * width / 1000 && mouseX < posxin2 * width / 1000 + taminx2 * width / 1000 && mouseY > posyin2 * height / 700 && mouseY < posyin2 * height / 700 + taminy2 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin3 * width / 1000 && mouseX < posxin3 * width / 1000 + taminx3 * width / 1000 && mouseY > posyin3 * height / 700 && mouseY < posyin3 * height / 700 + taminy3 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin4 * width / 1000 && mouseX < posxin4 * width / 1000 + taminx4 * width / 1000 && mouseY > posyin4 * height / 700 && mouseY < posyin4 * height / 700 + taminy4 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin5 * width / 1000 && mouseX < posxin5 * width / 1000 + taminx5 * width / 1000 && mouseY > posyin5 * height / 700 && mouseY < posyin5 * height / 700 + taminy5 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin6 * width / 1000 && mouseX < posxin6 * width / 1000 + taminx6 * width / 1000 && mouseY > posyin6 * height / 700 && mouseY < posyin6 * height / 700 + taminy6 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin7 * width / 1000 && mouseX < posxin7 * width / 1000 + taminx7 * width / 1000 && mouseY > posyin7 * height / 700 && mouseY < posyin7 * height / 700 + taminy7 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin8 * width / 1000 && mouseX < posxin8 * width / 1000 + taminx8 * width / 1000 && mouseY > posyin8 * height / 700 && mouseY < posyin8 * height / 700 + taminy8 * height / 700) {
      estado = 9
    }
    if (mouseX > posxin9 * width / 1000 && mouseX < posxin9 * width / 1000 + taminx9 * width / 1000 && mouseY > posyin9 * height / 700 && mouseY < posyin9 * height / 700 + taminy9 * height / 700) {
      estado = 9
    }
    for (var i = 0; i < miEjercito.length; i = i + 1) {
      miEjercito[i].dibujarse()
      miEjercito[i].moverse()
      if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 12) {
        estado = 9
      }
    }

    image(mipizza, 750 * width / 1000, 390 * height / 700, 50 * width / 1000, 50 * height / 700)
    image(mioso, x - 60 / 2 * width / 1000, y - 60 / 2 * height / 700, tam * width / 1000, tam * height / 700)
    if (dist(mouseX, mouseY, 765 * width / 1000, 405 * height / 700) < 20) {
      estado = 5
    }
  }
  //nivel 3
  if (estado == 5) {
    background(255, 153, 153)
    strokeWeight(1)
    stroke(255)
    fill(255)
    quad(750 * width / 1000, 390 * height / 700, 800 * width / 1000, 390 * height / 700, 800 * width / 1000, 650 * height / 700, 750 * width / 1000, 650 * height / 700)
    quad(800 * width / 1000, 650 * height / 700, 800 * width / 1000, 600 * height / 700, 930 * width / 1000, 600 * height / 700, 930 * width / 1000, 650 * height / 700)
    quad(930 * width / 1000, 650 * height / 700, 880 * width / 1000, 650 * height / 700, 880 * width / 1000, 120 * height / 700, 930 * width / 1000, 120 * height / 700)
    quad(880 * width / 1000, 120 * height / 700, 880 * width / 1000, 170 * height / 700, 480 * width / 1000, 170 * height / 700, 480 * width / 1000, 120 * height / 700)
    quad(480 * width / 1000, 170 * height / 700, 530 * width / 1000, 170 * height / 700, 530 * width / 1000, 370 * height / 700, 480 * width / 1000, 370 * height / 700)
    quad(480 * width / 1000, 370 * height / 700, 480 * width / 1000, 320 * height / 700, 680 * width / 1000, 320 * height / 700, 680 * width / 1000, 370 * height / 700)
    quad(680 * width / 1000, 370 * height / 700, 630 * width / 1000, 370 * height / 700, 630 * width / 1000, 600 * height / 700, 680 * width / 1000, 600 * height / 700)
    quad(680 * width / 1000, 600 * height / 700, 680 * width / 1000, 550 * height / 700, 100 * width / 1000, 550 * height / 700, 100 * width / 1000, 600 * height / 700)
    quad(100 * width / 1000, 600 * height / 700, 150 * width / 1000, 600 * height / 700, 150 * width / 1000, 400 * height / 700, 100 * width / 1000, 400 * height / 700)
    quad(150 * width / 1000, 400 * height / 700, 150 * width / 1000, 450 * height / 700, 250 * width / 1000, 450 * height / 700, 250 * width / 1000, 400 * height / 700)
    quad(250 * width / 1000, 400 * height / 700, 200 * width / 1000, 400 * height / 700, 200 * width / 1000, 80 * height / 700, 250 * width / 1000, 80 * height / 700)
    quad(200 * width / 1000, 80 * height / 700, 200 * width / 1000, 130 * height / 700, 30 * width / 1000, 130 * height / 700, 30 * width / 1000, 80 * height / 700)
    //figuras invisibles 
    fill(255, 153, 153)
    stroke(255, 153, 153)
    rect(posxi1 * width / 1000, posyi1 * height / 700, tamix1 * width / 1000, tamiy1 * height / 700)
    rect(posxi2 * width / 1000, posyi2 * height / 700, tamix2 * width / 1000, tamiy2 * height / 700)
    rect(posxi3 * width / 1000, posyi3 * height / 700, tamix3 * width / 1000, tamiy3 * height / 700)
    rect(posxi4 * width / 1000, posyi4 * height / 700, tamix4 * width / 1000, tamiy4 * height / 700)
    rect(posxi5 * width / 1000, posyi5 * height / 700, tamix5 * width / 1000, tamiy5 * height / 700)
    rect(posxi6 * width / 1000, posyi6 * height / 700, tamix6 * width / 1000, tamiy6 * height / 700)
    rect(posxi7 * width / 1000, posyi7 * height / 700, tamix7 * width / 1000, tamiy7 * height / 700)
    rect(posxi8 * width / 1000, posyi8 * height / 700, tamix8 * width / 1000, tamiy8 * height / 700)
    rect(posxi9 * width / 1000, posyi9 * height / 700, tamix9 * width / 1000, tamiy9 * height / 700)
    rect(posxi10 * width / 1000, posyi10 * height / 700, tamix10 * width / 1000, tamiy10 * height / 700)
    rect(posxi11 * width / 1000, posyi11 * height / 700, tamix11 * width / 1000, tamiy11 * height / 700)
    rect(posxi12 * width / 1000, posyi12 * height / 700, tamix12 * width / 1000, tamiy12 * height / 700)
    rect(posxi13 * width / 1000, posyi13 * height / 700, tamix13 * width / 1000, tamiy13 * height / 700)

    if (mouseX > posxi1 * width / 1000 && mouseX < posxi1 * width / 1000 + tamix1 * width / 1000 && mouseY > posyi1 * height / 700 && mouseY < posyi1 * height / 700 + tamiy1 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi2 * width / 1000 && mouseX < posxi2 * width / 1000 + tamix2 * width / 1000 && mouseY > posyi2 * height / 700 && mouseY < posyi2 * height / 700 + tamiy2 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi3 * width / 1000 && mouseX < posxi3 * width / 1000 + tamix3 * width / 1000 && mouseY > posyi3 * height / 700 && mouseY < posyi3 * height / 700 + tamiy3 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi4 * width / 1000 && mouseX < posxi4 * width / 1000 + tamix4 * width / 1000 && mouseY > posyi4 * height / 700 && mouseY < posyi4 * height / 700 + tamiy4 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi5 * width / 1000 && mouseX < posxi5 * width / 1000 + tamix5 * width / 1000 && mouseY > posyi5 * height / 700 && mouseY < posyi5 * height / 700 + tamiy5 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi6 * width / 1000 && mouseX < posxi6 * width / 1000 + tamix6 * width / 1000 && mouseY > posyi6 * height / 700 && mouseY < posyi6 * height / 700 + tamiy6 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi7 * width / 1000 && mouseX < posxi7 * width / 1000 + tamix7 * width / 1000 && mouseY > posyi7 * height / 700 && mouseY < posyi7 * height / 700 + tamiy7 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi8 * width / 1000 && mouseX < posxi8 * width / 1000 + tamix8 * width / 1000 && mouseY > posyi8 * height / 700 && mouseY < posyi8 * height / 700 + tamiy8 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi9 * width / 1000 && mouseX < posxi9 * width / 1000 + tamix9 * width / 1000 && mouseY > posyi9 * height / 700 && mouseY < posyi9 * height / 700 + tamiy9 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi10 * width / 1000 && mouseX < posxi10 * width / 1000 + tamix10 * width / 1000 && mouseY > posyi10 * height / 700 && mouseY < posyi10 * height / 700 + tamiy10 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi11 * width / 1000 && mouseX < posxi11 * width / 1000 + tamix11 * width / 1000 && mouseY > posyi11 * height / 700 && mouseY < posyi11 * height / 700 + tamiy11 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi12 * width / 1000 && mouseX < posxi12 * width / 1000 + tamix12 * width / 1000 && mouseY > posyi12 * height / 700 && mouseY < posyi12 * height / 700 + tamiy12 * height / 700) {
      estado = 9
    }
    if (mouseX > posxi13 * width / 1000 && mouseX < posxi13 * width / 1000 + tamix13 * width / 1000 && mouseY > posyi13 * height / 700 && mouseY < posyi13 * height / 700 + tamiy13 * height / 700) {
      estado = 9
    }

    zanaa.dibujarse()
    zanaa.moverse()
    if (dist(mouseX, mouseY, zanaa.x, zanaa.y) < 12) {
      estado = 9
    }

    for (var i = 0; i < miEjercito.length; i = i + 1) {
      miEjercito[i].dibujarse()
      miEjercito[i].moverse()
      if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 12) {
        estado = 9
      }
    }
    image(mispapas, 30 * width / 1000, 78 * height / 700, 50 * width / 1000, 50 * height / 700)
    image(mioso, x - 60 / 2 * width / 1000, y - 60 / 2 * height / 700, tam * width / 1000, tam * height / 700)
    if (dist(mouseX, mouseY, 40 * width / 1000, 82 * height / 700) < 20) {
      estado = 8
    }
  }
  //cuando ganas
  if (estado == 8) {
    background(255)
    textFont("Shadows Into Light");
    textSize(150)
    stroke(0)
    fill(0)
    text("Ganaste!!!", 250 * width / 1000, 370 * height / 700)
    image(mioso, 350 * width / 1000, 500 * height / 700, 300 * width / 1000, 350 * height / 700)
  }
  //cuando pierdes
  if (estado == 9) {
    background(255)
    textFont("Shadows Into Light");
    textSize(150)
    stroke(0)
    fill(0)
    text("Perdiste", 260 * width / 1000, 300 * height / 700)
    text(":/", 460 * width / 1000, 450 * height / 700)
    image(mioso, 350 * width / 1000, -200 * height / 700, 300 * width / 1000, 350 * height / 700)
    image(mizanahoria, 473 * width / 1000, 490 * height / 700, 25 * width / 1000, 25 * height / 700)
  }

  // if se toca la comida que quiere, se pasa al siguiente nivel que es mas dificil 
}

function mousePressed() {
  if (estado == 8) {
    estado = 0
  }
  if (estado == 0) {
    estado = 1
  }
  if (estado == 9) {
    estado = 0
  }
}

function mouseReleased() {
  if (estado == 1) {
    x = 60 * width / 1000
    y = 575 * height / 700
  }
}


function mouseDragged() {

  //revisa si la posición del mouse es cercana a la posicion de la comida 
  if (dist(mouseX, mouseY, x, y) < tam / 2) {

    //actualiza la posicion del oso con la posición del mouse
    x = mouseX;
    y = mouseY;
  }
  else {return false;
}
}
//para hacer las zanahorias que matan 
function carrot(miX, miY) {
  //caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true
  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(mizanahoria, this.x, this.y, 50, 80)
    }
    this.moverse = function() {
      this.x = this.x + random(0 * width / 1000, 0 * width / 1000);
      this.y = this.y + random(-20 * height / 700, 20 * height / 700);
    }
  }

  this.morirse = function() {
    this.estaVivo = false
  }
}