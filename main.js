var moreoptionbtnmain = document.querySelector(".seemoreoptioon");
var moreoptionbtn = document.querySelector(".seemoreoptioon p");
var moreoptionbtnimg = document.querySelector(".seemoreoptioon img");

function move() {
  moreoptionbtn.style.left = "45%";
  moreoptionbtnimg.style.left = "51%";
  moreoptionbtnimg.style.visibility = "visible";
}

function movekill() {
  moreoptionbtn.style.left = "48%";
  moreoptionbtnimg.style.left = "49%";
  moreoptionbtnimg.style.visibility = "hidden";
}

/* START OF ANIMATION EFFECT FOR HERO SECTION */
var connect = document.querySelector(".intosection1");
var learn = document.querySelector(".intosection2");
var grow = document.querySelector(".intosection3");
var joinusbtn = document.querySelector(".intosection4");
var mainhero = document.querySelector(".mainherosection");
// onload(start());

setTimeout(effect1, 500);
setTimeout(effect2, 1500);
setTimeout(effect3, 2500);
setTimeout(effect4, 3500);
setTimeout(effect5, 3500);

function effect1() {
  connect.classList.add("slidein");
  connect.style.visibility = "visible";
}

function effect2() {
  return start2(), (learn.style.visibility = "visible");
}

function start2() {
  learn.classList.add("slidein2");
}

function effect3() {
  return start3(), (grow.style.visibility = "visible");
}

function start3() {
  grow.classList.add("slidein3");
}

function effect5() {
  return start5(), (joinusbtn.style.visibility = "visible");
}

function start5() {
  joinusbtn.classList.add("slidein3");
}

// -----------------------

function effect4() {
  return start4(), (mainhero.style.visibility = "visible");
}

function start4() {
  mainhero.classList.add("heroshow");
}

/* END OF ANIMATION EFFECT FOR HERO SECTION */

// START OF SCROLL EFFECT CODE BELOW

const scrollOffset = 100;

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

// START OF ANIMATION ONE-FOR SLIDE IN FROM LEFT
const scrollElement = document.querySelector(".js-scroll");

const displayScrollElement = () => {
  scrollElement.classList.add("scrolled");
};

const hideScrollElement = () => {
  scrollElement.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement();
  } else {
    hideScrollElement();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// END OF ANIMATION ONE-FOR SLIDE IN FROM LEFT

// START OF ANIMATION FOR SLIDE IN FROM RIGHT
const scrollElement2 = document.querySelector(".js-scroll2");

const displayScrollElement2 = () => {
  scrollElement2.classList.add("scrolled");
};

const hideScrollElement2 = () => {
  scrollElement2.classList.remove("scrolled");
};

const handleScrollAnimation2 = () => {
  if (elementInView(scrollElement2, scrollOffset)) {
    displayScrollElement2();
  } else {
    hideScrollElement2();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation2();
});

// END OF ANIMATION FOR SLIDE IN FROM RIGHT

// START OF ANIMATION FOR SLIDE IN FROM BOTTOM
const scrollElement3 = document.querySelector(".js-scroll3");

const displayScrollElement3 = () => {
  scrollElement3.classList.add("scrolled");
};

const hideScrollElement3 = () => {
  scrollElement3.classList.remove("scrolled");
};

const handleScrollAnimation3 = () => {
  if (elementInView(scrollElement3, scrollOffset)) {
    displayScrollElement3();
  } else {
    hideScrollElement3();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation3();
});

// END OF OF ANIMATION FOR SLIDE IN FROM BOTTOM

//START OF ANIMATION FOR FADE IN EFFECT
const scrollElement4 = document.querySelector(".js-scroll4");

const displayScrollElement4 = () => {
  scrollElement4.classList.add("scrolled");
};

const hideScrollElement4 = () => {
  scrollElement4.classList.remove("scrolled");
};

const handleScrollAnimation4 = () => {
  if (elementInView(scrollElement4, scrollOffset)) {
    displayScrollElement4();
  } else {
    hideScrollElement4();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation4();
});

// END OF ANIMATION FOR FADE IN EFFECT

// END OF SCROLL EFFECT CODE BELOW

// START OF SCROL TO TOP FUNCTION EDITS

var scrollbtn = document.getElementById("scrollallup");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
}

function scrolltotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// END OF SCROL TO TOP FUNCTION EDITS

// NAVIGATION BAR REVEAL AND HIDE EFFECT

var revealbtn = document.querySelector(".revealbtn");
var navsection = document.querySelector(".burgermenuoutter");
revealbtn.addEventListener("click", function () {
  return revealnav2();
});

function revealnav2() {
  navsection.classList.toggle("burgermenuoutter");
}

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("nav");
var blue = document.getElementById("blue");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  nav.classList.toggle("show");
  blue.classList.toggle("slide");
});
