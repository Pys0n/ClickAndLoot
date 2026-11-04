class Weapon {
    constructor(name, dmg=1, cdmg=2, cchance=0.1, atks=1) {
        this.name = name;
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
            new Weapon('&*§?#§*#$ %#$§?'),      // Shepherds Staff
            new Weapon('§?§&$% **$§='),         // Wooden Sword
            new Weapon('§=$$&* §=$'),           // Wooden Bow

            new Weapon('*#§='),                 // Epee
            new Weapon('?*%*§$?'),              // Cleaver
        ],
        [
            // uncommon
            new Weapon('&*§?#§*#$ %#$§?'),      // Shepherds Staff
            new Weapon('§?§&$% **$§='),         // Wooden Sword
            new Weapon('§=$$&* §=$'),           // Wooden Bow

            new Weapon('*#§='),                 // Epee
            new Weapon('?*%*§$?'),              // Cleaver
            new Weapon('**$==W#$%'),            // Bonesword
            new Weapon('%$#%&#$$%*'),           // Broadsword
            new Weapon('#=*$-==*&?$ §%#*#'),    // Hook-Bladed Sword

            new Weapon('=§%* *§*§§$'),          // Iron Dagger
            new Weapon('#?$$ &$*g-**=§#'),      // Iron Ring-Blade
            new Weapon('*§$* =*$=*'),           // Iron Sword
            new Weapon('%??§ &?#'),             // Iron Axe
            new Weapon('%&#N ?=%??'),           // Iron Spear
            new Weapon('$### ?§=%% =&%#%'),     // Iron Great Spear
        ],
        [
            // rare
            new Weapon('*#§='),                 // Epee
            new Weapon('?*%*§$?'),              // Cleaver
            new Weapon('**$==W#$%'),            // Bonesword
            new Weapon('%$#%&#$$%*'),           // Broadsword
            new Weapon('#=*$-==*&?$ §%#*#'),    // Hook-Bladed Sword

            new Weapon('&%#&§**$ =*§?&'),       // Serrated Sword
            new Weapon('#??&%% #==§#'),         // Nature Sword
            new Weapon('%=§=§? #&§#%'),         // Frozen Sword
            new Weapon('§?$*§%§ =*&?*'),        // Flaming Sword
            new Weapon('%§§=$§%?* =?#?&'),      // Lightning Sword

            new Weapon('=§%* *§*§§$'),          // Iron Dagger
            new Weapon('#?$$ &$*g-**=§#'),      // Iron Ring-Blade
            new Weapon('*§$* =*$=*'),           // Iron Sword
            new Weapon('%??§ &?#'),             // Iron Axe
            new Weapon('%&#N ?=%??'),           // Iron Spear
            new Weapon('$### ?§=%% =&%#%'),     // Iron Great Spear

            new Weapon('%%§=$= &$#$%#'),        // Silver Dagger
            new Weapon('*§=&§= =#?#-=&??&'),    // Silver Ring-Blade
            new Weapon('#%=#$§ %§?&%'),         // Silver Blade
            new Weapon('#$=*%# &#?§%'),         // Silver Sword
            new Weapon('%§?%&§ =%='),           // Silver Axe
            new Weapon('?$?*&§ $&=*&'),         // Silver Spear
            new Weapon('?&$**% ##%&? &$?§#'),   // Silver Great Spear
            new Weapon('%&*?=& #%&§=%#'),       // Silver Trident

            new Weapon('%O%= =$&*#$'),          // Gold Dagger
            new Weapon('?#§& ?=#?-*?*§$'),      // Gold Ring-Blade
            new Weapon('&&=# #%$&%'),           // Gold Sword
            new Weapon('?$%? =§='),             // Gold Axe
            new Weapon('%%§= %#§?&'),           // Gold Spear
            new Weapon('%§%& $*?$% §%%=#'),     // Gold Great Spear
            new Weapon('&*?§ **==#%%'),         // Gold Trident

            new Weapon('&#**=% §&§#& **%%#&$ §?§%$'),   // Silver Blade Diamond Sword
            new Weapon('?§?#%& $##§# &?*& §#&?§'),      // Silver Blade Ruby Sword
            new Weapon('?$§§#% $%%%# %$#*&&% §?&*&'),   // Silver Blade Emerald Sword
            new Weapon('##§&$& *##§# &$*#$?* *§?#%'),   // Silver Blade Saphire Sword

            new Weapon('$§?*?$ §&§*=== %=*#$#* $&#&§'), // Golden Diamond Handled Sword
            new Weapon('*=%§%# #*=* $*?&#$# #*%##'),    // Golden Ruby Handled Sword
            new Weapon('?$*=?# *M#*%#? &#=$$$§ *#*%%'), // Golden Emerald Handled Sword
            new Weapon('==$*== %???§&= §##$$*D #*§#%'), // Golden Saphire Handled Sword

        ],
        [
            // epic
            new Weapon('&%#&§**$ =*§?&'),       // Serrated Sword
            new Weapon('#??&%% #==§#'),         // Nature Sword
            new Weapon('%=§=§? #&§#%'),         // Frozen Sword
            new Weapon('§?$*§%§ =*&?*'),        // Flaming Sword
            new Weapon('%§§=$§%?* =?#?&'),      // Lightning Sword

            new Weapon('%%§=$= &$#$%#'),        // Silver Dagger
            new Weapon('*§=&§= =#?#-=&??&'),    // Silver Ring-Blade
            new Weapon('#%=#$§ %§?&%'),         // Silver Blade
            new Weapon('#$=*%# &#?§%'),         // Silver Sword
            new Weapon('%§?%&§ =%='),           // Silver Axe
            new Weapon('?$?*&§ $&=*&'),         // Silver Spear
            new Weapon('?&$**% ##%&? &$?§#'),   // Silver Great Spear
            new Weapon('%&*?=& #%&§=%#'),       // Silver Trident

            new Weapon('%O%= =$&*#$'),          // Gold Dagger
            new Weapon('?#§& ?=#?-*?*§$'),      // Gold Ring-Blade
            new Weapon('&&=# #%$&%'),           // Gold Sword
            new Weapon('?$%? =§='),             // Gold Axe
            new Weapon('%%§= %#§?&'),           // Gold Spear
            new Weapon('%§%& $*?$% §%%=#'),     // Gold Great Spear
            new Weapon('&*?§ **==#%%'),         // Gold Trident

            new Weapon('&#**=% §&§#& **%%#&$ §?§%$'),   // Silver Blade Diamond Sword
            new Weapon('?§?#%& $##§# &?*& §#&?§'),      // Silver Blade Ruby Sword
            new Weapon('?$§§#% $%%%# %$#*&&% §?&*&'),   // Silver Blade Emerald Sword
            new Weapon('##§&$& *##§# &$*#$?* *§?#%'),   // Silver Blade Saphire Sword

            new Weapon('$§?*?$ §&§*=== %=*#$#* $&#&§'), // Golden Diamond Handled Sword
            new Weapon('*=%§%# #*=* $*?&#$# #*%##'),    // Golden Ruby Handled Sword
            new Weapon('?$*=?# *M#*%#? &#=$$$§ *#*%%'), // Golden Emerald Handled Sword
            new Weapon('==$*== %???§&= §##$$*D #*§#%'), // Golden Saphire Handled Sword

            new Weapon('?#$*§$ ?#*=&'),         // Molten Sword
            new Weapon('&%#& ??*?# $%#*='),     // Ruby Skull Sword

            new Weapon('§%§$§*% *=$?&§'),       // Diamond Dagger
            new Weapon('=#§**#D *#$%-#$$$*'),   // Diamond Ring-Blade
            new Weapon('$=#?$#? =?$§#'),        // Diamond Blade
            new Weapon('%%=%$?= %%*==**§&'),    // Diamond Longsword
            new Weapon('%i?=?%% $p#§§'),        // Diamond Spear
            new Weapon('*$§§#?# #&$%* $&%$?'),  // Diamond Great Spear

            new Weapon('*#=? §$§=&§'),          // Ruby Dagger
            new Weapon('*#*% *##%-&???&'),      // Ruby Ring-Blade
            new Weapon('%&&& =&*D&'),           // Ruby Blade
            new Weapon('#§%$ #&§&$%#§*'),       // Ruby Longsword
            new Weapon('=%&* %&&##'),           // Ruby Spear
            new Weapon('=&== &&&=§ ?§*#$'),     // Ruby Great Spear

            new Weapon('#*#*&%& §&%*&&'),       // Emerald Dagger
            new Weapon('§%#?%?§ §?=?-§$=&?'),   // Emerald Ring-Blade
            new Weapon('$#*$$%& =*&#*'),        // Emerald Blade
            new Weapon('§&=#&?§ %#=#§%&%&'),    // Emerald Longsword
            new Weapon('?*#&*$= #*&%%'),        // Emerald Spear
            new Weapon('**&$§=# ==&%? §=**='),  // Emerald Great Spear

            new Weapon('==%=??$ *%?§%§'),       // Saphire Dagger
            new Weapon('#&#$=§# ??#§-*%*&='),   // Saphire Ring-Blade
            new Weapon('?==###* *=$?='),        // Saphire Blade
            new Weapon('=##=$§* =$%#&$=??'),    // Saphire Longsword
            new Weapon('$=§&&$$ %%==§'),        // Saphire Spear
            new Weapon('#=&=?=% #?*%* $&#=#'),  // Saphire Great Spear

            new Weapon('&?$=&= §&&=##%& #*=§%=&§*%'),   // Silver Gemstone Greatsword
            new Weapon('?§%*$?§= $§?? =&§r&'),          // Colossal Onyx Sword
            new Weapon('$$?§## %=%§\'# ?$$§='),         // Shadow King's Sword
        ],
        [
            // legendary
            new Weapon('?#$*§$ ?#*=&'),         // Molten Sword
            new Weapon('&%#& ??*?# $%#*='),     // Ruby Skull Sword

            new Weapon('§%§$§*% *=$?&§'),       // Diamond Dagger
            new Weapon('=#§**#D *#$%-#$$$*'),   // Diamond Ring-Blade
            new Weapon('$=#?$#? =?$§#'),        // Diamond Blade
            new Weapon('%%=%$?= %%*==**§&'),    // Diamond Longsword
            new Weapon('%i?=?%% $p#§§'),        // Diamond Spear
            new Weapon('*$§§#?# #&$%* $&%$?'),  // Diamond Great Spear

            new Weapon('*#=? §$§=&§'),          // Ruby Dagger
            new Weapon('*#*% *##%-&???&'),      // Ruby Ring-Blade
            new Weapon('%&&& =&*D&'),           // Ruby Blade
            new Weapon('#§%$ #&§&$%#§*'),       // Ruby Longsword
            new Weapon('=%&* %&&##'),           // Ruby Spear
            new Weapon('=&== &&&=§ ?§*#$'),     // Ruby Great Spear

            new Weapon('#*#*&%& §&%*&&'),       // Emerald Dagger
            new Weapon('§%#?%?§ §?=?-§$=&?'),   // Emerald Ring-Blade
            new Weapon('$#*$$%& =*&#*'),        // Emerald Blade
            new Weapon('§&=#&?§ %#=#§%&%&'),    // Emerald Longsword
            new Weapon('?*#&*$= #*&%%'),        // Emerald Spear
            new Weapon('**&$§=# ==&%? §=**='),  // Emerald Great Spear

            new Weapon('==%=??$ *%?§%§'),       // Saphire Dagger
            new Weapon('#&#$=§# ??#§-*%*&='),   // Saphire Ring-Blade
            new Weapon('?==###* *=$?='),        // Saphire Blade
            new Weapon('=##=$§* =$%#&$=??'),    // Saphire Longsword
            new Weapon('$=§&&$$ %%==§'),        // Saphire Spear
            new Weapon('#=&=?=% #?*%* $&#=#'),  // Saphire Great Spear

            new Weapon('&?$=&= §&&=##%& #*=§%=&§*%'),   // Silver Gemstone Greatsword
            new Weapon('?§%*$?§= $§?? =&§r&'),          // Colossal Onyx Sword
            new Weapon('$$?§## %=%§\'# ?$$§='),         // Shadow King's Sword

            new Weapon('&?##$= $??&§§'),        // Golden Katana

            new Weapon('?#*#&= §%%*§%'),        // Cursed Katana
            new Weapon('*#?$&?='),              // Sunrise
            new Weapon('$%?%%%*#'),             // Moonrise
            new Weapon('=$§ $§**$&'),           // Day Scythe
            new Weapon('$?$*% ?%%&&%'),         // Night Scythe
            new Weapon('#%*? s#&§%'),           // Moon Spear
            new Weapon('&##$ *$&$§§'),          // Dark Scythe
            new Weapon('§*=# &%§#%$?$'),        // Dark Claymore

            new Weapon('&&&#&* %§%*§'),         // Dragon Sword
            new Weapon('#*$==% §=$%'),          // Dragon Wand
            new Weapon('=*=&=§$*?= %=%$*'),     // Dragonbane Sword
            new Weapon('&*?&*§% %%$%='),        // Crystal Sword
            new Weapon('&#=§& §§§%$%'),         // Flesh Scythe
            new Weapon('%#$# §#$$$$& =§§&*'),   // Lava Crystal Sword
            new Weapon('%?$§= $&=*&'),          // Water Sword
        ],
        [
            // mythic
            new Weapon('?#*#&= §%%*§%'),        // Cursed Katana
            new Weapon('*#?$&?='),              // Sunrise
            new Weapon('$%?%%%*#'),             // Moonrise
            new Weapon('=$§ $§**$&'),           // Day Scythe
            new Weapon('$?$*% ?%%&&%'),         // Night Scythe
            new Weapon('#%*? s#&§%'),           // Moon Spear
            new Weapon('&##$ *$&$§§'),          // Dark Scythe
            new Weapon('§*=# &%§#%$?$'),        // Dark Claymore

            new Weapon('&&&#&* %§%*§'),         // Dragon Sword
            new Weapon('#*$==% §=$%'),          // Dragon Wand
            new Weapon('=*=&=§$*?= %=%$*'),     // Dragonbane Sword
            new Weapon('&*?&*§% %%$%='),        // Crystal Sword
            new Weapon('&#=§& §§§%$%'),         // Flesh Scythe
            new Weapon('%#$# §#$$$$& =§§&*'),   // Lava Crystal Sword
            new Weapon('%?$§= $&=*&'),          // Water Sword
        ],
        [
            // godly
            new Weapon('#=&D§$ &&*%n$'),        // Shadow Katana
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