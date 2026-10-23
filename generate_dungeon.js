let room = 0;
let dungeon_seed = 0;

function load_dungeon(seed) {
    dungeon_seed = seed;
    document.body.replaceChildren();

    const room_seed = seed + room;
    
    generate_room(room_seed);

    console.log('Your seed:', seed, '— Current room:', room);
}

function generate_room(seed) {
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
        document.body.appendChild(element);
    }

    if (random_integer(seed, 1, 10) != 1) {
        seed++
        
        const carpet = document.createElement('img');
        carpet.className = 'element';
        carpet.loading = 'lazy';
        carpet.decoding = 'async';
        carpet.src = 'graphics/map/Carpet' + String(random_integer(seed, 1, 11)) + '.png';
        seed++

        const carpet_rect = document.getElementById('76').getBoundingClientRect();
        const carpet_x = carpet_rect.left;
        const carpet_y = carpet_rect.top;
        const carpet_size = carpet_rect.width;

        carpet.style.position = 'absolute';
        carpet.style.left = String(carpet_x) + 'px';
        carpet.style.top = String(carpet_y) + 'px';
        carpet.style.width = String(carpet_size * 23) + 'px';
        carpet.style.height = String(carpet_size * 13) + 'px';
        document.body.appendChild(carpet);
    }

    // left door
    const left_door_hitbox = document.createElement('button');
    left_door_hitbox.className = 'hitbox';
    left_door_hitbox.loading = 'lazy';
    left_door_hitbox.decoding = 'async';
    left_door_hitbox.onclick = () => change_room('left');

    let rect = document.getElementById('150').getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;
    let size = rect.width;

    left_door_hitbox.style.position = 'absolute'
    left_door_hitbox.style.left = String(x) + 'px';
    left_door_hitbox.style.top = String(y) + 'px';
    left_door_hitbox.style.width = String(size) + 'px';
    left_door_hitbox.style.height = String(size * 5) + 'px';
    document.body.appendChild(left_door_hitbox)

    // right door
    const right_door_hitbox = document.createElement('button');
    right_door_hitbox.className = 'hitbox';
    right_door_hitbox.loading = 'lazy';
    right_door_hitbox.decoding = 'async';
    right_door_hitbox.onclick = () => change_room('right');

    rect = document.getElementById('174').getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    size = rect.width;

    right_door_hitbox.style.position = 'absolute'
    right_door_hitbox.style.left = String(x) + 'px';
    right_door_hitbox.style.top = String(y) + 'px';
    right_door_hitbox.style.width = String(size) + 'px';
    right_door_hitbox.style.height = String(size * 5) + 'px';
    document.body.appendChild(right_door_hitbox)

    // upper door
    const upper_door_hitbox = document.createElement('button');
    upper_door_hitbox.className = 'hitbox';
    upper_door_hitbox.loading = 'lazy';
    upper_door_hitbox.decoding = 'async';
    upper_door_hitbox.onclick = () => change_room('up');

    rect = document.getElementById('11').getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    size = rect.width;

    upper_door_hitbox.style.position = 'absolute'
    upper_door_hitbox.style.left = String(x) + 'px';
    upper_door_hitbox.style.top = String(y) + 'px';
    upper_door_hitbox.style.width = String(size * 3) + 'px';
    upper_door_hitbox.style.height = String(size * 3) + 'px';
    document.body.appendChild(upper_door_hitbox)

    // bottom door
    const bottom_door_hitbox = document.createElement('button');
    bottom_door_hitbox.className = 'hitbox';
    bottom_door_hitbox.loading = 'lazy';
    bottom_door_hitbox.decoding = 'async';
    bottom_door_hitbox.onclick = () => change_room('down');

    rect = document.getElementById('411').getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    size = rect.width;

    bottom_door_hitbox.style.position = 'absolute'
    bottom_door_hitbox.style.left = String(x) + 'px';
    bottom_door_hitbox.style.top = String(y) + 'px';
    bottom_door_hitbox.style.width = String(size * 3) + 'px';
    bottom_door_hitbox.style.height = String(size) + 'px';
    document.body.appendChild(bottom_door_hitbox)
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

    load_dungeon(dungeon_seed)
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
  const elem = document.documentElement;

  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
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