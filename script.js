
// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


// ============================
// SEARCH FUNCTIONALITY
// ============================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchFreelancers() {

    const searchValue = searchInput.value.toLowerCase().trim();

    if (searchValue === "") {
        alert("Please enter a service or freelancer name.");
        return;
    }

    const freelancerCards = document.querySelectorAll(".freelancer-card");
    const categoryCards = document.querySelectorAll(".category-card");

    let found = false;

    freelancerCards.forEach(function (card) {

        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    categoryCards.forEach(function (card) {

        const cardText = card.innerText.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("freelancers").scrollIntoView({
        behavior: "smooth"
    });

    if (!found) {
        alert("Sorry! No matching services or freelancers found.");

        freelancerCards.forEach(card => card.style.display = "block");
        categoryCards.forEach(card => card.style.display = "block");
    }
}

searchBtn.addEventListener("click", searchFreelancers);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchFreelancers();
    }
});


// ============================
// CATEGORY FILTERING
// ============================

document.querySelectorAll(".category-card").forEach(function (category) {

    category.addEventListener("click", function () {

        const selectedCategory = category.dataset.category.toLowerCase();

        const freelancerCards = document.querySelectorAll(".freelancer-card");

        freelancerCards.forEach(function (card) {

            const freelancerCategory = card.dataset.category.toLowerCase();

            if (freelancerCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        document.getElementById("freelancers").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ============================
// POPULAR SEARCH LINKS
// ============================

document.querySelectorAll(".popular-searches a").forEach(function (link) {

    link.addEventListener("click", function () {

        const selectedCategory = link.dataset.category.toLowerCase();

        const freelancerCards = document.querySelectorAll(".freelancer-card");

        freelancerCards.forEach(function (card) {

            if (card.dataset.category.toLowerCase() === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// ============================
// CONSOLE MESSAGE
// ============================

console.log("Welcome to SkillHub Freelancing Marketplace!");
