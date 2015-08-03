
    var animales= [];
    animales[0] = "HORSE"
    animales[1] = "WOLF"
    animales[2] = "ANTELOPE"
    animales[3] =  "DOG" 
    animales[4] =  "LION" 
    animales[5] =  "KANGAROO" 


    var animalesURLI= [];
    animalesURLI[0] = "img/animales/izquierda/HORSE.png"
    animalesURLI[1] = "img/animales/izquierda/WOLF.png"
    animalesURLI[2] = "img/animales/izquierda/ANTELOPE.png"
    animalesURLI[3] = "img/animales/izquierda/DOG.png"
    animalesURLI[4] = "img/animales/izquierda/LION.png"
    animalesURLI[5] = "img/animales/izquierda/KANGAROO.png"


    var animalesURLD= [];
    animalesURLD[0] = "img/animales/derecha/HORSE.png"
    animalesURLD[1] = "img/animales/derecha/WOLF.png"
    animalesURLD[2] =  "img/animales/derecha/ANTELOPE.png"
    animalesURLD[3] = "img/animales/derecha/DOG.png"
    animalesURLD[4] = "img/animales/derecha/LION.png"
    animalesURLD[5] = "img/animales/derecha/KANGAROO.png"

function generar(){

    var ladoI;
    var ladoD;
    do{
     ladoI = Math.floor((Math.random() * 6) + 0);
     ladoD = Math.floor((Math.random() * 6) + 0);
    }while(ladoI== ladoD);
    

    var nombre = generarNombre(ladoI, ladoD);

     document.getElementById('izquierda').src = animalesURLI[ladoI];
    document.getElementById('derecha').src = animalesURLD[ladoD];

    
    document.getElementById("nombre").innerHTML = nombre;
}

function generarNombre(ladoI, ladoD) {

   var nombreI = animales[ladoI];
   var nombreD = animales[ladoD];

   var  resultado1;
   var  resultado2;

   
   var tamRecortar = Math.floor((nombreI.length/2));
   resultado1 = nombreI.slice(0, tamRecortar);

   var tamRecortar2 = Math.floor((nombreD.length/2));
   resultado2 = nombreD.slice(tamRecortar2,(nombreD.length));


  return resultado1 + resultado2;
}

