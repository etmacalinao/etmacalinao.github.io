$(document).ready (function() {

new WOW().init();

$ (".burger-nav").on("click", function (){

$(".container nav ul").toggleClass("open")


});

// ANIMATE IPHONE OFF
$('.js-wp-2').waypoint(function(direction) {

$('.js-wp-2').addClass('animated slideInUp');

}, {

offset: '70%'

});

// ANIMATE IPHONE FADE IN

$('.js-wp-3').waypoint(function(direction) {

$('.js-wp-3').addClass('animated fadeIn');

}, 

{
    
offset: '70%'
    
}
        
);

// ANIMATE IPHONE BUTTON

$(".iphone-btn").delay(2300).animate( {bottom: "+=-4"}, 300);

$(".iphone-btn").delay(100).animate( {top: "+=-4"}, 100);

setTimeout(function(){


    $(".iphone-btn").delay(2300).animate( {bottom: "-=-4"}, 300);

    $(".iphone-btn").delay(100).animate( {top: "-=-4"}, 100);

    $(".iphone-btn").delay(100).animate( {top: "+=-4"}, 100);

setTimeout(function(){

    $('.js-wp-3').addClass('animated fadeOut');


},500);

},3000);


});
