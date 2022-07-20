function stringLength(string) {
    let counter = 0;
    for (let len of string) {
        counter++;
    } 
    return counter;
}
module.exports = stringLength;