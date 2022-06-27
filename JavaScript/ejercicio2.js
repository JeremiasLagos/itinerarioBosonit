const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

const arrTruthy = (arr) => {return arr.filter(Boolean).filter(function(x) {return typeof x !== 'number'})};
console.log(arrTruthy(arrDirty));



