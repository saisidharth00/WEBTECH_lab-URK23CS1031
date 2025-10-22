function getBmiStatus(bmi) {
    if (bmi < 18) {
        return { status: "Underweight BMI", class: "underweight" };
    } else if (bmi >= 18 && bmi < 25) {
        return { status: "Normal BMI", class: "normal" };
    } else if (bmi >= 25 && bmi < 30) {
        return { status: "Overweight BMI", class: "overweight" };
    } else {
        return { status: "Obese BMI", class: "obese" };
    }
}

// Main calculation function
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('bmiValue').textContent = "--";
        document.getElementById('bmiStatus').textContent = "";
        document.getElementById('bmiStatus').className = "bmi-status";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = Math.round(bmi * 10) / 10;

    const bmiStatus = getBmiStatus(bmi);

    document.getElementById('bmiValue').textContent = bmiRounded;
    document.getElementById('bmiStatus').textContent = bmiStatus.status;
    document.getElementById('bmiStatus').className = "bmi-status " + bmiStatus.class;
}

// Event listeners for real-time calculation
document.getElementById('weight').addEventListener('input', calculateBMI);
document.getElementById('height').addEventListener('input', calculateBMI);

// Initial calculation on page load
window.onload = calculateBMI;
