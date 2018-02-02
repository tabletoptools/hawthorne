import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ttt-loot-calculator',
    templateUrl: './loot-calculator.component.html',
    styleUrls: ['./loot-calculator.component.css']
})
export class LootCalculatorComponent implements OnInit {

    ssLootRewards = [
        {
            minLevel: 3,
            maxLevel: 4,
            pcGoldLimit: 360,
            fourPlayerItemGoldLimit: 640,
            fivePlayerItemGoldLimit: 800,
            sixPlayerItemGoldLimit: 960,
            highestItemTier: 1
        },
        {
            minLevel: 5,
            maxLevel: 6,
            pcGoldLimit: 540,
            fourPlayerItemGoldLimit: 1140,
            fivePlayerItemGoldLimit: 1800,
            sixPlayerItemGoldLimit: 2160,
            highestItemTier: 2
        },
        {
            minLevel: 7,
            maxLevel: 8,
            pcGoldLimit: 720,
            fourPlayerItemGoldLimit: 3040,
            fivePlayerItemGoldLimit: 3800,
            sixPlayerItemGoldLimit: 4560,
            highestItemTier: 3
        },
        {
            minLevel: 9,
            maxLevel: 10,
            pcGoldLimit: 900,
            fourPlayerItemGoldLimit: 4640,
            fivePlayerItemGoldLimit: 5800,
            sixPlayerItemGoldLimit: 6960,
            highestItemTier: 3
        },
    ];

    characters = [];
    items = [];

    duration: number;

    constructor() {
    }

    ngOnInit() {
    }

    getAPL() {
        let apl = (this.characters.reduce((total, character) => {
            if(character.level) {
                return total + character.level;
            }
            else return total;
        }, 0) / this.characters.reduce((total, character) => {
            if(character.level) {
                return total + 1;
            }
            else return total;
        }, 0));
        return apl;
    }

    addChar() {
        this.characters.push({
            name: undefined,
            level: undefined,
            gold: 0,
            items: []
        })
    }

    removeCharacter(character) {
        this.characters.splice(this.characters.indexOf(character), 1);
    }

}
