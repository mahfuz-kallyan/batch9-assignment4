function checkName(name) {
    if (typeof name !== 'string') {
        return 'invaild';
    }
    let lastLetter = name.slice(-1).toLowerCase();

    // another solution

    // let lastLetter = name[name.length -1];
    let result = false;
    let checkArray = ['a', 'i', 'o', 'e', 'y', 'u']
    for (const char of checkArray) {
        if (char === lastLetter) {
            result = true;
        }
    }
    return result ? 'Good name' : 'Bad name'
}
console.log(checkName('salman'));
console.log(checkName('RAFEE'));
console.log(checkName('jhanker'));
console.log(checkName(199));
console.log(checkName(['Rashed']));
