var accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});



function accordionMenu(question) {
    let keyframes = [
        { opacity: "0" },
        { height: "auto" },
        { height: "auto" },
        { opacity: "1" },
    ];
    let answer = question.currentTarget.nextElementSibling;
    question.currentTarget.classList.toggle("expanded");
    if (answer.classList.contains("expanded") && !answer.style.maxHeight) {
        answer.classList.remove("expanded");
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.classList.add("expanded");
        answer.style.maxHeight = null;
    }
}




function loadMore() {
    const qList = [
        "How much does a commercial traffic permit cost for goods?",
        "Where to look for a traffic permit?",
        "How to check the traffic condition?",
        "When is a professional traffic permit needed?",
    ];

    const aList = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ];

    const questions = document.querySelectorAll(".accordion-side");

    for (let i = 0; i < 5; i++) {
        let newBox = document.createElement("div");
        newBox.className = "accordion-item";

        let newQuest = document.createElement("div");
        newQuest.className = "accordion-item-header";
        newQuest.innerHTML = `${qList[Math.floor(Math.random() * qList.length)]}`;

        let newAnswer = document.createElement("div");
        newAnswer.classList.add("accordion-item-body", "active");
        newAnswer.innerHTML = `${aList[Math.floor(Math.random() * aList.length)]}`;

        newBox.appendChild(newQuest);
        newBox.appendChild(newAnswer);
        if (!(i % 2)) questions[0].appendChild(newBox);
        else questions[1].appendChild(newBox);
        newQuest.addEventListener("click", accordionMenu);
    }
    document.getElementById("loadMoreButton").style.display = "none";
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sliderItem");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}



var myInput = document.getElementById("psw");
var myInputName = document.getElementById("usrname");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInputName.onfocus = function() {
    document.getElementById("namePlaceholder").style.display = "none";
}

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
    document.getElementById("placeholder").style.display = "none";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";

}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}