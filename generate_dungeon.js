let room = 0;
let dungeon_seed = 0;

const fade = document.getElementById('fade');

function fade_out_in(callback) {
  fade.classList.add('active');

  setTimeout(() => {
    callback();

    // Kleine Verzögerung, damit der neue Raum zuerst gerendert wird
    requestAnimationFrame(() => {
      fade.classList.remove('active');
    });
  }, 500);
}

function load_dungeon(seed) {
    dungeon_seed = seed;
    document.getElementById('container').replaceChildren();

    const room_seed = seed + room;
    
    generate_room(room_seed);

    const target = document.getElementById('container');
    const fullscreen_button = '<button style="position: absolute; x: 0; y: 0; width: fit-content; height: fit-content; background-color: #80808050; color: white; border: 0; cursor: pointer; z-index: 9999;" onclick="toggleFullscreen()">⛶</button>';
    target.insertAdjacentHTML('beforeend', fullscreen_button);

    console.log('Your seed:', seed, '— Current room:', room);
}

function generate_room(seed) {
    const container = document.getElementById('container');

    for (let index = 0; index < 25*17; index++) {
        const element = document.createElement('img');
        element.className = 'element';
        element.loading = 'lazy';
        element.decoding = 'async';
        element.id = String(index);
        if ((index % 25 == 0 || index % 25 == 24) && index / 25 >= 6 && index / 25 < 8) {
            element.src = 'graphics/map/Wall' + String(random_integer(seed, 1, 5)) + '.png';
            seed++
        } else if ((index < 25 || index % 25 == 0 || index % 25 == 24 || index / 25 >= 16 || (Math.floor(index / 25) == 1 && (index % 25 >= 11 && index % 25 <= 13))) && !((Math.floor(index / 25) == 16 && (index % 25 >= 11 && index % 25 <= 13)) || ((index % 25 == 0 || index % 25 == 24) && index / 25 >= 8 && index / 25 < 11))) {
            element.src = 'graphics/map/WallTop.png';
        } else if (index / 25 <= 3 && !(index % 25 >= 11 && index % 25 <= 13)) {
            element.src = 'graphics/map/Wall' + String(random_integer(seed, 1, 5)) + '.png';
            seed++
        } else {
            element.src = 'graphics/map/FloorTile' + String(random_integer(seed, 1, 5)) + '.png';
            seed++
        }     
        container.appendChild(element);
    }

    if (random_integer(seed, 1, 10) != 1) {
        seed++
        
        const carpet = document.createElement('img');
        carpet.className = 'element carpet';
        carpet.loading = 'lazy';
        carpet.decoding = 'async';
        carpet.src = 'graphics/map/Carpet' + String(random_integer(seed, 1, 11)) + '.png';
        seed++

        container.appendChild(carpet);
    }

    // left door
    create_hitbox({
        column: 1,
        row: 7,
        column_span: 1,
        row_span: 5,
        onclick: () => change_room('left')
    });

    // right door
    create_hitbox({
        column: 25,
        row: 7,
        column_span: 1,
        row_span: 5,
        onclick: () => change_room('right')
    });

    // upper door
    create_hitbox({
        column: 12,
        row: 1,
        column_span: 3,
        row_span: 3,
        onclick: () => change_room('up')
    });

    // bottom door
    create_hitbox({
        column: 12,
        row: 17,
        column_span: 3,
        row_span: 1,
        onclick: () => change_room('down')
    });
}

function create_hitbox({
    column,
    row,
    column_span = 1,
    row_span = 1,
    onclick
}) {
    const hitbox = document.createElement('button');
    hitbox.className = 'hitbox';
    hitbox.onclick = onclick;

    hitbox.style.left = `calc(var(--tile-size) * ${column - 1})`;
    hitbox.style.top = `calc(var(--tile-size) * ${row - 1})`;
    hitbox.style.width = `calc(var(--tile-size) * ${column_span})`;
    hitbox.style.height = `calc(var(--tile-size) * ${row_span})`;

    document.getElementById('container').appendChild(hitbox);

    return hitbox;
}

function change_room(to) {
    if (to === 'left') {
        room--
    } else if (to === 'right') {
        room++
    } else if (to === 'up') {
        room += 1000
    } else if (to === 'down') {
        room -= 1000
    }

      fade_out_in(() => {
        load_dungeon(dungeon_seed);
    });
}

function mulberry32(seed) {
    let a = seed | 0;

    return function () {
        a = (a + 0x6D2B79F5) | 0;

        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function random_integer(seed, min, max) {
    const rng = mulberry32(seed);

    return Math.floor(rng() * (max - min + 1)) + min;
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
  load_dungeon(dungeon_seed);
});