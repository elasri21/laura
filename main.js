// toggle menu
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
openMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "block";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    openMenu.style.display = "block";
});

// down-parent
const downParent = document.querySelector(".down-parent");
downParent.addEventListener("click", function() {
    this.classList.toggle("clicked");
});

//header
const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        header.style.backgroundColor = "transparent";
        goUp.style.opacity = "0"
    } else if(this.scrollY >= 200) {
        header.style.backgroundColor = "rgba(0, 0, 0, .7)";
        goUp.style.opacity = "0.8"
    }
});
//
function switcher(btns, boxes) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            for(let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
            }
            boxes.forEach(box => {
                if(this.id == box.dataset.id) {
                    box.classList.remove("hide");
                } else {
                    box.classList.add("hide");
                }
            });
            this.classList.add("active");
        });
    });
}

// testimonial
const reviews = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));

switcher(bullets, reviews);

// portfolio
const projects = Array.from(document.querySelectorAll(".portfolio .project"));
const categories = Array.from(document.querySelectorAll(".categories span"));
categories.forEach(category => {
    category.addEventListener("click", function() {
        for(let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
        }
        projects.forEach(p => {
            if(this.id == p.dataset.id && this.id != "all") {
                p.classList.remove("hide");
            } else if(this.id =="all") {
                p.classList.remove("hide");
            } else {
                p.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});