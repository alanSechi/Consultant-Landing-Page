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
        "How is the sample for a professional traffic permit booked?",
        "Are there differences between a traffic permit and a professional traffic permit?",
    ];

    const aList = [
        "Traffic permits are a requirement for conducting professional traffic.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "Commercial traffic permits cost from 50$ to 70$, depends of using cases",
        "With a professional traffic permit you can afford to take all goods you want!",
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
    loadMoreBtn.style.display = "none";
}