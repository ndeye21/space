var body = document.querySelector('body');
var touche, acteurr = document.getElementById('acteur');
var droit = 1,haut =90;

var enemi  = document.getElementById('enemi');
var enemi1= document.getElementById('enemie2');
var enemi2= document.getElementById('enemie3');

var cadree = document.getElementById('cadre_ennemie');
var longeur_cadre = parseInt(getComputedStyle(cadree).width);

var position_enemie = parseInt(getComputedStyle(enemi).left);
var position_enemi1 = parseInt(getComputedStyle(enemi1).left);
var position_enemi2 = parseInt(getComputedStyle(enemi2).left);


var toop_enemie = parseInt(getComputedStyle(cadree).top);
var declancheur = null, bougee = 5, topss =0;

function deplacement()
{
    if(position_enemie <= longeur_cadre )
    {
        bougee += 5;

    }
    enemi.style.left = bougee + 'px';
    enemi1.style.left = bougee + 'px';
    enemi2.style.left = bougee + 'px';

    if(bougee == 700)
    {
        bougee *= 0;
        topss += 10;
    }
    enemi.style.left = bougee + 'px';
    enemi1.style.left = bougee + 'px';
    enemi2.style.left = bougee + 'px';
    cadree.style.top = topss + '%';
   
    console.log(topss);
    if (topss == 90 )
    { 
       alert("Rejouez!!!");
       window.location.reload();
       
        if (vi==0) {
            document.write('<h1>  Game Over </h1>');  
        }
        
    }
    /*
    console.log(' Enemie 1 ======>'+ enemi.style.left);
    console.log(' Enemie 2 ======>'+ enemi1.style.left);
    console.log(' Enemie 3 ======>'+ enemi2.style.left);
  */
    declancheur = requestAnimationFrame(deplacement);
}

deplacement();

body.onkeydown= function()
{
    touche = event.keyCode;

    switch (touche)
    {
        case 37:
            droit -= 0.5;
            acteurr.style.left = droit + '%';
            console.log(droit);

            if(droit == 0)
            {
                droit = 97;
                acteurr.style.left = droit+'%';
                console.log(droit);
            }

            break;

        case 39:
            droit += 0.5;
            acteurr.style.left = droit+'%';
            console.log(droit);

            if(droit == 97)
            {
                droit=0;
                acteurr.style.left = droit+'%';
                console.log(droit);
            }

            break;

        case 32:

            var Top = window.getComputedStyle(acteurr, null).getPropertyValue("top");
            var Left = window.getComputedStyle(acteurr, null).getPropertyValue("left");
            var balle = document.createElement('img');
            var sons = document.getElementById('player_audio');
            balle.src = 'img/Rocket.png';
            var top_moin = parseInt(Top, 10);
            balle.style.position = 'absolute';
            balle.style.width = '20px';
            balle.style.top = Top ;
            balle.style.left = Left;
            body.appendChild(balle);

            setInterval(function()
            {
                  top_moin = top_moin-20;
                  balle.style.top = top_moin + 'px';
            },0100);
              console.log(top_moin);
          break;

          case 87:
            var Top = window.getComputedStyle(acteurr, null).getPropertyValue("top");
            var Left = window.getComputedStyle(acteurr, null).getPropertyValue("left");
            var balle = document.createElement('div');
            var sons = document.getElementById('player_audio');
            var top_moin = parseInt(Top, 10);
            balle.style.position = 'absolute';
            balle.style.width = '10px';
            balle.style.height = '10px';
            balle.style.backgroundColor = 'blue';

            balle.style.top = Top ;
            balle.style.left = Left;
            body.appendChild(balle);

            setInterval(function()
            {
                top_moin = top_moin-20;
                balle.style.top = top_moin + 'px';
            },0100);
          break;
    }
};