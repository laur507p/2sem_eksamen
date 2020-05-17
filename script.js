function burgerMenu() {
    let x = document.querySelector("#mainNavBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
