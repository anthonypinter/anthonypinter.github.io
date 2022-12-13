// Get the container element
var navContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var navLinks = navContainer.getElementsByClassName("navLink");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const container = d3.select('.scrollytelling');
const stepSel = container.selectAll('.step');

function updateChart(index) {
  const sticky = container.select('.sticky');
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
    break;

    case 8:
    sticky.select('#index-0').style('z-index', '0');
    sticky.select('#index-1').style('z-index', '0');
    sticky.select('#index-2').style('z-index', '0');
    sticky.select('#index-3').style('z-index', '0');
    sticky.select('#index-4').style('z-index', '0');
    sticky.select('#index-5').style('z-index', '0');
    sticky.select('#index-6').style('z-index', '0');
    sticky.select('#index-7').style('z-index', '0');
    sticky.select('#index-8').style('z-index', '998');
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