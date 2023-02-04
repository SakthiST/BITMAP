// NavigationBar2
NAvRight = getElement({ value: ".NAvRight" })
NavigationBar2 = getElement({ value: ".NavigationBar2" })

NAvRight.addEventListener("click", () => {
    if (NavigationBar2.classList.contains("select")) {
        NavigationBar2.classList.remove("select")
        NAvRight.innerHTML = "<i class='fa-solid fa-bars'></i>"
    } else {
        NavigationBar2.classList.add("select")
        NAvRight.innerHTML = "<i class='fa-solid fa-x'></i>"

    }




})





















function getElement({ value, all = false } = {}) {

    if (all) {
        const Element = document.querySelectorAll(value);
        return Element;
    } else {
        const Element = document.querySelector(value);
        return Element;


    }

}