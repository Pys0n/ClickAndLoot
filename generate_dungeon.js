function generate_dungeon(seed) {
    for (let index = 0; index < 25*17; index++) {
        const element = document.createElement('img');
        element.className = 'element';
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

    if (random_integer(seed, 1, 10) == 1) {
        seed++
        
        const carpet = document.createElement('img');
        carpet.className = 'element';
        carpet.src = 'graphics/map/Carpet' + String(random_integer(seed, 1, 11)) + '.png';
        seed++

        const rect = document.getElementById('76').getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;
        const size = rect.width;

        carpet.style.position = 'absolute'
        carpet.style.left = String(x) + 'px'
        carpet.style.top = String(y) + 'px'
        carpet.style.width = String(size * 23) + 'px'
        carpet.style.height = String(size * 13) + 'px'
        document.body.appendChild(carpet);
    }
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