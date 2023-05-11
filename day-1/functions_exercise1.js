function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

function convertCelciusToFahrenheit(celcius) {
  return celcius * 1.8 + 32;
}

function BMI(weight, height) {
  index = weight / (height * height);
  if (index <= 18.5) return "Underweight";
  else if (index <= 24.9) return "Normal";
  else if (index <= 29.9) return "Overweight";
  else return "Obese"
}

function checkSeason(month) {
  if (month <= 2 || month === 12) return "Winter";
  else if (month <= 5) return "Spring";
  else if (month <= 8) return "Summer";
  else return "Autumn";
}

