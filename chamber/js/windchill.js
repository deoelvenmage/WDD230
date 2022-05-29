const temp = parseFloat(document.querySelector("#temperature").textContent)
const speed = parseFloat(document.querySelector("#wind-speed").textContent)

const windchill = document.querySelector("#wind-chill")

if (temp <= 50 && speed > 3) {
    const wc = Math.round(35.74 + .6215*temp - 35.75*(speed ** .16) + .4275*temp*(speed**.16))
    windchill.textContent = wc
}
else {
    windchill.textContent = "N/A"
}