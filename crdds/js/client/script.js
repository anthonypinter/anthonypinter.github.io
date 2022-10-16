var clicked = false;
const open_url = "./img/open.png";
const close_url = "./img/close.png";

let agreeCalculation = 0.00;
let disagreeCalculation = 0.00;

let page = "";

let choice1 = false;
let choice2 = false;

this.endpoint = 'localhost:3000/questions/';

/*
function displayCredits() {
  credits = document.getElementById("credits").style.display = "block";
}
*/

if (document.URL.includes("q1.html") ) {
  page = "q1"
}
else if (document.URL.includes("q2.html") ) {
  page = "q2"
}
else if (document.URL.includes("q3.html") ) {
  page = "q3"
}
else if (document.URL.includes("q4.html") ) {
  page = "q4"
}
else if (document.URL.includes("q5.html") ) {
  page = "q5"
}
else if (document.URL.includes("q6.html") ) {
  page = "q6"
}
else if (document.URL.includes("q7.html") ) {
  page = "q7"
}

function changeImage1() {
  changeImage1 = function(){}; // kill it as soon as it was called
  changeImage2 = function(){}; // kill it as soon as it was called
  var img_obj = document.getElementById("img-1");
  choice1 = true;
  
  if (!clicked) {
    clicked = true;
    // do something
  
    img_obj.src = open_url;
    clicked = true;
    document.getElementById("img-1").src = close_url;
    document.getElementById("img-top").src = close_url;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.textAlign='center';
    //document.getElementById("result").style.justifyContent = 'center';
  }
  this._refresh();
  
  // let yesValue = data.q1.Yes + 1;
}



function changeImage2() {
  changeImage2 = function(){}; // kill it as soon as it was called
  changeImage1 = function(){}; // kill it as soon as it was called
  var img_obj = document.getElementById("img-2");
  choice2 = true;

  if (!clicked) {
    clicked = true;
    // do something
  
    img_obj.src = open_url;
    clicked = true;
    document.getElementById("img-1").src = close_url;
    document.getElementById("img-top").src = close_url;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.textAlign='center';
    //document.getElementById("result").style.justifyContent = 'center';
  }

  this._refresh();

}

async function _refresh() {
  const response = await fetch(this.endpoint);
  const data = await response.json();

  let totalValue = (data[page][0]["Yes"]+data[page][0]["No"]);

  if (choice1 === true) {
    agreeCalculation = 100 * ( (data[page][0]["Yes"])/(data[page][0]["Yes"] + data[page][0]["No"]));
    disagreeCalculation = (100 - agreeCalculation);

    let yesValue = data[page][0]["Yes"] + 1;
    console.log(yesValue);
  
    document.getElementById("total").innerText = `${ totalValue }`;
    document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
    document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;
    
  }

  else if (choice2 === true) {
    agreeCalculation = (100 * (data[page][0]["No"])/(data[page][0]["Yes"] + data[page][0]["No"]));
    disagreeCalculation = (100 - agreeCalculation);
  
    document.getElementById("total").innerText = `${ totalValue }`;
    document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
    document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;

    let noValue = data[page][0]["No"] + 1;
    console.log(noValue);
  }

}

async function pushData() {
  if (!this.selected) {
    if (choice1 === true) {
        console.log("yes");
            fetch(this.endpoint, {
                method: "post",
                mode: 'cors',
                body: 
                  `question=${ page }&answer=yes`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
            })
          }
     else if (choice2 === true) {
        console.log("no");
        fetch(this.endpoint, {
            method: "post",
            mode: 'cors',
            body: `question=${ page }&answer=no`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
}
}