
var next = document.getElementById('next');
var previous = document.getElementById('previous');



var li = document.getElementsByClassName('for-slider');

var lis= Array.from(document.getElementsByClassName('for-slider'));

var counter = 0;

lis[0].classList.add("visib");

next.addEventListener('click', function(event){
console.log("was clicked");

lis[counter].classList.remove("visib");
counter= counter+1;
if(counter >= lis.length){
   counter = 0;
}


lis[counter].classList.add("visib");

});

previous.addEventListener('click', function(event){
console.log("was clicked");

lis[counter].classList.remove("visib");

counter= counter-1;
if(counter < 0){
   counter = lis.length-1;
}
lis[counter].classList.add("visib");

});



var stripes = Array.from(document.getElementsByClassName("bright-stripe"));


   document.querySelector(".line-2 .col-4:first-child").addEventListener("mouseover", function(mouseOver) {
       stripes[0].style.display = "none";
   });
   document.querySelector(".line-2 .col-4:first-child").addEventListener("mouseout", function(mouseOut) {
       stripes[0].style.display = "block";
   });

   document.querySelector(".line-2 .col-4:nth-child(2)").addEventListener("mouseover", function(mouseOver) {
       stripes[1].style.display = "none";
   });
   document.querySelector(".line-2 .col-4:nth-child(2)").addEventListener("mouseout", function(mouseOut) {
       stripes[1].style.display = "block";
   });




var contact= document.querySelector('.upper-menu li');
var sublist= Array.from(document.querySelectorAll('.sublist'));

contact.addEventListener('mouseover', function(event){

    sublist[0].style.display= "block";

 });

 contact.addEventListener('mouseout', function(event){

    sublist[0].style.display= "none";

 });


//
