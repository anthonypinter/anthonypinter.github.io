const counryArray = [
  {
    name: "Somalia",
    adviory_level: "Level 3: Reconsider Travel",
    reason: [
      "crime",
      "terrorism",
      "civil unrest",
      " health issues",
      "kidnapping",
      "piracy",
    ],
    advice: ["crowds", "public transportation", "restaurants"],
    doNot: ["travel alone", "display wealth", "take photos/video"],
  },
  {
    name: "Afghanistan",
    adviory_level: "Level 4: Reconsider Travel",
    reason: [
      "crime",
      "terrorism",
      "civil unrest",
      " health issues",
      "kidnapping",
      "piracy",
    ],
    advice: ["crowds", "public transportation", "restaurants"],
    doNot: ["travel alone", "display wealth", "take photos/video"],
  },
  {
    name: "Central African Republic",
    adviory_level: "Level 2: Reconsider Travel",
    reason: [
      "crime",
      "terrorism",
      "civil unrest",
      " health issues",
      "kidnapping",
      "piracy",
    ],
    advice: ["crowds", "public transportation", "restaurants"],
    doNot: ["travel alone", "display wealth", "take photos/video"],
  },
  {
    name: "South Sudan",
    adviory_level: "Level 4: Reconsider Travel",
    reason: [
      "crime",
      "terrorism",
      "civil unrest",
      " health issues",
      "kidnapping",
      "piracy",
    ],
    advice: ["crowds", "public transportation", "restaurants"],
    doNot: ["travel alone", "display wealth", "take photos/video"],
  },
  {
    name: "Colombia",
    adviory_level: "Level 4: Reconsider Travel",
    reason: [
      "crime",
      "terrorism",
      "civil unrest",
      " health issues",
      "kidnapping",
      "piracy",
    ],
    advice: ["crowds", "public transportation", "restaurants"],
    doNot: ["travel alone", "display wealth", "take photos/video"],
  },
];

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
