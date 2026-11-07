import { items } from "./items.js";

let current_page = 0;
let current_category = 0;
let current_rarity = 0;


function change_page(x) {
    current_page += x;

    if (items[current_category][current_rarity][current_page*20] == null) {
        current_page--;
    }
    if (current_page < 0) {
        current_page = 0;
    }

    load_inventory();
}

function set_category(category) {
    current_category = category;
    current_page = 0;

    load_inventory();
}

function set_rarity(rarity) {
    current_rarity = rarity;
    current_page = 0;

    load_inventory();
}

function load_inventory() {
    const current_items = items[current_category][current_rarity].slice(current_page*20, current_page*20+20)

    console.log(current_page, current_category, current_rarity, current_items)


    console.log(current_items[0])
    console.log("HTML-Basis:", document.baseURI);

    console.log(
        "Bild-Adresse:",
        new URL(current_items[0].img_path, document.baseURI).href
    );

    const slots = document.getElementById('slots')
    slots.replaceChildren();

    for (const item of current_items) {
        const slot = document.createElement("button");

        slot.type = "button";
        slot.className = "slot";
        slot.style.backgroundImage = `url("${item.img_path}")`;

        slots.appendChild(slot);
        
        //const slot = "<button style=\"border: none; background-image: url('${item.img_path}');\"></button>"
        //slots.insertAdjacentHTML('beforeend', slot)
    }
}

function toggleFullscreen() {
    const element = document.documentElement;

    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    load_inventory()
});

document.getElementById('previous').addEventListener('click', () => {
    change_page(-1);
});
document.getElementById('next').addEventListener('click', () => {
    change_page(1);
});

document.getElementById('weapon').addEventListener('click', () => {
    set_category(0);
});
document.getElementById('armor').addEventListener('click', () => {
    set_category(1);
});
document.getElementById('accessory').addEventListener('click', () => {
    set_category(2);
});
document.getElementById('rune').addEventListener('click', () => {
    set_category(3);
});

document.getElementById('common').addEventListener('click', () => {
    set_rarity(0);
});
document.getElementById('uncommon').addEventListener('click', () => {
    set_rarity(1);
});
document.getElementById('rare').addEventListener('click', () => {
    set_rarity(2);
});
document.getElementById('epic').addEventListener('click', () => {
    set_rarity(3);
});
document.getElementById('legendary').addEventListener('click', () => {
    set_rarity(4);
});
document.getElementById('mythic').addEventListener('click', () => {
    set_rarity(5);
});
document.getElementById('godly').addEventListener('click', () => {
    set_rarity(6);
});

document.getElementById('fullscreen').addEventListener('click', () => {
    toggleFullscreen();
});

load_inventory();