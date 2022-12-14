/* add object like: {class: '*class-name*', name: '*visible-name*', group: '*object type*', photo: '*bg-img*'}
    group: can be only only those indicated in index.html in section classe
*/

let weapons = [
    // pistols 
    {class: 'usp-s', 
        name: 'USP-S', 
        group: 'pistols', 
        photo: '',
        damageArmorHead: '70',
        damageArmorArmsChest: '17',
        damageArmorStomach: '22',
        damageArmorLegs: '26',
        damageNudeHead: '120',
        damageNudeArmsChest: '34',
        damageNudeStomach: '43',
        damageNudeLegs: '26',
        EquipmentActive: '12',
        EquipmentPassive: '24',
        shot_speed: '352',
        armorDamage: '50.5',
        reload: '2.2',
        muffler: 'true',
        speed: '240',
        range: '29',
        cost: '200',
        avaliable: 'ct',
    },
    {class: 'p2000', name: 'P2000', group: 'pistols', photo: ''},
    {class: 'glock-18', name: 'Glock-18', group: 'pistols', photo: ''},
    {class: 'p250', name: 'P250', group: 'pistols', photo: ''},
    {class: 'dual-berettas', name: 'Dual Berretas', group: 'pistols', photo: ''},
    {class: 'five-seven', name: 'Five-Seven', group: 'pistols', photo: ''},
    {class: 'tec-9', name: 'TEC-9', group: 'pistols', photo: ''},
    {class: 'cz-75auto', name: 'CZ-75 Auto', group: 'pistols', photo: ''},
    {class: 'deagle', name: 'Desert-Eagle', group: 'pistols', photo: ''},
    {class: 'r8', name: 'Revolver R8', group: 'pistols', photo: ''},
    // shotguns
    {class: 'nova', name: 'Nova', group: 'shotguns', photo: ''},
    {class: 'xm1014', name: 'XM1014', group: 'shotguns', photo: ''},
    {class: 'mag-7', name: 'MAG-7', group: 'shotguns', photo: ''},
    {class: 'saved-off', name: 'Saved-Off', group: 'shotguns', photo: ''},
    // smg
    {class: 'mp-9', name: 'MP-9', group: 'smg', photo: ''},
    {class: 'mac-10', name: 'MAC-10', group: 'smg', photo: ''},
    {class: 'mp-7', name: 'MP-7', group: 'smg', photo: ''},
    {class: 'mp-5', name: 'MP-5', group: 'smg', photo: ''},
    {class: 'ump', name: 'UMP', group: 'smg', photo: ''},
    {class: 'p90', name: 'P-90', group: 'smg', photo: ''},
    {class: 'pp-19-bizon', name: 'ПП-19 "Бизон"', group: 'smg', photo: ''},
    // rifles
    {class: 'famas', name: 'Famas', group: 'rifles', photo: ''},
    {class: 'galil-ar', name: 'GalilAR', group: 'rifles', photo: ''},
    {class: 'm4a4', name: 'M4A4', group: 'rifles', photo: ''},
    {class: 'm4a1-s', name: 'M4A1-S', group: 'rifles', photo: ''},
    {class: 'ak-47', name: 'AK-47', group: 'rifles', photo: ''},
    {class: 'aug', name: 'AUG', group: 'rifles', photo: ''},
    {class: 'sg-553', name: 'SG-553', group: 'rifles', photo: ''},
    // sniper rifles
    {class: 'ssg-08', name: 'SSG-08', group: 'snipers', photo: ''},
    {class: 'awp', name: 'AWP', group: 'snipers', photo: ''},
    {class: 'scar-20', name: 'SCAR-20', group: 'snipers', photo: ''},
    {class: 'g3sg1', name: 'G3SG1', group: 'snipers', photo: ''},
    // machine guns
    {class: 'negev', name: 'Negev', group: 'machine-guns', photo: ''},
    {class: 'M249', name: 'M249', group: 'machine-guns', photo: ''},
    // grenades
    {class: 'he', name: 'Ручная', group: 'grenades', photo: ''},
    {class: 'flash', name: 'Световая', group: 'grenades', photo: ''},
    {class: 'smoke', name: 'Дымовая', group: 'grenades', photo: ''},
    {class: 'fire', name: 'Огненная', group: 'grenades', photo: ''},
    {class: 'molotov', name: 'Коктейль Молотова', group: 'grenades', photo: ''},
    {class: 'decoy', name: 'Ложная', group: 'grenades', photo: ''},
];