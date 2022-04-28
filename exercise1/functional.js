//1
const array = [3,'a','a','a',2,3,'a',3,'a',2,4,9,9,9,9,9,9,9];

const result = array.reduce((carry = array[0], ai) => {
    return (array.filter(aj => aj === carry).length >= array.filter(aj => aj === ai).length)
    ? carry : ai;
});

console.log(result);

//2
const array2 = [1,2,3,3];

const result2 = array2.reduce((carry = 0, ai) => {
    return carry + ai**2;
});

console.log(result2);

//3
const array3 = [1,0,"",'a',NaN, null,undefined,false];

const result3 = array3.filter(ai => {
    return Boolean(ai);
});

console.log(result3);

//4
const vegetarianMap = {
    '🥔': '🍟',
    '🌽': '🍿'
}
const nonVegetarianMap = {
    '🐮': '🍔',
    '🐔': '🍳'
}
const map = {...vegetarianMap,...nonVegetarianMap};

const cook = (item) => {
    return map[item];
};

const isVegetarian = (item) => {
    return vegetarianMap[item];
}

const isNonVegetarian = (item) => {
    return nonVegetarianMap[item];
}

console.log("Cook: ", ['🥔','🐮'].map(cook));
console.log("Vegetarian: ",['🥔','🐮'].filter(isVegetarian));
console.log("Nonvegetarian: ", ['🥔','🐮'].filter(isNonVegetarian));