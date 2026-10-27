const menuButton = document.querySelector(".nav-toggle");
const navigationLinks = document.querySelector(".nav-links");

if (menuButton && navigationLinks) {
    const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        navigationLinks.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu",
        );
        navigationLinks.classList.toggle("is-open", !isExpanded);
    });

    navigationLinks.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}