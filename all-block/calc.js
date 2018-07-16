let tabsLand = document.querySelector("#tabs_land"),
    tabsCorp = document.querySelector("#tabs_corp"),
    tabsShop = document.querySelector("#tabs_shop"),
    div = document.getElementsByClassName("add_service"),
    total = document.querySelector("#total-value"),
    pageBlock = document.querySelector("#page_block"),
    thumbs = document.getElementsByClassName("thumbs"),
    iconThumb = document.querySelector(".fa-thumbs-up");

    console.log(thumbs)

// >>>>>>>>>>> Delete class !page_land <<<<<<<<<<<

    for(let i = 0; i < div.length; i++) {
        if (div[i].classList.contains("page_land")) {
            div[i].style.display = "block";
        } else  {
            div[i].style.display = "none"
        }
    }
// >>>>>>>>>>>>>>>>>>> Add action on click TAB's <<<<<<<<<<<<<<<<<<<<


window.addEventListener("DOMContentLoaded", () => {
    tabsLand.addEventListener("click", () => {
        tabsLand.classList.add("active");
        tabsCorp.classList.remove("active");
        tabsShop.classList.remove("active");

        for(let i = 0; i < div.length; i++) {
            if (div[i].classList.contains("page_land")) {
                div[i].style.display = "block";
            } else  {
                div[i].style.display = "none";
            }
        }
        total.value = "150"
    });

    tabsCorp.addEventListener("click", () => {
        tabsCorp.classList.add("active");
        tabsLand.classList.remove("active");
        tabsShop.classList.remove("active");

        for(let i = 0; i < div.length; i++) {
            if (div[i].classList.contains("page_corp")) {
                div[i].style.display = "block";
            } else  {
                div[i].style.display = "none";
            }
        }
        total.value = "225"
    });

    tabsShop.addEventListener("click", () => {
        tabsShop.classList.add("active");
        tabsLand.classList.remove("active");
        tabsCorp.classList.remove("active");

        for(let i = 0; i < div.length; i++) {
            if (div[i].classList.contains("page_shop")) {
                div[i].style.display = "block";
            } else  {
                div[i].style.display = "none";
            }
        }
        total.value = "310"
    });

// >>>>>>>>>>>>> Yellow Sign COOL MAN <<<<<<<<<<<<<<<<<<<<<<

let thumbIcon = document.querySelectorAll(".fa-thumbs-up");

document.querySelectorAll(".thumbs").forEach((key, i) => {
    key.addEventListener("change", () => key.value.length >= 2 ? thumbIcon[i].style.display = "inline-block" : thumbIcon[i].style.display = "none");

})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<<<


});

const  arrowLeft = document.getElementById("arrows_left"),
                arrowLine = document.getElementById("arrow_middle"),
                arrowRight = document.getElementById('arrows_right'),
                arrow_text_left = document.getElementById("arrow_text_left"),
                arrow_text_right = document.getElementById("arrow_text_right"),
                switchText = document.getElementById("switch_text"),
                input = document.getElementById("switch"),
                block1 = document.getElementById("block_1");


arrowLeft.addEventListener("mouseover", () => {
                if (arrowLine.classList.contains("activeRight") || arrow_text_right.style.opacity == "1") {
                                arrowLine.classList.remove('activeRight');
                                arrow_text_right.style.opacity = "0"
                }
                                arrowLine.classList.add("activeLeft");
                                arrow_text_left.style.opacity = "1";
});

arrowRight.addEventListener("mouseover", () => {
                if (arrowLine.classList.contains("activeLeft") || arrow_text_left.style.opacity == "1") {
                                arrowLine.classList.remove("activeLeft")
                                arrow_text_left.style.opacity = "0"
                }
                                arrowLine.classList.add("activeRight");
                                arrow_text_right.style.opacity = "1";
});