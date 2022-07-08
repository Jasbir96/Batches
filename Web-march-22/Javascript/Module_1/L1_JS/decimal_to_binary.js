function decimaltoBinary(dec) {
    let power = 1;
    let bin = 0;
    while (dec != 0) {
        let fv = dec % 2;
        bin = bin + fv * power;

        power = power * 10;

        dec = Math.floor(dec / 2);
    }
    return bin; 
}

let binaryNumber = decimaltoBinary(13);
console.log(binaryNumber);


