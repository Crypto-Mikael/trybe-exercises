
function numberN (n) {
    let finalnumber = 0 
    for (index = 0; index < n; index += 1) {
        finalnumber = finalnumber + n;
    }
    return finalnumber;
}
console.log(numberN(6))