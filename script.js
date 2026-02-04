let steps = 0;
let energy = 0;

const stepsEl = document.getElementById("steps");
const energyEl = document.getElementById("energy");
const voltageEl = document.getElementById("voltage");
const statusEl = document.getElementById("status");

function simulateStep() {
    steps++;
    energy += 0.02;

    stepsEl.textContent = steps;
    energyEl.textContent = energy.toFixed(2) + " J";
    voltageEl.textContent = "3.7 V";

    statusEl.textContent = "🟢 Step Detected (Simulation Mode)";
}
