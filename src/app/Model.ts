export interface Session extends Activity {
    exp: number;
}

export interface Crafting extends Activity {
}

export interface Housing extends Activity {
}

export interface Spellcasting extends Activity {

}

export interface Travelling extends Activity {

}

export interface Goldfarming extends Activity {

}

export interface Training extends Activity {

}

export interface Activity {
    type: ActivityType;
    name: string;
    id: number;
    date: Date;
    dtp: number;
    character: Character;
    money: number;
    comment: string;
}

export enum Size {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3
}

export enum ActivityType {
    SESSION = 1,
    TRAVEL = 2,
    HOUSING = 3,
    CRAFTING = 4,
    SPELLS = 5,
    GOLD = 6,
    TRAINING = 7
}

export interface HouseProject {
    type: Size;
    built: boolean;
    name: string;
    floors: number;
}

export interface Player {
    name: string;
    id: number;
    dtp: number;
}

export interface Character {
    name: string;
    id: number;
    playerId: number;
    exp: number;
    money: number;
    deceased: boolean;
    class: string;
    race: string;
}

export enum Place {
    Lerwick = 1,
    Waterdeep = 2
}

export const DISTANCES = [
    {
        loc1: Place.Lerwick,
        loc2: Place.Waterdeep,
        distance: 15
    }
];


export function getLevelForEXP(exp: number): number {
    if (exp >= 355000) return 20;
    else if (exp >= 305000) return 19;
    else if (exp >= 265000) return 18;
    else if (exp >= 225000) return 17;
    else if (exp >= 195000) return 16;
    else if (exp >= 165000) return 15;
    else if (exp >= 140000) return 14;
    else if (exp >= 120000) return 13;
    else if (exp >= 100000) return 12;
    else if (exp >= 85000) return 11;
    else if (exp >= 64000) return 10;
    else if (exp >= 48000) return 9;
    else if (exp >= 34000) return 8;
    else if (exp >= 23000) return 7;
    else if (exp >= 14000) return 6;
    else if (exp >= 6500) return 5;
    else if (exp >= 2700) return 4;
    else if(exp >= 900) return 3;
    else if(exp >= 300) return 2;
    else return 1;
}
