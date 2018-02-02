webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/AbstractResourceArrayService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractResourceArrayService; });
/*
 * $Id: HttpFilter 3988 2017-06-21 13:47:09Z cfi $
 * Created on 15.12.17 21:46
 *
 * Copyright (c) 2017 by bluesky IT-Solutions AG,
 * Kaspar-Pfeiffer-Strasse 4, 4142 Muenchenstein, Switzerland.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information
 * of bluesky IT-Solutions AG ("Confidential Information").  You
 * shall not disclose such Confidential Information and shall use
 * it only in accordance with the terms of the license agreement
 * you entered into with bluesky IT-Solutions AG.
 */
var AbstractResourceArrayService = (function () {
    function AbstractResourceArrayService() {
    }
    AbstractResourceArrayService.prototype.getNextID = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects().then(function (result) {
                if (result.length === 0)
                    resolve(1);
                else
                    resolve(Math.max.apply(Math, result.map((function (obj) { return obj.id; }))) + 1);
            });
        });
    };
    AbstractResourceArrayService.prototype.getObjects = function () {
        var objects = localStorage.getItem(this.type) ? JSON.parse(localStorage.getItem(this.type)) : [];
        if (objects.length === 0)
            localStorage.setItem(this.type, JSON.stringify([]));
        return Promise.resolve(objects);
    };
    AbstractResourceArrayService.prototype.getObject = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects()
                .then(function (objects) {
                resolve(objects.find(function (object) { return object.id === id; }));
            });
        });
    };
    AbstractResourceArrayService.prototype.createObject = function (object) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getNextID().then(function (id) {
                object.id = id;
                _this.getObjects()
                    .then(function (objects) {
                    objects.push(object);
                    _this.setObjects(objects)
                        .then(function (objects) { return resolve(object); });
                });
            });
        });
    };
    AbstractResourceArrayService.prototype.setObjects = function (objects) {
        var _this = this;
        return new Promise(function (resolve) {
            window.localStorage.setItem(_this.type, JSON.stringify(objects));
            resolve(objects);
        });
    };
    AbstractResourceArrayService.prototype.updateObject = function (object) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects().then(function (objects) {
                objects[objects.indexOf(objects.find(function (a) { return a.id === object.id; }))] = object;
                _this.setObjects(objects).then(function (objects) { return resolve(object); });
            });
        });
    };
    AbstractResourceArrayService.prototype.deleteObject = function (object) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects().then(function (objects) {
                objects.splice(objects.indexOf(objects.find(function (a) { return a.id === object.id; })), 1);
                _this.setObjects(objects).then(function (objects) { return resolve(true); });
            });
        });
    };
    return AbstractResourceArrayService;
}());



/***/ }),

/***/ "../../../../../src/AppForm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppForm = (function () {
    function AppForm() {
        this.disabled = [];
        this.required = [];
        this.blacklist = [];
    }
    AppForm.prototype.isInBlacklist = function (field) {
        return (this.blacklist.includes(field)
            || this.blacklist.includes('*'));
    };
    AppForm.prototype.isDisabled = function (field) {
        return (this.disabled.includes(field)
            || this.disabled.includes('*'));
    };
    AppForm.prototype.isRequired = function (field) {
        return (this.required.includes(field)
            || this.required.includes('*'));
    };
    AppForm.prototype.isValid = function () {
        return !this.form.invalid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppForm.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AppForm.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], AppForm.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AppForm.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AppForm.prototype, "required", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AppForm.prototype, "blacklist", void 0);
    return AppForm;
}());



/***/ }),

/***/ "../../../../../src/PersistenceType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceType; });
/*
 * $Id: HttpFilter 3988 2017-06-21 13:47:09Z cfi $
 * Created on 11.12.17 11:39
 *
 * Copyright (c) 2017 by bluesky IT-Solutions AG,
 * Kaspar-Pfeiffer-Strasse 4, 4142 Muenchenstein, Switzerland.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information
 * of bluesky IT-Solutions AG ("Confidential Information").  You
 * shall not disclose such Confidential Information and shall use
 * it only in accordance with the terms of the license agreement
 * you entered into with bluesky IT-Solutions AG.
 */
var PersistenceType;
(function (PersistenceType) {
    PersistenceType[PersistenceType["LOCAL"] = 0] = "LOCAL";
    PersistenceType[PersistenceType["REMOTE"] = 1] = "REMOTE";
})(PersistenceType || (PersistenceType = {}));


/***/ }),

/***/ "../../../../../src/app/AppActivityForm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TTTCharacterDependentForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppForm__ = __webpack_require__("../../../../../src/AppForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_panel_character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/character-panel/character-dialog/character-dialog.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TTTCharacterDependentForm = (function (_super) {
    __extends(TTTCharacterDependentForm, _super);
    function TTTCharacterDependentForm() {
        var _this = _super.call(this) || this;
        _this.characters = [];
        return _this;
    }
    TTTCharacterDependentForm.prototype.getCharacters = function (fresh) {
        var _this = this;
        if (fresh === void 0) { fresh = true; }
        return new Promise(function (resolve) {
            if (!_this.player) {
                if (!_this.playerId)
                    _this.playerService.getDefault().then(function (player) {
                        _this.player = player;
                        if (_this.characters && !fresh)
                            return Promise.resolve(_this.characters);
                        else
                            _this.characterService.getForPlayer(_this.player.id).then(function (characters) {
                                _this.characters = characters;
                                resolve(_this.characters);
                            });
                    });
                else
                    _this.playerService.getObject(_this.playerId).then(function (player) {
                        _this.player = player;
                        if (_this.characters && !fresh)
                            return Promise.resolve(_this.characters);
                        else
                            _this.characterService.getForPlayer(_this.player.id).then(function (characters) {
                                _this.characters = characters;
                                resolve(_this.characters);
                            });
                    });
            }
            else {
                if (_this.characters && !fresh)
                    return Promise.resolve(_this.characters);
                else
                    _this.characterService.getForPlayer(_this.player.id).then(function (characters) {
                        _this.characters = characters;
                        resolve(_this.characters);
                    });
            }
        });
    };
    TTTCharacterDependentForm.prototype.openCharacterDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__character_panel_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */], { data: { id: 'newCharacter' } });
        this.dialogRef.afterClosed().subscribe(function (character) {
            if (character) {
                _this.characterService.createForPlayer(character, 1)
                    .then(function (character) { return _this.getCharacters(true).then(function (characters) { return _this.characters = characters; }); });
            }
        });
    };
    TTTCharacterDependentForm.prototype.compareFunction = function (char1, char2) {
        return (char1 && char2 && char1.id && char2.id && char1.id === char2.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TTTCharacterDependentForm.prototype, "playerId", void 0);
    return TTTCharacterDependentForm;
}(__WEBPACK_IMPORTED_MODULE_0__AppForm__["a" /* AppForm */]));



/***/ }),

/***/ "../../../../../src/app/Model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Size */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityType; });
/* unused harmony export Place */
/* unused harmony export DISTANCES */
/* harmony export (immutable) */ __webpack_exports__["b"] = getLevelForEXP;
var Size;
(function (Size) {
    Size[Size["SMALL"] = 1] = "SMALL";
    Size[Size["MEDIUM"] = 2] = "MEDIUM";
    Size[Size["LARGE"] = 3] = "LARGE";
})(Size || (Size = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["SESSION"] = 1] = "SESSION";
    ActivityType[ActivityType["TRAVEL"] = 2] = "TRAVEL";
    ActivityType[ActivityType["HOUSING"] = 3] = "HOUSING";
    ActivityType[ActivityType["CRAFTING"] = 4] = "CRAFTING";
    ActivityType[ActivityType["SPELLS"] = 5] = "SPELLS";
    ActivityType[ActivityType["GOLD"] = 6] = "GOLD";
    ActivityType[ActivityType["TRAINING"] = 7] = "TRAINING";
})(ActivityType || (ActivityType = {}));
var Place;
(function (Place) {
    Place[Place["Lerwick"] = 1] = "Lerwick";
    Place[Place["Waterdeep"] = 2] = "Waterdeep";
})(Place || (Place = {}));
var DISTANCES = [
    {
        loc1: Place.Lerwick,
        loc2: Place.Waterdeep,
        distance: 15
    }
];
function getLevelForEXP(exp) {
    if (exp >= 355000)
        return 20;
    else if (exp >= 305000)
        return 19;
    else if (exp >= 265000)
        return 18;
    else if (exp >= 225000)
        return 17;
    else if (exp >= 195000)
        return 16;
    else if (exp >= 165000)
        return 15;
    else if (exp >= 140000)
        return 14;
    else if (exp >= 120000)
        return 13;
    else if (exp >= 100000)
        return 12;
    else if (exp >= 85000)
        return 11;
    else if (exp >= 64000)
        return 10;
    else if (exp >= 48000)
        return 9;
    else if (exp >= 34000)
        return 8;
    else if (exp >= 23000)
        return 7;
    else if (exp >= 14000)
        return 6;
    else if (exp >= 6500)
        return 5;
    else if (exp >= 2700)
        return 4;
    else if (exp >= 900)
        return 3;
    else if (exp >= 300)
        return 2;
    else
        return 1;
}


/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<ttt-new-activity *ngIf=\"!activity\"></ttt-new-activity>\n<ttt-edit-activity *ngIf=\"activity\" [activity]=\"activity\" [dialogRef]=\"dialogRef\"></ttt-edit-activity>\n"

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ActivityDialogComponent = (function () {
    function ActivityDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        if (data.activity)
            this.activity = data.activity;
    }
    ActivityDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-dialog',
            template: __webpack_require__("../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], ActivityDialogComponent);
    return ActivityDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-container {\n    margin-bottom: 10px;\n}\n\n.row {\n    transition: background-color .3s;\n    cursor: pointer;\n}\n\n.row:hover, .row.selected {\n    background-color: rgba(0, 0, 0, .05);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Activities\n        <button mat-raised-button color=\"primary\" (click)=\"openActivityDialog()\" [style.float]=\"'right'\">New Activity</button>\n        <button *ngIf=\"selection.hasValue()\" mat-raised-button color=\"primary\" (click)=\"openActivityDialog(selection.selected[0])\" [style.margin-right.px]=\"3\" [style.float]=\"'right'\">Edit Activity</button>\n    </mat-card-title>\n    <mat-form-field [style.width.%]=\"100\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" />\n    </mat-form-field>\n    <div class=\"table-container mat-elevation-z5\">\n        <mat-table [dataSource]=\"datasource\" matSort>\n\n            <ng-container matColumnDef=\"type\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Type</mat-header-cell>\n                <mat-cell class=\"type\" *matCellDef=\"let activity\">\n                    <b><span [style.color]=\"'green'\" *ngIf=\"activity.type === ActivityType.SESSION\">Session</span></b>\n                    <b><span [style.color]=\"'blue'\" *ngIf=\"activity.type === ActivityType.CRAFTING\">Crafting</span></b>\n                    <b><span [style.color]=\"'brown'\" *ngIf=\"activity.type === ActivityType.HOUSING\">Housing</span></b>\n                    <b><span [style.color]=\"'green'\" *ngIf=\"activity.type === ActivityType.GOLD\">Goldfarming</span></b>\n                    <b><span [style.color]=\"'blue'\" *ngIf=\"activity.type === ActivityType.TRAINING\">Training</span></b>\n                    <b><span [style.color]=\"'brown'\" *ngIf=\"activity.type === ActivityType.TRAVEL\">Travelling</span></b>\n                    <b><span [style.color]=\"'blue'\" *ngIf=\"activity.type === ActivityType.SPELLS\">Spellcasting</span></b>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"date\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n                <mat-cell class=\"date\" *matCellDef=\"let activity\">\n                    <span>{{activity.date | date: 'dd/MM/yyyy'}}</span>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n                <mat-cell class=\"name\" *matCellDef=\"let activity\">\n                    <span>{{activity.name}}</span>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"character\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Character</mat-header-cell>\n                <mat-cell class=\"character\" *matCellDef=\"let activity\">{{activity.character ? activity.character.name : ''}}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"dtp\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>DTP</mat-header-cell>\n                <mat-cell class=\"dtp\" *matCellDef=\"let activity\">\n                    <span [style.color]=\"'green'\" *ngIf=\"activity.type === ActivityType.SESSION\">+{{activity.dtp}}</span>\n                    <span [style.color]=\"'red'\" *ngIf=\"activity.type !== ActivityType.SESSION\">-{{activity.dtp}}</span>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"exp\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>EXP</mat-header-cell>\n                <mat-cell class=\"exp\" *matCellDef=\"let activity\">\n                    <span [style.color]=\"'green'\" *ngIf=\"activity.type === ActivityType.SESSION\">+{{activity.exp}}</span>\n                    <span *ngIf=\"activity.type !== ActivityType.SESSION\">-</span>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"money\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Gold</mat-header-cell>\n                <mat-cell class=\"money\" *matCellDef=\"let activity\">\n                    <span [style.color]=\"'green'\" *ngIf=\"activity.money && activity.type === ActivityType.SESSION || activity.type === ActivityType.GOLD\">+{{activity.money}}</span>\n                    <span [style.color]=\"'red'\" *ngIf=\"activity.money && activity.type !== ActivityType.SESSION && activity.type !== ActivityType.GOLD\">-{{activity.money}}</span>\n                    <span *ngIf=\"!activity.money\">-</span>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"comment\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Comment</mat-header-cell>\n                <mat-cell class=\"comment\" *matCellDef=\"let activity\">{{activity.comment}}</mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row class=\"row\" [style.background-color]=\"selection.isSelected(row) ? 'rgba(0, 0, 0, .05)' : ''\" (contextmenu)=\"log($event, row)\" (click)=\"selection.isSelected(row) ? null : selection.select(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n        </mat-table>\n        <mat-paginator #paginator [pageSize]=\"10\"></mat-paginator>\n    </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/activity-panel/activity-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model__ = __webpack_require__("../../../../../src/app/Model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_service__ = __webpack_require__("../../../../../src/app/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_dialog_activity_dialog_component__ = __webpack_require__("../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivityPanelComponent = (function () {
    function ActivityPanelComponent(activityService, dialog) {
        this.activityService = activityService;
        this.dialog = dialog;
        this.ActivityType = __WEBPACK_IMPORTED_MODULE_2__Model__["a" /* ActivityType */];
        this.datasource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */]([]);
        this.displayedColumns = ['type', 'date', 'name', 'character', 'dtp', 'exp', 'money', 'comment'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["a" /* SelectionModel */](false);
    }
    ActivityPanelComponent.prototype.ngOnInit = function () {
        this.loadActivities();
    };
    ActivityPanelComponent.prototype.log = function (e, x) {
        console.log(x);
        e.preventDefault();
    };
    ActivityPanelComponent.prototype.loadActivities = function () {
        var _this = this;
        this.activityService.getObjects()
            .then(function (activities) {
            activities = activities.sort(function (a, b) {
                return (new Date(a.date).getDate() - new Date(b.date).getDate());
            });
            _this.datasource.data = activities;
            _this.datasource.sort = _this.sort;
            _this.datasource.paginator = _this.paginator;
            _this.datasource.filterPredicate = _this.filterPredicate;
        });
    };
    ActivityPanelComponent.prototype.filterPredicate = function (obj, filter) {
        var objString = (obj.name + obj.character.name + obj.comment + __WEBPACK_IMPORTED_MODULE_2__Model__["a" /* ActivityType */][obj.type].toString()).toLowerCase().replace(" ", "");
        return objString.indexOf(filter.replace(" ", "")) !== -1;
    };
    ActivityPanelComponent.prototype.openActivityDialog = function (selected) {
        var _this = this;
        selected ? this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__activity_dialog_activity_dialog_component__["a" /* ActivityDialogComponent */], { data: { id: 'editActivity', activity: selected } })
            : this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__activity_dialog_activity_dialog_component__["a" /* ActivityDialogComponent */], { data: { id: 'newActivity' } });
        this.dialogRef.afterClosed().subscribe(function (activity) {
            if (activity) {
                if (activity['delete'])
                    _this.activityService.deleteObject(activity)
                        .then(function (result) { return _this.loadActivities(); });
                else if (activity.id)
                    _this.activityService.updateObject(activity)
                        .then(function (activity) { return _this.loadActivities(); });
                else
                    _this.activityService.createObject(activity)
                        .then(function (activity) { return _this.loadActivities(); });
            }
        });
    };
    ActivityPanelComponent.prototype.applyFilter = function (value) {
        value = value.trim();
        value = value.toLowerCase();
        this.datasource.filter = value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */])
    ], ActivityPanelComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginator */])
    ], ActivityPanelComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tableContextMenu'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatMenu */])
    ], ActivityPanelComponent.prototype, "tCM", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuTrigger */])
    ], ActivityPanelComponent.prototype, "tCMTrigger", void 0);
    ActivityPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-activity-panel',
            template: __webpack_require__("../../../../../src/app/activity-panel/activity-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-panel/activity-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__activity_service__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
    ], ActivityPanelComponent);
    return ActivityPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-panel/edit-activity/edit-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-panel/edit-activity/edit-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <ttt-activity-form [required]=\"['type', 'item', 'character', 'date', 'dtp', 'money', 'name', 'exp']\" #form [(model)]=\"activity\"></ttt-activity-form>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button matDialogClose>Cancel</button>\n    <button mat-raised-button color=\"primary\" [matDialogClose]=\"activity\" [disabled]=\"!form.isValid()\">Edit</button>\n    <button mat-button [style.margin-left]=\"'auto'\" [style.float]=\"'right'\" (click)=\"deletionRequested = true\" *ngIf=\"!deletionRequested\">Delete</button>\n    <span *ngIf=\"deletionRequested\" [style.margin-left]=\"'auto'\">\n        <button mat-button [style.float]=\"'right'\" color=\"warn\" (click)=\"delete()\" *ngIf=\"deletionRequested\">Confirm</button>\n        <button mat-button [style.float]=\"'right'\" (click)=\"deletionRequested = false\" *ngIf=\"deletionRequested\">Cancel</button>\n    </span>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/activity-panel/edit-activity/edit-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditActivityComponent = (function () {
    function EditActivityComponent() {
        this.activity = {};
        this.dialogRef = null;
        this.deletionRequested = false;
    }
    EditActivityComponent.prototype.ngOnInit = function () {
    };
    EditActivityComponent.prototype.delete = function () {
        this.activity['delete'] = true;
        this.dialogRef.close(this.activity);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditActivityComponent.prototype, "activity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */])
    ], EditActivityComponent.prototype, "dialogRef", void 0);
    EditActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-edit-activity',
            template: __webpack_require__("../../../../../src/app/activity-panel/edit-activity/edit-activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-panel/edit-activity/edit-activity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditActivityComponent);
    return EditActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-panel/new-activity/new-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-panel/new-activity/new-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <ttt-activity-form [required]=\"['type', 'item', 'character', 'date', 'dtp', 'money', 'name', 'exp']\" #form [(model)]=\"activity\"></ttt-activity-form>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button matDialogClose>Cancel</button>\n    <button mat-raised-button color=\"primary\" [matDialogClose]=\"activity\" [disabled]=\"!form.isValid()\">Create</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/activity-panel/new-activity/new-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewActivityComponent = (function () {
    function NewActivityComponent() {
        this.activity = {};
    }
    NewActivityComponent.prototype.ngOnInit = function () {
    };
    NewActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-new-activity',
            template: __webpack_require__("../../../../../src/app/activity-panel/new-activity/new-activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-panel/new-activity/new-activity.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewActivityComponent);
    return NewActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractResourceArrayService__ = __webpack_require__("../../../../../src/AbstractResourceArrayService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function (_super) {
    __extends(ActivityService, _super);
    function ActivityService() {
        var _this = _super.call(this) || this;
        _this.type = "activities";
        return _this;
    }
    ActivityService.prototype.getActivitiesForCharacter = function (character) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects().then(function (activities) { return resolve(activities.filter(function (activity) { return activity.character.id === character.id; })); });
        });
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}(__WEBPACK_IMPORTED_MODULE_1__AbstractResourceArrayService__["a" /* AbstractResourceArrayService */]));



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IMPORTS */
/* unused harmony export DECLARATIONS */
/* unused harmony export PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_session_form_session_form_component__ = __webpack_require__("../../../../../src/app/forms/session-form/session-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/forms/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_panel_activity_panel_component__ = __webpack_require__("../../../../../src/app/activity-panel/activity-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_service__ = __webpack_require__("../../../../../src/app/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__activity_panel_new_activity_new_activity_component__ = __webpack_require__("../../../../../src/app/activity-panel/new-activity/new-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activity_panel_edit_activity_edit_activity_component__ = __webpack_require__("../../../../../src/app/activity-panel/edit-activity/edit-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forms_crafting_form_crafting_form_component__ = __webpack_require__("../../../../../src/app/forms/crafting-form/crafting-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_housing_form_housing_form_component__ = __webpack_require__("../../../../../src/app/forms/housing-form/housing-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forms_gold_form_gold_form_component__ = __webpack_require__("../../../../../src/app/forms/gold-form/gold-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__forms_training_form_training_form_component__ = __webpack_require__("../../../../../src/app/forms/training-form/training-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_travel_form_travel_form_component__ = __webpack_require__("../../../../../src/app/forms/travel-form/travel-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forms_spellcasting_form_spellcasting_form_component__ = __webpack_require__("../../../../../src/app/forms/spellcasting-form/spellcasting-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__activity_panel_activity_dialog_activity_dialog_component__ = __webpack_require__("../../../../../src/app/activity-panel/activity-dialog/activity-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__hawthorne_container_hawthorne_container_component__ = __webpack_require__("../../../../../src/app/hawthorne-container/hawthorne-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__character_panel_character_panel_component__ = __webpack_require__("../../../../../src/app/character-panel/character-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__character_panel_character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/character-panel/character-dialog/character-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__forms_character_form_character_form_component__ = __webpack_require__("../../../../../src/app/forms/character-form/character-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__character_panel_new_character_new_character_component__ = __webpack_require__("../../../../../src/app/character-panel/new-character/new-character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__character_panel_edit_character_edit_character_component__ = __webpack_require__("../../../../../src/app/character-panel/edit-character/edit-character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__loot_calculator_loot_calculator_component__ = __webpack_require__("../../../../../src/app/loot-calculator/loot-calculator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var ROUTE_CONFIG = [
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_23__hawthorne_container_hawthorne_container_component__["a" /* HawthorneContainerComponent */],
        children: [
            {
                path: 'activities',
                component: __WEBPACK_IMPORTED_MODULE_5__activity_panel_activity_panel_component__["a" /* ActivityPanelComponent */]
            },
            {
                path: 'characters',
                component: __WEBPACK_IMPORTED_MODULE_24__character_panel_character_panel_component__["a" /* CharacterPanelComponent */]
            },
            {
                path: 'loot',
                component: __WEBPACK_IMPORTED_MODULE_31__loot_calculator_loot_calculator_component__["a" /* LootCalculatorComponent */]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/app/activities'
    }
];
var IMPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(ROUTE_CONFIG, { useHash: true }),
    __WEBPACK_IMPORTED_MODULE_22__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_21__angular_service_worker__["a" /* ServiceWorkerModule */].register('ngsw-worker.js') : []
];
var DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_3__forms_session_form_session_form_component__["a" /* SessionFormComponent */],
    __WEBPACK_IMPORTED_MODULE_4__forms_activity_form_activity_form_component__["a" /* ActivityFormComponent */],
    __WEBPACK_IMPORTED_MODULE_5__activity_panel_activity_panel_component__["a" /* ActivityPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_9__activity_panel_new_activity_new_activity_component__["a" /* NewActivityComponent */],
    __WEBPACK_IMPORTED_MODULE_10__activity_panel_edit_activity_edit_activity_component__["a" /* EditActivityComponent */],
    __WEBPACK_IMPORTED_MODULE_13__forms_crafting_form_crafting_form_component__["a" /* CraftingFormComponent */],
    __WEBPACK_IMPORTED_MODULE_14__forms_housing_form_housing_form_component__["a" /* HousingFormComponent */],
    __WEBPACK_IMPORTED_MODULE_15__forms_gold_form_gold_form_component__["a" /* GoldFormComponent */],
    __WEBPACK_IMPORTED_MODULE_17__forms_training_form_training_form_component__["a" /* TrainingFormComponent */],
    __WEBPACK_IMPORTED_MODULE_18__forms_travel_form_travel_form_component__["a" /* TravelFormComponent */],
    __WEBPACK_IMPORTED_MODULE_19__forms_spellcasting_form_spellcasting_form_component__["a" /* SpellcastingFormComponent */],
    __WEBPACK_IMPORTED_MODULE_20__activity_panel_activity_dialog_activity_dialog_component__["a" /* ActivityDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_23__hawthorne_container_hawthorne_container_component__["a" /* HawthorneContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_24__character_panel_character_panel_component__["a" /* CharacterPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_25__character_panel_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_28__forms_character_form_character_form_component__["a" /* CharacterFormComponent */],
    __WEBPACK_IMPORTED_MODULE_29__character_panel_new_character_new_character_component__["a" /* NewCharacterComponent */],
    __WEBPACK_IMPORTED_MODULE_30__character_panel_edit_character_edit_character_component__["a" /* EditCharacterComponent */],
    __WEBPACK_IMPORTED_MODULE_31__loot_calculator_loot_calculator_component__["a" /* LootCalculatorComponent */]
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_8__activity_service__["a" /* ActivityService */],
    __WEBPACK_IMPORTED_MODULE_26__character_service__["a" /* CharacterService */],
    __WEBPACK_IMPORTED_MODULE_27__player_service__["a" /* PlayerService */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: DECLARATIONS,
            imports: IMPORTS,
            providers: PROVIDERS,
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_20__activity_panel_activity_dialog_activity_dialog_component__["a" /* ActivityDialogComponent */], __WEBPACK_IMPORTED_MODULE_25__character_panel_character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/character-panel/character-dialog/character-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-panel/character-dialog/character-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<ttt-new-character *ngIf=\"!character\"></ttt-new-character>\n<ttt-edit-character *ngIf=\"character\" [character]=\"character\" [dialogRef]=\"dialogRef\"></ttt-edit-character>\n"

/***/ }),

/***/ "../../../../../src/app/character-panel/character-dialog/character-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CharacterDialogComponent = (function () {
    function CharacterDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        if (data.character)
            this.character = data.character;
    }
    CharacterDialogComponent.prototype.ngOnInit = function () {
    };
    CharacterDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-character-dialog',
            template: __webpack_require__("../../../../../src/app/character-panel/character-dialog/character-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/character-panel/character-dialog/character-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], CharacterDialogComponent);
    return CharacterDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/character-panel/character-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-container-wrapper {\n    text-align: center;\n}\n\n.panel-container {\n\n}\n\n.panel {\n    text-align: left;\n    margin: 20px;\n    display: inline-block;\n    width: 20%;\n    min-width: 250px;\n    max-width: 300px;\n    height: 130px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-panel/character-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Characters | {{getDTP()}} DTP\n        <!--\n        <button mat-raised-button color=\"primary\" (click)=\"openCharacterDialog()\" [style.float]=\"'right'\">New Character</button>\n        -->\n    </mat-card-title>\n    <div class=\"panel-container-wrapper\">\n        <div class=\"panel-container\">\n            <mat-card class=\"panel\" *ngFor=\"let character of characters\">\n                <mat-card-header>\n                    <mat-card-title>{{character.name}}</mat-card-title>\n                    <mat-card-subtitle>Level {{getLevelForEXP(getTotalExpForCharacter(character))}} | {{getGoldForCharacter(character)}} GP</mat-card-subtitle>\n                    <!--<img *ngIf=\"character.image\" mat-card-avatar [src]=\"'data:image/png;base64,'+character.image\"/>-->\n                </mat-card-header>\n                <mat-card-content>\n                    {{character.race}} {{character.class}}\n                </mat-card-content>\n                <mat-card-actions>\n                    <button mat-raised-button color=\"primary\" (click)=\"openCharacterDialog(character)\">Edit</button>\n                    <button mat-button [style.margin-left]=\"'auto'\" [style.float]=\"'right'\" (click)=\"toggleDeceased(character)\">{{character.deceased ? 'Revive' : 'Kill'}}</button>\n                </mat-card-actions>\n            </mat-card>\n            <mat-card class=\"panel\">\n                <mat-card-header>\n                    <mat-card-title>Create a character</mat-card-title>\n                    <mat-card-subtitle>Create a new character</mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                    &nbsp;\n                </mat-card-content>\n                <mat-card-actions>\n                    <button mat-raised-button color=\"primary\" (click)=\"openCharacterDialog()\">Create</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/character-panel/character-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model__ = __webpack_require__("../../../../../src/app/Model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_dialog_character_dialog_component__ = __webpack_require__("../../../../../src/app/character-panel/character-dialog/character-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_service__ = __webpack_require__("../../../../../src/app/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CharacterPanelComponent = (function () {
    function CharacterPanelComponent(dialog, characterService, activityService) {
        this.dialog = dialog;
        this.characterService = characterService;
        this.activityService = activityService;
        this.characters = [];
        this.activities = [];
    }
    CharacterPanelComponent.prototype.ngOnInit = function () {
        this.loadCharacters();
    };
    CharacterPanelComponent.prototype.loadCharacters = function () {
        var _this = this;
        this.characterService.getForPlayer(1)
            .then(function (characters) {
            _this.characters = characters;
            _this.characters.forEach(function (character) {
                _this.activityService.getObjects().then(function (activities) {
                    _this.activities = activities;
                });
            });
        });
    };
    CharacterPanelComponent.prototype.openCharacterDialog = function (character) {
        var _this = this;
        character ? this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */], { data: { character: character } })
            : this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__character_dialog_character_dialog_component__["a" /* CharacterDialogComponent */], { data: {} });
        this.dialogRef.afterClosed().subscribe(function (character) {
            if (character) {
                if (character['delete'])
                    _this.characterService.deleteObject(character)
                        .then(function (result) { return _this.loadCharacters(); });
                else if (character.id)
                    _this.characterService.updateObject(character)
                        .then(function (activity) { return _this.loadCharacters(); });
                else
                    _this.characterService.createForPlayer(character, 1)
                        .then(function (activity) { return _this.loadCharacters(); });
            }
        });
    };
    CharacterPanelComponent.prototype.toggleDeceased = function (character) {
        var _this = this;
        character.deceased = !character.deceased;
        this.characterService.updateObject(character)
            .then(function (character) {
            _this.loadCharacters();
        });
    };
    CharacterPanelComponent.prototype.getLevelForEXP = function (exp) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__Model__["b" /* getLevelForEXP */])(exp);
    };
    CharacterPanelComponent.prototype.getTotalExpForCharacter = function (character) {
        return (+this.activities
            .filter(function (activity) { return activity.character.id === character.id && activity.type === __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].SESSION; })
            .map(function (activity) { return +activity.exp; })
            .reduce(function (total, exp) { return total + exp; }, 0)) + character.exp;
    };
    CharacterPanelComponent.prototype.getGoldForCharacter = function (character) {
        return ((+this.activities
            .filter(function (activity) { return activity.character.id === character.id && (activity.type === __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].SESSION || activity.type === __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].GOLD); })
            .map(function (activity) { return +activity.money; })
            .reduce(function (total, money) { return total + money; }, 0) + character.money)
            - (+this.activities
                .filter(function (activity) { return activity.character.id === character.id && !(activity.type === __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].SESSION || activity.type === __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].GOLD); })
                .map(function (activity) { return +activity.money; })
                .reduce(function (total, money) { return total + money; }, 0)));
    };
    CharacterPanelComponent.prototype.getDTP = function () {
        return ((+this.activities
            .filter(function (activity) { return activity.type === __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].SESSION; })
            .map(function (activity) { return +activity.dtp; })
            .reduce(function (total, dtp) { return total + dtp; }, 0))
            - (+this.activities
                .filter(function (activity) { return activity.type !== __WEBPACK_IMPORTED_MODULE_1__Model__["a" /* ActivityType */].SESSION; })
                .map(function (activity) { return +activity.dtp; })
                .reduce(function (total, dtp) { return total + dtp; }, 0)));
    };
    CharacterPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-character-panel',
            template: __webpack_require__("../../../../../src/app/character-panel/character-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/character-panel/character-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_5__activity_service__["a" /* ActivityService */]])
    ], CharacterPanelComponent);
    return CharacterPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/character-panel/edit-character/edit-character.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-panel/edit-character/edit-character.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <ttt-character-form #form [required]=\"['*']\" [(model)]=\"character\"></ttt-character-form>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button matDialogClose>Cancel</button>\n    <button mat-raised-button color=\"primary\" [matDialogClose]=\"character\" [disabled]=\"!form.isValid()\">Edit</button>\n    <button mat-button [style.margin-left]=\"'auto'\" [style.float]=\"'right'\" (click)=\"deletionRequested = true\" *ngIf=\"!deletionRequested && character.deceased\">Delete</button>\n    <span *ngIf=\"deletionRequested\" [style.margin-left]=\"'auto'\">\n        <button mat-button [style.float]=\"'right'\" color=\"warn\" (click)=\"delete()\" *ngIf=\"deletionRequested\">Confirm</button>\n        <button mat-button [style.float]=\"'right'\" (click)=\"deletionRequested = false\" *ngIf=\"deletionRequested\">Cancel</button>\n    </span>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/character-panel/edit-character/edit-character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCharacterComponent = (function () {
    function EditCharacterComponent() {
        this.character = {};
        this.dialogRef = null;
        this.deletionRequested = false;
    }
    EditCharacterComponent.prototype.ngOnInit = function () {
    };
    EditCharacterComponent.prototype.delete = function () {
        this.character['delete'] = true;
        this.dialogRef.close(this.character);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditCharacterComponent.prototype, "character", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */])
    ], EditCharacterComponent.prototype, "dialogRef", void 0);
    EditCharacterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-edit-character',
            template: __webpack_require__("../../../../../src/app/character-panel/edit-character/edit-character.component.html"),
            styles: [__webpack_require__("../../../../../src/app/character-panel/edit-character/edit-character.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditCharacterComponent);
    return EditCharacterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/character-panel/new-character/new-character.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-panel/new-character/new-character.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n    <ttt-character-form #form [required]=\"['*']\" [(model)]=\"character\"></ttt-character-form>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button matDialogClose>Cancel</button>\n    <button mat-raised-button color=\"primary\" [matDialogClose]=\"character\" [disabled]=\"!form.isValid()\">Create</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/character-panel/new-character/new-character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewCharacterComponent = (function () {
    function NewCharacterComponent() {
        this.character = {};
    }
    NewCharacterComponent.prototype.ngOnInit = function () {
    };
    NewCharacterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-new-character',
            template: __webpack_require__("../../../../../src/app/character-panel/new-character/new-character.component.html"),
            styles: [__webpack_require__("../../../../../src/app/character-panel/new-character/new-character.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewCharacterComponent);
    return NewCharacterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/character.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractResourceArrayService__ = __webpack_require__("../../../../../src/AbstractResourceArrayService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterService = (function (_super) {
    __extends(CharacterService, _super);
    function CharacterService() {
        var _this = _super.call(this) || this;
        _this.type = "characters";
        return _this;
    }
    CharacterService.prototype.createForPlayer = function (character, playerId) {
        var _this = this;
        character.playerId = playerId;
        return new Promise(function (resolve) {
            _this.createObject(character).then(function (character) { return resolve(character); });
        });
    };
    CharacterService.prototype.getForPlayer = function (playerId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects().then(function (characters) { return resolve(characters.find(function (char) { return char.playerId === playerId; }) ?
                characters.filter(function (char) { return char.playerId === playerId; })
                : []); });
        });
    };
    CharacterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CharacterService);
    return CharacterService;
}(__WEBPACK_IMPORTED_MODULE_1__AbstractResourceArrayService__["a" /* AbstractResourceArrayService */]));



/***/ }),

/***/ "../../../../../src/app/forms/activity-form/activity-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ttt-select .mat-select-panel {\n    max-height: unset;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/activity-form/activity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <mat-select #type=\"ngModel\" class=\"ttt-select\" [(ngModel)]=\"model.type\" name=\"type\" [required]=\"isRequired('type')\">\n            <mat-option [value]=\"ActivityType.SESSION\">Session</mat-option>\n            <mat-option [value]=\"ActivityType.CRAFTING\">Crafting</mat-option>\n            <mat-option [value]=\"ActivityType.HOUSING\">Housing</mat-option>\n            <mat-option [value]=\"ActivityType.SPELLS\">Spells</mat-option>\n            <mat-option [value]=\"ActivityType.TRAVEL\">Travel</mat-option>\n            <mat-option [value]=\"ActivityType.GOLD\">Gold</mat-option>\n            <mat-option [value]=\"ActivityType.TRAINING\">Training</mat-option>\n        </mat-select>\n        <mat-placeholder>Choose an Activity</mat-placeholder>\n        <mat-error *ngIf=\"type.hasError('required')\">Please choose a type</mat-error>\n    </mat-form-field>\n    <ttt-session-form #childForm [required]=\"required\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.SESSION\"></ttt-session-form>\n    <ttt-crafting-form #childForm [required]=\"required\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.CRAFTING\"></ttt-crafting-form>\n    <ttt-housing-form #childForm [required]=\"required\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.HOUSING\"></ttt-housing-form>\n    <ttt-gold-form #childForm [required]=\"required\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.GOLD\"></ttt-gold-form>\n    <ttt-training-form #childForm [required]=\"required\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.TRAINING\"></ttt-training-form>\n    <ttt-travel-form #childForm [required]=\"required\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.TRAVEL\"></ttt-travel-form>\n    <ttt-spellcasting-form #childForm [required]=\"['*']\" [(model)]=\"model\" *ngIf=\"model.type === ActivityType.SPELLS\"></ttt-spellcasting-form>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/forms/activity-form/activity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppForm__ = __webpack_require__("../../../../../src/AppForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model__ = __webpack_require__("../../../../../src/app/Model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityFormComponent = (function (_super) {
    __extends(ActivityFormComponent, _super);
    function ActivityFormComponent(cdr) {
        var _this = _super.call(this) || this;
        _this.cdr = cdr;
        _this.ActivityType = __WEBPACK_IMPORTED_MODULE_2__Model__["a" /* ActivityType */];
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    ActivityFormComponent.prototype.ngOnInit = function () {
    };
    ActivityFormComponent.prototype.isValid = function () {
        this.cdr.detectChanges();
        return _super.prototype.isValid.call(this) && (this.childForm ? this.childForm.isValid() : false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ActivityFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */])
    ], ActivityFormComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__AppActivityForm__["a" /* TTTCharacterDependentForm */])
    ], ActivityFormComponent.prototype, "childForm", void 0);
    ActivityFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-activity-form',
            template: __webpack_require__("../../../../../src/app/forms/activity-form/activity-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/activity-form/activity-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ActivityFormComponent);
    return ActivityFormComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppForm__["a" /* AppForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/character-form/character-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/character-form/character-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n\n    <mat-form-field>\n        <input matInput #name=\"ngModel\" [(ngModel)]=\"model.name\" name=\"name\" [required]=\"isRequired('name')\" />\n        <mat-placeholder>Name</mat-placeholder>\n        <mat-error *ngIf=\"name.hasError('required')\">Please enter a name</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput #race=\"ngModel\" [(ngModel)]=\"model.race\" name=\"race\" [required]=\"isRequired('race')\" />\n        <mat-placeholder>Race</mat-placeholder>\n        <mat-error *ngIf=\"race.hasError('required')\">Please enter a race</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput #class=\"ngModel\" [(ngModel)]=\"model.class\" name=\"class\" [required]=\"isRequired('class')\" />\n        <mat-placeholder>Class</mat-placeholder>\n        <mat-error *ngIf=\"class.hasError('required')\">Please enter a class</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput #exp=\"ngModel\" type=\"number\" [(ngModel)]=\"model.exp\" name=\"exp\" />\n        <mat-placeholder>Exp</mat-placeholder>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput #money=\"ngModel\" type=\"number\" [(ngModel)]=\"model.money\" name=\"gold\" />\n        <mat-placeholder>Gold</mat-placeholder>\n    </mat-form-field>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/forms/character-form/character-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppForm__ = __webpack_require__("../../../../../src/AppForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterFormComponent = (function (_super) {
    __extends(CharacterFormComponent, _super);
    function CharacterFormComponent() {
        var _this = _super.call(this) || this;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    CharacterFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CharacterFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CharacterFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */])
    ], CharacterFormComponent.prototype, "form", void 0);
    CharacterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-character-form',
            template: __webpack_require__("../../../../../src/app/forms/character-form/character-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/character-form/character-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CharacterFormComponent);
    return CharacterFormComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppForm__["a" /* AppForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/crafting-form/crafting-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/crafting-form/crafting-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <input [required]=\"isRequired('item')\" matInput #item=\"ngModel\" [(ngModel)]=\"model.name\" name=\"item\" />\n        <mat-placeholder>Item</mat-placeholder>\n        <mat-error *ngIf=\"item.hasError('required')\">Please enter an Item</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [(ngModel)]=\"model.character\" [compareWith]=\"compareFunction\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('date')\" matInput #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('dtp')\" matInput #dtp=\"ngModel\" [(ngModel)]=\"model.dtp\" name=\"dtp\" />\n        <mat-placeholder>DTP spent</mat-placeholder>\n        <mat-error *ngIf=\"dtp.hasError('required')\">Please enter the amount of DTP spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('money')\" matInput #money=\"ngModel\" [(ngModel)]=\"model.money\" name=\"money\" />\n        <mat-placeholder>Gold spent</mat-placeholder>\n        <mat-error *ngIf=\"money.hasError('required')\">Please enter the amount of Gold spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <textarea [required]=\"isRequired('comment')\" matInput #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n        <mat-placeholder>Comment</mat-placeholder>\n        <mat-error *ngIf=\"item.hasError('required')\">Please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/forms/crafting-form/crafting-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CraftingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CraftingFormComponent = (function (_super) {
    __extends(CraftingFormComponent, _super);
    function CraftingFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    CraftingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CraftingFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CraftingFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], CraftingFormComponent.prototype, "form", void 0);
    CraftingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-crafting-form',
            template: __webpack_require__("../../../../../src/app/forms/crafting-form/crafting-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/crafting-form/crafting-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], CraftingFormComponent);
    return CraftingFormComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/gold-form/gold-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/gold-form/gold-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [compareWith]=\"compareFunction\" [(ngModel)]=\"model.character\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('date')\" matInput #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('dtp')\" matInput #dtp=\"ngModel\" [(ngModel)]=\"model.dtp\" name=\"dtp\" />\n        <mat-placeholder>DTP spent</mat-placeholder>\n        <mat-error *ngIf=\"dtp.hasError('required')\">Please enter the amount of DTP spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('money')\" matInput #money=\"ngModel\" [(ngModel)]=\"model.money\" name=\"money\" />\n        <mat-placeholder>Gold earned</mat-placeholder>\n        <mat-error *ngIf=\"money.hasError('required')\">Please enter the amount of Gold earned</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <textarea [required]=\"isRequired('comment')\" matInput #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n        <mat-placeholder>Comment</mat-placeholder>\n        <mat-error *ngIf=\"comment.hasError('required')\">Please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/forms/gold-form/gold-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoldFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoldFormComponent = (function (_super) {
    __extends(GoldFormComponent, _super);
    function GoldFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    GoldFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoldFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GoldFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], GoldFormComponent.prototype, "form", void 0);
    GoldFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-gold-form',
            template: __webpack_require__("../../../../../src/app/forms/gold-form/gold-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/gold-form/gold-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], GoldFormComponent);
    return GoldFormComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/housing-form/housing-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/housing-form/housing-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <input [required]=\"isRequired('name')\" matInput #item=\"ngModel\" [(ngModel)]=\"model.name\" name=\"name\" />\n        <mat-placeholder>Project</mat-placeholder>\n        <mat-error *ngIf=\"item.hasError('required')\">Please enter a project name</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [compareWith]=\"compareFunction\" [(ngModel)]=\"model.character\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('date')\" matInput #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('dtp')\" matInput #dtp=\"ngModel\" [(ngModel)]=\"model.dtp\" name=\"dtp\" />\n        <mat-placeholder>DTP spent</mat-placeholder>\n        <mat-error *ngIf=\"dtp.hasError('required')\">Please enter the amount of DTP spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('money')\" matInput #money=\"ngModel\" [(ngModel)]=\"model.money\" name=\"money\" />\n        <mat-placeholder>Gold spent</mat-placeholder>\n        <mat-error *ngIf=\"money.hasError('required')\">Please enter the amount of Gold spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <textarea [required]=\"isRequired('comment')\" matInput #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n        <mat-placeholder>Comment / Details</mat-placeholder>\n        <mat-error *ngIf=\"comment.hasError('required')\">Please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/forms/housing-form/housing-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HousingFormComponent = (function (_super) {
    __extends(HousingFormComponent, _super);
    function HousingFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    HousingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HousingFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HousingFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], HousingFormComponent.prototype, "form", void 0);
    HousingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-housing-form',
            template: __webpack_require__("../../../../../src/app/forms/housing-form/housing-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/housing-form/housing-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], HousingFormComponent);
    return HousingFormComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/session-form/session-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/session-form/session-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <input [required]=\"isRequired('name')\" matInput #name=\"ngModel\" [(ngModel)]=\"model.name\" name=\"name\" />\n        <mat-placeholder>Name</mat-placeholder>\n        <mat-error *ngIf=\"name.hasError('required')\">Please enter the name of the session</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [(ngModel)]=\"model.character\" [compareWith]=\"compareFunction\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('date')\" matInput #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('dtp')\" matInput #dtp=\"ngModel\" [(ngModel)]=\"model.dtp\" name=\"dtp\" />\n        <mat-placeholder>DTP earned</mat-placeholder>\n        <mat-error *ngIf=\"dtp.hasError('required')\">Please enter the amount of DTP earned</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('money')\" matInput #money=\"ngModel\" [(ngModel)]=\"model.money\" name=\"money\" />\n        <mat-placeholder>Gold earned</mat-placeholder>\n        <mat-error *ngIf=\"money.hasError('required')\">Please enter the amount of Gold earned</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input [required]=\"isRequired('exp')\" matInput #exp=\"ngModel\" [(ngModel)]=\"model.exp\" name=\"exp\" />\n        <mat-placeholder>Experience Points</mat-placeholder>\n        <mat-error *ngIf=\"exp.hasError('required')\">Please enter the amount of EXP earned</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <textarea [required]=\"isRequired('comment')\" matInput #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n        <mat-placeholder>Comment</mat-placeholder>\n        <mat-error *ngIf=\"comment.hasError('required')\">Please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/forms/session-form/session-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionFormComponent = (function (_super) {
    __extends(SessionFormComponent, _super);
    function SessionFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    SessionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SessionFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SessionFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], SessionFormComponent.prototype, "form", void 0);
    SessionFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-session-form',
            template: __webpack_require__("../../../../../src/app/forms/session-form/session-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/session-form/session-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], SessionFormComponent);
    return SessionFormComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/spellcasting-form/spellcasting-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/spellcasting-form/spellcasting-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <input [required]=\"isRequired('name')\" matInput #name=\"ngModel\" [(ngModel)]=\"model.name\" name=\"name\" />\n        <mat-placeholder>Action</mat-placeholder>\n        <mat-error *ngIf=\"name.hasError('required')\">Please enter an action</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [compareWith]=\"compareFunction\" [(ngModel)]=\"model.character\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('date')\" #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('dtp')\" #dtp=\"ngModel\" [(ngModel)]=\"model.dtp\" name=\"dtp\" />\n        <mat-placeholder>DTP spent</mat-placeholder>\n        <mat-error *ngIf=\"dtp.hasError('required')\">Please enter the amount of DTP spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('money')\" #money=\"ngModel\" [(ngModel)]=\"model.money\" name=\"money\" />\n        <mat-placeholder>Gold spent</mat-placeholder>\n        <mat-error *ngIf=\"money.hasError('required')\">Please enter the amount of Gold spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <textarea matInput [required]=\"isRequired('comment')\" #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n        <mat-placeholder>Description</mat-placeholder>\n        <mat-error *ngIf=\"comment.hasError('required')\">Please please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/forms/spellcasting-form/spellcasting-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpellcastingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpellcastingFormComponent = (function (_super) {
    __extends(SpellcastingFormComponent, _super);
    function SpellcastingFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    SpellcastingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpellcastingFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SpellcastingFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], SpellcastingFormComponent.prototype, "form", void 0);
    SpellcastingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-spellcasting-form',
            template: __webpack_require__("../../../../../src/app/forms/spellcasting-form/spellcasting-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/spellcasting-form/spellcasting-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], SpellcastingFormComponent);
    return SpellcastingFormComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/training-form/training-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/training-form/training-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('name')\"  #name=\"ngModel\" [(ngModel)]=\"model.name\" name=\"name\" />\n        <mat-placeholder>Trained Skill</mat-placeholder>\n        <mat-error *ngIf=\"name.hasError('required')\">Please enter a skill or language to train</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [compareWith]=\"compareFunction\" [(ngModel)]=\"model.character\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('date')\" #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('comment')\" #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\" (selectionChange)=\"select($event)\">\n            <mat-option value=\"Proficiency\">Proficiency</mat-option>\n            <mat-option value=\"Expertise\">Expertise</mat-option>\n            <mat-option value=\"Language\">Language</mat-option>\n        </mat-select>\n        <mat-placeholder>Level</mat-placeholder>\n        <mat-error *ngIf=\"comment.hasError('required')\">Please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/forms/training-form/training-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainingFormComponent = (function (_super) {
    __extends(TrainingFormComponent, _super);
    function TrainingFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    TrainingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    TrainingFormComponent.prototype.select = function (event) {
        if (event.value === 'Proficiency') {
            this.model.dtp = 100;
            this.model.money = 500;
        }
        else if (event.value === 'Expertise') {
            this.model.dtp = 50;
            this.model.money = 250;
        }
        else if (event.value === 'Language') {
            this.model.dtp = 100;
            this.model.money = 500;
        }
        this.modelChange.emit(this.model);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TrainingFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TrainingFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], TrainingFormComponent.prototype, "form", void 0);
    TrainingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-training-form',
            template: __webpack_require__("../../../../../src/app/forms/training-form/training-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/training-form/training-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_5__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]])
    ], TrainingFormComponent);
    return TrainingFormComponent;
}(__WEBPACK_IMPORTED_MODULE_3__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/forms/travel-form/travel-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forms/travel-form/travel-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (change)=\"modelChange.emit(model)\">\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('item')\" #item=\"ngModel\" [(ngModel)]=\"model.name\" name=\"item\" />\n        <mat-placeholder>Place</mat-placeholder>\n        <mat-error *ngIf=\"item.hasError('required')\">Please enter a Place</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <mat-select [required]=\"isRequired('character')\" #character=\"ngModel\" [compareWith]=\"compareFunction\" [(ngModel)]=\"model.character\" name=\"character\">\n            <mat-option *ngFor=\"let character of characters\" [value]=\"character\">{{character.name}}</mat-option>\n            <mat-option (click)=\"openCharacterDialog()\">Create New</mat-option>\n        </mat-select>\n        <mat-placeholder>Character</mat-placeholder>\n        <mat-error *ngIf=\"character.hasError('required')\">Please choose a Character</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('date')\" #date=\"ngModel\" [(ngModel)]=\"model.date\" name=\"date\" [matDatepicker]=\"datepicker\" />\n        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n        <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\n        <mat-placeholder>Date</mat-placeholder>\n        <mat-error *ngIf=\"date.hasError('required')\">Please choose a Date</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput [required]=\"isRequired('dtp')\" #dtp=\"ngModel\" [(ngModel)]=\"model.dtp\" name=\"dtp\" />\n        <mat-placeholder>DTP spent</mat-placeholder>\n        <mat-error *ngIf=\"dtp.hasError('required')\">Please enter the amount of DTP spent</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <textarea matInput [required]=\"isRequired('comment')\" #comment=\"ngModel\" [(ngModel)]=\"model.comment\" name=\"comment\"></textarea>\n        <mat-placeholder>Comment</mat-placeholder>\n        <mat-error *ngIf=\"comment.hasError('required')\">Please enter a comment</mat-error>\n    </mat-form-field>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/forms/travel-form/travel-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__character_service__ = __webpack_require__("../../../../../src/app/character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppActivityForm__ = __webpack_require__("../../../../../src/app/AppActivityForm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TravelFormComponent = (function (_super) {
    __extends(TravelFormComponent, _super);
    function TravelFormComponent(characterService, playerService, dialog) {
        var _this = _super.call(this) || this;
        _this.characterService = characterService;
        _this.playerService = playerService;
        _this.dialog = dialog;
        _this.model = {};
        _this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    TravelFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters().then(function (chars) { return _this.characters = chars; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TravelFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TravelFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], TravelFormComponent.prototype, "form", void 0);
    TravelFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-travel-form',
            template: __webpack_require__("../../../../../src/app/forms/travel-form/travel-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forms/travel-form/travel-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialog */]])
    ], TravelFormComponent);
    return TravelFormComponent;
}(__WEBPACK_IMPORTED_MODULE_4__AppActivityForm__["a" /* TTTCharacterDependentForm */]));



/***/ }),

/***/ "../../../../../src/app/hawthorne-container/hawthorne-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hawthorne-container/hawthorne-container.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav #sidebar mode=\"over\">\n        <mat-toolbar color=\"primary\">\n            Options\n            <button mat-icon-button (click)=\"sidebar.toggle()\"><mat-icon>close</mat-icon></button>\n        </mat-toolbar>\n        <mat-nav-list>\n            <!--<a mat-list-item (click)=\"sidebar.toggle()\" [routerLink]=\"['/app/players']\">Players</a>-->\n            <a mat-list-item (click)=\"sidebar.toggle()\" [routerLink]=\"['/app/characters']\">Characters</a>\n            <a mat-list-item (click)=\"sidebar.toggle()\" [routerLink]=\"['/app/activities']\">Activities</a>\n            <a mat-list-item (click)=\"sidebar.toggle()\" [routerLink]=\"['/app/loot']\">Loot</a>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-toolbar color=\"primary\">\n        <button (click)=\"sidebar.toggle()\" mat-icon-button>\n            <mat-icon>more_vert</mat-icon>\n        </button>\n        <span>Hawthorne Guild</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n    <mat-card>\n        <mat-card-subtitle>version: {{version}}</mat-card-subtitle>\n    </mat-card>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/hawthorne-container/hawthorne-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HawthorneContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HawthorneContainerComponent = (function () {
    function HawthorneContainerComponent() {
        this.version = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].version;
    }
    HawthorneContainerComponent.prototype.ngOnInit = function () {
    };
    HawthorneContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-hawthorne-container',
            template: __webpack_require__("../../../../../src/app/hawthorne-container/hawthorne-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hawthorne-container/hawthorne-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HawthorneContainerComponent);
    return HawthorneContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loot-calculator/loot-calculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loot-calculator/loot-calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-title>Loot Calculator</mat-card-title>\n    <mat-form-field>\n        <input matInput type=\"number\" [(ngModel)]=\"duration\"/>\n        <mat-placeholder>Duration in Hours</mat-placeholder>\n    </mat-form-field>\n    <mat-card>\n        <mat-card-title>Characters {{this.characters.length > 0 ? \"- APL: \" + (getAPL() | number:'.0-1') : \"\"}}</mat-card-title>\n        <mat-card-content>\n            <div *ngFor=\"let character of characters\">\n                <mat-form-field>\n                    <input matInput [(ngModel)]=\"character.name\" />\n                    <mat-placeholder>Name</mat-placeholder>\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput type=\"number\" [(ngModel)]=\"character.level\" />\n                    <mat-placeholder>Level</mat-placeholder>\n                </mat-form-field>\n                <button mat-icon-button (click)=\"removeCharacter(character)\"><mat-icon color=\"warn\">delete_forever</mat-icon></button>\n            </div>\n            <button mat-button (click)=\"addChar()\">Add</button>\n        </mat-card-content>\n    </mat-card>\n    <br/>\n    <ng-container *ngIf=\"duration < 8\">\n        <mat-card>\n            <mat-card-title>Regular Loot</mat-card-title>\n            <mat-card-content>\n\n            </mat-card-content>\n        </mat-card>\n    </ng-container>\n    <ng-container *ngIf=\"duration >= 8\">\n        <mat-card>\n            <mat-card-title>Campaign Loot</mat-card-title>\n            <mat-card-content>\n\n            </mat-card-content>\n        </mat-card>\n    </ng-container>\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/loot-calculator/loot-calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LootCalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LootCalculatorComponent = (function () {
    function LootCalculatorComponent() {
        this.ssLootRewards = [
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
        this.characters = [];
        this.items = [];
    }
    LootCalculatorComponent.prototype.ngOnInit = function () {
    };
    LootCalculatorComponent.prototype.getAPL = function () {
        var apl = (this.characters.reduce(function (total, character) {
            if (character.level) {
                return total + character.level;
            }
            else
                return total;
        }, 0) / this.characters.reduce(function (total, character) {
            if (character.level) {
                return total + 1;
            }
            else
                return total;
        }, 0));
        return apl;
    };
    LootCalculatorComponent.prototype.addChar = function () {
        this.characters.push({
            name: undefined,
            level: undefined,
            gold: 0,
            items: []
        });
    };
    LootCalculatorComponent.prototype.removeCharacter = function (character) {
        this.characters.splice(this.characters.indexOf(character), 1);
    };
    LootCalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ttt-loot-calculator',
            template: __webpack_require__("../../../../../src/app/loot-calculator/loot-calculator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loot-calculator/loot-calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LootCalculatorComponent);
    return LootCalculatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractResourceArrayService__ = __webpack_require__("../../../../../src/AbstractResourceArrayService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerService = (function (_super) {
    __extends(PlayerService, _super);
    function PlayerService() {
        var _this = _super.call(this) || this;
        _this.type = "players";
        return _this;
    }
    PlayerService.prototype.getDefault = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.getObjects().then(function (players) {
                if (players.length === 0)
                    _this.createObject({}).then(function (player) { return resolve(player); });
                else
                    resolve(players[0]);
            });
        });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}(__WEBPACK_IMPORTED_MODULE_1__AbstractResourceArrayService__["a" /* AbstractResourceArrayService */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PersistenceType__ = __webpack_require__("../../../../../src/PersistenceType.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version__ = __webpack_require__("../../../../../src/environments/version.ts");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


var environment = {
    production: false,
    persistence: __WEBPACK_IMPORTED_MODULE_0__PersistenceType__["a" /* PersistenceType */].LOCAL,
    version: __WEBPACK_IMPORTED_MODULE_1__version__["a" /* version */]
};


/***/ }),

/***/ "../../../../../src/environments/version.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return version; });
var version = '1.3.1';


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map