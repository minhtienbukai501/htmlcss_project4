const featuresItem = document.querySelectorAll(".features__item");
for (const item of featuresItem) {
    item.onclick = () => {
        document
            .querySelector(".features__item.active")
            .classList.remove("active");
        item.classList.add("active");
    };
}
