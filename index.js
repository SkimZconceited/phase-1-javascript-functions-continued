// First part
function saturdayFun (x = 'roller-skate') {
    return `This Saturday, I want to ${x}!`;
}

saturdayFun();
saturdayFun('bathe my dog');

// Second part 
function mondayWork (x = 'go to the office') {
    return `This Monday, I will ${x}.`;
}

mondayWork();
mondayWork('work from home');

// Third part
function wrapAdjective (x = '*') {
    function inner (y = 'special'){
        return `You are ${x}${y}${x}!`;
    }
    return inner;
}

let result = wrapAdjective('*');
let emphatic = result("a hard worker");
result = wrapAdjective("||");
emphatic = result("a dedicated programmer");
console.log(wrapAdjective()());
// wrapAdjective('*');
// wrapAdjective("%")("a dedicated programmer");