const navLinks = document.querySelectorAll(".navbar");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        // Add active class to clicked link
        this.classList.add("active");
    });
});
