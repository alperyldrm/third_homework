const arguments = process.argv.slice(2);

function circleAreaCalc (radius) {
    const pi = 3.14159265359
    const area = pi * radius * radius
    console.log(
        `Yarıçapı (${radius}) olan dairenin alanı : (${parseFloat(area).toFixed(2)})`);
}

function circleCircumference(radius){
    const pi = 3.14159265359
    const circumference = pi * radius * 2
    console.log(
        `Yarıçapı (${radius}) olan dairenin alanı : (${parseFloat(circumference).toFixed(2)})`)
}

module.exports = {
    circleAreaCalc,
    circleCircumference
};