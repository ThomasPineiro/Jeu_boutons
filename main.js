$("#lvl1, #perdu, #win, #pre_lvl2, #lvl2, #pre_lvl3").hide();
// $("#perdu").hide();
// $("#win").hide();
// $("#pre_lvl2").hide();
// $("#lvl2").hide();
// $("#pre_lvl3").hide();
$("#lvl3").hide();
// On cache ces boutons aussi afin qu'ils apparaissent les un apres les autres et non tous en meme temps
$("#bouton_2").hide();
$("#bouton_3").hide();
$("#bouton_troll").hide();

// Le setTimeout met en place un compteur qui une fois arrivé a 0 lancera les actions comprises dans le function du settimeout. Le chiffre indiqué apres la fonction indique le temps en ms qui s'écoulera (ici 10s donc)
$( "#bouton_menu" ).click(function() {
    timer1 =setTimeout(function() { 
        $("#lvl1").hide();
    $("#perdu").show();
    }, 10000);
    $("#menu").hide();
    $("#pre_lvl2").hide();
    $("#lvl2").hide();
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
    $("#bouton_1").show();
    $("#bouton_troll").show();
});

// le clearTimeout arrête et remet a 0 le timer indiqué entre parenthèses, pour pouvoir utiliser cette technique et se référer a un timer en particulier il faut le déclarer comme je l'ai fait plus haut (en indiquant un nom de variable)
$( "#bouton_troll" ).click(function() {
    clearTimeout(timer1);
    $("#bouton_troll").hide();
    $("#bouton_1").hide();
    $("#bouton_2").hide();
    $("#bouton_3").hide();
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
    }, 10000);
});

$("#bouton_fin").click(function() {
    clearTimeout(timer3);
    $("#lvl3").hide();
    $("#win").show();
});

$( "#recommencer" ).click(function() {
    $("#perdu").hide();
    $("#menu").show();
});