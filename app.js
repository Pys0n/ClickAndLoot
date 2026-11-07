import { load_dungeon } from "./play/dungeon.js";
import { load_inventory } from "./play/inventory.js";

const views = {
    menu: document.getElementById("menu-view"),
    dungeon: document.getElementById("dungeon-view"),
    inventory: document.getElementById("inventory-view")
};

let dungeon_started = false;

function show_view(name) {
    for (const [view_name, element] of Object.entries(views)) {
        element.hidden = view_name !== name;
    }
}

document.getElementById("start-button").addEventListener("click", () => {
    show_view("dungeon");

    if (!dungeon_started) {
        const seed = Math.floor(Math.random() * 10 ** 10);

        load_dungeon(seed);
        dungeon_started = true;
    }
});

document.getElementById("inventory-button").addEventListener("click", () => {
    show_view("inventory");
    load_inventory();
});

document.getElementById("inventory-close").addEventListener("click", () => {
    show_view("dungeon");
});

document.getElementById("fullscreen-button").addEventListener(
    "click",
    async () => {
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else {
                await document.documentElement.requestFullscreen();
            }
        } catch (error) {
            console.error("Fullscreen is currently not available:", error);
        }
    }
);

show_view("menu");