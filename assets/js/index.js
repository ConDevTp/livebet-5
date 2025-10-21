/* section1 */
function ShowHambergerMenu() {
  if (document.getElementById("hambergerbox").classList.contains("menu-header-hamberger"))

  {
    document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
    document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
    document.getElementById("baricon").classList.add("fa-bars");
    document.getElementById("baricon").classList.remove("fa-times");
  } else {
    document.getElementById("hambergerbox").classList.add("menu-header-hamberger");
    document.getElementById("hambergerbox").classList.remove("menu-header-hambergerCLS");
    document.getElementById("baricon").classList.remove("fa-bars");
    document.getElementById("baricon").classList.add("fa-times");
  }
}
/* section1 */


/* section10 */

function openticket(obj, obj1, obj3) {


  if (document.getElementById(obj).classList.contains('boxitemshow1')) {
    document.getElementById(obj).classList.remove("boxitemshow1");
    document.getElementById(obj).classList.add("boxitemshowclose1");
    document.getElementById(obj1).src = "./assets/img/add.svg";
    obj3.children[0].classList.remove("border-down");
  } else {
    document.getElementById(obj).classList.add("boxitemshow1");
    document.getElementById(obj).classList.remove("boxitemshowclose1");
    document.getElementById(obj1).src = "./assets/img/minus-square.svg";
    obj3.children[0].classList.add("border-down");
  }

}
/* section10 */




var carousel = $(".carousel1"),
  currdeg = 0,
  autoplayInterval;

$(".next").on("click", {
  d: "n"
}, rotate1);
$(".prev").on("click", {
  d: "p"
}, rotate2);

function rotate1(e) {
  change1();
  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    "transform": "rotateY(" + currdeg + "deg)"
  });
}

function rotate2(e) {
  change();

  if (e.data.d == "n") {
    currdeg = currdeg - 60;
  }
  if (e.data.d == "p") {
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)",
    "transform": "rotateY(" + currdeg + "deg)"
  });
}

// Autoplay function
function startAutoplay() {
  autoplayInterval = setInterval(function () {
    $(".next").trigger("click");
  }, 5000); // Change 2000 to the desired interval in milliseconds
}

startAutoplay(); // Start autoplay initially

// Stop autoplay on hover and resume on mouse leave
carousel.on("mouseenter", function () {
  clearInterval(autoplayInterval);
}).on("mouseleave", startAutoplay);


// for down carosual
var count = 0;

var items = document.getElementsByClassName("item-btn");




function change() {

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("item-active")) {
      items[i].classList.remove("item-active");
    }
  }


  ++count;
  if (count === 6) {
    count = 0;
  }
  items[count].classList.add("item-active");
}



function change1() {

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("item-active")) {
      items[i].classList.remove("item-active");
    }
  }


  --count;
  if (count === -1) {
    count = 5;
  }
  items[count].classList.add("item-active");
}