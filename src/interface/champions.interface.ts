export interface IChampion {
    version: string, 
    id: string,
    key: string,
    name: string,
    imageUrl: string,
    title: string,
    blurb: string,
    info: IInfo,
    image: IImage,
    stats: IStats,
    partype: string,
    tags: string[],
}

interface IInfo {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number,
}

interface IImage {
    full: string,
    sprite: string,
    group: string,
    x: number,
    y: number,
    w: number,
    h: number,
}

interface IStats {
    hp: string,
    hpperlevel: string,
    mp: string,
    mpperlevel: string,
    movespeed: string,
    armor: string,
    armorperlevel: string,
    spellblock: string,
    spellblockperlevel: string,
    attackrange: string,
    hpregen: string,
    hpregenperlevel: string,
    mpregen: string,
    mpregenperlevel: string,
    crit: string,
    critperlevel: string,
    attackdamage: string,
    attackdamageperlevel: string,
    attackspeedoffset: string,
    attackspeedperlevel: string,
}
