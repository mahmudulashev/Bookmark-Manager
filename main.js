document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
        this.classList.add("active");
        document.getElementById(this.dataset.tab).classList.add("active");
    });
});

document.querySelectorAll(".faq").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

