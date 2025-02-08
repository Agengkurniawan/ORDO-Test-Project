document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk menambahkan class aktif ke section yang sedang ditampilkan
    function highlightSection() {
        let sections = document.querySelectorAll("section");
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section) => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                sections.forEach((s) => s.classList.remove("active-section"));
                section.classList.add("active-section");
            }
        });
    }

    // Fungsi untuk smooth scroll manual
    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50, // Biarkan ada jarak dengan navbar
                    behavior: "smooth",
                });
            }
        });
    });

    window.addEventListener("scroll", highlightSection);
    highlightSection(); // Call once to set the initial state
});
