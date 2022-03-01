// workaround for floating-point artifacts
const percentNoRounded = parseFloat('0.033') * 100;
const percentsRounded = Math.round(percentNoRounded * 100) / 100;

// Not Rounded 3.3000000000000003
console.log(`Not Rounded ${percentNoRounded}`);
// Rounded 3.3
console.log(`Rounded ${percentsRounded}`);
