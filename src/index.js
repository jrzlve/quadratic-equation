module.exports = function solveEquation(equation) {
    const result = [];
    const separator1 = (' * x^2 '), separator2 = (' * x ');
    let str = equation.replace(separator1, ' ');
    str = str.replace(separator2, ' ');
    const array = str.split(' ');
    const a = +(array[0]), b = +(array[1] + array[2]), c = +(array[3] + array[4]);
    const D = Math.sqrt(b*b-4*a*c);
    const x1 = Math.round( (-b + D) / (2 *a) );
    const x2 = Math.round( (-b - D) / (2 *a) );

    result.push(x1);
    result.push(x2);
    result.sort(function(a, b){return a-b});

    return result;
}
