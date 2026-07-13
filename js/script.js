// Navbar Scroll Effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

// Active Navigation Link

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*=========================================
            BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

console.log("Button:", backToTop);

window.addEventListener("scroll", () => {

    console.log("Scrolling:", window.scrollY);

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    console.log("Clicked!");

    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

});

/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const hero = document.querySelector(".hero");

    // Hero is initially hidden
    hero.classList.remove("loaded");

    // Let the logo breathe for a moment
    setTimeout(() => {

        // Start loader fade
        loader.classList.add("hide");

        // Reveal hero slightly after
        setTimeout(() => {

            hero.classList.add("loaded");

        }, 200);

        // Remove loader completely
        setTimeout(() => {

            loader.remove();

        }, 700);

    }, 900);

});