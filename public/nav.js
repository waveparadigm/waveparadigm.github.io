function toggleNav() {
    let nav = document.getElementById("navHolder");
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
}