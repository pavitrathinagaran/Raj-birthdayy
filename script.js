/* ========================= */
/* SECTION NAVIGATION */
/* ========================= */

function goToSection(sectionId) {

    const section =

    document.getElementById(sectionId);


    section.scrollIntoView({

        behavior: "smooth"

    });

}



/* ========================= */
/* PASSWORD SYSTEM */
/* ========================= */

function checkPassword() {


    // The secret password

    const correctPassword = "25.7.2001";


    // Get what the user typed

    const enteredPassword =

    document.getElementById(

        "passwordInput"

    ).value;


    // Get the message areas

    const secretMessage =

    document.getElementById(

        "secretMessage"

    );


    const errorMessage =

    document.getElementById(

        "errorMessage"

    );



    // Check password

    if (

        enteredPassword ===

        correctPassword

    ) {


        // Show secret message

        secretMessage.style.display =

        "block";


        // Remove error

        errorMessage.innerHTML = "";


        // Scroll to message

        setTimeout(function() {

            secretMessage.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 300);


        // Create hearts

        celebrate();


    }


    else {


        // Wrong password

        errorMessage.innerHTML =

        "Hmm... that's not it. Try again, birthday boy. 👀❤️";


        // Clear input

        document.getElementById(

            "passwordInput"

        ).value = "";

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

        Math.random() * 20 + 15

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

    800

);



/* ========================= */
/* CELEBRATION */
/* ========================= */

function celebrate() {


    for (

        let i = 0;

        i < 30;

        i++

    ) {


        createHeart();

    }

}