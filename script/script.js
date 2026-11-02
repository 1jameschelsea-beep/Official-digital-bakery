var buttons = document.querySelectorAll("li");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        var allButtons = button.parentElement.querySelectorAll("li");

        allButtons.forEach(function(otherButton) {
            otherButton.classList.remove("selected");
        });

        button.classList.add("selected");

    });

});

const localPages = [
    "burnt.html",
    "frozen.html",
    "missing.html",
    "perfect.html",
    "raw.html"
];

const bakeButtons = document.getElementsByClassName("button");

Array.from(bakeButtons).forEach((pageButton) => {
    pageButton.addEventListener("click", () => {
        window.location.href = "loading.html";
    });
});

if (document.querySelector(".loading-bar")) {
    const tips = [
        "The cookie has exceeded our expectations.",
        "The cookie has exceeded our expectations in the wrong direction.",
        "Did you know cookies are round?",
        'The word "cookie" contains six letters.',
        "This tip does not improve your baking.",
        "You are currently baking a cookie."
    ];
    const tipElement = document.querySelector(".loading-tip");
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.textContent = `Tip: ${randomTip}`;

    setTimeout(() => {
        const randomPage = localPages[Math.floor(Math.random() * localPages.length)];
        window.location.href = randomPage;
    }, 10000);
}
