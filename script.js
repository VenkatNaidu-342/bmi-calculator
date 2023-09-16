document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height)) {
        document.getElementById('result').textContent = 'Please enter valid values.';
    } else {
        const bmi = calculateBMI(weight, height);
        const category = determineCategory(bmi);
        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    }
});

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function determineCategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal Weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
}
