// Consegna
// mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// creo 2 variabili, una per aprire e una per chiudere il menu
var open = $(".header-right a");
var close = $(".hamburger-menu a");

// richiamo il menu con una variabile
var hamburgerMenu = $(".hamburger-menu");

// // funzione show per mostrare il menu al click
// open.click(function() {
//   hamburgerMenu.show();
// });
//
// // funzione hide per nascondere il menu al click
// close.click(function() {
//   hamburgerMenu.hide();
// });

// OPPURE
// funzione addClass e removeClass che reagiscono al click per aggiungere e togliere una
$(".header-right > a > i").click(function() {
  hamburgerMenu.addClass("active");
});

$(".hamburger-menu > a").click(function() {
  hamburgerMenu.removeClass("active");
});
