/* ========================= */
/* SHOW FIRST PAGE */
/* ========================= */

document.addEventListener("DOMContentLoaded", function() {

    document
        .getElementById("intro")
        .classList.add("active");

});

/* ========================= */
/* PAGE NAVIGATION */
/* ========================= */

function goToSection(sectionId) {

    const currentSection = document.querySelector(".section.active");
    const nextSection = document.getElementById(sectionId);

    if (currentSection) {
        currentSection.classList.remove("active");
        currentSection.scrollTop = 0;
    }

    nextSection.classList.add("active");
    nextSection.scrollTop = 0;

    window.scrollTo(0, 0);

}

/* ========================= */
/* PASSWORD SYSTEM */
/* ========================= */

function checkPassword() {

    const correctPassword = "25.7.2001";

    const enteredPassword =
        document.getElementById("passwordInput").value;

    const errorMessage =
        document.getElementById("errorMessage");

    if (enteredPassword === correctPassword) {

        errorMessage.innerHTML = "";

        goToSection("final");

        celebrate();

    } else {

        errorMessage.innerHTML =
            "Hehe that's why you are a bulb. Try again, birthday boy👀❤️";

        document.getElementById("passwordInput").value = "";

    }

}

/* ========================= */
/* ENTER KEY PASSWORD */
/* ========================= */

document.getElementById(

    "passwordInput"

).addEventListener(

    "keypress",

    function(event) {


        if (

            event.key ===

            "Enter"

        ) {


            checkPassword();

        }

    }

);



/* ========================= */
/* FLOATING HEARTS */
/* ========================= */

function createHeart() {


    const heart =

    document.createElement(

        "div"

    );


    heart.classList.add(

        "heart"

    );


    heart.innerHTML = "❤️";


    heart.style.left =

    Math.random() * 100 + "%";


    heart.style.fontSize =
(
    Math.random() * 10 + 12
) + "px";

    heart.style.animationDuration =

    (

        Math.random() * 5 + 5

    ) + "s";


    document.querySelector(

        ".hearts"

    ).appendChild(heart);



    setTimeout(function() {


        heart.remove();


    }, 10000);

}



/* Create hearts continuously */

setInterval(
    createHeart,
    2000
);



/* ========================= */
/* CELEBRATION */
/* ========================= */

function celebrate() {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 120);

    }

}
