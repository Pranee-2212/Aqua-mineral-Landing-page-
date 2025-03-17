document.addEventListener("DOMContentLoaded", () => {
    // Select all navbar links
    const navLinks = document.querySelectorAll(".navlinks");

    // Add click event listeners to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the target section ID from the href attribute
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});



function toggleReview(id) {
    const halfReview = document.getElementById(`review-content-half-${id}`);
    const fullReview = document.getElementById(`review-content-full-${id}`);
    const readMoreButton = document.getElementById(`read-more-${id}`);
    if (fullReview.style.display === "none") {
        fullReview.style.display = "block";
        readMoreButton.textContent = "Read Less";
        halfReview.style.display = "none";
    } else {
        fullReview.style.display = "none";
        halfReview.style.display = "block";
        readMoreButton.textContent = "Read More";
    }
}