let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;

const updateItems = () => {
    items.forEach((item, index) => {
        item.classList.remove('active', 'other_1', 'other_2');
        if (index === active) {
            item.classList.add('active');
        } else if (index === (active + 1) % countItem) {
            item.classList.add('other_1');
        } else if (index === (active + 2) % countItem) {
            item.classList.add('other_2');
        }
    });
};

function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active = (active + 1) % countItem;
    updateItems();
};

prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = (active - 1 + countItem) % countItem;
    updateItems();
};

updateItems();
let darks = document.querySelector(".darks");
let lights = document.querySelector(".lights");
let moka = document.querySelector("#moka")


darks.addEventListener("click", function() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = "white"
    darks.classList.add("hide")
    lights.classList.remove("hide")
    moka.style.color = "black"


})
lights.addEventListener("click", function() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = "black"
    lights.classList.add("hide")
    darks.classList.remove("hide")
    moka.style.color = "black"



})
let btns = document.getElementById("btns")
window.addEventListener("scroll", function() {
    if (this.scrollY >= 400) {
        btns.style.display = "block"

    } else if (this.scrollY <= 400) {
        btns.style.display = "none"
    } else {
        btns.style.backgroundColor = "red"
        btns.style.color = "white"

    }
})

function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}
// No JavaScript is needed for functionality, 
// but if you want to add some interactive effects or logging, you can use this

document.querySelectorAll('.checkbox-heart').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            console.log('Product added to favorites');
        } else {
            console.log('Product removed from favorites');
        }
    });
});