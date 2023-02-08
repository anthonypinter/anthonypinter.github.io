// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  window.location.replace("fortune-500.html")

  navLinks[1].classList.remove("active");
  navLinks[2].classList.remove("active");
  navLinks[3].classList.remove("active");
  navLinks[4].classList.remove("active");
  navLinks[5].classList.remove("active");
  navLinks[6].classList.remove("active");
  navLinks[7].classList.remove("active");
  navLinks[0].classList.remove("active");
}

// // Get the container element
var navContainer = document.getElementById("navbar");

// // Get all buttons with class="btn" inside the container
var navLinks = navContainer.getElementsByClassName("navLink");
var current = document.getElementsByClassName("active");

const container = d3.select('.scrollytelling');
const stepSel = container.selectAll('.step');

function updateChart(index) {

  const sticky = container.select('.sticky');
  const sel = container.select(`[data-index='${index}']`);
  stepSel.classed('is-active', (d, i) => i === index);

  switch (index) {
    case 0:
    sticky.select('#index-0').style('z-index', '998');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[1].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[0].classList.add("active");
    break;

    case 1:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '998');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[1].classList.add("active");
    break;

    case 2:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '998');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[1].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[2].classList.add("active");
    break;

    case 3:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '998');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[1].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[3].classList.add("active");
    break;


    case 4:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '998');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[1].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[4].classList.add("active");
    break;

    case 5:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '998');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[1].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[5].classList.add("active");
    break;

    case 6:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '998');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[1].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[7].classList.remove("active");
    navLinks[6].classList.add("active");
    break;

    case 7:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '998');
    sticky.select('#index-8').style('z-index', '0');
    navLinks[0].classList.remove("active");
    navLinks[1].classList.remove("active");
    navLinks[2].classList.remove("active");
    navLinks[3].classList.remove("active");
    navLinks[4].classList.remove("active");
    navLinks[5].classList.remove("active");
    navLinks[6].classList.remove("active");
    navLinks[7].classList.add("active");
    break;
    }
}

function init() {
  Stickyfill.add(d3.select('.sticky').node());

  enterView({
    selector: stepSel.nodes(),
    offset: 1,
    enter: el => {
      const index = +d3.select(el).attr('data-index');
      updateChart(index);
    },
    exit: el => {
      let index = +d3.select(el).attr('data-index');
      index = Math.max(0, index - 1);
      updateChart(index);
    } });
}

const sticky = container.select('.sticky');

init();