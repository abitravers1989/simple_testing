module.exports = {
    calculateBMI: (height, weight) => {
        const bmi = (weight / height) / height
        const rounded = Math.round(bmi * 10) / 10;
        return rounded
    }
}
