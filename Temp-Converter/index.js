function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
function toFahrenheit(temp) {
    return temp * (9 / 5) + 32
}
document.getElementById("btn").addEventListener("click", function () {
    let temp = Number(document.getElementById("textBox").value);
    console.log(temp)
    if (document.getElementById("cButton").checked) {
        document.getElementById("display").innerText += toCelsius(temp);
        temp = ""
    } else {
        document.getElementById("display").innerText += toFahrenheit(temp);
        temp = ""
    }
});