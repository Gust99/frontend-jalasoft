const array = [1,1,2,2,3,3,7,4,4,5,5,0,0];

const count = [];

const max = Math.max(...array);

for(let i = 0; i <= max; i++) {
    count.push(0);
}

array.forEach((ai) => {
    count[ai]++;
});

const result = count.findIndex((ci) => {
    return ci === 1;
});

console.log(result);