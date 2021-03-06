"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTrainer = exports.Pokemon = exports.getPokemonData = exports.getSinglePokemon = void 0;
var axios_1 = require("axios");
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class
*/
function getSinglePokemon(id) {
    return axios_1.default.get("https://pokeapi.co/api/v2/pokemon/".concat(id));
}
exports.getSinglePokemon = getSinglePokemon;
function getPokemonData(pokemonId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, id, name, moves, types, movesPromises, movesPromisesResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getSinglePokemon(pokemonId)];
                case 1:
                    response = _a.sent();
                    id = response.data.id;
                    name = response.data.name;
                    moves = [];
                    types = [];
                    movesPromises = response.data.moves.map(function (moveObject) {
                        return axios_1.default.get(moveObject.move.url);
                    });
                    return [4 /*yield*/, Promise.all(movesPromises)];
                case 2:
                    movesPromisesResults = _a.sent();
                    movesPromisesResults.forEach(function (movePromiseResult, index) {
                        var newMove = {
                            name: response.data.moves[index].move.name,
                            url: response.data.moves[index].move.url,
                            type: movePromiseResult.data.type.name,
                            damage: movePromiseResult.data.power,
                            powerPoints: movePromiseResult.data.pp,
                            accuracy: movePromiseResult.data.accuracy
                        };
                        moves.push(newMove);
                    });
                    response.data.types.forEach(function (typeObject) {
                        var name = typeObject.type.name;
                        var url = typeObject.type.url;
                        types.push({ name: name, url: url });
                    });
                    return [2 /*return*/, { id: id, name: name, moves: moves, types: types }];
            }
        });
    });
}
exports.getPokemonData = getPokemonData;
function getNewPokemons(constructor) {
    var pokemonsIndex = [];
    var nPokemons = Math.round(Math.random() * 5 + 1);
    for (var i = 0; i < nPokemons; i++) {
        var indexValue = Math.round(Math.random() * 100);
        while (pokemonsIndex.includes(indexValue)) {
            indexValue = Math.round(Math.random() * 100);
        }
        pokemonsIndex.push(indexValue);
    }
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.listOfIds = pokemonsIndex;
            return _this;
        }
        return class_1;
    }(constructor));
}
var Pokemon = /** @class */ (function () {
    function Pokemon(pokemonResult) {
        this.name = '';
        this.id = 0;
        this.moves = [];
        this.types = [];
        this.buildFieldsPokemon(pokemonResult);
    }
    Pokemon.prototype.buildFieldsPokemon = function (pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        // you can only choose four moves from the list of moves
        this.moves = this.chooseMoves(pokemon.moves);
        this.types = pokemon.types;
    };
    Pokemon.prototype.chooseMoves = function (moves) {
        var selectedMoves = [];
        for (var i = 0; i < 4; i++) {
            var index = Math.round(Math.random() * (moves.length - 1));
            while (selectedMoves.includes(moves[index])) {
                index = Math.round(Math.random() * (moves.length - 1));
            }
            selectedMoves.push(moves[index]);
        }
        return selectedMoves;
    };
    Pokemon.prototype.formatMove = function (moveObject) {
        return { name: moveObject.move.name, url: moveObject.move.url };
    };
    Pokemon.prototype.displayInfo = function () {
        console.log("==========================");
        console.log("Pokemon: ".concat(this.id, " -> ").concat(this.name));
        console.log('\nTypes\n=====');
        this.types.forEach(function (type) {
            console.log("".concat(type.name));
        });
        console.log('\nMoves\n=====');
        this.moves.forEach(function (move) {
            console.log("".concat(move.name));
        });
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var PokemonTrainer = /** @class */ (function () {
    function PokemonTrainer(name) {
        this.pokemons = [];
        this.listOfIds = [2, 4];
        this.name = name;
    }
    PokemonTrainer.prototype.getPokemons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listPokemons, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPokemons = this.listOfIds.map(getPokemonData);
                        return [4 /*yield*/, Promise.all(listPokemons)];
                    case 1:
                        results = _a.sent();
                        results.forEach(function (result) {
                            _this.pokemons.push(new Pokemon(result));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer.prototype.showTeam = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPokemons()];
                    case 1:
                        _a.sent();
                        console.log('Trainer:', this.name);
                        this.pokemons.forEach(function (pokemon) {
                            pokemon.displayInfo();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer = __decorate([
        getNewPokemons,
        __metadata("design:paramtypes", [String])
    ], PokemonTrainer);
    return PokemonTrainer;
}());
exports.PokemonTrainer = PokemonTrainer;
