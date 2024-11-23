const featuresItem = document.querySelectorAll(".features__item");
for (const item of featuresItem) {
    item.onclick = () => {
        document
            .querySelector(".features__item.active")
            .classList.remove("active");
        item.classList.add("active");
    };
}

const navItem = document.querySelectorAll(".nav__item-link");
for (const item of navItem) {
    item.onclick = () => {
        document
            .querySelector(".nav__item-link.active")
            .classList.remove("active");
        item.classList.add("active");
    };
}
