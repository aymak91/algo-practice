function solution(N) {
    let stringNum = N.toString().split('');

    if (N >= 0) {
        for (let i=0; i<stringNum.length; i++) {
            if (5 > stringNum[i]) {
                stringNum.splice(i, 0, '5');
                break;
            }
        }
        stringNum.push('5');
    } else {
        for (let i=0; i<stringNum.length; i++) {
            if (5 < stringNum[i]) {
                stringNum.splice(i, 0, '5');
                break;
            }
        }
        stringNum.push('5');
    }
    return parseInt(stringNum.join(''));
}