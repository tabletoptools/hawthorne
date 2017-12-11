export interface Session extends Activity {
}

export interface Player {
    name: string;
    id: number;
    characters: Character[];
    dtp: number;
    activities: Activity[];
}

export interface Character {
    name: string;
    exp: number;
    money: number;
}

export interface Activity {
    id: number;
    name: string;
    date: Date;
    dtp: number;
    character: string;
    exp: number;
    money: number;
    comment: string;
}

export enum ActivityType {
    SESSION = 1
}

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
