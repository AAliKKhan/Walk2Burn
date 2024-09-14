"use strict";
// Function to calculate and display calories burned
function calculateCalories() {
    // INPUT
    const Steps = document.getElementById('STEPS').valueAsNumber;
    const Weight = document.getElementById('WEIGHT').valueAsNumber;
    // CONSTANT VALUES
    const StepsPerMile = 2500;
    const CaloriesPpounPmile = 0.57;
    // CALORIES CALCULATION
    let CaloriesBurned = (Steps / StepsPerMile) * Weight * CaloriesPpounPmile;
    // Display Result
    let resultDisplay = document.getElementById('RESULT');
    if (resultDisplay) {
        resultDisplay.textContent = `Calories Burned: ${CaloriesBurned.toFixed(2)}`;
    }
}
// Add event listener to the Calculate button
const calculateButton = document.getElementById('CALCULATE');
if (calculateButton) {
    calculateButton.addEventListener('click', calculateCalories);
}
