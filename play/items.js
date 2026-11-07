class Weapon {
    constructor(name, img_path, dmg=1, cdmg=2, cchance=0.1, atks=1) {
        this.name = name;
        this.img_path = img_path;
        this.damage = dmg;
        this.crit_damage = cdmg;
        this.crit_chance = cchance;
        this.attack_speed = atks;
    }
}

export const items = [
    // index 0 = weapons, index 1 = armor, index 2 = accessories, index 3 = runes
    [
        // weapons
        // index 0 = common, indey 1 = uncommon, index 2 = rare, ...
        [
            // common
            new Weapon('Shepherds Staff', '../graphics/items/ShepherdsStaff.png'),
            new Weapon('Wooden Sword', '../graphics/items/WoodenSword.png'),
            new Weapon('Wooden Bow', '../graphics/items/WoodenBow.png'),

            new Weapon('Epee', '../graphics/items/Epee.png'),
            new Weapon('Cleaver', '../graphics/items/Cleaver.png'),
        ],
        [
            // uncommon
            new Weapon('Shepherds Staff', '../graphics/items/ShepherdsStaff.png'),
            new Weapon('Wooden Sword', '../graphics/items/WoodenSword.png'),
            new Weapon('Wooden Bow', '../graphics/items/WoodenBow.png'),

            new Weapon('Epee', '../graphics/items/Epee.png'),
            new Weapon('Cleaver', '../graphics/items/Cleaver.png'),
            new Weapon('Bonesword', '../graphics/items/BoneSword.png'),
            new Weapon('Broadsword', '../graphics/items/Broadsword.png'),
            new Weapon('Hook-Bladed Sword', '../graphics/items/HookBladedSword.png'),

            new Weapon('Iron Dagger', '../graphics/items/IronDagger.png'),
            new Weapon('Iron Ring-Blade', '../graphics/items/IronRingBlade.png'),
            new Weapon('Iron Sword', '../graphics/items/IronSword.png'),
            new Weapon('Iron Axe', '../graphics/items/IronAxe.png'),
            new Weapon('Iron Spear', '../graphics/items/IronSpear.png'),
            new Weapon('Iron Great Spear', '../graphics/items/IronGreatSpear.png'),
        ],
        [
            // rare
            new Weapon('Epee', '../graphics/items/Epee.png'),
            new Weapon('Cleaver', '../graphics/items/Cleaver.png'),
            new Weapon('Bonesword', '../graphics/items/BoneSword.png'),
            new Weapon('Broadsword', '../graphics/items/Broadsword.png'),
            new Weapon('Hook-Bladed Sword', '../graphics/items/HookBladedSword.png'),

            new Weapon('Serrated Sword', '../graphics/items/SerratedSword.png'),
            new Weapon('Nature Sword', '../graphics/items/NatureSword.png'),
            new Weapon('Frozen Sword', '../graphics/items/FrozenSword.png'),
            new Weapon('Flaming Sword', '../graphics/items/FlamingSword.png'),
            new Weapon('Lightning Sword', '../graphics/items/LightningSword.png'),

            new Weapon('Iron Dagger', '../graphics/items/IronDagger.png'),
            new Weapon('Iron Ring-Blade', '../graphics/items/IronRingBlade.png'),
            new Weapon('Iron Sword', '../graphics/items/IronSword.png'),
            new Weapon('Iron Axe', '../graphics/items/IronAxe.png'),
            new Weapon('Iron Spear', '../graphics/items/IronSpear.png'),
            new Weapon('Iron Great Spear', '../graphics/items/IronGreatSpear.png'),

            new Weapon('Silver Dagger', '../graphics/items/SilverDagger.png'),
            new Weapon('Silver Ring-Blade', '../graphics/items/SilverRingBlade.png'),
            new Weapon('Silver Blade', '../graphics/items/SilverBlade.png'),
            new Weapon('Silver Sword', '../graphics/items/SilverSword.png'),
            new Weapon('Silver Axe', '../graphics/items/SilverAxe.png'),
            new Weapon('Silver Spear', '../graphics/items/SilverSpear.png'),
            new Weapon('Silver Great Spear', '../graphics/items/SilverGreatSpear.png'),
            new Weapon('Silver Trident', '../graphics/items/SilverTrident.png'),

            new Weapon('Golden Dagger', '../graphics/items/GoldenDagger.png'),
            new Weapon('Golden Ring-Blade', '../graphics/items/GoldenRingBlade.png'),
            new Weapon('Golden Sword', '../graphics/items/GoldenSword.png'),
            new Weapon('Golden Axe', '../graphics/items/GoldenAxe.png'),
            new Weapon('Golden Spear', '../graphics/items/GoldenSpear.png'),
            new Weapon('Golden Great Spear', '../graphics/items/GoldenGreatSpear.png'),
            new Weapon('Golden Trident', '../graphics/items/GoldenTrident.png'),

            new Weapon('Silver Blade Diamond Sword', '../graphics/items/SilverBladeDiamondSword.png'),
            new Weapon('Silver Blade Ruby Sword', '../graphics/items/SilverBladeRubySword.png'),
            new Weapon('Silver Blade Emerald Sword', '../graphics/items/SilverBladeEmeraldSword.png'),
            new Weapon('Silver Blade Saphire Sword', '../graphics/items/SilverBladeSaphireSword.png'),

            new Weapon('Golden Diamond Handled Sword', '../graphics/items/GoldenDiamondHandledSword.png'),
            new Weapon('Golden Ruby Handled Sword', '../graphics/items/GoldenRubyHandledSword.png'),
            new Weapon('Golden Emerald Handled Sword', '../graphics/items/GoldenEmeraldHandledSword.png'),
            new Weapon('Golden Saphire Handled Sword', '../graphics/items/GoldenSaphireHandledSword.png'),
        ],
        [
            // epic
            new Weapon('Serrated Sword', '../graphics/items/SerratedSword.png'),
            new Weapon('Nature Sword', '../graphics/items/NatureSword.png'),
            new Weapon('Frozen Sword', '../graphics/items/FrozenSword.png'),
            new Weapon('Flaming Sword', '../graphics/items/FlamingSword.png'),
            new Weapon('Lightning Sword', '../graphics/items/LightningSword.png'),

            new Weapon('Silver Dagger', '../graphics/items/SilverDagger.png'),
            new Weapon('Silver Ring-Blade', '../graphics/items/SilverRingBlade.png'),
            new Weapon('Silver Blade', '../graphics/items/SilverBlade.png'),
            new Weapon('Silver Sword', '../graphics/items/SilverSword.png'),
            new Weapon('Silver Axe', '../graphics/items/SilverAxe.png'),
            new Weapon('Silver Spear', '../graphics/items/SilverSpear.png'),
            new Weapon('Silver Great Spear', '../graphics/items/SilverGreatSpear.png'),
            new Weapon('Silver Trident', '../graphics/items/SilverTrident.png'),

            new Weapon('Golden Dagger', '../graphics/items/GoldenDagger.png'),
            new Weapon('Golden Ring-Blade', '../graphics/items/GoldenRingBlade.png'),
            new Weapon('Golden Sword', '../graphics/items/GoldenSword.png'),
            new Weapon('Golden Axe', '../graphics/items/GoldenAxe.png'),
            new Weapon('Golden Spear', '../graphics/items/GoldenSpear.png'),
            new Weapon('Golden Great Spear', '../graphics/items/GoldenGreatSpear.png'),
            new Weapon('Golden Trident', '../graphics/items/GoldenTrident.png'),

            new Weapon('Silver Blade Diamond Sword', '../graphics/items/SilverBladeDiamondSword.png'),
            new Weapon('Silver Blade Ruby Sword', '../graphics/items/SilverBladeRubySword.png'),
            new Weapon('Silver Blade Emerald Sword', '../graphics/items/SilverBladeEmeraldSword.png'),
            new Weapon('Silver Blade Saphire Sword', '../graphics/items/SilverBladeSaphireSword.png'),

            new Weapon('Golden Diamond Handled Sword', '../graphics/items/GoldenDiamondHandledSword.png'),
            new Weapon('Golden Ruby Handled Sword', '../graphics/items/GoldenRubyHandledSword.png'),
            new Weapon('Golden Emerald Handled Sword', '../graphics/items/GoldenEmeraldHandledSword.png'),
            new Weapon('Golden Saphire Handled Sword', '../graphics/items/GoldenSaphireHandledSword.png'),

            new Weapon('Molten Sword', '../graphics/items/MoltenSword.png'),
            new Weapon('Ruby Skull Sword', '../graphics/items/RubySkullSword.png'),

            new Weapon('Diamond Dagger', '../graphics/items/DiamondDagger.png'),
            new Weapon('Diamond Ring-Blade', '../graphics/items/DiamondRingBlade.png'),
            new Weapon('Diamond Blade', '../graphics/items/DiamondBlade.png'),
            new Weapon('Diamond Longsword', '../graphics/items/DiamondLongsword.png'),
            new Weapon('Diamond Spear', '../graphics/items/DiamondSpear.png'),
            new Weapon('Diamond Great Spear', '../graphics/items/DiamondGreatSpear.png'),

            new Weapon('Ruby Dagger', '../graphics/items/RubyDagger.png'),
            new Weapon('Ruby Ring-Blade', '../graphics/items/RubyRingBlade.png'),
            new Weapon('Ruby Blade', '../graphics/items/RubyBlade.png'),
            new Weapon('Ruby Longsword', '../graphics/items/RubyLongsword.png'),
            new Weapon('Ruby Spear', '../graphics/items/RubySpear.png'),
            new Weapon('Ruby Great Spear', '../graphics/items/RubyGreatSpear.png'),

            new Weapon('Emerald Dagger', '../graphics/items/EmeraldDagger.png'),
            new Weapon('Emerald Ring-Blade', '../graphics/items/EmeraldRingBlade.png'),
            new Weapon('Emerald Blade', '../graphics/items/EmeraldBlade.png'),
            new Weapon('Emerald Longsword', '../graphics/items/EmeraldLongsword.png'),
            new Weapon('Emerald Spear', '../graphics/items/EmeraldSpear.png'),
            new Weapon('Emerald Great Spear', '../graphics/items/EmeraldGreatSpear.png'),

            new Weapon('Saphire Dagger', '../graphics/items/SaphireDagger.png'),
            new Weapon('Saphire Ring-Blade', '../graphics/items/SaphireRingBlade.png'),
            new Weapon('Saphire Blade', '../graphics/items/SaphireBlade.png'),
            new Weapon('Saphire Longsword', '../graphics/items/SaphireLongsword.png'),
            new Weapon('Saphire Spear', '../graphics/items/SaphireSpear.png'),
            new Weapon('Saphire Great Spear', '../graphics/items/SaphireGreatSpear.png'),

            new Weapon('Silver Gemstone Greatsword', '../graphics/items/SilverGemstoneGreatsword.png'),
            new Weapon('Colossal Onyx Sword', '../graphics/items/ColossalOnyxSword.png'),
            new Weapon('Shadow King\'s Sword', '../graphics/items/ShadowKingsSword.png'),
        ],
        [
            // legendary
            new Weapon('Molten Sword', '../graphics/items/MoltenSword.png'),
            new Weapon('Ruby Skull Sword', '../graphics/items/RubySkullSword.png'),

            new Weapon('Diamond Dagger', '../graphics/items/DiamondDagger.png'),
            new Weapon('Diamond Ring-Blade', '../graphics/items/DiamondRingBlade.png'),
            new Weapon('Diamond Blade', '../graphics/items/DiamondBlade.png'),
            new Weapon('Diamond Longsword', '../graphics/items/DiamondLongsword.png'),
            new Weapon('Diamond Spear', '../graphics/items/DiamondSpear.png'),
            new Weapon('Diamond Great Spear', '../graphics/items/DiamondGreatSpear.png'),

            new Weapon('Ruby Dagger', '../graphics/items/RubyDagger.png'),
            new Weapon('Ruby Ring-Blade', '../graphics/items/RubyRingBlade.png'),
            new Weapon('Ruby Blade', '../graphics/items/RubyBlade.png'),
            new Weapon('Ruby Longsword', '../graphics/items/RubyLongsword.png'),
            new Weapon('Ruby Spear', '../graphics/items/RubySpear.png'),
            new Weapon('Ruby Great Spear', '../graphics/items/RubyGreatSpear.png'),

            new Weapon('Emerald Dagger', '../graphics/items/EmeraldDagger.png'),
            new Weapon('Emerald Ring-Blade', '../graphics/items/EmeraldRingBlade.png'),
            new Weapon('Emerald Blade', '../graphics/items/EmeraldBlade.png'),
            new Weapon('Emerald Longsword', '../graphics/items/EmeraldLongsword.png'),
            new Weapon('Emerald Spear', '../graphics/items/EmeraldSpear.png'),
            new Weapon('Emerald Great Spear', '../graphics/items/EmeraldGreatSpear.png'),

            new Weapon('Saphire Dagger', '../graphics/items/SaphireDagger.png'),
            new Weapon('Saphire Ring-Blade', '../graphics/items/SaphireRingBlade.png'),
            new Weapon('Saphire Blade', '../graphics/items/SaphireBlade.png'),
            new Weapon('Saphire Longsword', '../graphics/items/SaphireLongsword.png'),
            new Weapon('Saphire Spear', '../graphics/items/SaphireSpear.png'),
            new Weapon('Saphire Great Spear', '../graphics/items/SaphireGreatSpear.png'),

            new Weapon('Silver Gemstone Greatsword', '../graphics/items/SilverGemstoneGreatsword.png'),
            new Weapon('Colossal Onyx Sword', '../graphics/items/ColossalOnyxSword.png'),
            new Weapon('Shadow King\'s Sword', '../graphics/items/ShadowKingsSword.png'),

            new Weapon('Golden Katana', '../graphics/items/GoldenKatana.png'),

            new Weapon('Cursed Katana', '../graphics/items/CursedKatana.png'),
            new Weapon('Sunrise', '../graphics/items/Sunrise.png'),
            new Weapon('Moonrise', '../graphics/items/Moonrise.png'),
            new Weapon('Day Scythe', '../graphics/items/DayScythe.png'),
            new Weapon('Night Scythe', '../graphics/items/NightScythe.png'),
            new Weapon('Moon Spear', '../graphics/items/MoonSpear.png'),
            new Weapon('Dark Scythe', '../graphics/items/DarkScythe.png'),
            new Weapon('Dark Claymore', '../graphics/items/DarkClaymore.png'),

            new Weapon('Dragon Sword', '../graphics/items/DragonSword.png'),
            new Weapon('Dragon Wand', '../graphics/items/DragonWand.png'),
            new Weapon('Dragonbane Sword', '../graphics/items/DragonbaneSword.png'),
            new Weapon('Crystal Sword', '../graphics/items/CrystalSword.png'),
            new Weapon('Flesh Scythe', '../graphics/items/FleshScythe.png'),
            new Weapon('Lava Crystal Sword', '../graphics/items/LavaCrystalSword.png'),
            new Weapon('Water Sword', '../graphics/items/WaterSword.png'),
        ],
        [
            // mythic
            new Weapon('Cursed Katana', '../graphics/items/CursedKatana.png'),
            new Weapon('Sunrise', '../graphics/items/Sunrise.png'),
            new Weapon('Moonrise', '../graphics/items/Moonrise.png'),
            new Weapon('Day Scythe', '../graphics/items/DayScythe.png'),
            new Weapon('Night Scythe', '../graphics/items/NightScythe.png'),
            new Weapon('Moon Spear', '../graphics/items/MoonSpear.png'),
            new Weapon('Dark Scythe', '../graphics/items/DarkScythe.png'),
            new Weapon('Dark Claymore', '../graphics/items/DarkClaymore.png'),

            new Weapon('Dragon Sword', '../graphics/items/DragonSword.png'),
            new Weapon('Dragon Wand', '../graphics/items/DragonWand.png'),
            new Weapon('Dragonbane Sword', '../graphics/items/DragonbaneSword.png'),
            new Weapon('Crystal Sword', '../graphics/items/CrystalSword.png'),
            new Weapon('Flesh Scythe', '../graphics/items/FleshScythe.png'),
            new Weapon('Lava Crystal Sword', '../graphics/items/LavaCrystalSword.png'),
            new Weapon('Water Sword', '../graphics/items/WaterSword.png'),
        ],
        [
            // godly
            new Weapon('Shadow Katana', '../graphics/items/ShadowKatana.png'),
        ],
    ],
    [
        // armor
        // index 0 = common, indey 1 = uncommon, index 2 = rare, ...
        [
            // common
        ],
        [
            // uncommon
        ],
        [
            // rare
        ],
        [
            // epic
        ],
        [
            // legendary
        ],
        [
            // mythic
        ],
        [
            // godly
        ],
    ],
    [
        // accessories
        // index 0 = common, indey 1 = uncommon, index 2 = rare, ...
        [
            // common
        ],
        [
            // uncommon
        ],
        [
            // rare
        ],
        [
            // epic
        ],
        [
            // legendary
        ],
        [
            // mythic
        ],
        [
            // godly
        ],
    ],
    [
        // runes
        // index 0 = common, indey 1 = uncommon, index 2 = rare, ...
        [
            // common
        ],
        [
            // uncommon
        ],
        [
            // rare
        ],
        [
            // epic
        ],
        [
            // legendary
        ],
        [
            // mythic
        ],
        [
            // godly
        ],
    ],
]