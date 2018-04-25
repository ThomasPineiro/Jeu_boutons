$("#lvl1, #perdu, #win, #pre_lvl2, #lvl2, #pre_lvl3, #lvl3, #bouton_2, #bouton_3, #bouton_troll, #v2_start, .checkpoint").toggle();

// Le setTimeout met en place un compteur qui une fois arrivé a 0 lancera les actions comprises dans le function du settimeout. Le chiffre indiqué apres la fonction indique le temps en ms qui s'écoulera (ici 10s donc)
$( "#bouton_menu" ).click(function() {
    timer1 =setTimeout(function() { 
    $("#lvl1").hide();
    $("#perdu").show();
    }, 10000);
    $("#menu, #pre_lvl2, #lvl2").hide();
    $("#lvl1").show();
});

$( "#bouton_1" ).click(function() {
    $("#bouton_1").hide();
    $("#bouton_2").show();
});

$( "#bouton_2" ).click(function() {
    $("#bouton_2").hide();
    $("#bouton_3").show();
});

$( "#bouton_3" ).click(function() {
    $("#bouton_3").hide();
    $("#bouton_1, #bouton_troll").show();
});

// le clearTimeout arrête et remet a 0 le timer indiqué entre parenthèses, pour pouvoir utiliser cette technique et se référer a un timer en particulier il faut le déclarer comme je l'ai fait plus haut (en indiquant un nom de variable)
$( "#bouton_troll" ).click(function() {
    clearTimeout(timer1);
    $("#bouton_troll, #bouton_1,#bouton_2, #bouton_3").hide();
    $("#pre_lvl2").show();
});

$( "#go_lvl2" ).click(function() {
    $("#pre_lvl2").hide();
    $("#lvl2").show();
    timer2 =setTimeout(function() {
        $("#lvl2").hide();
        $("#perdu").show();
    }, 8000);
});

$( "#bouton_4" ).click(function() {
    clearTimeout(timer2);
    $("#lvl2").hide();
    $("#pre_lvl3").show();
});

$( "#go_lvl3" ).click(function() {
    $("#pre_lvl3").hide();
    $("#lvl3").show();
    timer3 =setTimeout(function() {
        $("#lvl3").hide();
        $("#perdu").show();
    }, 15000);
});

$( "#recommencer" ).click(function() {
    $("#perdu").hide();
    $("#menu").show();
});



//KATA V2
$("#bouton_fin").click(function() {
    clearTimeout(timer3);
    document.cookie = "salut=c_est_cool; expires=Thu, 10 May 2018 12:00:00 UTC"; 
    $("#lvl3").hide();
    $("#win").show();
    timer4 =setTimeout(function(){
        $("#v2_start").show();
    }, 5000);
});

//Cette variable récupère tout les cookies présents sur la page, ici il n'y en a qu'un seul
var cookie_check = document.cookie;

if(cookie_check != "")
{
    $(".checkpoint").show();
}

var noice = document.createElement("audio");
noice.src="sons/noice.mp3";
noice.volume=1.0;
noice.autoPlay=false;
noice.preLoad=true;
noice.loop=false;  

var wow = document.createElement("audio");
wow.src="sons/wow.mp3";
wow.volume=1.0;
wow.autoPlay=false;
wow.autoPlay=false;
wow.preLoad=true;
wow.loop=false;

var valky = document.createElement("audio");
valky.src="sons/valkyries.mp3";
valky.volume=1.0;
valky.autoPlay=false;
valky.autoPlay=false;
valky.preLoad=true;
valky.loop=false;

$("#v2_start").click(function()
{
    valky.play();
});