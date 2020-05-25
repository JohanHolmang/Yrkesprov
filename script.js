const calculateRound = document.getElementById("roundInput");
const roundResult = document.getElementById("roundResult");
const calculateCeil = document.getElementById("ceilInput");
const ceilResult = document.getElementById("ceilResult");
const calculateFloor = document.getElementById("floorInput");
const floorResult = document.getElementById("floorResult");

const calculateMin = document.getElementById("minInput");
const calculateMin2 = document.getElementById("minInput2");
const minResult = document.getElementById("minResult");

const calculateMax = document.getElementById("maxInput");
const calculateMax2 = document.getElementById("maxInput2");
const maxResult = document.getElementById("maxResult");

const calculateAbs = document.getElementById("absInput");
const absResult = document.getElementById("absResult");

calculateRound.addEventListener('input', mathRound);
calculateCeil.addEventListener('input', mathCeil);
calculateFloor.addEventListener('input', mathFloor);
calculateAbs.addEventListener('input', mathAbs);
calculateMin.addEventListener('input', mathMin);
calculateMin2.addEventListener('input', mathMin);
calculateMax.addEventListener('input', mathMax);
calculateMax2.addEventListener('input', mathMax);

function mathRound() {
    const value = Math.round(calculateRound.value);
    roundResult.textContent = value;
}

function mathCeil() {
    const value = Math.ceil(calculateCeil.value);
    ceilResult.textContent = value;
}

function mathFloor() {
    const value = Math.floor(calculateFloor.value);
    floorResult.textContent = value;
}

function mathMin() {
    const value = Math.min(calculateMin.value, calculateMin2.value);
    minResult.textContent = value;
}

function mathMax() {
    const value = Math.max(calculateMax.value, calculateMax2.value);
    maxResult.textContent = value;
}

function mathAbs() {
    const value = Math.abs(calculateAbs.value);
    absResult.textContent = value;
}