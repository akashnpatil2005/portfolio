//    1. MOBILE NAVIGATION

const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Open or close the mobile menu.
menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// Close the menu after a navigation link is clicked.
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuButton.classList.remove("open");
    });
});


//    2. FOOTER YEAR

document.getElementById("year").textContent = new Date().getFullYear();


//    3. ACTIVE NAVIGATION LINK

const pageSections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", function () {
    let currentSection = "home";

    pageSections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});


//    4. PROJECT EMAIL LINKS

const projectLinks = document.querySelectorAll("[data-project]");

projectLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const projectName = link.getAttribute("data-project");
        const subject = encodeURIComponent("Question about " + projectName);
        const body = encodeURIComponent(
            "Hi Akash,\n\nI would like to know more about your " + projectName + " project."
        );

        window.location.href = "mailto:akashnpatil2005@gmail.com?subject=" + subject + "&body=" + body;
    });
});
